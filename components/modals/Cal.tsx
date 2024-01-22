import { useState, useEffect } from "react";
import { FaHeart, FaReply, FaRotate } from "react-icons/fa6"

const Cal = (props: { data: any }) => {
    const [data, setData] = useState(props.data.data);
    useEffect(()=>{
        setData(props.data.data);
      },[props.data])
    return <div className='w-full flex flex-col text-fontgrey text-sm gap-4'>
        <p className="text-fontgrey text-sm">Calculate how many points you het from your tweets in the season The more points you get, the higher the level your progress, the more $GMRX shards you receive. Shards can be fused into Crystals. Crystals give you $GMRX.</p>
        <div className="flex flex-col sm:flex-row justify-between w-full gap-3">
            <div className="flex flex-col w-full sm:w-1/2 gap-2">
                <div className="w-full flex flex-col text-white text-sm p-[16px] bg-[#050209]/[0.97] rounded-[12px] gap-2">
                    <div className="w-full flex justify-between">
                        <p className="text-fontgrey text-sm flex gap-2 items-center"><FaHeart /> LIKES</p>
                        <p className="text-fontgrey text-sm"><span className="text-fontpink">{`${data.powerList[0].season_users[0].p_like_ids.length}`}</span>{`/${data.powerList[0].season_as_powers.length}`}</p>
                    </div>
                    <div className="w-full flex justify-between">
                        <p className="text-fontgrey text-sm flex gap-2 items-center"><FaRotate /> QUOTE</p>
                        <p className="text-fontgrey text-sm"><span className="text-fontpink">{`${data.powerList[0].season_users[0].p_quote_ids.length}`}</span>{`/${data.powerList[0].season_as_powers.length}`}</p>
                    </div>
                    <div className="w-full flex justify-between">
                        <p className="text-fontgrey text-sm flex gap-2 items-center"><FaRotate /> REPOST</p>
                        <p className="text-fontgrey text-sm"><span className="text-fontpink">{`${data.powerList[0].season_users[0].p_repost_ids.length}`}</span>{`/${data.powerList[0].season_as_powers.length}`}</p>
                    </div>
                    <div className="w-full flex justify-between">
                        <p className="text-fontgrey text-sm flex gap-2 items-center"><FaReply /> REPLIES</p>
                        <p className="text-fontgrey text-sm"><span className="text-fontpink">{`${data.powerList[0].season_users[0].p_replies_ids.length}`}</span>{`/${data.powerList[0].season_as_powers.length}`}</p>
                    </div>
                </div>

            </div>
            <div className="flex flex-col w-full sm:w-1/2 gap-2">
                <div className="w-full flex flex-col text-white text-sm p-[16px] bg-[#050209]/[0.97] rounded-[12px] gap-2">
                    <div className="w-full flex justify-between">
                        <p className="text-fontpink text-sm flex gap-2 items-center"><FaHeart /> {`${data.powerList[0].season_users[0].p_like_ids.length * data.powerList[0].season_users[0].wager * 50} Pts`} </p>
                        <p className="text-fontgrey text-sm">50 Points per like</p>
                    </div>
                    <div className="w-full flex justify-between">
                        <p className="text-fontpink text-sm flex gap-2 items-center"><FaRotate />{`${data.powerList[0].season_users[0].p_quote_ids.length * data.powerList[0].season_users[0].wager * 70} Pts`}</p>
                        <p className="text-fontgrey text-sm">70 Points per quote</p>
                    </div>
                    <div className="w-full flex justify-between">
                        <p className="text-fontpink text-sm flex gap-2 items-center"><FaRotate /> {`${data.powerList[0].season_users[0].p_repost_ids.length * data.powerList[0].season_users[0].wager * 100} Pts`}</p>
                        <p className="text-fontgrey text-sm">100 Points per repost</p>
                    </div>
                    <div className="w-full flex justify-between">
                        <p className="text-fontpink text-sm flex gap-2 items-center"><FaReply /> {`${data.powerList[0].season_users[0].p_replies_ids.length * data.powerList[0].season_users[0].wager * 150} Pts`}</p>
                        <p className="text-fontgrey text-sm">150 Points per reply</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full flex justify-between">
            <div className="flex flex-col gap-w w-1/2">
                <p className="text-white text-sm">Potential Points</p>
                <p className="text-fontpink text-xl font-bold">{`${data.powerList[0].season_as_powers.length * data.powerList[0].season_users[0].wager * 370}`}</p>
            </div>
            <div className="flex flex-col gap-w w-1/2">
                <p className="text-white text-sm">Your multiplier</p>
                <p className="text-fontpink text-xl font-bold">{`${data.users.wager == 1 ? "x 1" : "x 30"}`}</p>
            </div>
        </div>
    </div>
}

export default Cal