"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagramSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const smoothScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Left Section: Logo and Description */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
            <Image
              src="/images/Logo.jpg"
              alt="MRI Bone Care Logo"
              width={80}
              height={24}
              className="rounded-full"
            />
            <p className="mt-4 text-gray-400 max-w-xs">
              Revolutionizing bone health diagnostics with AI-driven MRI analysis for faster, more accurate detection and improved patient care.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/3 mt-6 md:mt-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              <li><button onClick={() => smoothScroll("Home")} className="text-gray-400 hover:text-white text-lg">Home</button></li>
              <li><Link href="/tools" className="text-gray-400 hover:text-white text-lg">Tools</Link></li>
              <li><Link href="/Reports" className="text-gray-400 hover:text-white text-lg">Reports</Link></li>
              <li><Link href="/Contact" className="text-gray-400 hover:text-white text-lg">Contact Us</Link></li>
              <li><Link href="/About" className="text-gray-400 hover:text-white text-lg">About Us</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 mt-6 md:mt-0">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-6 justify-center md:justify-start">
              <Link href="https://www.facebook.com" target="_blank" className="text-gray-400 hover:text-white">
                <FaFacebook size={30} />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-white">
                <FaTwitter size={30} />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank" className="text-gray-400 hover:text-white">
                <FaLinkedin size={30} />
              </Link>
              <Link href="https://www.instagram.com" target="_blank" className="text-gray-400 hover:text-white">
                <FaInstagramSquare size={30} />
              </Link>
              <Link href="https://www.youtube.com" target="_blank" className="text-gray-400 hover:text-white">
                <FaYoutube size={30} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8 mt-6 text-center">
          <p className="text-gray-400 text-sm pt-5">
            &copy; {new Date().getFullYear()} MRI Bone Care. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
