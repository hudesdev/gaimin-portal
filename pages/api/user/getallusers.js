import { Types } from 'mongoose';
import dbConnect from '../../../util/dbConnect';
import Users from "../../../models/gaimin-users";
import SeasonUsers from "../../../models/gaimin-seasonusers";
import Seasons from '../../../models/gaimin-seasons';
import { getToken } from 'next-auth/jwt';

export default async function handler(
    req,
    res
) {
    const {
        body,
        method,
    } = req;

    const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
    });

    await dbConnect();
    switch (method) {
        case 'GET' /* Get a model by its ID */:
            try {

                const seasonID = await Seasons.findOne({ endflag: 0 }).select('_id');
                if (!seasonID) {
                    return res.status(400).json({ msg: "there is no season" })
                }
                const userList = await Users.aggregate([
                    {
                        $lookup: {
                            from: 'seasonusers',
                            localField: 'twitterId',
                            foreignField: 'twitterId',
                            as: 'user_as_season'
                        }
                    },
                    {
                        $match: {
                            $and: [
                                // Your existing conditions from the original code
                                { 'delflag': 0, },
                                { 'user_as_season.endflag': 0 },
                                { 'user_as_season.seasonId': seasonID._id },
                                // Add more conditions as needed
                            ]
                        }
                    }
                ]);

                let newList = [];
                if (userList) {

                    for (let item of userList) {
                        let totalPoint = 0;  // Declare totalPoint outside the if-else blocks
                        if (item.user_as_season[0]) {
                            totalPoint = (item.user_as_season[0].p_repostPoint + item.user_as_season[0].p_repliesPoint + item.user_as_season[0].p_likePoint + item.user_as_season[0].p_quotePoint) * item.user_as_season[0].wager;
                        }

                        newList.push({ ...item, totalPoint: totalPoint });  // Corrected syntax for push
                    }
                    return res.status(200).json({ data: newList.sort((a, b) => b.totalPoint - a.totalPoint) })
                }
                return res.status(200).json({ msg: "there is no leaderboard" })

            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}