import Image from "next/image";
export default function LuxuryWatch() {
  return (
    <section className="poppins w-full bg-[#f5f5f5] py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6">
        <div className="flex justify-center">
          <Image
            src="/omegablue.png"
            alt="Omega Watch"
            width={500}
            height={600}
            className="object-contain"/>
        </div>
        <div className="space-y-6">
          <p className="allura text-[#0f2747] text-3xl">
            New
          </p>
          <h1 className="text-6xl font-bold text-black">
            Pure Luxury
          </h1>
          <h2 className="text-3xl font-semibold text-black">
            Blue Omega SA
          </h2>
          <p className="text-2xl text-black">$3,879</p>
          <div className="flex gap-4 pt-4">
            <button className="px-8 py-4 bg-gray-200 text-black text-lg font-medium">
              Discover
            </button>
            <button className="px-8 py-4 bg-[#0f2747] text-white text-lg font-medium">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}