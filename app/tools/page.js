import React from 'react'
import Navbar from '../components/Navbar'
import { FileUploadDemo } from '../components/File-Up'

const page = () => {
  return (
    <>
    <Navbar />
    <div className="h-screen flex flex-col md:flex-row">
  {/* Left Section (Centered Content) */}
  <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-3 p-4">
    <img
      src="images/Desease/Bone.jpg"
      alt="Bone Scan"
      className="w-3/5 sm:w-2/5 rounded-2xl"
    />
    <h1 className="text-gray-900 text-center font-sans font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
      Upload MRI <br /> Bone Scan
    </h1>
    <h3 className="text-gray-600 text-lg sm:text-xl md:text-2xl text-center lg:text-3xl font-semibold">
      100% Automatically and Free
    </h3>
  </div>

  {/* Right Section (Reserved Space) */}
  <div className="w-full md:w-1/2 flex items-center justify-center min-h-[60vh] md:h-screen p-4">
    <FileUploadDemo />

  </div>
</div>

    


    </>
  )
}

export default page