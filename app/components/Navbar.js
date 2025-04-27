"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    router.push("/Login");
  };

  const handleLogin = () => {
    router.push("/Login");
  };

  return (
    <nav className="relative w-full bg-white border-b-2 shadow-md">
      {/* Navbar Container */}
      <div className="flex justify-between items-center w-full h-20 px-6">
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
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="text-gray-900 hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/tools" className="text-gray-900 hover:text-blue-500">
              MRI Scan
            </Link>
          </li>
          <li>
            <Link href="/Reports" className="text-gray-900 hover:text-blue-500">
              Results & Reports
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="text-gray-900 hover:text-blue-500">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/About" className="text-gray-900 hover:text-blue-500">
              About Us
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center space-x-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-8 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-400"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-full hover:bg-yellow-400"
            >
              Log In
            </button>
          )}
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-3xl text-blue-700 focus:outline-none"
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
            <Link href="/" className="hover:text-blue-400" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/tools" className="hover:text-blue-400" onClick={toggleMenu}>
              MRI Scan
            </Link>
          </li>
          <li>
            <Link href="/Reports" className="hover:text-blue-400" onClick={toggleMenu}>
              Results & Reports
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="hover:text-blue-400" onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/About" className="hover:text-blue-400" onClick={toggleMenu}>
              About Us
            </Link>
          </li>
        </ul>

        {/* Mobile Buttons (Inside Menu) */}
        <div className="mt-6 flex flex-col space-y-4">
          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                toggleMenu();
              }}
              className="px-8 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-400"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => {
                handleLogin();
                toggleMenu();
              }}
              className="px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-full hover:bg-yellow-400"
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
