"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function HeroWatch() {
  return (
    <div className={`${poppins.className} relative h-screen overflow-hidden`}>

      {/* LEFT BG */}
      <div className="absolute left-0 top-0 w-1/2 h-full bg-[#dbdce0]" />

      {/* RIGHT BG */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#09162c]" />

      {/* BIG LETTER */}
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[42rem] font-bold text-[#8263a3]/90 leading-none select-none pointer-events-none">
        S
      </span>

      {/* WATCH IMAGE */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/main watch.png"
          alt="watch"
          width={220}
          height={220}
          className="drop-shadow-[0_0_50px_rgba(0,0,0,0.8)]"
        />
      </div>

      {/* TEXT LEFT */}
      <h1 className={`${poppins.className} absolute left-1/2 top-1/2 text-[5rem] tracking-[25px] text-white -translate-y-1/2 -translate-x-[380px]`}>
        POR
      </h1>

      {/* TEXT RIGHT */}
      <h1 className="absolute left-1/2 top-1/2 text-[5rem] tracking-[25px] text-white -translate-y-1/2 translate-x-[160px]">
        CHE
      </h1>

      {/* EXPLORE BUTTON */}
      <button className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[200px] bg-white px-8 py-4 font-semibold shadow-xl hover:bg-gray-200 transition cursor-pointer">
        EXPLORE MORE
      </button>

      {/* PRINT BUTTON */}
      <button className="absolute right-0 top-1/2 rotate-90 border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition cursor-pointer">
        PRINT
      </button>

      {/* CATALOG BUTTON */}
      <button className="absolute left-0 top-[25%] -rotate-90 border border-[#232637] text-[#232637] px-8 py-3 hover:bg-[#09162c] hover:text-white transition cursor-pointer">
        CATALOG
      </button>

      {/* FEATURES */}

      {/* Diesel */}
      <div className="absolute left-[12%] top-[32%] flex items-center gap-6 text-[#232637]">
        <span>Diesel</span>
        <div className="w-[100px] h-[1px] bg-[#232637]" />
      </div>

      {/* Watches */}
      <div className="absolute right-[12%] top-[32%] flex items-center gap-6 text-white">
        <div className="w-[100px] h-[1px] bg-white" />
        <span>Watches</span>
      </div>

      {/* Tough */}
      <div className="absolute left-[12%] bottom-[32%] flex items-center gap-6 text-[#232637]">
        <span>Tough</span>
        <div className="w-[100px] h-[1px] bg-[#232637]" />
      </div>

      {/* Modern */}
      <div className="absolute right-[12%] bottom-[32%] flex items-center gap-6 text-white">
        <div className="w-[100px] h-[1px] bg-white" />
        <span>Modern</span>
      </div>

    </div>
  );
}