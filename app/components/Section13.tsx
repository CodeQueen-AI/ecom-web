"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function WatchHero() {
  return (
    <section className={`${poppins.className} relative w-full h-screen`}>

      {/* Background Image */}
      <Image
        src="/watch.jpg"
        alt="watch"
        fill
        priority
        className="object-cover"
      />

      {/* Mirror / Glass Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">

        <h2 className="text-5xl md:text-6xl font-semibold text-[#e6d3b3] mb-4">
          50% off
        </h2>

        <p className="text-3xl md:text-4xl font-semibold mb-8">
          Special Collection
        </p>

        <button className="bg-[#e6d3b3] text-black px-8 py-4 text-lg font-medium hover:bg-[#d8c29d] transition">
          Shop Now
        </button>

      </div>
    </section>
  );
}