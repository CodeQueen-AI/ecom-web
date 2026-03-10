"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="w-full min-h-screen flex poppins">

      {/* Left Side Form */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-[70%]">

          <h1 className="text-4xl mb-10 font-semibold">
            Welcome Back
          </h1>

          {/* Email */}
          <div className="mb-8">
            <label className="text-sm">Email</label>
            <input
              type="email"
              className="w-full border-b border-black outline-none py-2"
            />
          </div>

          {/* Password */}
          <div className="mb-10 relative">
            <label className="text-sm">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full border-b border-black outline-none py-2 pr-8"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 bottom-3 cursor-pointer text-lg"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          {/* Button Center */}
          <div className="flex justify-center">
            <button className="w-48 bg-black text-white border border-white py-3 hover:bg-white hover:text-black hover:border-black transition cursor-pointer">
              Login
            </button>
          </div>

          {/* Signup Link */}
          <p className="text-sm mt-6 text-center">
            Don't have an account?{" "}
            <Link href="/signup" className="font-semibold underline">
              Sign Up
            </Link>
          </p>

        </div>
      </div>

      {/* Right Side Image */}
      <div className="w-1/2 relative">
        <Image
          src="/watch/w28.jpg"
          alt="login image"
          fill
          className="object-cover"
        />
      </div>

    </section>
  );
}