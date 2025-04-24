import React from "react";
import Navbar from "./navber/navber";
import Hero from "./hero/hero";
import SeccessSection from "./seccressSection/seccessSection";
import CloudFeatures from "./cloudFeatures/cloudFeatures";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SeccessSection/>
      <CloudFeatures/>
    </div>
  );
};

export default Index;
