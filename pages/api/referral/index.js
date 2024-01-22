import dbConnect from '../../../util/dbConnect';
import Referral from '../../../models/gaimin-referral'
import Users from '../../../models/gaimin-users'
import { getToken } from "next-auth/jwt";

export default async function handler(req, res) {

  const { body, method } = req;

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token) return res.status(400).json({ msg: 'Unauthorized request!' });

  await dbConnect()

  switch (method) {

    case 'POST' /* Get a model by its ID */:
   
      try {
        const sender = body;
        if (sender) {
          const receiver = token.id;
          const name = token.name;
          if (sender != receiver) {
            const recSearch = await Referral.findOne({ receiverID: sender });
            if (recSearch) {
              res.status(400).json({ msg: 'This user was refered before!' });
            } else {
              const referralSearch = await Referral.findOne({ senderID: sender, receiverID: receiver });
              if (referralSearch) {
                res.status(400).json({ msg: 'This user has visited before!' });
              } else {
                const newReferral = new Referral({ senderID: sender, receiverID: receiver, name: name, used: false });
                await newReferral.save();
                await Users.findOneAndUpdate({ twitterId: sender }, { $inc: { currentPoint: 10 } });

                res.status(200).json({ success: true })
              }
            }
          } else {
            res.status(400).json({ msg: 'Sender is same with receiver!' });
          }
        }

      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success:  false })
      break
  }
}