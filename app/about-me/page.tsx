import ServiceSlider from '@/components/ServiceSlider'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col md:flex-row items-center bg-[#0C011A] min-h-screen overflow-hidden'>
      <div className='pl-10 md:pl-20 lg:pl-40 flex flex-col gap-2 pb-10 md:pb-0'>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold">
          My Skills<span className="text-red-500">.</span>
        </h1>
      </div>
      <div className='md:relative md:left-auto md:right-20 transform md:rotate-12 animate-pulse duration-75 mb-10 md:mb-0'>
        <Image
          src="/assets/bulb.png"
          alt='bulb'
          width={260}
          height={260}
          layout="responsive" // This ensures the image is responsive
          className='w-32 md:w-full lg:w-48'
        />
      </div>
      <div className='flex items-center justify-center w-full'>
        <ServiceSlider />
      </div>
    </div>
  );
}


export default Page