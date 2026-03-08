"use client";
import { BsCart3 } from "react-icons/bs";

export default function Page() {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-6 relative">

      {/* Background split */}
      <div className="absolute inset-0 flex -z-10">
        <div className="w-1/2 bg-[#09162c]"></div>
        <div className="w-1/2 bg-white"></div>
      </div>

      {/* Logo */}
      <h1 className="text-5xl text-white tracking-tight allura">
        Omega
      </h1>

      {/* Menu */}
      <div className="flex items-center gap-8 text-black font-medium poppins">

        {/* Nav Link */}
        <a className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
          HOME
        </a>

        <a className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
          COLLECTIONS
        </a>

        <a className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
          SERVICES
        </a>

        <a className="relative mr-10 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
          CONTACT
        </a>

        <BsCart3 size={24} className="cursor-pointer" />
      </div>
    </nav>
  );
}