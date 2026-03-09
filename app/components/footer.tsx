"use client";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoArrowForward } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f2f2f2] py-16 px-16">
      <div className="grid grid-cols-4 gap-16">

        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-semibold mb-6">Let’s get in touch</h2>

          <p className="text-gray-500 mb-6 leading-relaxed">
            Sign up for our newsletter and receive <br />
            latest updates
          </p>

          {/* Email Box */}
          <div className="flex items-center bg-white rounded-lg px-4 py-3 w-[320px]">
            <HiOutlineMail className="text-gray-400 text-xl mr-3" />
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 outline-none text-gray-500"
            />
            <IoArrowForward className="text-gray-500 text-xl cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Quick Links</h3>

          <ul className="space-y-4 text-gray-500">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">Shop</li>
            <li className="hover:text-black cursor-pointer">Smart Watch</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Information</h3>

          <ul className="space-y-4 text-gray-500">
            <li className="hover:text-black cursor-pointer">Terms of Service</li>
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
            <li className="hover:text-black cursor-pointer">Refund Policy</li>
            <li className="hover:text-black cursor-pointer">Shipping Policy</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Our store</h3>

          <div className="flex gap-4 flex-wrap">

            <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition">
              <FaFacebookF />
            </div>

            <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition">
              <FaInstagram />
            </div>

            <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition">
              <FaTwitter />
            </div>

            <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition">
              <FaYoutube />
            </div>

            <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition">
              <FaLinkedinIn />
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}