import { useState, useRef, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Leaderboard from '../../components/Leaderboard';
import { useWallet } from "@solana/wallet-adapter-react";
import { ToastContainer, toast } from 'react-toastify';
import { useSession } from 'next-auth/react';
import Layout from './layout';
import Head from "next/head";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
const Home = () => {
  const { data: session } = useSession();
  const [isClient, setIsClient] = useState(false);
  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams) {
      localStorage.setItem("referURL", JSON.stringify(searchParams.get("applate")));
    }

    setIsClient(true)
  }, []);
  const [img, setImg] = useState([
    {
      url: "../image/event/1.jpg",
      pts: 100
    },
    {
      url: "../image/event/2.jpg",
      pts: 100
    },
    {
      url: "../image/event/3.jpg",
      pts: 100
    },
    {
      url: "../image/event/4.jpg",
      pts: 100
    },
    {
      url: "../image/event/5.jpg",
      pts: 100
    },
    {
      url: "../image/event/6.jpg",
      pts: 100
    },
    {
      url: "../image/nft/1.png",
      pts: 100
    },
    {
      url: "../image/nft/2.png",
      pts: 100
    },
    {
      url: "../image/nft/3.png",
      pts: 100
    },
    {
      url: "../image/nft/4.png",
      pts: 100
    },
    {
      url: "../image/nft/5.png",
      pts: 100
    },
    {
      url: "../image/nft/6.png",
      pts: 100
    },
    {
      url: "../image/nft/7.png",
      pts: 100
    },
    {
      url: "../image/nft/8.png",
      pts: 100
    },
    {
      url: "../image/nft/9.png",
      pts: 100
    },
    {
      url: "../image/nft/10.png",
      pts: 100
    },
  ]);
  const [userData, setUserData] = useState({
    currentPoint: 0,
    lastTweetime: ""
  });
  const wallet = useWallet();

  useEffect(() => {
    (async () => {
      fetch("/api/user/", {
        method: "GET"
      }).then((res) => {
        res.json().then(hol => {
          setUserData(hol);
        });
      }).catch((err) => {

        console.log(err);
      })

    })()

  }, []);

  const events = [
    {
      name: 'launch',
      content: "Tweet about your experience in Elemental and using hashtag #elementalt2e #blackfridayt2r #eventt2e",
      bgcolor: '#000'
    },
    {
      name: 'launch',
      content: "Tweet about your experience in Elemental and using hashtag #elementalt2e #blackfridayt2r #eventt2e",
      bgcolor: "#FDEFB4"
    },
    {
      name: 'launch',
      content: "Tweet about your experience in Elemental and using hashtag #elementalt2e #blackfridayt2r #eventt2e",
      bgcolor: "#FDEFB4"
    },
    {
      name: 'launch',
      content: "Tweet about your experience in Elemental and using hashtag #elementalt2e #blackfridayt2r #eventt2e",
      bgcolor: "#FDEFB4"
    },
    {
      name: 'launch',
      content: "Tweet about your experience in Elemental and using hashtag #elementalt2e #blackfridayt2r #eventt2e",
      bgcolor: "#FDEFB4"
    },
    {
      name: 'launch',
      content: "Tweet about your experience in Elemental and using hashtag #elementalt2e #blackfridayt2r #eventt2e",
      bgcolor: "#000"
    },
  ]

  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>{"T2E | Dashboard"}</title>
        <link rel="icon" href="../favicon.ico" sizes="any" />
      </Head>
      <main className='w-full grid grid-cols-12 gap-6 mt-10'>
        < div className='w-full flex flex-col gap-[28px] col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9' >
          <div className='flex justify-between w-full'>
            <p className='font-semibold text-sm2 md:text-md1 leading-0 uppercase'>New Quest</p>
            {session?.user && wallet.connected ? <div className='flex w-[120x] py-[4px] pl-[4px] pr-[12px] gap-[8px] bg-white rounded-full border-[1px] border-[#000]'>
              <div className='1/4'>
                <img src="image/icon/coin@3x.png" alt="" className='w-[24px] h-[24px]' />
              </div>
              <div className='2/4'>
                <p>{userData?.currentPoint}</p>
              </div>
              <div className='1/4'>pts</div>
            </div> : null}

          </div>

          {/* <p className='font-semibold text-sm2 md:text-md1 leading-0 uppercase'>New Quest</p> */}
          <div className='w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[12px] md:gap-[24px] pb-14'>
            {img.map((val, index) => {
              return <div className='flex p-[10px] flex-col items-center gap-[10px] rounded-[16px] border-[1px] border-dark bg-cardBack' key={index}>
                <div className='relative'>
                  <img src={val.url} alt="" className='rounded-[16px] w-[160px] md:w-[400px] lg:w-[400px] xl-[400px]' />
                  <div className='w-full h-[13px]'>
                    <div className='flex w-[120x] py-[4px] pl-[4px] pr-[12px] gap-[8px] bg-white rounded-full border-[1px] border-[#000] absolute bottom-0 left-[calc(50%-3.4rem)]'>
                      <div className='1/4'>
                        <img src="image/icon/coin@3x.png" alt="" className='w-[24px] h-[24px]' />
                      </div>
                      <div className='2/4'>
                        <p>{val.pts}</p>
                      </div>
                      <div className='1/4'>pts</div>
                    </div>
                  </div>
                </div>
                <Link href={`/dashboard/tweet/${index + 1}`} className='flex px-[16px] py-[6px] justify-center items-center rounded-[10px] border-[1px] border-[#0F2616] bg-btnBlue w-full hover:bg-btnYellow font-semibold'>Earn!</Link>
              </div>
            })}
          </div>
        </div >
        {/*---------------------------------- Thumbnail ------------------------------- */}

        {/*---------------------------------- Thumbnail End ------------------------------- */}
        <Leaderboard />
      </main >
    </Layout>
  )
}

export default Home;
