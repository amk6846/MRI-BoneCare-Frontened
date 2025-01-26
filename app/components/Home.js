import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <>
    <div className='h-screen w-full relative' id='Home'>
    <Image src={'/images/bg.jpg'} alt="Background" layout="fill" objectFit="cover" />
    {/* Heading , subheading , Learn More Button */}
    <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-white drop-shadow-lg tracking-wide max-w-4xl">
          AI-Powered MRI Analysis for Bone Tumors
        </h1>

        {/* Subheading */}
        <h2 className="text-lg p-5 sm:text-xl md:text-2xl lg:text-3xl text-center text-neutral-900-200 drop-shadow-md tracking-wide max-w-2xl">
          Fast, Accurate & Reliable Bone Tumor Detection Using Deep Learning.
        </h2>
    </div>
    <div className='absolute inset-16 mt-6 flex items-center justify-center top-80'>
        <Link href={"/tools"} className='px-5 py-3 bg-yellow-500 text-gray-900 hover:bg-yellow-400 font-semibold rounded-md'>Lean More</Link>
    </div>
    </div>
    </>
  )
}

export default Home