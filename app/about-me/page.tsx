"use client"
import ServiceSlider from '@/components/ServiceSlider';
import Image from 'next/image';
import React from 'react';
import SkillCategory from "../../components/SkillCategory";

const Page = () => {
  return (
    <div className='flex flex-col md:flex-row items-center bg-[#0C011A] min-h-screen overflow-hidden'>

      {/* ServiceSlider section on larger screens */}
      <div className='hidden md:flex items-center justify-end w-10/10 h-[50vh] md:w-1/2 mt-5 md:mt-0'>
        <ServiceSlider />
      </div>

      {/* "My Skills" section */}
      <div className='flex flex-col items-center justify-center w-full h-[30vh] md:w-3/4 px-4 mt-40 md:mt-0'> {/* Increased margin-top for small screens */}
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-semibold mb-4"> {/* Increased font size for md and larger screens */}
          My Skills<span className="text-red-500 mb-5">.</span>
        </h1>
        {/* Centered skills section */}
        <div className=" text-white flex flex-wrap justify-center gap-4 w-full"> {/* Added w-full to make sure the section takes full width */}
          <SkillCategory title="Languages" skills={['JavaScript', 'Java', 'Typescript']} />
          <SkillCategory title="Front-End" skills={['HTML5', 'CSS3', 'Tailwind CSS', 'ReactJs']} />
          <SkillCategory title="Back-End" skills={['Node.js', 'Express', 'MongoDB']} />
          <SkillCategory title="Version Control" skills={['Git', 'GitHub']} />
        </div>
      </div>



      {/* ServiceSlider section on smaller screens */}
      <div className='flex sm:mt-10 md:hidden items-center justify-center w-full h-[50vh] mt-3'>
        <ServiceSlider />
      </div>

      {/* Bulb image section */}
      <div className='md:relative md:left-auto md:right-10 transform md:rotate-12 animate-pulse duration-75 md:mb-0 md:w-1/2 mt-5 md:mt-0'> {/* Added margin-top for spacing */}
        <Image
          src="/assets/bulb.png"
          alt='bulb'
          width={200}
          height={200}
          layout="responsive"
          className='w-24 md:w-32 lg:w-40'
        />
      </div>

    </div>
  );
};

export default Page;






