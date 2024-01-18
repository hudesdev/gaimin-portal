import { FaX } from "react-icons/fa6";
import SimpleBar from "simplebar-react";
type ModalProps = {
  children: React.ReactNode,
  title: String,
  open: boolean,
  setOpen: any
};

export default function ModalContainer(props:ModalProps) {
  
  return (
    // <SimpleBar forceVisible="x" autoHide={true} className="w-screen h-screen">

      <div className={`absolute w-screen h-full z-20 top-0 bg-[#050209]/[0.97] ${props.open ? 'flex': 'hidden'} justify-center items-center`}>
          <div className='w-full mx-2 md:mx-0 md:w-2/3 lg:w-1/2 modal_style gap-2'>
              <div className="w-full flex justify-between items-center">
                <p className="text-white text-2xl md:text-[32px] font-bold">{props.title}</p>
                <button className='flex w-[32px] p-[8px] rounded-[12px] flex justify-center items-center bg-[#050209]/[0.97] text-white text-sm' onClick={() => props.setOpen(false)}><FaX className='w-[16px] h-[16px]'/></button>
              </div>
              {props.children}
          </div>
      </div>
    // </SimpleBar>
  )
}
