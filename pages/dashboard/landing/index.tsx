import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { FaChevronLeft, FaCopy } from 'react-icons/fa';
import Link from "next/link";
import { useWallet } from "@solana/wallet-adapter-react";
import { useSession } from "next-auth/react";
import DashboardLayout from '../layout';
import { FaTwitter, FaGripLines, FaX } from 'react-icons/fa6';
import Head from 'next/head';
import ProgressBar from '../../../components/Progressbar';
import { Tooltip } from 'react-tooltip'
import { Avatar, Modal } from "@nextui-org/react";
import Calendar from '../../../components/Calendar'
import SimpleBar from 'simplebar-react';
import PlayModal from '../../../components/modals/PlayModal';
import Cal from '../../../components/modals/Cal';
import ModalContainer from '../../../components/ModalContainer';



const Home = () => {
  const [state, setState] = useState(60);
  const [drop, dropOpen] = useState(false);
  const [playModal, setPlayOpen] = useState(false);
  const [calModal, setCalOpen] = useState(false);
  const [walletModal, setWaleetOpen] = useState(false);
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
        <title>{"Gaimin"}</title>
        <link rel="icon" href="../favicon.ico" sizes="any" />
      </Head>
      <DashboardLayout>
        <img src="../img/landing.png" alt="" className='z-[-1] fixed w-screen h-screen' />
        <div className='w-full relative px-4'>
          <div className='w-full flex flex-col'>
            <header className='w-full flex justify-between items-center py-[24px]'>
              <img src="../img/logo.png" alt="" className='w-[120px]' />
              <button className='flex md:hidden w-[32px] h-[32px] rounded-[12px] flex justify-center items-center bg-[#fff]/[0.04] text-white' onClick={() => dropOpen(!drop)}>{!drop?<FaGripLines className='w-[16px] h-[16px]' />:<FaX className='w-[16px] h-[16px]'/>}</button>
              <div className='w-4/5 lg:w-2/3 hidden md:flex justify-between'>
                <div className='flex gap-5 lg:gap-8 text-sm'>
                  <button className='text-white'>Power Posts</button>
                  <button className='text-white' onClick={() => setPlayOpen(!playModal)}>How To Play</button>
                  <button className='text-white' onClick={() => setCalOpen(!calModal)}>Calculate Points</button>
                  <button className='text-white'>Refer to Friends</button>
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
              <div className={`absolute w-full bg-[#050209]/[0.97] top-20 gap-8 z-20 h-full flex-col items-center ${drop?`flex`:`hidden`}`}>
                <button className='text-white mt-6'>Power Posts</button>
                <button className='text-white'>How To Play</button>
                <button className='text-white'>Calculate Points</button>
                <button className='text-white'>Refer to Friends</button>
                <button className='px-[16px] flex items-center justify-center py-[6px] rounded-full bg-[#1DA1F2] hover:bg-[#1DA1F2]/[0.8] text-white text-sm gap-2 w-4/5' ><FaTwitter/> Connect</button>
                <div className='flex gap-3'> 
                  <Avatar src="../img/person1.jpg" className='w-[32px] h-[32px]'/>
                  <div className='flex flex-col justify-center'>
                    <p className='text-white text-xs'>Hanson Rise</p>
                    <p className='text-fontgrey text-xs m-0'>0x7sad...98dkb</p>
                  </div>
                </div>
              </div>
            </header>
            <main className='w-full flex flex-col sm:flex-row justify-between items-start py-[24px]'>
              <div className='w-full flex flex-col gap-3 mb-3 sm:hidden'>
                <p className='text-white text-xs text-center'>LEVEL PROGRESS</p>

                <div className='w-full flex justify-between items-center rounded-[16px] bg-[#fff]/[0.04] px-[8px] py-[16px]'>
                  <p className='text-fontgrey text-xs'>100%</p>
                  <ProgressBar valuePercentage={60} vertical = {false} /> 
                  <p className='text-fontpink text-xs'>{state}%</p>
                </div>
                <div className='w-full flex gap-3'>
                  <div className='w-1/2 rounded-[16px] bg-[#fff]/[0.04] p-[12px] flex flex-col justify-center items-center gap-1'>
                    <p className='text-[10px] text-fontgrey'>Next Stage</p>
                    <div className='flex items-center justify-center gap-2'>
                      <img src="../img/Badge.svg" alt="" />
                      <p className='text-sm text-white'>STAGE 3</p>
                    </div>
                  </div>
                  <div className='w-1/2 rounded-[16px] bg-[#fff]/[0.04] p-[12px] flex flex-col justify-center items-center gap-1'>
                    <p className='text-[10px] text-fontgrey text-center'>Current Stage</p>
                    <div className='flex items-center justify-center gap-2'>
                      <img src="../img/Star-Medal.svg" alt="" />
                      <p className='text-sm text-white'>STAGE 2</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex sm:flex-col justify-between items-center w-full sm:w-[270px] gap-3'>
                <div className='w-1/2 sm:w-full flex flex-col gap-3'>
                  <div className='w-full rounded-[16px] bg-[#fff]/[0.04] px-[12px] md:px-[32px] py-[24px] flex flex-col items-center'>
                    <p className='text-fontgrey text-[10px] sm:text-xs'> TOTAL POINTS</p>
                    <p className='text-white text-base sm:text-xl'>100 Pts</p>
                  </div>
                  <div className='w-full rounded-[16px] bg-[#fff]/[0.04] px-[8px] md:px-[32px] py-[24px] flex flex-col items-center'>
                    <p className='text-fontgrey text-[10px] sm:text-xs'> SEASON BEGIN IN</p>
                    <p className='text-fontpink text-base sm:text-xl'>02 : 23 : 42 : 01</p>
                  </div>
                </div>
                <div className='w-1/2 sm:w-full flex flex-col gap-3'>
                  <div className='w-full rounded-[16px] bg-[#fff]/[0.04] px-[12px] md:px-[32px] py-[24px] flex flex-col items-center'>
                    <p className='text-fontgrey text-[10px] sm:text-xs flex gap-2 items-center'> <div className='w-[12px] h-[12px] rounded-full bg-fontpink p-[2px]'><img src="../img/G@2x.png" alt="" /></div> GAIMIN POINTS</p>
                    <div className='text-white text-base sm:text-xl gap-2 flex items-center'>0 <span className='text-fontgrey text-[10px] sm:text-base'>$GMRX</span></div>
                  </div>
                  <div className='w-full rounded-[16px] bg-[#fff]/[0.04] px-[12px] md:px-[32px] py-[24px] flex flex-col items-center'>
                    <p className='text-fontgrey text-[10px] sm:text-xs'>LEFT IN THE SEASON</p>
                    <p className='text-white text-base sm:text-xl'>3 Days</p>
                  </div>
                </div>
                
                <div className='w-full hidden sm:block'>
                  <p className='text-white text-sm'>LEVEL PROGRESS</p>
                  <div className='w-full gap-3 flex'>
                    <div className='w-1/3 rounded-[16px] bg-[#fff]/[0.04] p-[24px] flex flex-col items-center gap-2'>
                      <p className='text-fontgrey text-lg'>100%</p>
                      <ProgressBar valuePercentage={60} vertical = {true} /> 
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
              
              <div className='w-full sm:w-[330px] mt-3 sm:m-0 sm:pl-[24px] flex flex-col gap-3'>
                <div className='w-full rounded-[16px] bg-[#fff]/[0.04] p-[16px] h-[430px] '>
                  <p className='text-white text-xl font-bold pb-5 ml-[8px]'>Leader Board</p>
                  <SimpleBar forceVisible="x" autoHide={true} className="w-full h-[340px]">

                    <div className='w-full flex flex-col gap-1 '>
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
                  </SimpleBar>
                </div>
                <div className='w-full rounded-[16px] bg-[#fff]/[0.04] p-[16px] h-[325px]'>
                  
                  <Calendar/>

                </div>
              </div>
            </main>
            
          </div>
        </div>
        <ModalContainer title="How to Play" setOpen={setPlayOpen} open={playModal} children = {<PlayModal/>} />
        <ModalContainer title="$GMRX Points Calculator" setOpen={setCalOpen} open={calModal} children = {<Cal/>} />
        
        {/* <ModalContainer open = {modal} setOpen = {setOpen} title = "How to Play" /> */}
      </DashboardLayout>
    </>
  )
}

export default Home;
