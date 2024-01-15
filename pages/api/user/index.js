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
    const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
    });

    await dbConnect();

    switch (method) {
        case 'GET' /* Get a model by its ID */:
            try {
                const check = await Users.findOne({ twitterId: token.user.id })
                if (!check) {
                    return res.status(400).json({ message: "There is no data related with this address!" });
                }
                console.log(check);
                await res.status(200).json(check);
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
        case 'PUT' /* Edit a model by its ID */:
            try {

                const updatedUser = await Users.findOneAndUpdate(
                    { twitterId: body.twitterId, walletAddress: { $exists: false } },
                    { $set: { walletAddress: body.walletAddress } },
                    { new: true }
                );

                if (updatedUser) {
                    console.log('Updated user:', updatedUser);
                    res.status(200).send({ success: true, data: updatedUser });
                } else {
                    res.status(400).send({ success: false });
                }
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'DELETE' /* Delete a model by its ID */:
            try {
                const deletedUser = await Users.deleteOne({ _id: body.id })
                if (!deletedUser) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        default:
            res.status(400).json({ success: false })
            break
    }
}