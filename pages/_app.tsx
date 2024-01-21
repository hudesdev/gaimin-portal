import { useState, useMemo, useEffect } from "react";
import type { AppProps } from 'next/app';
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  CoinbaseWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter, 
  TrustWalletAdapter,
  
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import '../styles/globals.css';
import "@solana/wallet-adapter-react-ui/styles.css";


import 'simplebar-react/dist/simplebar.min.css';
import { useSession } from "next-auth/client";
import SessionContext from "../context/SessionContext";
import { SessionProvider } from "next-auth/client";

import '../styles/globals.css';

function MyApp({ Component, pageProps: { ...pageProps }}: AppProps) {
  const network = WalletAdapterNetwork.Mainnet;
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new TrustWalletAdapter(),
      new TorusWalletAdapter(),
      new CoinbaseWalletAdapter(),
      new SolflareWalletAdapter(),
    ],
    [network]
  );

  const [isClient, setIsClient] = useState(false);
  const [session] = useSession();

  useEffect(() => {
    setIsClient(true)
  }, []);

  return (
    <SessionContext.Provider value={{ session }}>
      <ConnectionProvider endpoint={process.env.RPC_HOST || 'https://api.mainnet-beta.solana.com'}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            {isClient ? <Component {...pageProps} /> : null}
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
      </SessionContext.Provider>

  )
}

export default MyApp
