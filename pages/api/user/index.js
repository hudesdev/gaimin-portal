import { Types } from 'mongoose';
import dbConnect from '../../../util/dbConnect';
import Users from '../../../models/gaimin-users';
import SeasonUsers from '../../../models/gaimin-seasonusers';
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

  const { walletAddress } = body;


  if (!token) return res.status(400).json({ msg: 'Unauthorized request!' });

  await dbConnect();

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {

        const check = await Users.findOne({ twitterId: token.id });

        if (!check) {
          return res.status(400).json({ message: "There is no data related with this id!" });
        }

        const gmrx = await SeasonUsers.aggregate([
          {
            $match: { twitterId: check.twitterId, endflag: 0 }
          },
          {
            $group: {
              _id: null,
              totalAmount: {
                $sum: {
                  $multiply: [
                    {
                      $add: [
                        '$p_repostPoint',
                        '$p_repliesPoint',
                        '$p_likePoint',
                        '$p_quotePoint'
                      ]
                    },
                    '$wager'
                  ]
                }
              }
            }
          }
        ]);

        const totalAmount = gmrx.length > 0 ? gmrx[0].totalAmount : 0;

        const powerList = await Seasons.aggregate([
          {
            $lookup: {
              from: 'powers',
              localField: '_id',
              foreignField: 'seasonId',
              as: 'season_as_powers'
            }
          },
          {
            $lookup: {
              from: 'seasonusers',
              localField: '_id',
              foreignField: 'seasonId',
              as: 'season_users'
            }
          },
          {
            $addFields: {
              season_as_powers: {
                $filter: {
                  input: '$season_as_powers',
                  as: 'power',
                  cond: { $eq: ['$$power.endflag', 0] }
                }
              },
              season_users: {
                $map: {
                  input: {
                    $filter: {
                      input: "$season_users",
                      as: "fusers",
                      cond: {
                        $and: [
                          { $eq: ['$$fusers.endflag', 0] },
                          { $eq: ['$$fusers.twitterId', check.twitterId] }
                        ]
                      }
                    }
                  },
                  as: 'filteredUser',
                  in: {
                    $mergeObjects: [
                      '$$filteredUser',
                      {
                        totalPoint: {
                          $multiply: [
                            {
                              $add: [
                                '$$filteredUser.p_repostPoint',
                                '$$filteredUser.p_repliesPoint',
                                '$$filteredUser.p_likePoint',
                                '$$filteredUser.p_quotePoint'
                              ]
                            },
                            '$$filteredUser.wager'
                          ]
                        }
                      }
                    ]
                  }
                }
              }
            }
          },
          {
            $match: {
              'endflag': 0,
            }
          }
        ]);

        await res.status(200).json({
          data: {
            users: check,
            userGmrX: (check.currentPoint + totalAmount) / 100,
            powerList,

          }
        });

      } catch (error) {
        console.log("error=====>>>>>>", error);
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {

        const updatedUser = await Users.findOneAndUpdate(
          { twitterId: token.id },
          { $set: { walletAddress: walletAddress.toString() } },
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