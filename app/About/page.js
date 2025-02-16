"use client";
import React from "react";
import Navbar from "../components/Navbar";
// import { Spotlight } from "../components/ui/spotlight-new";

const page = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      {/* Welcome To About Us Page */}
      <section>
        {/* Hero Section - Full Width */}
        <div className="w-full bg-gray-900 text-white text-center py-16 sm:py-20 px-6">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Revolutionizing MRI Bone Analysis
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            AI-powered diagnostics for faster, more accurate MRI scan analysis.
          </p>
        </div>


        {/* Mission & Vision - Full Width */}
        <div className="w-full bg-gray-100 py-16 sm:py-20 px-4 sm:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            Our Mission
          </h2>
          <p className="text-lg sm:text-xl font-normal max-w-3xl mx-auto mb-8">
            At MRI Bone Care, our mission is to revolutionize the way bone
            diseases, tumors, and infections are detected and diagnosed. We aim
            to provide cutting-edge, AI-powered tools that leverage deep
            learning and multi-parametric MRI technology to make bone analysis
            faster, more accurate, and accessible to healthcare professionals
            and patients worldwide. Our goal is to improve the quality of
            healthcare by enabling early detection, enhancing diagnostic
            precision, and assisting doctors in providing more informed
            treatment decisions. We strive to empower healthcare providers with
            innovative solutions to improve patient outcomes and reduce the time
            and cost of diagnosis.
          </p>

          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            Our Vision
          </h2>
          <p className="text-lg sm:text-xl font-normal max-w-3xl mx-auto">
            Our vision is to become a global leader in medical imaging
            technology, specifically in the field of bone care. We envision a
            future where our AI-powered MRI analysis platform is accessible to
            hospitals, clinics, and medical practitioners across the globe,
            transforming the way bone tumors and infections are detected and
            treated. By pushing the boundaries of artificial intelligence and
            healthcare technology, we aim to create a world where every patient
            receives a timely, accurate diagnosis, leading to better treatment
            plans, improved survival rates, and enhanced quality of life. We
            aspire to contribute significantly to the advancement of medical
            science and innovation, making healthcare smarter, more efficient,
            and more effective.
          </p>
        </div>



        {/* Research Publication */}
        <div id="research-publications" className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
              Research Publications
            </h2>
            <p className="text-center text-lg sm:text-xl text-gray-600 mb-12">
              key studies and papers supporting the
              technology used in MRI Bone Care:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Publication 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl text-gray-800 mb-2">
                  Title: Deep Learning for Bone Tumor Detection in MRI
                </h3>
                <p className="text-gray-600 mb-4">
                  Author(s): John Doe, Jane Smith
                </p>
                <p className="text-gray-700 mb-4">
                  This paper discusses the application of deep learning for MRI
                  bone tumor detection and its effectiveness in improving
                  diagnosis accuracy.
                </p>
                <a
                  href="https://scholar.google.com/scholar?q=MRI+bone+tumor+deep+learning"
                  className="text-black hover:text-gray-700 font-semibold text-lg"
                >
                  Read More
                </a>
              </div>

              {/* Publication 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Title: Multi-Parametric MRI for Bone Infection Diagnosis
                </h3>
                <p className="text-gray-600 mb-4">
                  Author(s): Alice Cooper, Robert Miller
                </p>
                <p className="text-gray-700 mb-4">
                  This research focuses on segmentation techniques in MRI scans
                  and how they can aid in detecting bone infections effectively.
                </p>
                <a
                  href="https://scholar.google.com/scholar?q=MRI+bone+tumor+deep+learning"
                  className="text-black hover:text-gray-700 font-semibold text-lg"
                >
                  Read More
                </a>
              </div>

              {/* Publication 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl text-gray-800 mb-2">
                  Title: CNN for Bone Lesion Segmentation and Classification
                </h3>
                <p className="text-gray-600 mb-4">
                  Author(s): Michael Johnson, Sarah Lee
                </p>
                <p className="text-gray-700 mb-4">
                  This paper presents a comparison of multi-parametric MRI
                  analysis with traditional methods for diagnosing bone
                  diseases.
                </p>
                <a
                  href="https://scholar.google.com/scholar?q=MRI+bone+tumor+deep+learning"
                  className="text-black hover:text-gray-700 font-semibold text-lg"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Detection, Segmentation, & Classification */}
        <dev
          id="detection-segmentation-classification"
          className="py-16 sm:py-20 bg-gray-50"
        >
          <div className="container mx-auto px-4 p-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
              Detection, Segmentation, & Classification
            </h2>
            <p className="text-center text-lg sm:text-xl text-gray-600 mb-12">
              Our advanced AI-powered tools utilize deep learning to automate
              the process of detecting, segmenting, and classifying bone tumors
              and infections from MRI scans.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Detection Section */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Detection
                </h3>
                <p className="text-gray-600 mb-4">
                  Our system detects bone anomalies in MRI scans using advanced
                  algorithms, providing accurate early detection of tumors and
                  infections.
                </p>
                <img
                  src="images/aidetect.jpg"
                  alt="Detection"
                  className="w-full h-64 sm:h-96 bg-contain object-center rounded-lg mb-4"
                />
                <a href="/tools" className="text-blue-600 hover:text-cyan-500 font-semibold text-lg">
                  Upload Now
                </a>
              </div>

              {/* Segmentation Section */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Segmentation
                </h3>
                <p className="text-gray-600 mb-4">
                  Our segmentation technique isolates specific regions of
                  interest in the MRI images, helping to accurately identify the
                  location and size of bone lesions.
                </p>
                <img
                  src="images/Icons/seg.png"
                  alt="Segmentation"
                  className="w-full h-64 sm:h-96 bg-contain rounded-lg mb-4"
                />
                <a
                  href="/tools"
                  className="text-blue-600 hover:text-cyan-500 font-semibold text-lg"
                >
                  Upload Now
                </a>
              </div>

              {/* Classification Section */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Classification
                </h3>
                <p className="text-gray-600 mb-4">
                  Once segmented, the system classifies bone tumors and
                  infections into different categories, assisting doctors in
                  making faster, more accurate diagnoses.
                </p>
                <img
                  src="images/Icons/class.png"
                  alt="Classification"
                  className="w-full h-64 sm:h-96 bg-contain rounded-lg mb-4"
                />
                <a
                  href="/tools"
                  className="text-blue-600 text-lg hover:text-cyan-500 font-semibold"
                >
                  Upload Now
                </a>
              </div>
            </div>
          </div>
        </dev>



        {/* Call to Action - Full Width */}
        <div className="w-full bg-blue-600 text-white text-center py-16 sm:py-20 px-6 sm:px-10">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-xl sm:text-2xl mt-4 max-w-3xl mx-auto">
            Try our AI-powered MRI analysis for free today!
          </p>
          <a
            href="/tools"
            className="mt-6 inline-block bg-yellow-500 text-gray-900 py-4 px-10 rounded-full text-xl font-semibold hover:bg-yellow-400 transition duration-300"
          >
            Get Started for Free
          </a>
        </div>
      </section>
    </>
  );
};

export default page;
