import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn, signOut, useSession } from "next-auth/client";
import { useSessionContext } from "../context/SessionContext";
import { useWallet } from '@solana/wallet-adapter-react';
import { ThreeCircles } from 'react-loader-spinner';
import Head from "next/head";
import Layout from './layout';
import { FaWallet, FaTwitter } from 'react-icons/fa6';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const meta = {
  title: 'Gaimin',
  description: 'The vision of the project is to allow users to earn $GMRX.',
  icons: "/img/GAIMIN_G_Logo_White.jpg",
  image: "../main.jpg",
  type: "website",
};

const Home = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [time, setTime] = useState(false);
  const { session } = useSessionContext();
  const wallet = useWallet();
  useEffect(() => {
    setTimeout(() => { setTime(true) }, 3000);
  }, []);

  useEffect(() => {
    if (session) {
      // console.log("=====>> session", session);
      router.push("/dashboard");

    }
  }, [session])

  const refer = async () => {
    if (searchParams) {
      const referURL = JSON.stringify(searchParams.get("applate"));
      localStorage.setItem('referURL', referURL);
    }
  }

  const authSign = async () => {
    refer();
    if (session) {
      signOut();
    } else {
      signIn();
    }
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        {/* <meta property="og:url" content={`https://tweet2earn.xyz`} />
        <link rel="canonical" href={`https://tweet2earn.xyz`} /> */}
        <link rel="icon" href={meta.icons} sizes="any" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Gaimin" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        {/* <meta property="og:image" content={meta.image} /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Gaimin" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        {/* <meta name="twitter:image" content={meta.image} /> */}
      </Head>
      {!time ? <div className='w-full flex justify-center items-center h-screen flex-col gap-5'>
        <img src="../img/Login@3x.png" alt="" className='z-[-1] fixed w-screen h-screen' />
        <ThreeCircles
          height="70"
          width="70"
          color="#D8277C"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
        />
      </div> : <Layout>
        <img src="../img/Login@3x.png" alt="" className='z-[-1] fixed w-screen h-screen' />
        <div className='container'>
          <div className='w-full h-[850px] md:h-screen overflow-y-auto flex flex-col justify-end items-center gap-24 pb-5'>
            <div className='w-full sm:w-1/2 md:w-1/3 flex flex-col items-center gap-4'>
              <div className='w-full flex flex-col gap-1 items-center'>
                <p className='text-white text-xl'>Start Earn With</p>
                <img src="../img/logo.png" alt="" className='w-full sm:w-4/5' />
              </div>

              <div className='w-full flex flex-col gap-2'>
                <button className='flex py-[16px] px-[24px] justify-center items-center gap-[16px] rounded-[16px] text-white bg-[#1DA1F2] hover:opacity-80' onClick={() => authSign()}><FaTwitter /> Connect Twitter</button>
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

      }
    </>
  )
}

export default Home;
