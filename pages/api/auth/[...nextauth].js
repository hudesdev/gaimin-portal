
import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
import { Types } from 'mongoose';
import dbConnect from '../../../util/dbConnect';
import Users from "../../../models/users";
import { getToken } from 'next-auth/jwt';

export default NextAuth({

    providers: [
        TwitterProvider({

            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET,
            version: "2.0",
            authorization: {
                url: "https://twitter.com/i/oauth2/authorize",
                params: {
                    scope: "tweet.write tweet.read offline.access users.read",
                },
            },
        })
    ],

    callbacks: {
        async signIn(user) {
            console.log("!!!",user)
            if (user) {
                try {
                    await dbConnect();
                    const check = await Users.findOne({ twitterId: user.profile.data.id })
                    if (!check) {
                        const users = new Users({
                            alias: user.profile.data.name,
                            name: user.profile.data.username,
                            walletAddress: "",
                            twitterId: user.profile.data.id,
                            imgSRC: user.profile.data.profile_image_url,
                            email: user.user.email,
                            currentPoint: 0
                        });
                        await users.save();
                    }
                } catch (error) {
                    console.log("error==========================", error);
                    return false
                }
            }
            return true

        },
        async session(session) {
           
            await dbConnect();
            const check = await Users.findOne({ twitterId: session.id })
            if (check) {
                session.walletAddress = check.walletAddress
            }
            return session;
        },
        async jwt({ token, user, account, profile, isNewUser, trigger }) {
            
            await dbConnect();
            if (account) {
                token.account = account;
            }
            if (user) {

                const check = await Users.findOne({ twitterId: user.id })

                if (check) {
                    user.walletAddress = check.walletAddress
                }
                token.user = user;
            }
            if (profile) {

                token.profile = profile;
            }
            return token
        }

    },

    secret: process.env.NEXTAUTH_SECRET,
});



