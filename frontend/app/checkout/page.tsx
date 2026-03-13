"use client";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "../Context/cartcontext";

export default function CheckoutPage() {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePayNow = async () => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (err) {
      console.error("Payment error:", err);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 poppins">
      <h1 className="text-4xl font-semibold mb-8 text-center">Checkout</h1>

      {/* Product Summary */}
      <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
        <div className="grid grid-cols-2 border-b pb-3 font-semibold text-gray-700">
          <span>Product</span>
          <span className="text-right">Subtotal</span>
        </div>

        {cartItems.map((item) => (
          <div key={item.id} className="grid grid-cols-2 py-3 border-b border-gray-200 items-center">
            <div className="flex items-center gap-3">
              <Image src={item.image} alt={item.name} width={50} height={50} className="rounded" />
              <span>
                {item.name} <strong>X {item.quantity}</strong>
              </span>
            </div>
            <div className="text-right">
              ${item.price} (${item.price} x {item.quantity})
            </div>
          </div>
        ))}

        {/* Total */}
        <div className="grid grid-cols-2 py-3 font-semibold text-xl mt-4">
          <span>Total</span>
          <span className="text-right text-yellow-700">${subtotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Notice / Privacy */}
      <p className="text-gray-600 mb-6 text-sm">
        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{" "}
        <span className="font-semibold">privacy policy</span>.
      </p>

      {/* Pay Now Button */}
      <div className="flex justify-center">
        <button
          onClick={handlePayNow}
          className="bg-yellow-700 text-white font-semibold px-12 py-4 rounded-lg hover:bg-yellow-800 transition"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}