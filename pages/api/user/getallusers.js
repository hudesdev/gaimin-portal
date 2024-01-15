import { Types } from 'mongoose';
import dbConnect from '../../../util/dbConnect';
import Users from "../../../models/users";
import { getToken } from 'next-auth/jwt';

export default async function handler(
    req,
    res
) {
    const {
        body,
        method,
    } = req;

    await dbConnect();
    switch (method) {
        case 'GET' /* Get a model by its ID */:
            try {
                const check = await Users.find({}, {
                    imgSRC: 1,
                    name: 1,
                    walletAddress: 1,
                    currentPoint: 1}).sort({currentPoint: -1});
                if (!check) {
                    return res.status(400).json({ message: "There is no data related with this address!" });
                }
                res.status(200).json({check});
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'POST' /* Edit a model by its ID */:
            try {
                // console.log('==============================');
                const check = await Users.findOne({ walletAddress: body.walletAddress })
                if (check) {
                    return res.status(400).json({ message: "User already exists!" });
                }
                // console.log("check", check);

                const user = new Users({
                    alias: "",
                    walletAddress: body.walletAddress,
                    twitterId: "",
                    imgSRC: "",
                    currentPoint: 0,
                });

                await user.save();
                res.status(200).send({ success: true, data: user });
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}