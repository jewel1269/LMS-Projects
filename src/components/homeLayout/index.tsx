import React from "react";
import Hero from "./hero/hero";
import SeccessSection from "./seccressSection/seccessSection";
import CloudFeatures from "./cloudFeatures/cloudFeatures";
import TotxIntro from "./totcIntro/totxIntro";
import ClassroomSection from "./classroomSection/classroomSection";
import ClssroomFeatures from "./classroomFeatures/clssroomFeatures";
import TeacherToolSection from "./teacherToolSection/teacherToolSection";
import AssesmentSection from "./assesmentSection/assesmentSection";
import ManagementSection from "./managementSection/managementSection";
import NewsSection from "./newsSection/newsSection";

const Index = () => {
  return (
    <div>
      <Hero />
      <SeccessSection />
      <CloudFeatures />
      <TotxIntro />
      <ClassroomSection />
      <ClssroomFeatures />
      <TeacherToolSection />
      <AssesmentSection />
      <ManagementSection />
      <NewsSection />
    </div>
  );
};

export default Index;
