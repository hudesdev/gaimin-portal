import React from 'react';
import { IoMdNotifications } from "react-icons/io";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const tempList = [
    {
        type: 1,
        title: "Congrats, you get +10% points",
        content: "Jasonbourne use your referral link, you get +1% points, Claim now",
        timeStamp: "Just now"
    },
    {
        type: 1,
        title: "Congrats, you get +10% points",
        content: "Jasonbourne use your referral link, you get +1% points, Claim now",
        timeStamp: "Just now"
    },
    {
        type: 1,
        title: "Congrats, you get +10% points",
        content: "Jasonbourne use your referral link, you get +1% points, Claim now",
        timeStamp: "Just now"
    }
    ,
    {
        type: 1,
        title: "Congrats, you get +10% points",
        content: "Jasonbourne use your referral link, you get +1% points, Claim now",
        timeStamp: "Just now"
    }
    ,
    {
        type: 1,
        title: "Congrats, you get +10% points",
        content: "Jasonbourne use your referral link, you get +1% points, Claim now",
        timeStamp: "Just now"
    }
];

interface ReferralType {
    name: string,
    senderID: string,
    receiverID: string
}

export default function ListBox({ refer }: { refer: ReferralType[] }) {

    return (
        <div className='relative'>
            <div className="arrow-up absolute top-[-13px] left-[180px] sm:left-[155px]  md:left-[17px]"></div>
            <div className="arrow-up2 absolute top-[-11px] left-[181px] sm:left-[156px] md:left-[18px]"></div>
            <div className='w-full flex flex-col bg-white border-[1px] border-[#000] p-4 gap-4 rounded-lg'>
                <div className='text-[#000] text-[24px] font-semibold'>
                    Notifications
                </div>
                <SimpleBar forceVisible="x" autoHide={true} className="w-full h-400px">
                    <div className=' flex flex-col gap-2 divide-y-2 '>
                        {refer && refer.map((item, index) => (
                            <div key={index} className='grid grid-cols-12 gap-2 pt-2'>
                                <div className='flex flex-start col-span-2'>
                                    <div className='flex justify-center items-center p-2 rounded-[10px] border-[1px] border-[#000] w-[50px] bg-[#FFDA9C] h-[50px]'>
                                        <IoMdNotifications className="w-[24px] h-[24px]" />
                                    </div>
                                </div>
                                <div className=' flex flex-col gap-1 leading-0 text-black col-span-10'>
                                    <span className='text-[14px] font-semibold '>Congrats, you get +10% points</span>
                                    <span className='text-[12px]'>{item.name} use your referral link, you get +1% points</span>
                                    <span className='text-[#686E77] text-[12px]'>Just now</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </SimpleBar>
            </div>
        </div>
    )
}
