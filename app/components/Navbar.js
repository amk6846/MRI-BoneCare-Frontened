"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative w-full bg-white border-b-2 shadow-md">
      {/* Navbar Container */}
      <div className="flex justify-between items-center w-full h-16 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/images/Logo.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-lg font-semibold ml-2 cursor-pointer">
            Bone<span className="text-green-700">Care</span>
          </span>
        </div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <ul className="hidden sm:flex space-x-6">
          <li>
            <Link href="/" className="text-gray-900 hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/pages/Tools.js" className="text-gray-900 hover:text-blue-500">
              Tools
            </Link>
          </li>
          <li>
            <Link
              href="/solution"
              className="text-gray-900 hover:text-blue-500"
            >
              Solution
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className="text-gray-900 hover:text-blue-500"
            >
              About Us
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons (Hidden on Mobile) */}
        <div className="hidden sm:flex items-center space-x-4">
          <button className="px-4 py-2 text-blue-600 font-semibold border-2 border-blue-600 rounded-full hover:bg-blue-100">
            Log In
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700">
            Sign Up
          </button>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="sm:hidden text-3xl text-blue-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu (Sliding in Animation) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-90 z-50 flex flex-col items-center justify-center transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out text-center`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white text-3xl"
          onClick={toggleMenu}
        >
          ✖
        </button>

        {/* Mobile Menu Items */}
        <ul className="space-y-6 text-white text-xl">
          <li>
            <a href="#" className="hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Tools
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Solution
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              About Us
            </a>
          </li>
        </ul>

        {/* Mobile Buttons (Inside Menu) */}
        <div className="mt-6 flex flex-col space-y-4">
          <button className="px-6 py-2 text-blue-600 font-semibold border-2 border-blue-600 rounded-full bg-white hover:bg-blue-100">
            Log In
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
