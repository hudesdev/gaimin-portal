import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { FaChevronLeft, FaCopy } from 'react-icons/fa';
import Link from "next/link";
import { useWallet } from "@solana/wallet-adapter-react";
import { signIn, signOut, useSession } from "next-auth/client";
import { useSessionContext } from "../../context/SessionContext";
import { useAuth } from '../../hook/useAuth';
import DashboardLayout from '../layout';
import { FaTwitter, FaGripLines, FaX, FaAddressBook, FaArrowRightFromBracket } from 'react-icons/fa6';
import Head from 'next/head';
import ProgressBar from '../../components/Progressbar';
import { Tooltip } from 'react-tooltip'
import { Avatar, Modal } from "@nextui-org/react";
import Calendar from '../../components/Calendar'
import SimpleBar from 'simplebar-react';
import PlayModal from '../../components/modals/PlayModal';
import Cal from '../../components/modals/Cal';
import WalletConnect from '../../components/modals/WalletConnect';
import ReferToFriend from '../../components/modals/ReferToFriend';
import ModalContainer from '../../components/ModalContainer';
import PoswerPost from '../../components/modals/PowerPost';
import CountDown from '../../components/CountDown'
import { ThreeCircles } from 'react-loader-spinner';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Home = () => {
  const [state, setState] = useState(80);
  const router = useRouter();
  const [drop, dropOpen] = useState(false);
  const [playModal, setPlayOpen] = useState(false);
  const [calModal, setCalOpen] = useState(false);
  const [referModal, setReferOpen] = useState(false);
  const [walletModal, setWalletOpen] = useState(false);
  const [wallethandle, openWalletHandle] = useState(false);
  const [postOpen, setPostOpen] = useState(false);
  const { data } = useAuth();
  const { session } = useSessionContext();

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
  ]);

  const wallet = useWallet();
  const [time, setTime] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      console.log("session=>>",session);
      if (session) {
        await refer();
      } else {
        router.push('/');
      }
    };

    fetchData();
    setTimeout(() => { setTime(true) }, 3000);
  }, []);

  const refer = async () => {
    console.log("refer", refer);
    // const referral = await fetch("/api/referral", {
    //   method: "POST",
    //   body: referURL
    // })
    //   .then((response) => {
    //     localStorage.removeItem('referURL');
    //   })
    //   .catch(err => { console.log(err); })
  }

  return (
    <>
      <Head>
        <title>{"Gaimin"}</title>
        <link rel="icon" href="/img/GAIMIN_G_Logo_White.jpg" sizes="any" />
      </Head>
      {!time ? <div className='w-full flex justify-center items-center h-screen flex-col gap-5'>
        <img src="../img/landing.png" alt="" className='z-[-1] fixed w-screen h-screen' />
        <ThreeCircles
          height="70"
          width="70"
          color="#D8277C"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
        />
      </div> :
        <DashboardLayout>
          <img src="../img/landing.png" alt="" className='z-[-1] fixed w-screen h-screen' />
          <div className='w-full relative'>
            <div className={`absolute w-full bg-[#050209]/[0.97] top-20 gap-8 z-20 h-full flex-col items-center ${drop ? `flex` : `hidden`}`}>
              <button className='text-white mt-6' onClick={() => setPostOpen(!postOpen)}>Power Posts</button>
              <button className='text-white' onClick={() => setPlayOpen(!playModal)}>How To Play</button>
              <button className='text-white' onClick={() => setCalOpen(!calModal)}>Calculate Points</button>
              <button className='text-white' onClick={() => setReferOpen(!referModal)}>Refer to Friends</button>
              <WalletMultiButton />
              <div className='flex gap-3 cursor-pointer' onClick={() => openWalletHandle(!wallethandle)}>
                <Avatar src="../img/person1.jpg" className='w-[32px] h-[32px]' />
                <div className='flex flex-col justify-center'>
                  <p className='text-white text-xs'>Hanson Rise</p>
                  <p className='text-fontgrey text-xs m-0'>{wallet.publicKey ? wallet.publicKey.toBase58().slice(0, 4) + "..." + wallet.publicKey.toBase58().slice(wallet.publicKey.toBase58().length - 6, wallet.publicKey.toBase58().length) : 'Wallet not connected'}</p>
                </div>
              </div>
            </div>
            <div className={`absolute sm:fixed w-full bg-[#050209]/[0.97] top-0 z-30 h-screen ${wallethandle ? 'flex' : 'hidden'} justify-end items-start pt-0`}>
              <div className='flex flex-col items-center justify-center gap-3 py-[24px] modal_style m-[30px] relative'>
                <button className='flex w-[32px] p-[8px] rounded-[12px] flex justify-center items-center bg-[#050209]/[0.97] text-white text-sm absolute right-2 top-2' onClick={() => openWalletHandle(false)}><FaX className='w-[16px] h-[16px]' /></button>
                <div className='w-full flex justify-center'>
                  <Avatar src="../img/person1.jpg" className='w-[72px] h-[72px]' />
                </div>
                <div className='flex flex-col w-full justify-center items-center'>
                  <p className='text-white text-lg'>{wallet.publicKey ? wallet.publicKey.toBase58().slice(0, 4) + "..." + wallet.publicKey.toBase58().slice(wallet.publicKey.toBase58().length - 6, wallet.publicKey.toBase58().length) : 'Wallet not connected'}</p>
                  <p className='text-fontgrey text-sm m-0'>42.069 SOL</p>
                </div>
                <div className='flex w-full gap-2'>
                  <div className='flex flex-col justify-center items-center h-[54px] w-[102px] text-white text-xs rounded-[8px] bg-white/[0.1]'>
                    <FaAddressBook />
                    Switch
                  </div>
                  <div className='flex flex-col justify-center items-center h-[54px] w-[102px] text-white text-xs rounded-[8px] bg-white/[0.1] cursor-pointer' onClick={()=>{signOut({ redirect: true, callbackUrl: '/' })}}>
                    <FaArrowRightFromBracket />
                    Disconnect
                  </div>
                </div>
              </div>
            </div>
            <ModalContainer title="How to Play" setOpen={setPlayOpen} open={playModal} children={<PlayModal />} />
            <ModalContainer title="$GMRX Points Calculator" setOpen={setCalOpen} open={calModal} children={<Cal />} />
            <ModalContainer title="Refer to Friends" setOpen={setReferOpen} open={referModal} children={<ReferToFriend open={referModal} />} />
            <ModalContainer title="Connect Wallet" setOpen={setWalletOpen} open={walletModal} children={<WalletConnect />} />
            <ModalContainer title="Connect Wallet" setOpen={setPostOpen} open={postOpen} children={<PoswerPost />} />
            <div className='w-full flex flex-col px-2 sm:px-6'>
              <header className='w-full flex justify-between items-center py-[24px]'>
                <img src="../img/logo.png" alt="" className='w-[120px]' />
                <button className='flex 2xmd:hidden w-[32px] h-[32px] rounded-[12px] flex justify-center items-center bg-[#fff]/[0.04] text-white' onClick={() => dropOpen(!drop)}>{!drop ? <FaGripLines className='w-[16px] h-[16px]' /> : <FaX className='w-[16px] h-[16px]' />}</button>
                <div className='w-2/3 hidden 2xmd:flex justify-between gap-2'>
                  <div className='flex gap-3 lg:gap-5 text-sm'>
                    <button className='text-white' onClick={() => setPostOpen(!postOpen)}>Power Posts</button>
                    <button className='text-white' onClick={() => setPlayOpen(!playModal)}>How To Play</button>
                    <button className='text-white' onClick={() => setCalOpen(!calModal)}>Calculate Points</button>
                    <button className='text-white' onClick={() => setReferOpen(!referModal)}>Refer to Friends</button>
                    <button className='text-white' onClick={() => setReferOpen(!referModal)}>Telegram</button>
                  </div>

                  <div className='flex gap-3'>
                    <div className='hidden 2xmd:block'>
                      <WalletMultiButton />
                    </div>
                    <div className='flex gap-3 cursor-pointer' onClick={() => openWalletHandle(!wallethandle)}>
                      <Avatar src="../img/person1.jpg" className='w-[32px] h-[32px]' />
                      <div className='flex flex-col justify-center'>
                        <p className='text-white text-xs'>Hanson Rise</p>
                        <p className='text-fontgrey text-xs m-0'>{wallet.publicKey ? wallet.publicKey.toBase58().slice(0, 4) + "..." + wallet.publicKey.toBase58().slice(wallet.publicKey.toBase58().length - 6, wallet.publicKey.toBase58().length) : 'Wallet not connected'}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </header>
              <main className='w-full flex flex-col 2xmd:flex-row justify-between items-start py-[24px] relative'>
                <div className='relative  md:h-[780px] 2xmd:absolute w-full h-full flex justify-center items-center z-[-1]'>
                  <div className='w-full h-full 2xmd:w-1/4 lg:w-1/3 flex flex-col justify-between items-center pb-[48px] gap-24 2xmd:gap-0'>
                    <div className='flex flex-col'>
                      <p className='text-white text-2xl lg:text-[32px] font-semibold text-center'>Welcome to Gaimin Earn</p>
                      <p className='text-fontgrey text-xs text-center'>Collect the point by liking, replying and Re-tweeting</p>
                    </div>
                    <div className='flex flex-col items-center'>
                      <div className='relative w-2/3 2xmd:w-full'>
                        <img src="/img/star_bg.png" alt="" />
                        <div className='w-full flex items-center justify-center absolute top-[-80px]'>
                          <img src={`/img/gif/${state <= 1 ? `broken.gif` : state <= 10 ? 'discharged.gif' : state <= 48 ? 'happy.gif' : `strong.gif`}`} className='w-full sm:w-5/6 ' alt="" />
                        </div>
                      </div>
                      <div className='flex flex-col justify-center items-center gap-3 py-[16px] px-[32px] 2xmd:px-[24px] lg:p-[32px] rounded-[16px] bg-white/[0.04]'>
                        <p className='text-2xl 2xmd:text-3xl lg:text-5xl text-white'>Stage {state <= 0 ? 1 : state <= 10 ? 2 : state <= 45 ? 3 : 4}</p>
                        <div className='px-[16px] py-[4px] text-fontpink text-sm sm:text-lg rounded-full bg-[#D8277C]/[0.04]'>10 pts</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='w-full flex flex-col gap-3 mb-3 2xmd:hidden'>
                  <p className='text-white text-xs text-center'>LEVEL PROGRESS</p>

                  <div className='w-full flex justify-between items-center rounded-[16px] bg-[#fff]/[0.04] px-[8px] py-[16px]'>
                    <p className='text-fontgrey text-xs'>100%</p>
                    <ProgressBar valuePercentage={state} vertical={false} />
                    <p className='text-fontpink text-xs'>{state}%</p>
                  </div>
                  <div className='w-full flex gap-3'>
                    <div className='w-1/2 rounded-[16px] bg-[#fff]/[0.04] p-[12px] flex flex-col justify-center items-center gap-1'>
                      <p className='text-[10px] text-fontgrey'>Next Stage</p>
                      <div className='flex items-center justify-center gap-2'>
                        <img src="../img/Badge.svg" alt="" />
                        <p className='text-sm text-white'>STAGE {state <= 0 ? 2 : state <= 10 ? 3 : state <= 45 ? 4 : 'Full'}</p>
                      </div>
                    </div>
                    <div className='w-1/2 rounded-[16px] bg-[#fff]/[0.04] p-[12px] flex flex-col justify-center items-center gap-1'>
                      <p className='text-[10px] text-fontgrey text-center'>Current Stage</p>
                      <div className='flex items-center justify-center gap-2'>
                        <img src="../img/Star-Medal.svg" alt="" />
                        <p className='text-sm text-white'>STAGE {state <= 0 ? 1 : state <= 10 ? 2 : state <= 45 ? 3 : 4}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex 2xmd:flex-col justify-between items-center w-full 2xmd:w-[270px] gap-3'>
                  <div className='w-1/2 2xmd:w-full flex flex-col gap-3'>
                    <div className='w-full rounded-[16px] bg-[#fff]/[0.04] px-[12px] 2xmd:px-[32px] py-[24px] flex flex-col items-center'>
                      <p className='text-fontgrey text-[10px] 2xmd:text-xs'> TOTAL POINTS</p>
                      <p className='text-white text-base 2xmd:text-xl'>100 Pts</p>
                    </div>
                    <div className='w-full rounded-[16px] bg-[#fff]/[0.04] px-[8px] 2xmd:px-[32px] py-[24px] flex flex-col items-center'>
                      <p className='text-fontgrey text-[10px] 2xmd:text-xs'> SEASON BEGIN IN</p>
                      <CountDown nextTime={new Date('2024-1-25')} />
                    </div>
                  </div>
                  <div className='w-1/2 2xmd:w-full flex flex-col gap-3'>
                    <div className='w-full rounded-[16px] bg-[#fff]/[0.04] px-[12px] 2xmd:px-[32px] py-[24px] flex flex-col items-center'>
                      <p className='text-fontgrey text-[10px] 2xmd:text-xs flex gap-2 items-center'> <div className='w-[12px] h-[12px] rounded-full bg-fontpink p-[2px]'><img src="../img/G@2x.png" alt="" /></div> GAIMIN POINTS</p>
                      <div className='text-white text-base 2xmd:text-xl gap-2 flex items-center'>0 <span className='text-fontgrey text-[10px] 2xmd:text-base'>$GMRX</span></div>
                    </div>
                    <div className='w-full rounded-[16px] bg-[#fff]/[0.04] px-[12px] 2xmd:px-[32px] py-[24px] flex flex-col items-center'>
                      <p className='text-fontgrey text-[10px] 2xmd:text-xs'>LEFT IN THE SEASON</p>
                      <p className='text-white text-base 2xmd:text-xl'>3 Days</p>
                    </div>
                  </div>

                  <div className='w-full hidden 2xmd:block'>
                    <p className='text-white text-sm py-4'>LEVEL PROGRESS</p>
                    <div className='w-full gap-3 flex'>
                      <div className='w-1/3 rounded-[16px] bg-[#fff]/[0.04] p-[24px] flex flex-col items-center gap-2'>
                        <p className='text-fontgrey text-lg'>100%</p>
                        <ProgressBar valuePercentage={state} vertical={true} />
                        <p className='text-fontpink text-lg'>{state}%</p>
                      </div>
                      <div className='w-2/3 flex flex-col gap-3'>
                        <div className='w-full rounded-[16px] bg-[#fff]/[0.04] p-[24px] h-1/2 flex flex-col justify-center items-center gap-2'>
                          <p className='text-sm text-fontgrey text-center'>Next Stage</p>
                          <div className='flex items-center justify-center gap-2'>
                            <img src="../img/Badge.svg" alt="" />
                            <p className='text-base text-white'>STAGE {state <= 0 ? 2 : state <= 10 ? 3 : state <= 45 ? 4 : 4}</p>
                          </div>
                        </div>
                        <div className='w-full rounded-[16px] bg-[#fff]/[0.04] p-[24px] h-1/2 flex flex-col justify-center items-center gap-2'>
                          <p className='text-sm text-fontgrey text-center'>Current Stage</p>
                          <div className='flex items-center justify-center gap-2'>
                            <img src="../img/Star-Medal.svg" alt="" />
                            <p className='text-base text-white'>STAGE {state <= 0 ? 1 : state <= 10 ? 2 : state <= 45 ? 3 : 4}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='w-full 2xmd:w-[330px] mt-3 2xmd:m-0 2xmd:pl-[24px] flex flex-col gap-3'>
                  <div className='w-full rounded-[16px] bg-[#fff]/[0.04] p-[16px] h-[430px] '>
                    <p className='text-white text-xl font-bold pb-5 ml-[8px]'>Leaderboard</p>
                    <SimpleBar forceVisible="x" autoHide={true} className="w-full h-[340px] pr-3">

                      <div className='w-full flex flex-col gap-1 '>
                        {!users ? '' : users.map((val, index) => {
                          return <div className='w-full flex justify-between items-center cursor-pointer py-[8px] hover:px-[8px] rounded-[12px] border-fontpink/[0] hover:border-fontpink border-[1px]' key={val.name + index}>
                            <div className='flex items-center gap-1'>
                              <p className='text-white text-xs px-[8px]'>{index + 1}</p>
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

                    <Calendar />

                  </div>
                </div>
              </main>

            </div>
          </div>


          {/* <ModalContainer open = {modal} setOpen = {setOpen} title = "How to Play" /> */}
        </DashboardLayout>}
    </>
  )
}

export default Home;
