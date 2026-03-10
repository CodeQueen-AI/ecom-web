"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

// Same products array (or a separate file se import kar lo)
const products = [
  { id: 1, name: "Black Leather", price: "$250", img: "/products/p1.jpg" },
  { id: 2, name: "Rose Gold", price: "$350", img: "/products/p2.jpg" },
  { id: 3, name: "White Dial", price: "$200", img: "/products/p3.jpg" },
  { id: 4, name: "Silver Chrono", price: "$450", img: "/products/p4.jpg" },
  { id: 5, name: "Rose Slim", price: "$350", img: "/products/p5.jpg" },
  { id: 6, name: "Black Steel", price: "$450", img: "/products/p6.jpg" },
  { id: 7, name: "Gold Bracelet", price: "$380", img: "/products/p7.jpg" },
  { id: 8, name: "Brown Leather", price: "$220", img: "/products/p8.jpg" },
];

export default function ProductDetail() {
  const params = useParams();
  const productId = Number(params.id); // dynamic id
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div className="text-center mt-20 text-3xl">Product not found!</div>;
  }

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-16 py-12 poppins">
      
      <h1 className="text-6xl font-bold mb-8 allura">{product.name}</h1>

      <div className="w-full max-w-md h-96 relative mb-6">
        <Image src={product.img} alt={product.name} fill className="object-contain" />
      </div>

      <span className="text-4xl font-serif mb-8">{product.price}</span>

      <button className="px-8 py-3 bg-gold text-black font-bold hover:bg-yellow-500 transition">
        Buy Now
      </button>

    </section>
  );
}