import React from "react";
import Navbar from "../components/Navbar";
import { FileUploadDemo } from "../components/File-Up";
import { BackgroundBeams } from "../components/ui/background-beams";
import WhyChooseMri from "../components/WhyChooseMri";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";

const Page = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center">
        {/* Background Beams (Positioned Behind) */}
        <div className="absolute inset-0 -z-10  bg-gray-900">
          <BackgroundBeams />
        </div>

        {/* Left Section - Image & Heading */}
        <div id="tool" className="w-full md:w-1/2 flex flex-col items-center justify-center text-center px-4 py-10 md:py-0">
          <img
            src="images/Desease/Bone.jpg"
            alt="Bone Scan"
            className="w-3/5 sm:w-2/5 rounded-2xl"
          />
          <h1 className="text-white  font-sans font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl mt-4">
            Upload MRI <br /> Bone Scan
          </h1>
          <h3 className="text-blue-600 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
            100% Automatically and Free
          </h3>
        </div>

        {/* Right Section - File Upload */}
        <div className="w-full md:w-6/12 flex items-center justify-center px-4 py-10 md:py-0">
          <FileUploadDemo />
        </div>
      </div>

      {/* hr between two sections */}
      <div className="border-t border-gray-700 text-center"></div>

      {/* Why Choose MRI Section */}
      <div className="w-full py-10 bg-gray-900">
        <WhyChooseMri />
      </div>

      {/* How it Works Section */}
      <div>
        <HowItWorks />
      </div>

      {/* Call to Action Component */}
      <div>
        <CTA />
      </div>
    </>
  );
};

export default Page;
