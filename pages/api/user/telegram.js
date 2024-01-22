import dbConnect from '../../../util/dbConnect';
import Users from '../../../models/gaimin-users';
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

  if (!token) return res.status(400).json({ msg: 'Unauthorized request!' });

  await dbConnect();

  switch (method) {

    case 'POST' /* Edit a model by its ID */:
      try {

        const updatedUser = await Users.findOneAndUpdate(
          { twitterId: token.id, teleflag: 0 },
          { $inc: { currentPoint: 100 }, $set: { teleflag: 1 } },
          { new: true }
        );
        
        if (updatedUser) {
          res.status(200).send({ success: true, data: updatedUser });
        } else {
          res.status(400).send({ success: false });
        }
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}