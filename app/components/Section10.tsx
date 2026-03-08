"use client";
import Image from "next/image";

export default function HeroWatch() {
  return (
    <div className="relative h-screen overflow-hidden poppins">
      <div className="absolute left-0 top-0 w-1/2 h-full bg-[#e7e8ec]" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#09162c]" />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[42rem] font-bold text-[#8263a3]/90 leading-none select-none pointer-events-none">
        S
      </span>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/watch/w17.png"
          alt="watch"
          width={220}
          height={220}
          className="drop-shadow-[0_0_50px_rgba(0,0,0,0.8)]"/>
      </div>
      <h1 className="absolute left-1/2 top-1/2 text-[5rem] tracking-[25px] text-white -translate-y-1/2 -translate-x-[380px]">
        POR
      </h1>
      <h1 className="absolute left-1/2 top-1/2 text-[5rem] tracking-[25px] text-white -translate-y-1/2 translate-x-[160px]">
        CHE
      </h1>
      <button className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[200px] bg-white px-8 py-4 font-semibold shadow-xl hover:bg-gray-200 transition cursor-pointer">
        EXPLORE MORE
      </button>
      <button className="absolute right-0 top-1/2 rotate-90 border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition cursor-pointer">
        PRINT
      </button>
      <button className="absolute left-0 top-[25%] -rotate-90 border border-[#232637] text-[#232637] px-8 py-3 hover:bg-[#09162c] hover:text-white transition cursor-pointer">
        CATALOG
      </button>
      <div className="absolute left-[12%] top-[32%] flex items-center gap-6 text-[#232637]">
        <span>Diesel</span>
        <div className="w-[100px] h-[1px] bg-[#232637]" />
      </div>
      <div className="absolute right-[12%] top-[32%] flex items-center gap-6 text-white">
        <div className="w-[100px] h-[1px] bg-white" />
        <span>Watches</span>
      </div>
      <div className="absolute left-[12%] bottom-[32%] flex items-center gap-6 text-[#232637]">
        <span>Tough</span>
        <div className="w-[100px] h-[1px] bg-[#232637]" />
      </div>
      <div className="absolute right-[12%] bottom-[32%] flex items-center gap-6 text-white">
        <div className="w-[100px] h-[1px] bg-white" />
        <span>Modern</span>
      </div>

    </div>
  );
}