"use client"
import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import {Button} from './ui/moving-border'
import { BackgroundLines } from './ui/background-lines'

const HeroSection = () => {
  return (
    <BackgroundLines  className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto placeholder-gray-100 md:py-0'>
       <div  className="p-4 relative z-10 w-full text-center">
       <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> 
        <h1 className='text-4xl md:text-6xl font-bold duration-200 bg-clip-text text-transparent bg-gradient-to-b from-green-500 to-red-500'>Master The art of music</h1>
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas corrupti provident architecto quisquam magnam ratione soluta rerum. Perferendis, officia! Quas.</p>
        <div className="mt-4">
           <Link href={'/courses'} >
           <Button 
            borderRadius='1.75rem'
            className='bg-transparent dark:bg-black '
           >
                Explorer Courses
            </Button>
           </Link>
        </div>
      </div>
    </BackgroundLines>
  )
}

export default HeroSection;
