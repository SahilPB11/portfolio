import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 bg-transparent z-[20] w-full flex flex-col md:flex-row justify-between md:px-10 lg:px-20 p-5 md:py-10">
      
      {/* Logo and Name */}
      <div className="flex items-center">
        <h1 className="text-white md:text-[45px] text-[25px] mr-4">
          Sahil <span className="font-thin">Garg</span>
          <span className="text-red-500">.</span>
        </h1>
      </div>
      
      {/* Social Links on the Right */}
      <div className="flex items-center justify-end space-x-4">
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
