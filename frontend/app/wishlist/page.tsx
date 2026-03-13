"use client";
import Image from "next/image";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineCheckCircle, AiOutlineProduct } from "react-icons/ai";
import { useWishlist } from "../Context/wishlistcontext";
import { useCart } from "../Context/cartcontext";
import { useState } from "react";

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [toast, setToast] = useState("");

  const handleAddCart = (product) => {
    addToCart({...product, quantity: 1});
    setToast(`${product.name} Added To Cart!`);
    setTimeout(() => setToast(""), 2500);
  };

  const handleRemove = (id) => {
    removeFromWishlist(id);
    setToast(`Removed from Wishlist`);
    setTimeout(() => setToast(""), 2500);
  };

  return (
    <section className="w-full min-h-screen px-12 py-12 poppins relative">
      {toast && (
        <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white border border-gray-200 shadow-xl px-5 py-3 animate-slideIn z-50">
          <AiOutlineCheckCircle className="text-green-500 text-2xl" />
          <p className="text-sm">{toast}</p>
        </div>
      )}

      <h1 className="text-5xl font-extralight text-center mb-12 allura">My Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <div className="flex flex-col justify-center items-center py-40 gap-4">
          <AiOutlineProduct size={60} />
          <p className="text-xl font-medium">Your Wishlist is Empty</p>
        </div>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {wishlistItems.map((product) => (
            <div key={product.id} className="border p-5 hover:shadow-lg transition relative flex flex-col justify-between">
              <div className="relative h-64 w-full bg-gray-100 cursor-pointer overflow-hidden">
                <Link href={`/products/${product.id}`}>
                  <Image src={product.img} alt={product.name} fill className="object-contain" />
                </Link>

                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  <button onClick={() => handleRemove(product.id)} className="bg-white p-3 rounded-full shadow hover:bg-gray-200 transition cursor-pointer">
                    <FiX className="text-red-500 text-xl" />
                  </button>
                  <button onClick={() => handleAddCart(product)} className="bg-white p-3 rounded-full shadow hover:bg-gray-200 transition cursor-pointer">
                    <BsCart3 className="text-gray-800 text-xl" />
                  </button>
                </div>
              </div>

              <h3 className="text-lg mt-4 font-semibold">{product.name}</h3>
              <div className="mt-2 flex justify-between items-center">
                <Link href={`/products/${product.id}`}>
                  <button className="bg-black text-white px-6 py-2 border border-black hover:bg-white hover:text-black transition font-medium cursor-pointer">View</button>
                </Link>
                <p className="font-serif text-2xl">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {wishlistItems.length > 0 && (
        <div className="flex justify-end mt-8">
          <button onClick={clearWishlist} className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition font-medium">
            Clear Wishlist
          </button>
        </div>
      )}
    </section>
  );
}