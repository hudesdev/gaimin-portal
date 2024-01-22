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
    <div className={`absolute sm:fixed w-full bg-[#050209]/[0.97] top-0 z-30 h-[1000px] sm:h-screen ${props.open ? 'flex': 'hidden'} justify-center items-start pt-20 2xmd:pt-0 2xmd:items-center`}>
      <div className={`w-full ${props.title.search('Post')>0?`h-[550px]`:``} ${props.title.search('Friend')>0 || props.title.search('Post')>0?`md:w-1/2 lg:w-1/2 xl:w-1/3`:`md:w-4/5 lg:w-2/3 xl:w-1/2`} modal_style gap-2 mx-2`}>
          <div className="w-full flex justify-between items-center">
            <p className="text-white text-2xl md:text-[32px] font-bold">{props.title}</p>
            <button className='flex w-[32px] p-[8px] rounded-[12px] flex justify-center items-center bg-[#050209]/[0.97] text-white text-sm' onClick={() => props.setOpen(false)}><FaX className='w-[16px] h-[16px]'/></button>
          </div>
          {props.children}
      </div>
    </div>
  )
}
