// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { FiX } from "react-icons/fi";
// import { BsCart3 } from "react-icons/bs";
// import { AiOutlineCheckCircle, AiOutlineProduct } from "react-icons/ai";
// import { useWishlist } from "../context/wishlistcontext";
// import { useCart } from "../context/cartcontext";
// import { useState } from "react";

// export default function WishlistPage() {
//   const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
//   const { addToCart } = useCart();
//   const [toast, setToast] = useState("");

//   const handleAddCart = (product) => {
//     addToCart({...product, quantity: 1});
//     setToast(`${product.name} Added To Cart!`);
//     setTimeout(() => setToast(""), 2500);
//   };

//   const handleRemove = (id) => {
//     removeFromWishlist(id);
//     setToast(`Removed from Wishlist`);
//     setTimeout(() => setToast(""), 2500);
//   };

//   return (
//     <section className="w-full min-h-screen px-12 py-12 poppins relative">
//       {toast && (
//         <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white border border-gray-200 shadow-xl px-5 py-3 animate-slideIn z-50">
//           <AiOutlineCheckCircle className="text-green-500 text-2xl" />
//           <p className="text-sm">{toast}</p>
//         </div>
//       )}

//       <h1 className="text-5xl font-extralight text-center mb-12 allura">My Wishlist</h1>

//       {wishlistItems.length === 0 ? (
//         <div className="flex flex-col justify-center items-center py-40 gap-4">
//           <AiOutlineProduct size={60} />
//           <p className="text-xl font-medium">Your Wishlist is Empty</p>
//         </div>
//       ) : (
//         <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           {wishlistItems.map((product) => (
//             <div key={product.id} className="border p-5 hover:shadow-lg transition relative flex flex-col justify-between">
//               <div className="relative h-64 w-full bg-gray-100 cursor-pointer overflow-hidden">
//                 <Link href={`/products/${product.id}`}>
//                   <Image src={product.img} alt={product.name} fill className="object-contain" />
//                 </Link>

//                 <div className="absolute top-2 right-2 flex flex-col gap-2">
//                   <button onClick={() => handleRemove(product.id)} className="bg-white p-3 rounded-full shadow hover:bg-gray-200 transition cursor-pointer">
//                     <FiX className="text-red-500 text-xl" />
//                   </button>
//                   <button onClick={() => handleAddCart(product)} className="bg-white p-3 rounded-full shadow hover:bg-gray-200 transition cursor-pointer">
//                     <BsCart3 className="text-gray-800 text-xl" />
//                   </button>
//                 </div>
//               </div>

//               <h3 className="text-lg mt-4 font-semibold">{product.name}</h3>
//               <div className="mt-2 flex justify-between items-center">
//                 <Link href={`/products/${product.id}`}>
//                   <button className="bg-black text-white px-6 py-2 border border-black hover:bg-white hover:text-black transition font-medium cursor-pointer">View</button>
//                 </Link>
//                 <p className="font-serif text-2xl">${product.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {wishlistItems.length > 0 && (
//         <div className="flex justify-end mt-8">
//           <button onClick={clearWishlist} className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition font-medium">
//             Clear Wishlist
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }












// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { FiX } from "react-icons/fi";
// import { BsCart3 } from "react-icons/bs";
// import { AiOutlineCheckCircle, AiOutlineHeart } from "react-icons/ai";
// import { useWishlist } from "../context/wishlistcontext";
// import { useCart } from "../context/cartcontext";
// import { useState } from "react";

// export default function WishlistPage() {
//   const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
//   const { addToCart } = useCart();
//   const [toast, setToast] = useState("");

//   const handleAddCart = (product) => {
//     addToCart({ ...product, quantity: 1 });
//     setToast(`${product.name} Added To Cart!`);
//     setTimeout(() => setToast(""), 2500);
//   };

//   const handleRemove = (id) => {
//     removeFromWishlist(id);
//     setToast(`Removed from Wishlist`);
//     setTimeout(() => setToast(""), 2500);
//   };

//   return (
//     <section className="w-full min-h-screen px-12 py-12 poppins relative">
//       {/* Toast */}
//       {toast && (
//         <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white border border-gray-200 shadow-xl px-5 py-3 animate-slideIn z-50">
//           <AiOutlineCheckCircle className="text-green-500 text-2xl" />
//           <p className="text-sm">{toast}</p>
//         </div>
//       )}

//       <h1 className="text-5xl font-extralight text-center mb-12 allura flex items-center justify-center gap-2">
//         <AiOutlineHeart className="text-red-500 text-3xl" /> My Wishlist
//       </h1>

