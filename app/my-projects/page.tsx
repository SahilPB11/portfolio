import ProjectSlider from "@/components/ProjectSlider";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 md:flex-row h-screen bg-[#0C011A] ">
      <div className="flex flex-col gap-5">
        <h1 className="text-[30px] mt-10 text-white font-semibold sm:hidden md:block">
          My Work<span className="text-red-500">.</span>
        </h1>
        <p className="max-w-[400px] text-[16px] text-gray-200 md:text-gray-400 ">
          I have crafted a series of comprehensive full-stack projects that
          underscore my proficiency and capabilities in delivering end-to-end web
          solutions.
        </p>
      </div>
      <ProjectSlider />
    </div>
  );
};

export default Page;


