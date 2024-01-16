import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Leaderboard from '../../../components/Leaderboard';
import { FaChevronLeft, FaCopy } from 'react-icons/fa';
import Link from "next/link";
import { useWallet } from "@solana/wallet-adapter-react";
import { useSession } from "next-auth/react";
import DashboardLayout from '../layout';
import Head from 'next/head';
const Home = () => {

  return (
    <>
      <Head>
        <title>{"SoKongz | KongzDAO"}</title>
        <link rel="icon" href="../favicon.ico" sizes="any" />
      </Head>
      <DashboardLayout>
        <img src="../img/landing.png" alt="" className='z-[-1] fixed w-screen h-screen' />

      </DashboardLayout>
    </>
  )
}

export default Home;
