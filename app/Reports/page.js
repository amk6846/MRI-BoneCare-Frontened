"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../../src/context/AuthContext";

const ResultPage = () => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [imageUrl, setImageUrl] = useState("/sample-mri.jpg");
  const [segmentedUrl, setSegmentedUrl] = useState("/sample-mask.jpg");

  useEffect(() => {
    const storedMRI = localStorage.getItem("mriImage");
    const storedSegmented = localStorage.getItem("segmentedImage");

    if (storedMRI) {
      setImageUrl(`data:image/jpeg;base64,${storedMRI}`);
    }

    if (storedSegmented) {
      setSegmentedUrl(`data:image/jpeg;base64,${storedSegmented}`);
    } else if (storedMRI) {
      // fallback: use MRI image as placeholder
      setSegmentedUrl(`data:image/jpeg;base64,${storedMRI}`);
    }
  }, []);

  const result = {
    patientName: searchParams.get("name") || "Unknown",
    email: searchParams.get("email") || "unknown@example.com",
    uploadDate:
      searchParams.get("date") || new Date().toISOString().split("T")[0],
    tumorDetected: searchParams.get("detected") === "true",
    tumorType: searchParams.get("type") || "Unknown Type",
    confidence: searchParams.get("confidence") || "N/A",
  };

  const handleDownload = () => {
    if (!isLoggedIn) {
      alert("Please login to download the report.");
      router.push("/Login");
      return;
    }
    alert("PDF Download Coming Soon...");
  };

  return (
    <>
      <Navbar />
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4 text-center">MRI Scan Report</h1>

        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
          {/* Patient Info */}
          <h2 className="text-lg font-semibold mb-2">Patient Info</h2>
          <p>
            <strong>Name:</strong> {result.patientName}
          </p>
          <p>
            <strong>Email:</strong> {result.email}
          </p>
          <p>
            <strong>Upload Date:</strong> {result.uploadDate}
          </p>

          <hr className="my-4" />

          {/* Diagnosis */}
          <h2 className="text-lg font-semibold mb-2">Diagnosis</h2>
          {result.tumorDetected ? (
            <div className="text-red-600 font-bold">
              Tumor Detected ✅ <br />
              Type: {result.tumorType} <br />
              Confidence: {result.confidence}%
            </div>
          ) : (
            <div className="text-green-600 font-bold">No Tumor Detected ✅</div>
          )}

          <hr className="my-4" />

          {/* MRI Image */}
          <h2 className="text-lg font-semibold mb-2">MRI Image</h2>
          <img
            src={imageUrl}
            alt="MRI Scan"
            className="w-1/2 rounded-md mb-4 m-auto"
          />

          {/* Segmented Image */}
          <h2 className="text-lg font-semibold mb-2">Segmented Image</h2>
          <img
            src={segmentedUrl}
            alt="Segmented Output"
            className="w-1/2 rounded-md mb-4 m-auto"
          />

          {/* Download Button */}
          <button
            className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={handleDownload}
          >
            Download PDF Report
          </button>
        </div>
      </div>
    </>
  );
};

export default ResultPage;
