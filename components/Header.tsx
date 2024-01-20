import React, { useState, useRef, useEffect } from 'react';
import ListBox from './ListBox';
import { IoMdNotifications } from "react-icons/io";
import WalletButton from './WalletButton';
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { ToastContainer, toast } from 'react-toastify';
import { FaXTwitter, FaHouse, FaShop, FaPaperPlane, FaAlignJustify, FaCopy, FaTwitter, FaDiscord } from "react-icons/fa6";
import { IoCloseCircleOutline } from 'react-icons/io5';

import { AnimatePresence, motion } from "framer-motion";
import 'react-toastify/dist/ReactToastify.css';

import Link from 'next/link';

interface ReferralType {
  name: string,
  senderID: string,
  receiverID: string,
  used: boolean,
  createdAt: Date
}

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const [copied, setCopy] = useState<boolean>(false); 
  const [showList, setShowList] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [open, handleOpen] = useState<boolean>(false);
  const [referral, setReferral] = useState<ReferralType[]>([]);
  const wallet = useWallet();
  const { data: session } = useSession();
  const referurl = useRef("https://tweet2earn.xyz")
  const [userAuth, SetuserAuth] = useState<any>();
  useEffect(() => {
    if (session) {

      SetuserAuth(session);
    }
  }, [session])

  const handleClickOutside = (event: MouseEvent) => {
    const element = document.getElementById('temp');
    if (ref.current && !ref.current.contains(event.target as Node) && !element?.contains(event.target as Node)) {
      setShowList(false);
    }
  }
  const confirmTwitterId = () => {
    if (userAuth?.token) {
      console.log(session)
      if (referurl.current.search("applate") < 0) {
        referurl.current = referurl.current + '/dashboard/?applate=' + userAuth?.token.user.id;
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
  useEffect(() => {

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (userAuth?.token.user) {
      (async () => {
        const result = await fetch("/api/referral", { method: "GET" })
          .then((response) => response.json())
          .then((data) => {
            setReferral(data.allItems);
          })
          .catch(err => { console.log(err); })
      })();
    }
  }, [session])

  useEffect(() => {
    if (wallet.connected) {
      // return;
    }
    if (wallet.publicKey) {
      // alert('ddd');
    }
    return () => { }
  }, [wallet]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, []);

  const authSign = async () => {

    if (session) {
      signOut()
    } else {
      signIn()
    }

  }

  return (
    <div className='w-full flex justify-center py-[24px] bg-[#fff]/[0.35] relative'>

      <div className='w-full flex justify-between container '>
        <div className='flex items-center gap-2 sm:gap-[12px]'>
          <img src="../../image/icon/logo.png" alt="" className='w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] rounded-[10px] border-[1px] border-[#000]' />
          <p className='font-semibold text-sm1 md:text-md1 lg:text-md2 leading-0 uppercase'>ELEMENTALS T2E</p>
        </div>
        <div className='flex gap-1 sm:gap-3 '>
          {userAuth?.token.user && wallet.connected ? <div id='temp' className='flex justify-center items-center bg-white p-2 rounded-[10px] border-[1px] border-[#000] w-[45px] hover:bg-btnYellow cursor-pointer' onClick={() => { setShowList(!showList) }} >
            <IoMdNotifications className="w-[24px] h-[24px]" />
          </div> : null}
          <WalletButton className='hidden md:flex justify-center items-center' />
          <ToastContainer />
          <button className='hidden md:flex justify-center items-center gap-2 px-[16px] py-[8px] bg-[#222] rounded-[10px] border-[1px] border-[#000] text-white font-semibold hover:bg-[#30363d]' onClick={() => authSign()}>
            {userAuth?.token.user ? <><img src={`${userAuth?.token.user.image}`} className='w-[30px] h-[30px] rounded-full'></img>{userAuth?.token.name}</> : <><FaXTwitter />CONNECT</>}
          </button>
          <div className='flex md:hidden justify-center items-center bg-white p-[5px] rounded-[10px] border-[1px] border-[#000] hover:bg-btnYellow'>
            <Link href={'/dashboard/mobile'}>
              <img src="/image/icon/competitions.png" alt="" className='w-[30px] h-[30px]' />
            </Link>
          </div>
          <div
            onClick={() => setOpen(!isOpen)}
            className='flex md:hidden justify-center items-center bg-white p-3 rounded-[10px] border-[1px] border-[#000] w-[32] sm:w-[50px] text-black hover:bg-btnYellow cursor-pointer'
          >
            <FaAlignJustify className="w-[16px] h-[16px]" />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden absolute left-0 shadow-4xl top-[5rem] bg-bgColor border-b border-b-white/20 w-full h-screen z-10 mx-auto"
              >
                <ul className="font-semibold">
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + 1 / 10,
                    }}
                    className="w-full bg-white/[0.32]"
                  >
                    <div className='container flex justify-between py-[24px]'>
                      <WalletButton className='md:hidden justify-center items-center' />
                      <ToastContainer />
                      <button className='flex md:hidden justify-center items-center gap-2 px-[16px] py-[8px] bg-[#222] rounded-[10px] border-[1px] border-[#000] text-white font-semibold hover:bg-[#30363d]' onClick={() => authSign()}>
                        {session?.user ? <><img src={`${session.user.image}`} className='w-[30px] h-[30px] rounded-full'></img>{session.user.name}</> : <><FaXTwitter />CONNECT</>}
                      </button>
                    </div>

                  </motion.li>
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + 3 / 10,
                    }}
                    className="w-full border-y-[1px] border-black bg-white/[0.32]"
                  >
                    <div className='container'>
                      <Link
                        href="/dashboard"
                        onClick={() => setOpen((prev) => !prev)}
                        className={
                          "flex gap-2 items-center justify-start w-full py-[18px]"
                        }
                      >
                        <FaHouse />
                        <span className="flex gap-1 text-lg">Home</span>
                      </Link>
                    </div>

                  </motion.li>
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + 1 / 10,
                    }}
                    className="w-full rounded-xl "
                  >
                    <div className='container'>
                      <Link
                        href="/dashboard/marketplace"
                        onClick={() => handleOpen(!open)}
                        className={
                          "flex gap-2 items-center justify-start w-full py-[18px]"
                        }
                      >
                        <FaShop />
                        <span className="flex gap-1 text-lg">MARKETPLACE</span>
                      </Link>
                    </div>

                  </motion.li>
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + 3 / 10,
                    }}
                    className="w-full rounded-xl "
                  >
                    <div className='container'>
                      <button
                        onClick={() => confirmTwitterId()}
                        className={
                          "flex gap-2 items-center justify-start w-full py-[18px]"
                        }
                      >
                        <FaPaperPlane />
                        <span className="flex gap-1 text-lg">REFERRAL</span>
                      </button>
                    </div>

                  </motion.li>
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + 3 / 10,
                    }}
                    className="w-full rounded-xl "
                  >
                    <div className='container'>
                      <Link
                        href="https://twitter.com/elementals_NFT_" target='_blank'
                        className={
                          "flex gap-2 items-center justify-start w-full py-[18px]"
                        }
                      >
                        <FaTwitter />
                        <span className="flex gap-1 text-lg">Twitter</span>
                      </Link>
                    </div>

                  </motion.li>
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + 3 / 10,
                    }}
                    className="w-full rounded-xl "
                  >
                    <div className='container'>
                      <Link
                        href="https://discord.gg/elementals" target='_blank'
                        className={
                          "flex gap-2 items-center justify-start w-full py-[18px]"
                        }
                      >
                        <FaDiscord />
                        <span className="flex gap-1 text-lg">Discord</span>
                      </Link>
                    </div>

                  </motion.li>

                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {showList ?
          <div className='absolute container'>
            <div className='absolute w-[305px] md:w-[320px] z-10 right-[30px] sm:right-[75px] md:right-[155px] lg:right-[248px] top-16' ref={ref}>
              <ListBox refer={referral} />
            </div>
          </div> : null}

        {/*---------------------------------- Modal ------------------------------- */}
        <div className={`${open ? "fixed" : "hidden"} w-screen h-screen bg-bgColor top-[5rem] z-10 top-0 left-0 flex justify-start items-center flex flex-col`} >

          <div className='w-full flex justify-between text-[24px] md:text-[32px] font-semibold leading-[34px] md:leading-[40px]' >
            <div className='flex gap-4 items-center uppercase py-5'><FaPaperPlane /> Referral</div>
            <IoCloseCircleOutline className="text-[38px] hover:text-[#444] cursor-pointer" onClick={() => closeHandle()} />
          </div>
          <div className='w-full py-[10px] px-[10px] flex flex-col rounded-[24px] border-[1px] border-black/[0.3] items-center  gap-[24px]'>
            <img src="../image/icon/affiliate.svg" alt="" />
            <div className='flex flex-col items-center'>
              <p className='text-[24px] font-semibold leading-[32px] text-center'>Invite Your Friend and Get +10% Points</p>
              <p className='text-[16px] leading-[26px] text-center'>Send your referral link and get +10% points in every tweet you send. </p>
            </div>
            <div className='w-full md:w-1/2 flex px-[16px] py-[8] justify-center items-center gap-[13px] bg-white rounded-[12px] border-[1px] border-black'>
              <img src="../image/icon/coin@3x.png" alt='' className='w-8 h-8' />
              <p className='text-[24px] md:text-[32px] font-semibold leading-[40px]'>+ 10%</p>
              <p className='text-[20px] leading-[28px]'>Points</p>
            </div>
          </div>
          <div className='w-full p-[12px] rounded-[24px] border-[1px] border-black/[0.3] items-center gap-[18px] grid grid-cols-12'>
            <div className='overflow-hidden px-[16px] py-[8px] bg-[#F4E7D6] rounded-[10px] text-[#000] text-[16px] col-span-9'>{referurl.current}</div>
            <div className='flex px-[16px] py-[8px] justify-center items-center rounded-[10px] border-[1px] border-[#0F2616] bg-btnYellow text-[15px] gap-1 col-span-3 hover:bg-btnBlue cursor-pointer font-semibold' onClick={() => copyText()}><FaCopy />{!copied ? "Copy" : "Copied"}</div>
          </div>

        </div>
      </div>
    </div>
  )
}
