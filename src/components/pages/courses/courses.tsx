import React from "react";
import SearchWithFilter from "./searchWithFilter"
import CourseCard from "./courseCard"
import LearningPlatfrom from "./learningPlatfrom"
import RecommadationCard from "./recommadationCard"
import TeacherSection from "./teacherSection"
import BioSection from "./bioSection"
import OfferSection from "./offerSection";

const Courses = () => {
  return (
    <div >
     <SearchWithFilter/>
     <CourseCard/>
     <LearningPlatfrom/>
     <RecommadationCard/>
     <TeacherSection/>
     <BioSection/>
     <OfferSection/>

    </div>
  );
};

export default Courses;
