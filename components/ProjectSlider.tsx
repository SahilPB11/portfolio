"use client"
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { ProImages } from "@/constants";
import Image from "next/image";

const ProjectSlider = () => {
  return (
    <div className="w-full md:w-[60%] lg:w-[60%]">
      <Swiper
        breakpoints={{
          700: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        {ProImages.map(({ src, href }) => (
          <SwiperSlide className="mb-14 " key={src}>
            <div className="relative group flex items-center">
              {/* Image */}
              <div className="w-[280px] h-[500px] md:w-[230px] md:h-[500px]">
                <Image
                  src={src}
                  alt="project image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md object-cover"
                />
              </div>
              {/* Animation Overlay */}
              <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70 transition-opacity duration-200" />
              {/* "View Project" Text */}
              <a href={href} target="_blank" rel="noopener noreferrer" className="ml-2">
                <div className="cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white md:text-lg">
                  View Project
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="arrow right"
                    width={20}
                    height={20}
                    className="invert brightness-0 ml-2"
                  />
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};

export default ProjectSlider; 