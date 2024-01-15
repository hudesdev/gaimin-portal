import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ThreeCircles } from 'react-loader-spinner';
import Head from "next/head";

const meta = {
  title: 'ELEMENTALS-T2E',
  description: 'The vision of the project is to allow users to earn $ELMNT token by tweeting once per day for the public and twice for token holders.',
  icons: "../favicon.ico",
  image: "../main.jpg",
  type: "website",
};


const Home = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => { router.push('/dashboard') }, 3000);
  }, []);
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://tweet2earn.xyz`} />
        <link rel="canonical" href={`https://tweet2earn.xyz`} />
        <link rel="icon" href={meta.icons} sizes="any" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Elementals-T2E" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Elementals_NFT_" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <div className='w-full flex justify-center items-center h-screen flex-col gap-5 bg-btnYellow/[0.85]'>
        <img src="../image/background/logoback.png" alt="" className='z-[-1] fixed w-screen h-screen' />
        <img src="../image/logo.png" alt="" className='w-[250px] h-[250px] z-10' />
        <ThreeCircles
          height="70"
          width="70"
          color="#ff8d2a"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
        />
      </div>
    </>

  )
}

export default Home;
