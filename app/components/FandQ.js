"use client";
import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const FandQ = () => {
  const faqs = [
    { question: "What is a bone tumor?", answer: "A bone tumor is an abnormal growth of cells within a bone. It can be benign (non-cancerous) or malignant (cancerous), requiring medical evaluation." },
    { question: "What are the common symptoms of bone tumors?", answer: "Common symptoms include bone pain, swelling, fractures, and reduced mobility. Early diagnosis is crucial for effective treatment." },
    { question: "How are bone tumors diagnosed?", answer: "Bone tumors are diagnosed using imaging techniques like X-rays, MRI, CT scans, and biopsies for accurate identification." },
    { question: "Are all bone tumors cancerous?", answer: "No, many bone tumors are benign and do not spread. However, malignant tumors can be cancerous and require medical attention." },
    { question: "What treatment options are available for bone tumors?", answer: "Treatment depends on the type of tumor and may include surgery, radiation therapy, chemotherapy, or targeted therapy." },
    { question: "What machine learning techniques are used in MRI Bone Care?", answer: "The system employs convolutional neural networks (CNNs), U-Net for segmentation, and ensemble learning for classification."},
    { question: "How accurate is AI in detecting bone infections?", answer: "AI achieves high accuracy by leveraging multi-parametric MRI data and continuous model training with diverse datasets."},
    { question: "Is patient data secure when uploading MRI scans?", answer: "Yes, all MRI scans are encrypted and processed in compliance with HIPAA and GDPR standards to ensure patient data privacy."}
  ];

  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleVisibility = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-[110vh] bg-gray-100 py-4"> {/* Ensures full width gray background */}
      <div className="max-w-6xl mx-auto px-4"> {/* Centers content */}
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center pb-8">
          Frequently Asked Questions
        </h2>

        {/* Main Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Left: Image */}
          <div className="md:w-1/2 w-full flex justify-center items-center"> {/* Vertically centers image */}
            <img
              src="/images/Desease/bt4.jpg"
              alt="Bone Tumor"
              className="rounded-2xl w-3/5 sm:w-2/5 md:w-2/3 h-auto mt-12"
            />
          </div>

          {/* Right: FAQ Section */}
          <div className="md:w-1/2 w-full">
            <div className="bg-white p-6 rounded-lg shadow-md">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  {/* Question */}
                  <h2 className="text-lg font-semibold flex justify-between items-center cursor-pointer"
                      onClick={() => toggleVisibility(index)}>
                    {faq.question}
                    <button className="text-gray-600">
                      {visibleIndex === index ? <HiChevronUp size={25} /> : <HiChevronDown size={25} />}
                    </button>
                  </h2>

                  {/* Line Divider */}
                  <hr className="my-2 border-gray-400" />

                  {/* Answer (conditionally rendered) */}
                  {visibleIndex === index && (
                    <p className="mt-2 text-gray-700">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FandQ;
