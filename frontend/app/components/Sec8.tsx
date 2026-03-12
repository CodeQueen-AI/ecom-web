"use client";

import Image from "next/image";
import { useCart } from "../Context/cartcontext";

export default function WatchSection() {

  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "Tatum", price: 131596.80, img: "/watch/w4.webp" },
    { id: 2, name: "Theo", price: 43078.77, img: "/watch/w5.webp" },
    { id: 3, name: "Xavier", price: 88321.32, img: "/watch/w6.webp" },
    { id: 4, name: "Pro-mariner", price: 302731.64, img: "/watch/w7.webp" },
  ];

  return (
    <section className="py-12 poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6">

        {/* Left Image */}
        <div className="relative">
          <Image
            src="/Imges/Img4.jpg"
            alt="watch"
            width={700}
            height={600}
            className="w-full object-cover"
          />

          <button className="absolute bottom-6 left-1/2 -translate-x-1/2 border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition">
            The Aviator Watch
          </button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 gap-10 text-center">
          {products.map((item) => (
            <div key={item.id}>

              <Image
                src={item.img}
                alt={item.name}
                width={150}
                height={150}
                className="mx-auto"
              />

              <h3 className="mt-3 text-sm font-medium">{item.name}</h3>

              <p className="text-xs text-gray-600 mt-1">
                Rs.{item.price.toLocaleString()}
              </p>

              <button
                onClick={() =>
                  addToCart({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.img,
                    quantity: 1,
                  })
                }
                className="mt-2 border border-black px-4 py-1 text-xs hover:bg-black hover:text-white transition cursor-pointer"
              >
                Add To Cart
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}