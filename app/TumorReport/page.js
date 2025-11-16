'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const dynamic = 'force-dynamic';


export default function TumorReport() {
  const searchParams = useSearchParams();
  const reportRef = useRef();

  // Get query params safely
  const name = searchParams.get('name') || 'Unknown';
  const email = searchParams.get('email') || 'Unknown';
  const date = searchParams.get('date') || new Date().toLocaleDateString();
  const detected = searchParams.get('detected') === 'true';
  const type = searchParams.get('type') || 'N/A';
  const confidence = searchParams.get('confidence') || 'N/A';

  const [image, setImage] = useState(null);

  useEffect(() => {
    // Load MRI image from localStorage safely
    const storedMRI = localStorage.getItem('mriImage');
    if (storedMRI) {
      setImage(`data:image/jpeg;base64,${storedMRI}`);
    }
  }, []);

  const handleDownload = async () => {
    if (!reportRef.current) return;

    try {
      const canvas = await html2canvas(reportRef.current, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pageWidth;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('tumor_report.pdf');
    } catch (err) {
      console.error('Error generating PDF:', err);
      alert('Failed to generate PDF. Try again.');
    }
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div
        ref={reportRef}
        className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow-md mt-10 space-y-6"
      >
        <h1 className="text-2xl font-bold text-center text-blue-700">
          🧠 Tumor Prediction Report
        </h1>

        <div className="space-y-2">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Tumor Detected:</strong> {detected ? 'Yes' : 'No'}</p>
          <p><strong>Tumor Type:</strong> {type}</p>
          <p><strong>Confidence Score:</strong> {confidence}%</p>
        </div>

        <div>
          <p className="font-semibold mb-2">Original MRI Image</p>
          {image ? (
            <img
              src={image}
              alt="Original MRI"
              className="rounded border w-full max-w-lg h-auto mx-auto"
            />
          ) : (
            <p className="text-gray-500 text-center">Original image not found</p>
          )}
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={handleDownload}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded shadow"
        >
          📥 Download Report as PDF
        </button>
      </div>
    </div>
  );
}
