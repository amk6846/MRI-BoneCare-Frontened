import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { CardDemo } from "./components/ui/Card";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FandQ from "./components/FandQ";

const page = () => {
  return (
    <>
    {/* Final Year Project (FYP-1) Mri Bone Care Website */}
      <Navbar />
      <Home />
      <CardDemo />
      <HowItWorks />
      <Testimonials />
      <FandQ />
      <Footer />

    </>
  );
};

export default page;
