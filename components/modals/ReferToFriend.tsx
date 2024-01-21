'use client'

import { FaCopy } from "react-icons/fa6"
import { useState } from "react";
import { useRef, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

const ReferToFriend = (props: {open:boolean}) => {
    const [copied, setCopy] = useState<boolean>(false);
    const referurl = useRef("http://localhost:3000");
    const wallet = useWallet();
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
    useEffect(() => {
        if (wallet.publicKey&&referurl.current.search("applate") < 0) {
            referurl.current = referurl.current+'/?applate=' + wallet.publicKey.toBase58();
        }
    })
    useEffect(() => {
        setCopy(false);
    }, [props.open])

    return <div className='w-full flex flex-col text-fontgrey text-sm gap-4'>
        <p className="text-fontgrey text-sm">Invite to sign up using you link and you’ll get 1% of their earnings -awarded in $GMRX. Get up to 100 $GMRX!!!</p>
        <div className="px-[16px] py-[8px] bg-[#050209]/[0.97] rounded-full w-full flex items-center justify-between">
            <p className="truncate ">{referurl.current}</p>
            <button className="px-[16px] py-[8px] rounded-full text-white text-sm flex items-center gap-2 bg-[#fff]/[0.04]" onClick={() => copyText()}><FaCopy/> {!copied ? "Copy" : "Copied"}</button> 
        </div>
        
    </div>
}

export default ReferToFriend