"use client";
import React, { useState } from "react";
import axios from "axios";
import { FileUpload } from "../components/ui/file-upload";
import { useRouter } from "next/navigation";

export function FileUploadDemo() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleFileChange = (newFiles) => {
    setFiles(newFiles);
  };

  const handleShowResult = async () => {
    if (files.length === 0) {
      alert("⚠️ Please upload an image first.");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", files[0]);
  
    // Convert uploaded image to base64
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(",")[1]); // remove "data:image/jpeg;base64,"
        reader.onerror = (error) => reject(error);
      });
  
    try {
      setLoading(true);
  
      // Convert and store MRI image
      const base64MRI = await toBase64(files[0]);
      localStorage.setItem("mriImage", base64MRI);
  
      const response = await axios.post("http://localhost:8000/predict/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      const { result, confidence, tumorType, segmented_url } = response.data;
  
      // Optional: Fetch segmented image from URL and store in base64
      if (segmented_url) {
        const segmentedRes = await fetch(segmented_url);
        const segmentedBlob = await segmentedRes.blob();
        const segmentedBase64 = await toBase64(segmentedBlob);
        localStorage.setItem("segmentedImage", segmentedBase64);
      }
  
      router.push(
        `/Reports?name=Test%20Patient&email=test@email.com&date=${new Date()
          .toISOString()
          .split("T")[0]}&detected=${result !== "No Tumor"}&type=${tumorType || result}&confidence=${confidence}`
      );
    } catch (error) {
      console.error("❌ Upload failed:", error);
      alert("Prediction failed. Try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="w-4/5 max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-400 dark:border-neutral-800 rounded-lg p-6 space-y-6">
      <FileUpload onChange={handleFileChange} />

      {files.length > 0 && (
        <button
          onClick={handleShowResult}
          className={`w-full py-3 rounded-md font-semibold transition-all ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
          disabled={loading}
        >
          {loading ? "Processing..." : "Show Result"}
        </button>
      )}
    </div>
  );
}
