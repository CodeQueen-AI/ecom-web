// "use client";
// import { FaTrash } from "react-icons/fa";
// import { GoPlus } from "react-icons/go";
// import { FiMinus } from "react-icons/fi";
// import { useCart } from '../Context/cartcontext'
// import Image from "next/image";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// const Cart = () => {
//   const { cartItems, removeFromCart, updateItemQuantity } = useCart();
//   const handleCheckout = async () => {
//     try {
//       const res = await fetch("/api/checkout", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ cartItems }),
//       });

//       const data = await res.json();

//       if (data.id) {
//         const stripe = await stripePromise;
//         await stripe!.redirectToCheckout({ sessionId: data.id });
//       } else {
//         console.error("Stripe session not created", data.error);
//       }
//     } catch (err) {
//       console.error("Checkout error:", err);
//     }
//   };

//   return (
//     <div className="font-sans container mx-auto p-6">
//       <div className="p-10 text-left">
//         <div className="flex items-center">
//           <div className="w-2 h-12 bg-black rounded-full mr-4"></div>
//           <h1 className="text-6xl font-extralight allura" >Your Cart</h1>
//         </div>

//         {cartItems.length === 0 ? (
//           <p className="text-lg text-gray-600 mt-4">Your cart is empty</p>
//         ) : (
//           <div className="mt-8">
//             {/* Desktop Table */}
//             <div className="overflow-x-auto hidden sm:block">
//               <table className="min-w-full bg-white">
//                 <thead>
//                   <tr>
//                     <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase">ITEM</th>
//                     <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase">PRICE</th>
//                     <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase">QUANTITY</th>
//                     <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase">SUBTOTAL</th>
//                     <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase">REMOVE</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cartItems.map((item) => (
//                     <tr key={item.id}>
//                       <td className="py-2 px-4 border-b border-gray-300">
//                         <div className="flex items-center cursor-pointer">
//                           <Image src={item.image} alt={item.name} width={64} height={64} className="mr-4" />
//                           <div>
//                             <div className="text-sm">{item.name}</div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-2 px-4 border-b border-gray-300 text-sm">{item.price}</td>
//                       <td className="py-2 px-4 border-b border-gray-300 text-sm">
//                         <div className="flex items-center">
//                           <button
//                             onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
//                             className="text-gray-500 focus:outline-none cursor-pointer"
//                           >
//                             <FiMinus />
//                           </button>
//                           <span className="mx-2 text-gray-700">{item.quantity}</span>
//                           <button
//                             onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
//                             className="text-gray-500 focus:outline-none cursor-pointer"
//                           >
//                             <GoPlus />
//                           </button>
//                         </div>
//                       </td>
//                       <td className="py-2 px-4 border-b border-gray-300 text-sm">${(item.price * item.quantity).toFixed(2)}</td>
//                       <td className="py-2 px-4 border-b border-gray-300 text-sm">
//                         <button
//                           onClick={() => removeFromCart(item.id)}
//                           className="text-red-600 focus:outline-none cursor-pointer"
//                         >
//                           <FaTrash className="h-5 w-5" />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Checkout Button */}
//             <div className="flex justify-center mt-6">
//               <button
//                 onClick={handleCheckout}
//                 className="px-8 py-2 bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-600 hover:text-white hover:border-white transition-colors duration-300 w-40 cursor-pointer"
//               >
//                 Checkout
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;




"use client";

import { FaTrash } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useCart } from "../Context/cartcontext";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Cart = () => {
  const { cartItems, removeFromCart, updateItemQuantity } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });

      const data = await res.json();

      if (data.id) {
        const stripe = await stripePromise;
        await stripe!.redirectToCheckout({ sessionId: data.id });
      }
    } catch (err) {
      console.error("Checkout error:", err);
    }
  };

  return (
    <div className="container mx-auto px-6 py-10 poppins">

      {/* Title */}
      <div className="flex items-center mb-10">
        {/* <div className="w-2 h-12 bg-[#09162c] rounded-full mr-4"></div> */}
        <h1 className="text-6xl font-extralight allura text-center">Your Cart</h1>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT SIDE CART */}
          <div className="lg:col-span-2">

            <table className="w-full border-collapse">

              <thead className="border-b border-gray-300">
                <tr className="text-left text-sm uppercase ">
                  <th className="pb-4">Product</th>
                  <th className="pb-4">Price</th>
                  <th className="pb-4">Quantity</th>
                  <th className="pb-4">Subtotal</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>

                {cartItems.map((item) => (

                  <tr key={item.id} className="border-b border-gray-300">

                    {/* PRODUCT */}
                    <td className="py-6 flex items-center gap-4">

                      <Image
                        src={item.image}
                        alt={item.name}
                        width={70}
                        height={70}
                        className="rounded-lg"
                      />

                      <span className="font-medium">{item.name}</span>

                    </td>

                    {/* PRICE */}
                    <td className="text-gray-700">
                      ${item.price}
                    </td>

                    {/* QUANTITY */}
                    <td>

                      <div className="flex items-center border rounded-lg w-fit px-3 py-2 gap-4">

                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                          className="cursor-pointer"
                        >
                          <FiMinus />
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                          className="cursor-pointer"
                        >
                          <GoPlus />
                        </button>

                      </div>

                    </td>

                    {/* SUBTOTAL */}
                    <td className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>

                    {/* DELETE */}
                    <td>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 cursor-pointer"
                      >
                        <FaTrash />
                      </button>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>


          {/* RIGHT SIDE TOTAL BOX */}
          <div className="bg-[#09162c] border text-white p-8 h-fit shadow-sm">

            <h2 className="text-3xl font-extralight font-serif mb-6 text-center">
              Cart Totals
            </h2>

            <div className="space-y-4">

              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between">

                  <span>{item.name}</span>

                  <span>
                    ${item.price} x {item.quantity}
                  </span>

                </div>
              ))}

            </div>

            <div className="border-t my-6"></div>

            <div className="flex justify-between text-lg font-semibold">

              <span>Total</span>

              <span className="font-serif">
                ${subtotal}
              </span>

            </div>

            {/* <button
              onClick={handleCheckout}
              className="mt-6 px-6 py-3 bg-white text-black hover:bg-black hover:text-white hover:border-white transition cursor-pointer"
            >
              Checkout
            </button> */}

            <div className="flex justify-center">
  <button
    onClick={handleCheckout}
    className="mt-6 px-6 py-3 bg-white text-black border border-white hover:bg-black hover:text-white hover:border-white transition cursor-pointer"
  >
    Checkout
  </button>
</div>

          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;