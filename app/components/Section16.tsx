import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
});

export default function OurStory() {
  return (
    <section className={`w-full bg-[#f3f3f3] py-20 ${poppins.className}`}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16 px-6 relative">

        {/* Left Side */}
        <div className="relative flex justify-center">

          {/* Orange background shape */}
          <div className="absolute -bottom-20 -left-20 w-[300px] h-[250px] bg-[#f3a85b] -z-10"></div>

          {/* Watch Image */}
          <Image
            src="/watch2.png"
            alt="watch"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">

          <div className="flex items-center gap-3">
            <span className="w-12 h-[2px] bg-[#f3a85b]"></span>
            <p className="text-gray-600 tracking-widest uppercase">
              Our Story
            </p>
          </div>

          <h2 className="text-5xl font-semibold text-gray-800 leading-tight">
            Inspirational Watch Of This Year
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
            Each timepiece featured in this collection embodies the pinnacle
            of horological artistry, blending cutting-edge design with
            unparalleled functionality.
          </p>

          <button className="bg-[#2f2b2b] text-white px-8 py-4 tracking-wider hover:bg-black transition">
            DISCOVER
          </button>

        </div>
      </div>
    </section>
  );
}