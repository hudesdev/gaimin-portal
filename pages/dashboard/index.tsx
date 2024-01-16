import { useState, useRef, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { useWallet } from "@solana/wallet-adapter-react";
import Layout from './layout';
import { FaWallet, FaTwitter } from 'react-icons/fa6';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
const Home = () => {

  const wallet = useWallet();

  useEffect(() => {

  }, []);


  const router = useRouter();

  return (
    <Layout>  
      <img src="../img/Login@3x.png" alt="" className='z-[-1] fixed w-screen h-screen' />
      <div className='container'>
        <div className='w-full h-[850px] md:h-screen overflow-y-auto flex flex-col justify-end items-center gap-24 pb-5'>
          <div className='w-full sm:w-1/2 md:w-1/3 flex flex-col items-center gap-4'>
            <div className='w-full flex flex-col gap-1 items-center'>
              <p className='text-white text-xl'>Start Earn With</p>
              <img src="../img/logo.png" alt="" className='w-full sm:w-4/5' />
            </div>
            
            <div className='w-full flex flex-col gap-2'>
              <button className='flex py-[16px] px-[24] justify-center items-center gap-[16px] rounded-[16px] text-white pink-gradiant'><FaWallet/> Connect Wallet</button>
              <button className='flex py-[16px] px-[24] justify-center items-center gap-[16px] rounded-[16px] text-white bg-[#1DA1F2] hover:opacity-80'><FaTwitter/> Connect Twitter</button>
            </div>
            <p className='text-fontgrey text-base text-center w-full sm:w-5/6'>By connecting your twitter you agree to our <span className='text-white'>Terms of Use</span> and <span className='text-white'>Privacy Policy</span> </p>

          </div>

          <div className='w-full flex flex-col items-center md:items-start sm:flex-row pb-2 gap-3 md:gap-0'>
            <div className='w-full sm:w-4/5 md:w-1/3 flex flex-col'>
              <p className='text-2xl sm:text-[32px] font-bold leading-[40px] text-fontpink'>01</p>
              <p className='text-base text-white'>Sign up</p>
              <p className='text-base text-fontgrey'>Simply connect your twitter to get playing</p>
            </div>
            <div className='w-full sm:w-4/5 md:w-1/3 flex flex-col'>
              <p className='text-2xl sm:text-[32px] font-bold leading-[40px] text-fontpink'>02</p>
              <p className='text-base text-white'>Create & Earn</p>
              <p className='text-base text-fontgrey'>Earn $GMRX from your twitter content</p>
            </div>
            <div className='w-full sm:w-4/5 md:w-1/3 flex flex-col'>
              <p className='text-2xl sm:text-[32px] font-bold leading-[40px] text-fontpink'>03</p>
              <p className='text-base text-white'>Claim $GMRX Reward</p>
              <p className='text-base text-fontgrey'>Every level you progress you win</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home;
