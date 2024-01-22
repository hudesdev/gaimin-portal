
import Link from "next/link"
import SimpleBar from "simplebar-react";

const Powerpost = (props:any) => {
    return <SimpleBar forceVisible="x" autoHide={true} className="w-full h-[500px] pr-3">
        <div className='w-full flex flex-col text-fontgrey text-sm gap-4'>
            {props.data.season_as_powers.map((val:any)=>{
                return <div className="flex flex-col px-[16px] py-[8px] bg-[#050209]/[0.97] rounded-[12px] gap-2 justify-between" key={val.tweetTitle}><p className="text-white text-sm truncate">{val.tweetTitle}</p><Link href={val.tweetURI} className="text-fontpink truncate">{val.tweetURI}</Link></div>
            })}
        </div>
    </SimpleBar>
}

export default Powerpost