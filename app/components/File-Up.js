"use client";
import React, { useState } from "react";
import { FileUpload } from "../components/ui/file-upload";

export function FileUploadDemo() {
  const [files, setFiles] = useState([]);
  const handleFileUpload = (files) => {
    setFiles(files);
    console.log(files);
  };

  return (
    (<div
      className="w-4/5 max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-300 dark:border-neutral-800 rounded-lg">
      <FileUpload onChange={handleFileUpload} />
    </div>)
  );
}
