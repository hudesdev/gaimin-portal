import { FaQuoteRight } from "react-icons/fa6"

const PlayModal = () => {
    return <div className='w-full flex flex-col text-fontgrey text-sm gap-4'>
        <p className="text-fontgrey text-sm">Earning GAIMIN points is simple - just engage with us on Twitter (x)! </p>
        <p><span className="px-[16px] py-[8px] bg-[#050209]/[0.97] rounded-full">GAIMIN Points = $GMRX Tokens</span> </p>
        <p className="text-fontgrey text-sm">By earning Points you move up levels. Each level reached earns your shards into crystals. And the number of Crystals decided how much $GMRX you will be able to claim.</p>
        <p className="text-fontgrey text-sm">You can earn points by interacting with GAIMIN Power Tweets (likes and replies, up to 1 reply per post). Power Tweets will only be live for a limited period after they’re posted. Engaging with them after that period will not earn you points. Depending on your type of engagement, your points rewards will be as follows:</p>
        <div className="w-full flex flex-col lg:flex-row justify-between gap-2">
            <div className="flex text-white text-sm px-[16px] py-[8px] bg-[#050209]/[0.97] rounded-[12px] gap-2"><img src="/img/heart.svg" alt="" />50 Points per like</div>
            <div className="flex text-white text-sm px-[16px] py-[8px] bg-[#050209]/[0.97] rounded-[12px] gap-2"><img src="/img/reply.svg" alt="" />150 Points per reply</div>
            <div className="flex text-white text-sm px-[16px] py-[8px] bg-[#050209]/[0.97] rounded-[12px] gap-2"><img src="/img/refresh.svg" alt="" />100 Points per retweet</div>
            <div className="flex text-white text-sm px-[16px] py-[8px] bg-[#050209]/[0.97] rounded-[12px] gap-2"><img src="/img/refresh.svg" alt="" />70 Quot</div>
        </div>
        <p className="text-fontgrey text-sm">Power Tweeters (Higher following/tweets) will also receive a multiplier for engaging with GAIMIN tweets.</p>
        <p className="text-fontgrey text-sm">At the end of each Season, your points and levels will drop back 0, but your shards will be saved. Each Season present a new challenge, but at the end of the crystal dash experience, your total no of shards will be fused into crystals and converted into $GMRX.</p>
        <p className="text-fontgrey text-sm">If we suspect any user of botting engagement we will remove this tweet and user from competition.</p>

    </div>
}

export default PlayModal