"use client";

import Image from "next/image";

export default function SmartWatchSection() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-[#09162c]">
      
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 h-80 md:h-auto relative">
        <Image
          src="/watch9.jpg" // Replace with your watch image
          alt="Smart Watch"
          width={900}
          height={900}
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-8 md:px-16 py-12 text-white">
        {/* Smart Watch Title */}
        <h1 className="text-5xl md:text-6xl font-allura mb-6">
          Smart Watch
        </h1>

        {/* Paragraph */}
        <p className="text-lg md:text-xl mb-8 font-poppins">
          Experience the perfect blend of style and technology with this smart watch. 
          Track your fitness, stay connected, and elevate your everyday look effortlessly. 
          Designed for comfort and performance.
        </p>

        {/* Buy Button */}
        <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg text-lg font-poppins hover:bg-blue-600 hover:text-white hover:border-white transition">
          Buy
        </button>
      </div>
    </div>
  );
}