import React from 'react'
import Navbar from '../components/Navbar'
import { SignupFormDemo } from '../components/SignupFormDemo'

const page = () => {
  return (
    <>
    <div><Navbar /></div>
    <div className='pt-10 min-h-screen flex items-center justify-center bg-gray-200'>
    <SignupFormDemo />

    </div>

    
    </>
  )
}

export default page