// import Particle from "@/components/Particle";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="flex items-center h-screen w-screen relative bg-cover bg-[url('/assets/bg-explosion.png')]">
//       <div className="absolute right-0 top-0 h-full w-[100%] z-[2]">
//         <Particle />
//       </div>
//       <div className="absolute right-10 md:right-40 bottom-0 z-[10]">
//         <Image
//           src="/assets/MoustacheMan.png"
//           alt="MoustacheMan"
//           width={560}
//           height={560}
//           className="w-[300px] h-[300px] z-[1] md:h-[560px] md:w-[560px]"
//         />
//       </div>
//       <Image
//         src="/assets/top-left-img.png"
//         alt="paint"
//         width={230}
//         height={230}
//         className="absolute left-0 top-0 bottom-0"
//       />

//       <div className="flex flex-col gap-3 z-[10] pl-40 pt-20">
//         <h1 className="text-[50px] text-white max-w-[500px]">
//           Transforming ideas into{" "}
//           <span className="text-red-500">Digital Reality</span>
//         </h1>
//         <p className="text-[16px] text-gray-200 md:text-gray-400 mb-10 md:pb-2 max-w-[400px]">
//           Full Stack Developer with expertise in JavaScript, React for front-end, and Node.js with Express for backend development. Strong problem-solving and analytical skills complemented by proficiency in Java. Committed to excellence in web
//         </p>
//         <div className="relative w-[100px] h-[100px] md:w-[160px] md:h-[160px] mt-5">
//           <Image
//             src="/assets/rounded-text.png"
//             alt="projects"
//             width={160}
//             height={160}
//             className="slow-spin"
//           />
//         </div>
//       </div>
//     </main>
//   );
// }


import Particle from "@/components/Particle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-cover bg-[url('/assets/bg-explosion.png')] h-screen w-screen overflow-hidden">
      <div className="absolute top-0 right-0 h-full w-full z-[2]">
        <Particle />
      </div>
      <div className="absolute right-10 md:right-40 bottom-0 z-[10]">
        <Image
          src="/assets/MoustacheMan.png"
          alt="MoustacheMan"
          width={560}
          height={560}
          className="w-[300px] h-[300px] z-[1] md:h-[560px] md:w-[560px]"
        />
      </div>
      <Image
        src="/assets/top-left-img.png"
        alt="paint"
        width={230}
        height={230}
        className="absolute left-0 top-0 "
      />

      <div className="flex flex-col gap-3 z-[10] lg:pl-44 pl-28  pt-20  ">
        <h1 className=" md:text-[40px]  text-[50px] text-white max-w-[500px] mt-10 md:mt-0">
          Transforming ideas into{" "}
          <span className="text-red-500">Digital Reality</span>
        </h1>
        <p className=" md:text[10px] text-[16px] text-gray-200 md:text-gray-400 mb-10 md:pb-2 max-w-[400px] ">
          Full Stack Developer with expertise in JavaScript, React for front-end, and Node.js with Express for backend development. Strong problem-solving and analytical skills complemented by proficiency in Java. Committed to excellence in web
        </p>
        <div className="relative w-[100px] h-[100px] md:w-[160px] md:h-[160px] mt-5">
          <Image
            src="/assets/rounded-text.png"
            alt="projects"
            width={160}
            height={160}
            className="slow-spin"
          />
        </div>
      </div>
    </main>
  );
}

