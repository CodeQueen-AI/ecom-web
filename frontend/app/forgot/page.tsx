"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      // Call your backend endpoint for forgot password
      const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) setError(data.msg || data.error);
      else setMessage("OTP sent to your email! Please check your inbox.");
    } catch {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <section className="w-full min-h-screen flex poppins">
      <div className="w-1/2 flex flex-col justify-center bg-white px-16">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-3xl mb-8 font-semibold text-center">Forgot Password</h1>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {message && <p className="text-green-500 text-center mb-4">{message}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm block mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-gray-400 outline-none py-1 px-2"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-36 bg-black text-white border border-white py-2 hover:bg-white hover:text-black hover:border-black transition cursor-pointer"
              >
                Send OTP
              </button>
            </div>
          </form>

          <p className="text-sm mt-4 text-center">
            Remembered your password?{" "}
            <Link href="/login" className="font-semibold underline">
              Login
            </Link>
          </p>
        </div>
      </div>

      <div className="w-1/2 relative hidden md:block">
        <Image src="/watch/w29.jpg" alt="forgot password image" fill className="object-cover" />
      </div>
    </section>
  );
}