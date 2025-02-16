"use client";
import React from "react";

const HowItWorks = () => {
  const steps = [
    { image: "/images/Icons/upload1.png", title: "Upload MRI Scan", description: "Securely upload your MRI scan to the platform." },
    { image: "/images/Icons/enh.png", title: "Preprocessing & Enhancement", description: "The system enhances image quality for better AI analysis." },
    { image: "/images/Icons/seg.png", title: "AI-Powered Segmentation", description: "The deep learning model detects and segments bone structures." },
    { image: "/images/Icons/class.png", title: "Tumor & Infection Classification", description: "AI classifies the detected abnormalities." },
    { image: "/images/Icons/report.png", title: "Generate Instant Report", description: "A comprehensive diagnostic report is created." },
    { image: "/images/Icons/consult.png", title: "Download & Consult Doctor", description: "Download the results and consult with a specialist." },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl sm:text-4xl pb-10 font-bold text-gray-800">
          How It Works
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 cursor-pointer flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
            >
              {/* Use <img> instead of <Image> */}
              <img src={step.image} alt={step.title} width={60} height={60} className="mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
