import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Leaderboard from '../../../components/Leaderboard';
import { FaChevronLeft, FaCopy } from 'react-icons/fa';
import Link from "next/link";
import { useWallet } from "@solana/wallet-adapter-react";
import { useSession } from "next-auth/react";
import DashboardLayout from '../layout';
import { FaWallet, FaTwitter, FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import Head from 'next/head';
import ProgressBar from '../../../components/Progressbar';
import { Tooltip } from 'react-tooltip'
import {Avatar} from "@nextui-org/react";
import Calendar from '../../../components/Calendar'

const Home = () => {
  const [state, setState] = useState(60);

  const [users, setUsers] = useState([
    {
      url: '../img/person1.jpg',
      name: 'Amandadfsfdssd',
      wallet: "2312132ds235lkkk5k6klk7l87kjjk2j3223wcsds",
      pts: 20000
    },
    {
      url: '../img/person2.jpg',
      name: 'Nika sdfsae rere',
      wallet: "2312132ds235lkkk5k6klk7l87kjjk2j3223wcsds",
      pts: 20000
    },
    {
      url: '../img/person1.jpg',
      name: 'Honda',
      wallet: "2312132ds235lkkk5k6klk7l87kjjk2j3223wcsds",
      pts: 20000
    },
    {
      url: '../img/person2.jpg',
      name: 'Yeni',
      wallet: "2312132ds235lkkk5k6klk7l87kjjk2j3223wcsds",
      pts: 235457
    },
    {
      url: '../img/person2.jpg',
      name: 'Natasha',
      wallet: "2312132ds235lkkk5k6klk7l87kjjk2j3223wcsds",
      pts: 20000
    },
    {
      url: '../img/person1.jpg',
      name: 'Solman',
      wallet: "2312132ds235lkkk5k6klk7l87kjjk2j3223wcsds",
      pts: 20000
    },
  ])
  return (
    <>
      <Head>
        <title>{"SoKongz | KongzDAO"}</title>
        <link rel="icon" href="../favicon.ico" sizes="any" />
      </Head>
      <DashboardLayout>
        <img src="../img/landing.png" alt="" className='z-[-1] fixed w-screen h-screen' />
        <div className='w-full h-[850px] md:h-screen overflow-y-auto'>
          <div className='container'>
            <div className='w-full flex flex-col'>
              <header className='w-full flex justify-between items-center py-[24px]'>
                <img src="../img/logo.png" alt="" className='w-[120px]' />
                <div className='w-2/3 flex justify-between'>
                  <div className='flex gap-8 text-sm'>
                    <Link href="#" className='text-white'>Power Posts</Link>
                    <Link href="#" className='text-white'>How To Play</Link>
                    <Link href="#" className='text-white'>Calculate Points</Link>
                    <Link href="#" className='text-white'>Refer to Friends</Link>
                  </div>
                  <div className='flex gap-3'>
                    <button className='px-[16px] flex items-center py-[6px] rounded-full bg-[#1DA1F2] hover:bg-[#1DA1F2]/[0.8] text-white text-sm gap-2' ><FaTwitter/> Connect</button>
                    <div className='flex gap-3'>
                    <Avatar src="../img/person1.jpg" className='w-[32px] h-[32px]'/>
                      <div className='flex flex-col justify-center'>
                        <p className='text-white text-xs'>Hanson Rise</p>
                        <p className='text-fontgrey text-xs m-0'>0x7sad...98dkb</p>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <main className='w-full flex justify-between items-center py-[24px]'>
                <div className='flex flex-col justify-between items-center w-[270px] gap-3'>
                  <div className='w-full rounded-[16px] bg-[#fff]/[0.04] px-[32px] py-[24px] flex flex-col items-center'>
                    <p className='text-fontgrey text-xs'> TOTAL POINTS</p>
                    <p className='text-white text-[32px]'>100 Pts</p>
                  </div>
                  <div className='w-full rounded-[16px] bg-[#fff]/[0.04] px-[32px] py-[24px] flex flex-col items-center gap-2'>
                    <p className='text-fontgrey text-xs'> SEASON BEGIN IN</p>
                    <p className='text-fontpink text-xl'>02 : 23 : 42 : 01</p>
                  </div>
                  <div className='w-full rounded-[16px] bg-[#fff]/[0.04] px-[32px] py-[24px] flex flex-col items-center gap-2'>
                    <p className='text-fontgrey text-xs flex gap-2 items-center'> <div className='w-[12px] h-[12px] rounded-full bg-fontpink p-[2px]'><img src="../img/G@2x.png" alt="" /></div> GAIMIN POINTS</p>
                    <div className='text-white text-2xl gap-2 flex items-center'>0 <span className='text-fontgrey text-base'>$GMRX</span></div>
                  </div>
                  <div className='w-full rounded-[16px] bg-[#fff]/[0.04] px-[32px] py-[24px] flex flex-col items-center gap-1'>
                    <p className='text-fontgrey text-xs'>LEFT IN THE SEASON</p>
                    <p className='text-white text-2xl'>3 Days</p>
                  </div>
                  <div className='w-full'>
                    <p className='text-white text-sm'>LEVEL PROGRESS</p>
                    <div className='w-full gap-3 flex'>
                      <div className='w-1/3 rounded-[16px] bg-[#fff]/[0.04] p-[24px] flex flex-col items-center gap-2'>
                        <p className='text-fontgrey text-lg'>100%</p>
                        <ProgressBar valuePercentage={60} /> 
                        <p className='text-fontpink text-lg'>{state}%</p>
                      </div>
                      <div className='w-2/3 flex flex-col gap-3'>
                        <div className='w-full rounded-[16px] bg-[#fff]/[0.04] p-[24px] h-1/2 flex flex-col justify-center items-center gap-2'>
                          <p className='text-sm text-fontgrey text-center'>Next Stage</p>
                          <div className='flex items-center justify-center gap-2'>
                            <img src="../img/Badge.svg" alt="" />
                            <p className='text-base text-white'>STAGE 3</p>
                          </div>
                        </div>
                        <div className='w-full rounded-[16px] bg-[#fff]/[0.04] p-[24px] h-1/2 flex flex-col justify-center items-center gap-2'>
                          <p className='text-sm text-fontgrey text-center'>Current Stage</p>
                          <div className='flex items-center justify-center gap-2'>
                            <img src="../img/Star-Medal.svg" alt="" />
                            <p className='text-base text-white'>STAGE 2</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Calendar/>

                <div className='w-[330px] py-[24px] pl-[24px] flex flex-col'>
                  <div className='w-full rounded-[16px] bg-[#fff]/[0.04] p-[16px]'>
                    <p className='text-white text-xl font-bold pb-5'>Leader Board</p>
                    <div className='w-full flex flex-col gap-1'>
                      { !users ? '' :  users.map((val, index) => {
                        return <div className='w-full flex justify-between items-center cursor-pointer py-[8px] hover:px-[8px] rounded-[12px] border-fontpink/[0] hover:border-fontpink border-[1px]'>
                          <div className='flex items-center gap-1'>
                            <p className='text-white text-xs px-[8px]'>{index+1}</p>
                            <div className='flex gap-3 items-center'>
                              {/* <div className='w-[32px] h-[32px] rounded-full overflow-hidden'>
                                <img src="../img/person2.jpg" className='' alt="" />
                              </div> */}
                              <Avatar src={val.url} className='w-[24px] h-[24px]' />
                              <div className='flex flex-col justify-center'>
                                <p className='text-white text-xs' data-tooltip-id={val.name + index} data-tooltip-content={val.name}>{val.name.substring(0, 8) + '...'}</p>
                                <p className='text-fontgrey text-xs m-0'>{val.wallet!.slice(0, 4) + "..." + val.wallet!.slice(val.wallet.length - 6, val.wallet.length)}</p>
                              </div>
                              <Tooltip id={val.name + index} />

                            </div>
                          </div>
                          
                          <p className='text-fontpink text-xs'>{val.pts.toLocaleString()} pts</p>
                        </div>
                      })}
                      
                    </div>
                  </div>
                  <div className='w-full rounded-[16px] bg-[#fff]/[0.04] p-[16px]'>
                    <div className='w-full flex justify-between items-center'>
                      <p className='text-white text-xl font-bold'>Leader Board</p>
                      <div className='flex items-center gap-4 text-white'>
                        <FaAngleLeft/> Mar <FaAngleRight/>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
            
          </div>
        </div>
        
        
      </DashboardLayout>
    </>
  )
}

export default Home;
