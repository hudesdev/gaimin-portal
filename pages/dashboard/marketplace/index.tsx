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

  const [imgs, setImg] = useState([
    {
      url: "3",
      pts: 50
    },
    {
      url: "3",
      pts: 50
    },
    {
      url: "2",
      pts: 50
    },
    {
      url: "2",
      pts: 50
    },
    {
      url: "3",
      pts: 50
    },
    {
      url: "2",
      pts: 50
    },
    {
      url: "2",
      pts: 50
    },
    ,
    {
      url: "2",
      pts: 50
    },

  ]);
  const { data: auth } = useSession();

  const router = useRouter();
  const wallet = useWallet();
  const [userData, setUserData] = useState({
    currentPoint: 0,
    lastTweetime: ""
  });

  const [modal, setModal] = useState(false);
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
  return (
    <>
      <Head>
        <title>{"T2E | Marketplace"}</title>
        <link rel="icon" href="../favicon.ico" sizes="any" />
      </Head>
      <DashboardLayout>
        <main className='w-full grid grid-cols-12 gap-6 mt-10'>
          <div className='w-full flex flex-col gap-[28px] col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9'>
            {/*---------------------------------- Thumbnail ------------------------------- */}
            <p className='text-md1 font-semibold uppercase'>Marketplace</p>
            <div className='flex justify-between items-center w-full'>
              <p>8 Items <span className='hidden md:inline'>to claim</span> </p>
              <div className='flex gap-2'>
                {/* <p className='hidden md:block text-4 leading-[26px]'>Element</p>
          <div className='hidden md:flex w-[120x] py-[4px] px-[8px] gap-[8px] bg-white rounded-full border-[1px] border-[#000]'>
            <img src="../image/runs/Rune1.svg" alt="" />
            <img src="../image/runs/Rune2.svg" alt="" />
            <img src="../image/runs/Rune2.svg" alt="" />
          </div> */}
                {auth?.user && wallet.connected ?
                  <div className='flex w-[120x] py-[4px] pl-[4px] pr-[12px] gap-[8px] bg-white rounded-full border-[1px] border-[#000]'>
                    <div className='1/4'>
                      <img src="../image/icon/coin@3x.png" alt="" className='w-[24px] h-[24px]' />
                    </div>
                    <div className='2/4'>
                      <p>{userData.currentPoint}</p>
                    </div>
                    <div className='1/4'>pts</div>
                  </div> : null}
                <Link href="/dashboard" className='flex py-1 pr-3 pl-1 items-center rounded-full border-[1px] border-black bg-white'>
                  <FaChevronLeft />
                  <p className='text-3 leading-[21px] bg-white'>Back</p>
                </Link>
              </div>

            </div>
            <div className='w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[12px] md:gap-[24px] pb-14'>
              {imgs.map((val, index) => {
                return <div className='flex p-[12px] flex-col items-center gap-[16px] rounded-[16px] border-[1px] border-dark bg-cardBack' key={index}>
                  <div className='relative'>
                    <div className='w-full flex justify-center items-center rounded-[16px] border-[1px] border-dark'>
                      <img src={`../image/solana/${val?.url}.png`} alt="" />
                    </div>
                    <div className='w-full h-[13px]'>
                      <div className='flex w-[120x] py-[4px] pl-[4px] pr-[12px] gap-[8px] bg-white rounded-full border-[1px] border-[#000] absolute bottom-0 left-[calc(50%-2.8rem)]'>
                        <div className='1/4'>
                          <img src="../image/icon/coin@3x.png" alt="" className='w-[24px] h-[24px]' />
                        </div>
                        <div className='2/4'>
                          <p>100</p>
                        </div>
                        <div className='1/4'>pts</div>
                      </div>
                      <div className='flex justify-center items-center text-2 sm:text-4 font-semibold leading-[24px] bg-[#1C1202]/[0.32] rounded-t-2xl text-white absolute top-0 w-full py-2'>100 $ELMNT</div>
                    </div>
                  </div>
                  <button className='flex px-[16px] py-[8px] leading-0 justify-center text-[15px] items-center rounded-[10px] border-[1px] border-[#0F2616] bg-btnYellow w-full hover:bg-btnBlue font-semibold' >Comming Soon!</button>
                  {/* <PureModal
                header="Comming Soon!"
                className='bg-white'
                isOpen={modal}
                closeButton="close"
                closeButtonPosition="bottom"
                onClose={() => {
                  setModal(false);
                  return true;
                }}
              >
                <p>Your content</p>
              </PureModal> */}
                </div>
              })}
            </div>
            {/*---------------------------------- Thumbnail End ------------------------------- */}

          </div>
          <Leaderboard />
        </main>
      </DashboardLayout>
    </>
  )
}

export default Home;
