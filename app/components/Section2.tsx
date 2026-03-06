import Image from "next/image";
import { Poppins, Allura } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
});

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
});

export default function RacingSection() {
  return (
    <section className={`w-full ${poppins.className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

        {/* Left Content */}
        <div className="flex flex-col justify-center px-12 lg:px-20">

          <h2 className="text-4xl lg:text-5xl font-semibold leading-tight text-gray-900">
            INSPIRED BY  <br />
            <span className={`${allura.className} text-7xl font-normal`}>Racing's Golden</span> <br />
            ERA
          </h2>

          <p className="mt-6 text-gray-600 max-w-lg leading-relaxed">
            Inspired by motorsport’s golden era, the new American Classic
            Chronograph H brings tactile mechanics and bold color together in
            one dynamic reference
          </p>

          <button className="mt-8 w-40 border border-gray-400 font-semibold py-3 text-sm tracking-wider hover:bg-black hover:text-white transition cursor-pointer">
            DISCOVER
          </button>

        </div>

        {/* Right Image */}
        <div className="relative h-[500px] lg:h-auto">
          <Image
            src="/Banner1.webp"
            alt="watch"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}