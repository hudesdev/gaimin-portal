// import { useWeb3Login, WalletType } from 'react-web3-login';

const WalletConnect = () => {
    return <div className='w-full flex flex-col text-fontgrey text-sm gap-4'>
       <button className="w-full flex items-center gap-2 rounded-[12px] px-[16px] py-[12px] bg-[#050209]/[0.97]"><img src="/img/phantom.png" alt="" className="w-[32px] h-[32px]" />Phantom</button>
       <button className="w-full flex items-center gap-2 rounded-[12px] px-[16px] py-[12px] bg-[#050209]/[0.97]"><img src="/img/metamask.png" alt="" className="w-[32px] h-[32px]" />MetaMask</button>
    </div>
}

export default WalletConnect