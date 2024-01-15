"use client"

import React, { useEffect, useState, useRef } from 'react'
import SimpleBar from 'simplebar-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaCopy, FaRegCopy } from 'react-icons/fa';
import { FaPaperPlane, FaShopLock, FaXTwitter, FaDiscord } from "react-icons/fa6";
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from 'react-tooltip'

interface userType {
  imgSRC: string,
  name: string,
  walletAddress: string,
  currentPoint: number
}

export default function Leaderboard() {
  const [open, handleOpen] = useState<boolean>(false);
  const { data: session } = useSession();
  const [copied, setCopy] = useState<boolean>(false);
  const [users, setUsers] = useState<userType[]>()
  const referurl = useRef("https://tweet2earn.xyz")

  useEffect(() => {
    (async () => {
      const result = await fetch("/api/user/getallusers", { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
          setUsers(data.check)
        })
        .catch(err => { console.log(err); })
    })();

  }, [])

  const confirmTwitterId = () => {
    if (session?.user) {
      if (referurl.current.search("applate") < 0) {
        referurl.current = referurl.current + '/dashboard/?applate=' + session.user?.email;
      }
      handleOpen(true);
    } else {
      toast.error("Please connect your Twitter first!");
    }
  }

  const copyText = () => {
    navigator.clipboard.writeText(referurl.current);

    navigator.clipboard
      .readText()
      .then((clipText) => {
        if (clipText != '') {
          setCopy(true);
        }
      });
  }

  const closeHandle = () => {
    setCopy(false);
    handleOpen(false);
  }
  let avatar = "/image/1.png";

  // const [users, setUsers] = useState([
  //   {
  //     url: avatar,
  //     name: 'Amanda',
  //     wallet: "2312132ds235lkkk5k6klk7l87kjjk2j3223wcsds",
  //     pts: 20000
  //   },
  //   {
  //     url: avatar,
  //     name: 'Nika',
  //     wallet: "2312132ds235lkkk5k6klk7l87kjjk2j3223wcsds",
  //     pts: 20000
  //   },
  //   {
  //     url: avatar,
  //     name: 'Honda',
  //     wallet: "2312132ds235lkkk5k6klk7l87kjjk2j3223wcsds",
  //     pts: 20000
  //   },
  //   {
  //     url: avatar,
  //     name: 'Yeni',
  //     wallet: "2312132ds235lkkk5k6klk7l87kjjk2j3223wcsds",
  //     pts: 235457
  //   },
  //   {
  //     url: avatar,
  //     name: 'Natasha',
  //     wallet: "2312132ds235lkkk5k6klk7l87kjjk2j3223wcsds",
  //     pts: 20000
  //   },
  //   {
  //     url: avatar,
  //     name: 'Solman',
  //     wallet: "2312132ds235lkkk5k6klk7l87kjjk2j3223wcsds",
  //     pts: 20000
  //   },
  // ])
  const router = useRouter()
  return (
    <div className='hidden md:flex flex-col justify-start gap-[24px] col-span-3 sm:col-span-6 md:col-span-5 lg:col-span-4 xl:col-span-3'>

      <div className='w-full h-[600px] flex flex-col items-start px-[16px] pt-[16px] pb-[8px] rounded-[10px] border-[1px] 0, border-dark bg-cardBack '>
        <div className='flex justify-start mb-[8px]'>
          <img src="/image/icon/competitions.png" alt="" />
          <p className='text-[20px] font-semibold leading-[32px] uppercase'>Leaderboard</p>
        </div>
        <SimpleBar forceVisible="x" autoHide={true} className="w-full h-5/6">
          <>
            {!users ? '' : users.map((val, i) => {
              return <div className='flex py-[12px] justify-between w-full' key={i + val.name}>
                <div className='flex items-center gap-[8px] w-2/3'>
                  <p className='text-center text-[14px] font-semibold leading-[24px]' >{i + 1}</p>
                  <img src={val.imgSRC} alt="" className='h-[32px] w-[32px] rounded-[6px] border-[1px] border-[#8A8A8A]' />
                  <div className='flex flex-col'>
                    <p className='text-[14px] font-normal leading-[22px] ' data-tooltip-id={val.name + i} data-tooltip-content={val.name}>{val.name.substring(0, 8) + '...'}</p>
                    <p className='text-[#686E77] text-[12px] leading-[16px]'>{val.walletAddress!.slice(0, 4) + "..." + val.walletAddress!.slice(val.walletAddress.length - 4, val.walletAddress.length)}</p>
                  </div>
                  <Tooltip id={val.name + i} />
                </div>
                <div className='flex justify-end gap-[4px] items-center w-1/3'>
                  <img src="/image/icon/coin@3x.png" alt="" className='h-[13px] w-[13px]' />
                  <p className='text-[14px] font-semibold leading-[20px]'>
                    {val.currentPoint} pts
                  </p>
                </div>
              </div>
            })}
          </>
        </SimpleBar>
      </div>
      <div className='w-full md:flex flex-col justify-between gap-[16px]'>
        <Link href="/dashboard/marketplace " className='w-full flex justify-center items-center px-[16px] py-[8px] bg-btnYellow rounded-[10px] border-[1px] border-[#000] gap-4 text-sm2 font-semibold uppercase hover:bg-btnBlue'><FaShopLock className="text-[20px]" />Marketplace</Link>
        <button className='w-full flex justify-center items-center px-[16px] py-[8px] bg-btnYellow rounded-[10px] border-[1px] border-[#000] gap-4 text-sm2 font-semibold uppercase hover:bg-btnBlue' onClick={() => confirmTwitterId()} ><FaPaperPlane className="text-[20px]" /> Referral</button>
        <div className='grid grid-cols-12 w-full gap-5'>
          <Link href="https://twitter.com/elementals_NFT_" target='_blank' className='col-span-6 flex justify-center items-center px-[16px] py-[8px] bg-btnYellow rounded-[10px] border-[1px] border-[#000] gap-4 font-semibold uppercase hover:bg-btnBlue'>
            Twitter
          </Link>
          <Link href="https://discord.gg/elementals" target='_blank' className='col-span-6 flex justify-center items-center px-[16px] py-[8px] bg-btnYellow rounded-[10px] border-[1px] border-[#000] gap-4 text-sm2 font-semibold uppercase hover:bg-btnBlue'>
            Discord
          </Link>

        </div>
      </div>
      {/*---------------------------------- Modal ------------------------------- */}
      <div className={`${open ? "fixed" : "hidden"} w-screen h-screen backdrop-blur-sm bg-white/30 z-40 top-0 left-0 flex justify-center items-center`} >
        <div className='flex flex-col gap-[24px] p-[24px] rounded-[16px] w-[90%] md:w-3/5  lg:w-2/5  bg-cardBack   border-[1px] border-black'>
          <div className='w-full flex justify-between text-[32px] font-semibold leading-[40px]' >
            <div className='flex gap-4 items-center uppercase'><FaPaperPlane /> Referral</div>
            <IoCloseCircleOutline className="text-[38px] hover:text-[#444] cursor-pointer" onClick={() => closeHandle()} />
          </div>
          <div className='w-full py-[10px] px-[10px] flex flex-col rounded-[24px] border-[1px] border-black/[0.3] items-center  gap-[24px]'>
            <img src="/image/icon/affiliate.svg" alt="" />
            <div className='flex flex-col items-center'>
              <p className='text-[24px] font-semibold leading-[32px] text-center'>Invite Your Friend and Get +10% Points</p>
              <p className='text-[16px] leading-[26px] text-center'>Send your referral link and get +10% points in every tweet you send. </p>
            </div>
            <div className='w-1/2 flex px-[16px] py-[8] justify-center items-center gap-[13px] bg-white rounded-[12px] border-[1px] border-black'>
              <img src="/image/icon/coin@3x.png" alt='' className='w-8 h-8' />
              <p className='text-[25px] font-semibold leading-[40px]'>+10%</p>
              <p className='text-[20px] leading-[28px]'>Points</p>
            </div>
          </div>
          <div className='w-full p-[12px] rounded-[24px] border-[1px] border-black/[0.3] items-center gap-[18px] grid grid-cols-12'>
            <div className='px-[16px] py-[8px] bg-[#F4E7D6] rounded-[10px] text-[#000] text-[16px] col-span-9'> {referurl.current}</div>
            <div className='flex px-[16px] py-[8px] justify-center items-center rounded-[10px] border-[1px] border-[#0F2616] bg-btnYellow text-[15px] gap-1 col-span-3 hover:bg-btnBlue cursor-pointer font-semibold'
              onClick={() => copyText()}
            ><FaCopy />
              {!copied ? "Copy" : "Copied"}
            </div>
          </div>
        </div>
      </div>
      {/*---------------------------------- Modal End ------------------------------- */}
    </div>
  )
}
