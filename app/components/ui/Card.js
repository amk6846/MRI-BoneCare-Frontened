"use client";
import React from "react";

export function CardDemo() {
  const cardData = [
    {
      id: 1,
      image: "/images/aidetect.jpg", // Use local images inside public/images/
      heading: "AI-Powered Detection",
      description: "Detects and classifies bone tumors with deep learning."
    },
    {
      id: 2,
      image: "/images/Fast.jpg",
      heading: "Fast & Secure ",
      description: "Quick MRI analysis with strict data privacy."
    },
    {
      id: 3,
      image: "/images/accuracy.jpg",
      heading: "Medical-grade Accuracy ",
      description: "Research-backed, high-precision results."
    }
  ];

  return (
    <>
    {/* Head 3 */}
      <div className="bg-gray-100">
        <h1 className="text-4xl sm:text-4xl text-center pt-10 pb-6 font-bold text-gray-800">Features</h1>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-100 pb-8">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-6 border border-transparent dark:border-neutral-800 bg-cover bg-center transition-all duration-700 hover:scale-105"
          style={{ backgroundImage: `url(${card.image})` }} // ✅ Use inline style
        >
          <div className="text relative z-50 bg-black bg-opacity-50 p-6 rounded-md">
            <h1 className="font-bold text-xl md:text-3xl text-gray-50">
              {card.heading}
            </h1>
            <p className="font-normal text-base text-gray-50 my-4">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
