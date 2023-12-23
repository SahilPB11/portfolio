import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 bg-transparent z-[20] w-full flex  gap-5 md:justify-between md:px-60 p-5">
      <h1 className="text-white md:text-[45px] text-[25px]">
        Sahil <span className="font-thin">Garg</span>
        <span className="text-red-500">.</span>
      </h1>
      <div className="flex justify-center items-center gap-5 mb-2">
        {Socials.map((social) => (
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            key={social.name}
          >
            <Image
              src={social.src}
              alt={social.name}
              width={28}
              height={28}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar; 