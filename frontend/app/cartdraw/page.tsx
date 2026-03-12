"use client";

import Image from "next/image";
import { FiX } from "react-icons/fi";
import { useCart } from "../Context/cartcontext";

export default function CartDrawer({ isOpen, setIsOpen }) {
  const { cartItems, removeFromCart } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      {/* overlay */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* cart panel */}
      <div
        className={`absolute right-0 top-0 h-full w-[420px] bg-white shadow-xl flex flex-col p-8 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold">Shopping Cart</h2>

          <button onClick={() => setIsOpen(false)}>
            <FiX size={24} />
          </button>
        </div>

        <hr className="my-6" />

        {/* Products */}
        <div className="flex-1 overflow-y-auto space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center gap-4"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-xl object-cover"
                />

                <div className="flex flex-col">
                  <p className="text-lg font-medium">{item.name}</p>

                  <p className="text-gray-600 text-sm">
                    {item.quantity} ×{" "}
                    <span className="text-yellow-600 font-semibold">
                      ${item.price}
                    </span>
                  </p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
              >
                <FiX size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Subtotal */}
        <div className="mt-8">
          <div className="flex justify-between text-lg font-medium">
            <span>Subtotal</span>

            <span className="text-yellow-600 font-semibold">
              ${subtotal}
            </span>
          </div>

          <hr className="my-6" />

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button className="w-full border rounded-full py-3 font-semibold hover:bg-black hover:text-white transition">
              Cart
            </button>

            <button className="w-full border rounded-full py-3 font-semibold hover:bg-black hover:text-white transition">
              Checkout
            </button>

            <button className="w-full border rounded-full py-3 font-semibold hover:bg-black hover:text-white transition">
              Comparison
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}