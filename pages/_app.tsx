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
import { SessionProvider } from "next-auth/react";
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps }}: AppProps) {
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

  useEffect(() => {
    setIsClient(true)
  }, []);

  return (
    <SessionProvider session={session}>
      <ConnectionProvider endpoint={process.env.RPC_HOST || 'https://api.mainnet-beta.solana.com'}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            {isClient ? <Component {...pageProps} /> : null}
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </SessionProvider>

  )
}

export default MyApp
