"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiFilter } from "react-icons/fi";

const products = [
  { id: 1, name: "Black Leather", price: "$250", img: "/products/p1.jpg" },
  { id: 2, name: "Rose Gold", price: "$350", img: "/products/p2.jpg" },
  { id: 3, name: "White Dial", price: "$200", img: "/products/p3.jpg" },
  { id: 4, name: "Silver Chrono", price: "$450", img: "/products/p4.jpg" },
  { id: 5, name: "Rose Slim", price: "$350", img: "/products/p5.jpg" },
  { id: 6, name: "Black Steel", price: "$450", img: "/products/p6.jpg" },
];

export default function ProductsPage() {

  const [openFilter, setOpenFilter] = useState(false);

  return (
    <section className="w-full min-h-screen p-10 poppins">

      {/* Filter Button */}
      <div
        onClick={() => setOpenFilter(!openFilter)}
        className="flex items-center gap-2 cursor-pointer mb-6"
      >
        <FiFilter size={22} />
        <span className="text-lg font-semibold">Filter</span>
      </div>

      {/* Layout */}
      <div className="flex">

        {/* Sidebar */}
        {openFilter && (
          <div className="w-1/4 pr-8 border-r border-gray-300">

            <h2 className="text-2xl font-semibold mb-6">Filter</h2>

            {/* Category */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Category</h3>
              <select className="border p-2 w-full">
                <option>All Watches</option>
                <option>Luxury</option>
                <option>Classic</option>
                <option>Sport</option>
              </select>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Price</h3>

              <input
                type="range"
                min="100"
                max="500"
                className="w-full"
              />

              <div className="flex justify-between text-sm mt-2 text-gray-500">
                <span>$100</span>
                <span>$500</span>
              </div>
            </div>

            {/* Color */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Color</h3>

              <label className="block"><input type="checkbox" className="mr-2"/>Black</label>
              <label className="block"><input type="checkbox" className="mr-2"/>Silver</label>
              <label className="block"><input type="checkbox" className="mr-2"/>Gold</label>
            </div>

            {/* Gender */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Gender</h3>

              <label className="block"><input type="checkbox" className="mr-2"/>Men</label>
              <label className="block"><input type="checkbox" className="mr-2"/>Women</label>
              <label className="block"><input type="checkbox" className="mr-2"/>Unisex</label>
            </div>

            {/* Discount */}
            <div>
              <h3 className="font-semibold mb-3">Discount</h3>

              <label className="block"><input type="checkbox" className="mr-2"/>10% Off</label>
              <label className="block"><input type="checkbox" className="mr-2"/>20% Off</label>
              <label className="block"><input type="checkbox" className="mr-2"/>30% Off</label>
            </div>

          </div>
        )}

        {/* Products */}
        <div className={`${openFilter ? "w-3/4 pl-10" : "w-full"} grid grid-cols-3 gap-8`}>

          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>

              <div className="border p-4 cursor-pointer hover:shadow-lg transition">

                <div className="relative h-60 w-full">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-xl mt-4 font-semibold">
                  {product.name}
                </h3>

                <p className="text-gray-600">{product.price}</p>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}