"use client";
import { BsCart3 } from "react-icons/bs";

export default function Page() {
  return (
    <>
      {/* Google Font */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');
        `}
      </style>

      <nav className="w-full flex items-center justify-between px-10 py-6 relative">

        {/* Background split */}
        <div className="absolute inset-0 flex -z-10">
          <div className="w-1/2 bg-[#0b1d3a]"></div>
          <div className="w-1/2 bg-white"></div>
        </div>

        {/* Logo */}
        <h1
          className="text-6xl text-white tracking-tight"
          style={{ fontFamily: "'Allura', cursive" }}
        >
          Omega
        </h1>

        {/* Menu */}
        <div className="flex items-center gap-8 text-black font-medium">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Watch</a>
          <a href="#" className="hover:underline">Contact</a>

          <BsCart3 size={24} className="cursor-pointer" />
        </div>

      </nav>
    </>
  );
}