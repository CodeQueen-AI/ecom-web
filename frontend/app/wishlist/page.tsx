"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiFillHeart } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { useWishlist } from "../context/wishlistcontext";
import { useCart } from "../context/cartcontext";

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [toast, setToast] = useState("");
  const [type, setType] = useState("success");

  const handleAddCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    setToast(`${product.name} Added To Cart!`);
    setType("success");
    setTimeout(() => setToast(""), 2500);
  };

  const handleRemove = (id) => {
    removeFromWishlist(id);
    setToast("Removed from Wishlist");
    setType("reject");
    setTimeout(() => setToast(""), 2500);
  };

  return (
    <div className="container mx-auto px-6 py-10 poppins">
      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white border border-gray-200 shadow-xl px-5 py-3 z-50">
          {type === "success" ? (
            <AiOutlineCheckCircle className="text-green-500 text-2xl" />
          ) : (
            <AiOutlineCloseCircle className="text-red-500 text-2xl" />
          )}
          <p className="text-sm">{toast}</p>
        </div>
      )}

      {/* Empty Wishlist */}
      {wishlistItems.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-40">
          <AiOutlineCloseCircle size={60} className="text-gray-300" />
          <p className="text-xl text-center">Your Wishlist is Empty!</p>
          <Link href="/">
            <button className="mt-4 px-6 py-3 bg-black text-white border border-black hover:bg-white hover:text-black transition">
              Browse Products
            </button>
          </Link>
        </div>
      ) : (
        <>
          {/* Heading with pink heart */}
          <h1 className="text-6xl font-extralight allura text-center mb-10 flex items-center justify-center gap-3">
            <AiFillHeart className="text-pink-500 text-4xl" />
            My Wishlist
          </h1>

          {/* Table of Wishlist */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="border-b border-gray-300">
                <tr className="text-left text-sm uppercase">
                  <th className="pb-4">Items</th>
                </tr>
              </thead>
              <tbody>
                {wishlistItems.map((item) => (
                  <tr key={item.id} className="border-b border-gray-300">
                    <td className="py-6">
                      <div className="flex flex-col items-start gap-3">
                        {/* Image */}
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={120}
                          height={120}
                          className="object-contain"
                        />
                        {/* Name */}
                        <span className="font-medium text-lg">{item.name}</span>
                        {/* Price */}
                        <span className="text-gray-700 text-base">${item.price}</span>
                        {/* Add to Cart button */}
                        <button
                          onClick={() => handleAddCart(item)}
                          className="px-4 py-1 bg-black text-white text-sm rounded hover:bg-white hover:text-black border border-black transition"
                        >
                          Add to Cart
                        </button>
                        {/* Remove icon */}
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-pink-500 hover:text-pink-600 transition mt-1"
                        >
                          <FaTrash size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}