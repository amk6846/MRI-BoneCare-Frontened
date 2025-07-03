'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function TumorReport() {
  const searchParams = useSearchParams();
  const reportRef = useRef();

  const name = searchParams.get('name');
  const email = searchParams.get('email');
  const date = searchParams.get('date');
  const detected = searchParams.get('detected') === 'true';
  const type = searchParams.get('type');
  const confidence = searchParams.get('confidence');

  const [image, setImage] = useState(null);

  useEffect(() => {
    const storedMRI = localStorage.getItem('mriImage');
    if (storedMRI) {
      setImage(`data:image/jpeg;base64,${storedMRI}`);
    }
  }, []);

  const handleDownload = async () => {
    const element = reportRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pageWidth;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('tumor_report.pdf');
  };

  return (
    <div className="p-4">
      <div ref={reportRef} className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow-md mt-10 space-y-6">
        <h1 className="text-2xl font-bold text-center">🧠 Tumor Prediction Report</h1>

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
            <img src={image} alt="Original MRI" className="rounded border w-2/3 h-96" />
          ) : (
            <p className="text-gray-500">Original image not found</p>
          )}
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={handleDownload}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded"
        >
          📥 Download Report as PDF
        </button>
      </div>
    </div>
  );
}
