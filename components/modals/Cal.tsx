import { FaHeart, FaReply, FaRotate } from "react-icons/fa6"

const Cal = () => {
    return <div className='w-full flex flex-col text-fontgrey text-sm gap-4'>
        <p className="text-fontgrey text-sm">Calculate how many points you het from your tweets in the season The more points you get, the higher the level your progress, the more $GMRX shards you receive. Shards can be fused into Crystals. Crystals give you $GMRX.</p>
        <div className="flex justify-between w-full gap-3">
            <div className="flex flex-col w-1/2 gap-2">
                <div className="w-full flex flex-col text-white text-sm p-[16px] bg-[#050209]/[0.97] rounded-[12px] gap-2">
                    <div className="w-full flex justify-between">
                        <p className="text-fontgrey text-sm flex gap-2"><FaHeart/> LIKES</p>
                        <p className="text-fontgrey text-sm"><span className="text-fontpink">9</span>/10</p>
                    </div>
                    <div className="w-full flex justify-between">
                        <p className="text-fontgrey text-sm flex gap-2"><FaRotate/> QUOTE</p>
                        <p className="text-fontgrey text-sm">0/10</p>
                    </div>
                    <div className="w-full flex justify-between">
                        <p className="text-fontgrey text-sm flex gap-2"><FaRotate/> REPOST</p>
                        <p className="text-fontgrey text-sm"><span className="text-fontpink">5</span>/10</p>
                    </div>
                    <div className="w-full flex justify-between">
                        <p className="text-fontgrey text-sm flex gap-2"><FaReply/> REPLIES</p>
                        <p className="text-fontgrey text-sm"><span className="text-fontpink">2</span>/10</p>
                    </div>
                </div>
                <p className="text-white text-sm">Potential Points</p>
                <p className="text-fontpink text-xl">0</p>
            </div>
            <div className="flex flex-col w-1/2 gap-2">
                <div className="w-full flex flex-col text-white text-sm p-[16px] bg-[#050209]/[0.97] rounded-[12px] gap-2">
                    <div className="w-full flex justify-between">
                        <p className="text-fontpink text-sm flex gap-2"><FaHeart/> 50 Pts</p>
                        <p className="text-fontgrey text-sm">50 Points per like</p>
                    </div>
                    <div className="w-full flex justify-between">
                        <p className="text-fontpink text-sm flex gap-2"><FaRotate/> 0 Pts</p>
                        <p className="text-fontgrey text-sm">70 Points per quote</p>
                    </div>
                    <div className="w-full flex justify-between">
                        <p className="text-fontpink text-sm flex gap-2"><FaRotate/> 500 Pts</p>
                        <p className="text-fontgrey text-sm">100 Points per repost</p>
                    </div>
                    <div className="w-full flex justify-between">
                        <p className="text-fontpink text-sm flex gap-2"><FaReply/> 300 Pts</p>
                        <p className="text-fontgrey text-sm">150 Points per reply</p>
                    </div>
                </div>
                <p className="text-white text-sm">Potential Points</p>
                <p className="text-fontpink text-xl">x30</p>
            </div>
        </div>
    </div>
}

export default Cal