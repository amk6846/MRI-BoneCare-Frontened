"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Testimonials array
const testimonials = [
  {
    name: "Dr. Moazzam Ali Sani",
    title: "Orthopedic Surgeon",
    feedback: "This AI-powered MRI analysis system is a game-changer for detecting bone tumors and infections early.",
    image: "/images/doctors/doc1.jpg",
    hospital: "Harvard Medical School",
  },
  {
    name: "Dr. Faisal Ishaq",
    title: "Radiologist",
    feedback: "I am impressed with the accuracy and efficiency of the AI model in segmentation and classification.",
    image: "/images/doctors/doc3.jpg",
    hospital: "Mayo Clinic",
  },
  {
    name: "Dr. Shoaib Hasan",
    title: "AI Researcher in Medical Imaging",
    feedback: "This deep learning model improves diagnostic confidence and speeds up medical decision-making.",
    image: "/images/doctors/doc4.jpg",
    hospital: "MIT AI Research Lab",
  },
  {
    name: "Dr. Emily Carter",
    title: "Neuroradiologist",
    feedback: "MRI Bone Care's AI-assisted detection has significantly improved diagnostic accuracy and patient outcomes in my practice.",
    image: "/images/doctors/doc5.jpg",
    hospital: "Johns Hopkins Hospital",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next set of testimonials (slide right)
  const goToNextTestimonial = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, testimonials.length - 3));
  };

  // Function to go to the previous set of testimonials (slide left)
  const goToPrevTestimonial = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">What Experts Say</h1>
          <p className="text-xl text-gray-600">Trusted feedback from leading medical professionals.</p>
        </div>

        {/* Testimonials section */}
        <div className="relative max-w-6xl mx-auto flex justify-between items-center">
          {/* Left Arrow */}
          <button onClick={goToPrevTestimonial} className="absolute left-0 z-10 p-2 bg-gray-800 text-white rounded-full shadow-md">
            &lt;
          </button>

          {/* Testimonials */}
          <div className="relative w-full overflow-hidden">
            <motion.div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
              {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
                  exit={{ opacity: 0, x: -100, transition: { duration: 0.6, ease: "easeInOut" } }}
                  className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center w-1/3"
                >
                  <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} className="rounded-full mb-4 border-2 border-blue-500 shadow-md"/>
                  <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600 italic">{testimonial.title} - {testimonial.hospital}</p>
                  <p className="text-gray-700 mt-4">&quot;{testimonial.feedback}&quot;</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button onClick={goToNextTestimonial} className="absolute right-0 z-10 p-2 bg-gray-800 text-white rounded-full shadow-md">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
