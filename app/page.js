import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { CardDemo } from "./components/ui/Card";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <Home />
      <CardDemo />
      <HowItWorks />
      <Testimonials />
      <Footer />

    </>
  );
};

export default page;
