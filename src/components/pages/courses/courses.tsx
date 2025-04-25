import React from "react";
import SearchWithFilter from "./searchWithFilter"
import CourseCard from "./courseCard"

const Courses = () => {
  return (
    <div>
     <SearchWithFilter/>
     <CourseCard/>
    </div>
  );
};

export default Courses;
