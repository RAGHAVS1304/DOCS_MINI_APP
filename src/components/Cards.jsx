import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"


function Cards ({data, reference}) {
  return (
    <>
    <motion.div drag dragConstraints={reference} 
    whileDrag={{scale: 1.2}} 
    dragElastic={0.1}
    dragTransition={{bounceStiffness:100, bounceDamping: 30}} 
    className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-slate-400 px-8 py-10 text-black overflow-hidden'>
     <FaRegFileAlt/>
     <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc} </p>
     <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex items-center justify-between px-8 py-3 mb-3'>
            <h5>{data.filesize}</h5>
            <span className='w-7 h-7 bg-slate-300 rounded-full flex items-center justify-center'>
                {data.close ? <IoIosClose/> : <GoDownload size=".7em" color='#000'/>}
            </span>
        </div>
        {
            data.tag.isOpen && (
        <div className= {`tag w-full py-4 ${data.tag.tagColor === "sky" ? "bg-sky-600" : "bg-green-600"} flex items-center justify-center`}>
          <h3 className='text-sm font-semibold '> {data.tag.tagTitle}  </h3>
        </div>
         )}
     </div>
    </motion.div>
    
    </>
  )
}

export default Cards
