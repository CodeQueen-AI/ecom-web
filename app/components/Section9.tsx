import Image from "next/image";
import { Allura } from "next/font/google";

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
});

export default function ProductShowcase() {
  const products = [
    "/watch13.jpg",
    "/watch14.jpg",
    "/watch15.jpg",
    "/watch16.jpg",
    "/watch18.jpg",
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">

      {/* Top Banner */}
      <div className="p-6 text-center">

        {/* Heading */}
        <h1 className={`${allura.className} text-5xl md:text-6xl`}>
          Discover the Beauty of Timeless Luxury Watches
        </h1>

      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((img, i) => (
          <div
            key={i}
            className="relative w-full aspect-[4/3] overflow-hidden"
          >
            <Image
              src={img}
              alt="product"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

    </div>
  );
}