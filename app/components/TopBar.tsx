import Image from 'next/image'
import React from 'react'
import { ReactTyped } from 'react-typed'
import AppTypedText from './AppTypedText'


const TopBar = () => {
  return (
    <div className='flex fixed w-full  py-2 px-4 justify-between bg-background md:hidden '>
        <div className='flex flex-row gap-3 '>
            <div className=' relative rounded-full w-[40px] h-[40px] overflow-hidden bg-red-300 '>
                <Image className='h-full' objectFit='cover' src={'/images/profile.jpg'} width={100} height={100} alt='Profile Image' />
           
            </div>
             <div className='-mt-1'>
                <h3 className='text-white -mb-2 text-md'>Majd Shaheen</h3>
                <AppTypedText fontSize='12px' color='#F6B846' />
            </div>
        </div>
    </div>
  )
}

export default TopBar