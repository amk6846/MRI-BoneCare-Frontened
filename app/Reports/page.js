"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../../src/context/AuthContext";

const ResultPage = () => {
  const { isLoggedIn, loading, user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [imageUrl, setImageUrl] = useState("/sample-mri.jpg");
  const [segmentedUrl, setSegmentedUrl] = useState("/sample-mask.jpg");
  const [isGenerating, setIsGenerating] = useState(false);
  const [blurContent, setBlurContent] = useState(true); // initially blur
  const [downloadClicked, setDownloadClicked] = useState(false); // for triggering download

  // Load images from localStorage
  useEffect(() => {
    const storedMRI = localStorage.getItem("mriImage");
    const storedSegmented = localStorage.getItem("segmentedImage");

    if (storedMRI) setImageUrl(`data:image/jpeg;base64,${storedMRI}`);
    if (storedSegmented) setSegmentedUrl(`data:image/jpeg;base64,${storedSegmented}`);
    else if (storedMRI) setSegmentedUrl(`data:image/jpeg;base64,${storedMRI}`);
  }, []);

  const result = {
    patientName: user?.name || searchParams.get("name") || "Unknown",
    email: user?.email || searchParams.get("email") || "unknown@example.com",
    uploadDate: searchParams.get("date") || new Date().toISOString().split("T")[0],
    tumorDetected: searchParams.get("detected") === "true",
    tumorType: searchParams.get("type") || "Unknown Type",
    confidence: searchParams.get("confidence") || "N/A",
  };

  // Handle download / login check
  useEffect(() => {
    if (downloadClicked) {
      if (!isLoggedIn) {
        router.push("/login");
      } else {
        setBlurContent(false); // remove blur
        setIsGenerating(true);

        setTimeout(() => {
          router.push(
            `/TumorReport?name=${encodeURIComponent(
              result.patientName
            )}&email=${encodeURIComponent(
              result.email
            )}&date=${encodeURIComponent(
              result.uploadDate
            )}&detected=${result.tumorDetected}&type=${encodeURIComponent(
              result.tumorType
            )}&confidence=${encodeURIComponent(result.confidence)}`
          );
        }, 2000);
      }
      setDownloadClicked(false); // reset
    }
  }, [downloadClicked, isLoggedIn]);

  return (
    <>
      <Navbar />
      <div className="p-6 bg-gradient-to-b from-blue-50 to-white min-h-screen">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
            🧠 MRI Tumor Diagnosis Report
          </h1>

          {/* Patient Info */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2 border-b pb-1">
              👤 Patient Information
            </h2>
            <div className="text-gray-800 space-y-1">
              <p>
                <strong>Name:</strong> {result.patientName}
              </p>
              <p>
                <strong>Email:</strong> {result.email}
              </p>
              <p>
                <strong>Upload Date:</strong> {result.uploadDate}
              </p>
            </div>
          </div>

          {/* Diagnosis + Images - blur */}
          <div
            className={`transition-all duration-500 ${
              blurContent
                ? "filter blur-sm pointer-events-none"
                : "filter blur-0 bg-blue-50 rounded-lg p-2"
            }`}
          >
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-2 border-b pb-1">
                🩺 Diagnosis Result
              </h2>
              {result.tumorDetected ? (
                <div className="bg-red-100 text-red-700 p-4 rounded-md font-medium">
                  ✅ <strong>Tumor Detected</strong>
                  <br />
                  <span>Type: {result.tumorType}</span>
                  <br />
                  <span>Confidence: {result.confidence}%</span>
                </div>
              ) : (
                <div className="bg-green-100 text-green-700 p-4 rounded-md font-medium">
                  ✅ <strong>No Tumor Detected</strong>
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6 transition-all duration-500">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-center">🖼️ Original MRI Image</h3>
                <img
                  src={imageUrl}
                  alt="MRI Scan"
                  className="rounded-lg border w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-center">🎯 Segmented Image</h3>
                <img
                  src={segmentedUrl}
                  alt="Segmented Output"
                  className="rounded-lg border w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center mt-8">
            <button
              disabled={loading || isGenerating}
              onClick={() => setDownloadClicked(true)}
              className={`px-8 py-3 text-lg rounded shadow-md flex items-center justify-center gap-2 transition-colors duration-300 ${
                loading || isGenerating
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {loading ? (
                "Checking..."
              ) : isGenerating ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                  Generating Report...
                </>
              ) : (
                "📄 Download PDF Report"
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultPage;
