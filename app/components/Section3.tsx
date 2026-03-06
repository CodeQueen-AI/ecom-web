import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function DiscoverSection() {

  const items = [
    { title: "FOR MEN", img: "/D1.avif" },
    { title: "MECHANICAL", img: "/D2.avif" },
    { title: "PILOT", img: "/D3.avif" },
    { title: "FOR WOMEN", img: "/D4.avif" },
    { title: "GIFT IDEAS", img: "/D5.webp" },
    { title: "WHITE", img: "/D6.avif" },
  ];

  return (
    <section className={`py-16 bg-gray-100 ${poppins.className}`}>
      
      {/* Heading */}
      <h2 className="text-center text-2xl tracking-[0.3em] mb-12">
        DISCOVER
      </h2>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

        {items.map((item, index) => (
          <div key={index} className="relative h-[350px] overflow-hidden group cursor-pointer">

            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Text */}
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <h3 className="text-white font-semibold tracking-widest text-lg">
                {item.title}
              </h3>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}