'use client'

import { FaCopy } from "react-icons/fa6"
import { useState } from "react";
import { useRef, useEffect } from "react";

const ReferToFriend = (props: {open:boolean}) => {
    const [copied, setCopy] = useState<boolean>(false);
    const referurl = useRef("https://tweet2earn.xyz");

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
        setCopy(false);
    }, [props.open])
    return <div className='w-full flex flex-col text-fontgrey text-sm gap-4'>
        <p className="text-fontgrey text-sm">Invite to sign up using you link and you’ll get 1% of their earnings -awarded in $GMRX. Get up to 100 $GMRX!!!</p>
        <div className="px-[16px] py-[8px] bg-[#050209]/[0.97] rounded-full w-full flex items-center">
            <p className="truncate ">gaimin.io/invite-8sadvhduys-/dsa97js8751-m0ZM=099yb18er8t9ds9f8sd8fs7dycyccc7sdfsde</p>
            <button className="px-[16px] py-[8px] rounded-full text-white text-sm flex items-center gap-2 bg-[#fff]/[0.04]" onClick={() => copyText()}><FaCopy/> {!copied ? "Copy" : "Copied"}</button> 
        </div>
        
    </div>
}

export default ReferToFriend