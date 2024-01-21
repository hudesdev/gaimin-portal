import { Types } from 'mongoose';
import dbConnect from '../../../util/dbConnect';
import Users from '../../../models/gaimin-users';
import SeasonUsers from '../../../models/gaimin-seasonusers';
import Powers from '../../../models/gaimin-power';
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

                const check = await Users.findOne({ twitterId: token.id });
                console.log("check", token.id);

                if (!check) {
                    return res.status(400).json({ message: "There is no data related with this id!" });
                }
                console.log("check", check);

                // const powerList = await Seasons.aggregate([

                //     {
                //         $lookup: {
                //             from: 'powers',
                //             localField: '_id',
                //             foreignField: 'seasonId',
                //             as: 'season_as_powers'
                //         }
                //     },
                //     {
                //         $lookup: {
                //             from: 'seasonusers',
                //             localField: '_id',
                //             foreignField: 'seasonId',
                //             as: 'season_users'
                //         }
                //     },
                //     {
                //         $addFields: {
                //             season_as_powers: {
                //                 $filter: {
                //                     input: '$season_as_powers',
                //                     as: 'power',
                //                     cond: {
                //                         $eq: ['$$power.endflag', 0] // Adjust this condition as needed
                //                     }
                //                 }
                //             },
                //             // season_users: {
                //             //     $filter: {
                //             //         input: '$season_users',
                //             //         as: 'users',
                //             //         cond: {
                //             //             $eq: ['$$users.endflag', 0], // Adjust this condition as needed
                //             //             $eq: ['$$users.twitterId', check.twitterId], // Adjust this condition as needed
                //             //         }
                //             //     }
                //             // }

                //             season_users: {
                //                 $map: {
                //                     input: {
                //                         $filter: {
                //                             input: "$filter_user",
                //                             as: "fusers",
                //                             $eq: ['$$fusers.endflag', 0], // Adjust this condition as needed
                //                             $eq: ['$$fusers.twitterId', check.twitterId], // Adjust this condition as needed
                //                         }
                //                     },
                //                     as: '$season_users',
                //                     in: {
                //                         $mergeObjects: [
                //                             '$$season_users',
                //                             {
                //                                 totalPoint: {
                //                                     $multiply: [
                //                                         { $add: ['$$season_users.p_repostPoint', '$$season_users.p_repliesPoint', '$$season_users.p_likePoint', '$$season_users.p_quotePoint'] }, // a * b
                //                                         '$$season_users.wager' // + c
                //                                     ]
                //                                 }
                //                             }
                //                         ],

                //                     },

                //                 }
                //             }
                //         }
                //     },
                //     {
                //         $match: {
                //             'endflag': 0,
                //         }
                //     },
                // ])

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

                console.log("powerList====>>>", powerList[0].season_users);
                await res.status(200).json(check);
            } catch (error) {
                console.log("error=====>>>>>>", error);
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

        default:
            res.status(400).json({ success: false })
            break
    }
}