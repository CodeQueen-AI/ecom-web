"use client";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
});

export default function Collection() {
  return (
    <section id="Collection" className={`${poppins.className} py-20`}>
      
      {/* Heading */}
      <h1 className="text-center text-4xl font-semibold mb-10">
        Collection
      </h1>

      {/* Grid Container */}
      <div className="w-[60%] h-[80vh] mx-auto grid grid-cols-3 gap-5 auto-rows-[15rem]">

        {/* Card 1 */}
        <div className="relative row-span-3 bg-[url('/rado-watch.jpg')] bg-cover bg-center group">
          <Overlay name="Rado"/>
        </div>

        {/* Card 2 */}
        <div className="relative bg-[url('/geneve-watch.jpg')] bg-cover bg-center group">
          <Overlay name="Geneve"/>
        </div>

        {/* Card 3 */}
        <div className="relative row-span-2 bg-[url('/tissot-watch.jpg')] bg-cover bg-center group">
          <Overlay name="Tissot"/>
        </div>

        {/* Card 4 */}
        <div className="relative bg-[url('/cartier-watch.jpg')] bg-cover bg-center group">
          <Overlay name="Cartier"/>
        </div>

        {/* Card 5 */}
        <div className="relative bg-[url('/omega-watch.jpg')] bg-cover bg-center group">
          <Overlay name="Omega"/>
        </div>

        {/* Card 6 */}
        <div className="relative bg-[url('/fitron-watch.jpg')] bg-cover bg-center group">
          <Overlay name="Fitron"/>
        </div>

      </div>
    </section>
  );
}

/* Overlay Component */
function Overlay({ name }: { name: string }) {
  return (
    <>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 scale-x-0 origin-right transition-transform duration-700 group-hover:scale-x-100 group-hover:origin-left"></div>

      {/* Label */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-700">
        <span className="bg-[#e8cfa8] px-6 py-3 uppercase text-sm font-medium text-white">
          {name}
        </span>
      </div>
    </>
  );
}