import React from "react";
import instructor from "@/app/assets/image/Group 22.png";
import students from "@/app/assets/image/Group 23.png";
import Image from "next/image";

const TotxIntro = () => {
  return (
    <section className="text-center py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold mb-4">
        What is <span className="text-cyan-600">TOTC</span>
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        TOTC is a platform that allows educators to create online classes
        whereby they can store the course materials online; manage assignments,
        quizzes and exams; monitor due dates; grade results and provide students
        with feedback all in one place.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* instructor Card */}
        <div className="relative overflow-hidden rounded-xl group">
          <Image
            src={instructor}
            alt="instructor width={500} height={280}"
            className="rounded-xl object-cover"
          />
          <div className="absolute inset-0 bg-opacity-50 group-hover:bg-opacity-60 transition duration-300 "></div>
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
            <h3 className="text-lg font-bold  mb-2">FOR INSTRUCTOR</h3>
            <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition ">
              Start a Class Today
            </button>
          </div>
        </div>
        {/* students Card */}
        <div className="relative overflow-hidden rounded-xl group">
          <Image
            src={students}
            alt="instructor width={500} height={280}"
            className="rounded-xl object-cover"
          />
          <div className="absolute inset-0 bg-opacity-50 group-hover:bg-opacity-60 transition duration-300 "></div>
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
            <h3 className="text-lg font-bold  mb-2">FOR STUDENTS</h3>
            <button className="px-6 py-2  bg-cyan-500  rounded-full hover:bg-white hover:text-black transition ">
             Enter Access Code
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotxIntro;
