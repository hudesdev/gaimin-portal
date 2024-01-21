
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { Types } from 'mongoose';
import dbConnect from '../../../util/dbConnect';
import Users from "../../../models/gaimin-users";
import Seasons from "../../../models/gaimin-seasons";
import SeasonUsers from "../../../models/gaimin-seasonusers";
import { getToken } from 'next-auth/jwt';

export default NextAuth({

    providers: [
        Providers.Twitter({
            clientId: process.env.TWITTER_CONSUMER_KEY,
            clientSecret: process.env.TWITTER_CONSUMER_SECRET,
        }),
    ],

    callbacks: {
        async signIn(user, account, profile) {
            if (user) {
                try {
                    await dbConnect();
                    const check = await Users.findOne({ twitterId: user.id });
                    const wagerValue = profile.followers_count > 500 ? 30 : 1;
                    if (!check) {
                        const users = new Users({
                            alias: profile.screen_name,
                            name: profile.name,
                            walletAddress: "",
                            twitterId: user.id,
                            imgSRC: profile.profile_image_url_https,
                            email: profile.email,
                            followers: profile.followers_count,
                            accountCreated: profile.created_at,
                            wager: wagerValue
                        });
                        await users.save();

                        const seasonId = await Seasons.findOne({ endflag: 0 }).select('_id');
                        const seasonuUser = new SeasonUsers({
                            twitterId: user.id,
                            seasonId: Types.ObjectId(seasonId._id),
                            wager: wagerValue
                        });

                        await seasonuUser.save();
                    } else {
                        const updatedUser = await Users.updateOne(
                            { twitterId: user.id },
                            { $set: { imgSRC: profile.profile_image_url_https, wager: wagerValue } },
                            { new: true }
                        );
                    }
                } catch (error) {
                    console.log("error==========================", error);
                    return false
                }
            }
            return true
        },
        async session(session, user) {
            user.image = user.picture;
            user.email = user.id;
            session.user = user;
            await dbConnect();
            const check = await Users.findOne({ twitterId: user.id })
            if (check) {
                session.walletAddress = check.walletAddress;
                session.wager = check.wager;
                session.accountCreated = check.accountCreated;
            }
            return session;
        },
        async jwt(token, user, account, profile, isNewUsers) {

            await dbConnect();
            if (user) {
                token.id = user.id

                const check = await Users.findOne({ twitterId: user.id })

                if (check) {
                    token.walletAddress = check.walletAddress
                }
            }
            if (account) {
                token.twitter = account;
            }

            return token
        }

    },

    secret: process.env.NEXTAUTH_SECRET,
});