//       {wishlistItems.length === 0 ? (
//         <div className="flex flex-col justify-center items-center py-40 gap-4 text-center">
//           <AiOutlineHeart size={60} className="text-gray-300" />
//           <p className="text-xl font-medium">No Wishlist Found</p>
//           <p className="text-gray-500">You haven’t added any products to your wishlist yet.</p>
//           <Link href="/">
//             <button className="mt-4 px-6 py-3 bg-black text-white hover:bg-white hover:text-black border border-black transition">
//               Browse Products
//             </button>
//           </Link>
//         </div>
//       ) : (
//         <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           {wishlistItems.map((product) => (
//             <div key={product.id} className="border p-5 hover:shadow-lg transition relative flex flex-col justify-between">
//               {/* Image */}
//               <div className="relative h-64 w-full bg-gray-100 cursor-pointer overflow-hidden">
//                 <Link href={`/products/${product.id}`}>
//                   <Image src={product.img} alt={product.name} fill className="object-contain" />
//                 </Link>

//                 {/* Add to Cart & Remove */}
//                 <div className="absolute top-2 right-2 flex flex-col gap-2">
//                   <button
//                     onClick={() => handleRemove(product.id)}
//                     className="bg-white p-3 rounded-full shadow hover:bg-gray-200 transition cursor-pointer"
//                   >
//                     <FiX className="text-red-500 text-xl" />
//                   </button>

//                   <button
//                     onClick={() => handleAddCart(product)}
//                     className="bg-white p-3 rounded-full shadow hover:bg-gray-200 transition cursor-pointer"
//                   >
//                     <BsCart3 className="text-gray-800 text-xl" />
//                   </button>
//                 </div>
//               </div>

//               {/* Product Name */}
//               <h3 className="text-lg mt-4 font-semibold">{product.name}</h3>

//               {/* Price */}
//               <p className="font-serif text-2xl mt-2">${product.price}</p>

//               {/* Add to Cart button */}
//               <button
//                 onClick={() => handleAddCart(product)}
//                 className="mt-4 px-6 py-2 bg-black text-white hover:bg-white hover:text-black border border-black transition font-medium"
//               >
//                 Add to Cart
//               </button>

//               {/* Delete icon at bottom */}
//               <div className="flex justify-end mt-2">
//                 <button
//                   onClick={() => handleRemove(product.id)}
//                   className="text-red-500 hover:text-red-600 transition"
//                 >
//                   <FiX size={24} />
//                 </button>
//               </div>

//             </div>
//           ))}
//         </div>
//       )}

//       {/* Clear Wishlist button */}
//       {wishlistItems.length > 0 && (
//         <div className="flex justify-end mt-8">
//           <button
//             onClick={clearWishlist}
//             className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition font-medium"
//           >
//             Clear Wishlist
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }












"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useWishlist } from "../context/wishlistcontext";
import { useCart } from "../context/cartcontext";

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
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
          <h1 className="text-6xl font-extralight allura text-center mb-10">
            My Wishlist
          </h1>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* LEFT SIDE - Table of Wishlist */}
            <div className="lg:col-span-2 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="border-b border-gray-300">
                  <tr className="text-left text-sm uppercase">
                    <th className="pb-4">Product</th>
                    <th className="pb-4">Price</th>
                    <th className="pb-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlistItems.map((item) => (
                    <tr key={item.id} className="border-b border-gray-300">
                      <td className="py-6 flex items-center gap-4">
                        <Image
                          src={item.img}
                          alt={item.name}
                          width={70}
                          height={70}
                        />
                        <span className="font-medium">{item.name}</span>
                      </td>
                      <td className="text-gray-700">${item.price}</td>
                      <td>
                        <div className="flex gap-4">
                          <button
                            onClick={() => handleAddCart(item)}
                            className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black border border-black transition"
                          >
                            Add to Cart
                          </button>
                          <button
                            onClick={() => handleRemove(item.id)}
                            className="text-red-500 hover:text-red-600 transition flex items-center gap-1"
                          >
                            <FaTrash /> Remove
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* RIGHT SIDE - Optional Summary / Actions */}
            <div className="bg-[#09162c] text-white p-8 h-fit shadow-sm">
              <h2 className="text-3xl font-extralight font-serif mb-6 text-center">
                Wishlist Actions
              </h2>
              <div className="flex flex-col gap-4">
                <button
                  onClick={clearWishlist}
                  className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition font-medium"
                >
                  Clear Wishlist
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}