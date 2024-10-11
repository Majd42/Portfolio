import Link from 'next/link'
import React from 'react'
import { BiMessage } from 'react-icons/bi';
import { CgWorkAlt } from 'react-icons/cg';
import { FaNewspaper, FaServicestack } from 'react-icons/fa6';
import { IoPersonOutline } from "react-icons/io5";

const Navbar = () => {
  
  return (
    <nav className='rounded-sm z-10 bg-background fixed top-[56px] w-full flex py-4  before:bg-disabled before:w-[100%] before:h-[0.5px] before:absolute before:top-0 before:left-0 before:opacity-20 md:sticky md:top-10 md:left-[-80px] md:flex-col md:w-fit md:h-[380px] md:px-2 '>
        <Link className=' flex justify-center items-center w-[20%] border-r-[0.5px] border-disabled md:w-full md:border-0 md:h-[20%] ' href={'/'}>
            <div className='w-full flex flex-col justify-center items-center '>
                <IoPersonOutline size={20}  />
                <h4 className='text-xs'>ABOUT</h4>
            </div>
        </Link>
         <Link className='flex justify-center items-center w-[20%] border-r-[0.5px] border-disabled md:w-full md:border-0 md:h-[20%]' href={'/'}>
            <div className='w-full flex flex-col justify-center items-center '>
                <FaNewspaper size={20} />
                <h4 className='text-xs'>RESUME</h4>
            </div>
        </Link>
          <Link className='flex justify-center items-center w-[20%] border-r-[0.5px] border-disabled md:w-full md:border-0 md:h-[20%]' href={'/'}>
            <div className='w-full flex flex-col justify-center items-center '>
                <FaServicestack size={20} />
                <h4 className='text-xs'>SERVICES</h4>
            </div>
        </Link>
          <Link className='flex justify-center items-center w-[20%] border-r-[0.5px] border-disabled md:w-full md:border-0 md:h-[20%]' href={'/'}>
            <div className='w-full flex flex-col justify-center items-center '>
                <CgWorkAlt size={20} />
                <h4 className='text-xs'>WORKS</h4>
            </div>
        </Link>
          <Link className='flex justify-center items-center w-[20%]  border-disabled md:w-full md:border-0 md:h-[20%] ' href={'/'}>
            <div className='w-full flex flex-col justify-center items-center '>
                <BiMessage size={20} />
                <h4 className='text-xs'>CONTACT</h4>
            </div>
        </Link>
         
    </nav>
  )
}

export default Navbar



