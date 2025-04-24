import React from "react";
import Navbar from "./navber/navber";
import Hero from "./hero/hero";
import SeccessSection from "./seccressSection/seccessSection";
import CloudFeatures from "./cloudFeatures/cloudFeatures";
import TotxIntro from "./totcIntro/totxIntro";
import ClassroomSection from "./classroomSection/classroomSection";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SeccessSection />
      <CloudFeatures />
      <TotxIntro />
      <ClassroomSection />
    </div>
  );
};

export default Index;
