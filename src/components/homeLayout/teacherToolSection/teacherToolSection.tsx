import Image from "next/image";
import React from "react";
import logo from "@/app/assets/image/image 12.png";

const TeacherToolsSection: React.FC = () => {
  return (
    <div className="flex justify-center">
      <section className="py-20 container px-6 bg-white flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Content */}
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-4xl font-bold text-indigo-900 leading-snug">
            <span className="text-teal-500">Tools </span>
            For Teachers <br />
            And Learners
          </h2>
          <p className="text-gray-500 text-2xl mt-4">
            Class has a dynamic set of teaching tools built to be deployed and
            used during class. Teachers can handout assignments in real-time for
            students to complete and submit.
          </p>
        </div>

        {/* Right Content */}
        <div className="relative w-full max-w-sm">
          <Image
            width={400}
            height={400}
            src={logo}
            alt="Student"
            className="relative z-10"
          />
          {/* Decorative Icons */}
          <div className="absolute top-4 left-4 bg-white rounded-full shadow-md p-2">
            <Image
              fill
              src="https://img.icons8.com/color/48/google-classroom.png"
              alt="icon1"
              className="w-6 h-6"
            />
          </div>
          <div className="absolute top-8 right-4 bg-white rounded-full shadow-md p-2">
            <Image
              fill
              src="https://img.icons8.com/color/48/google-forms.png"
              alt="icon2"
              className="w-6 h-6"
            />
          </div>
          <div className="absolute bottom-6 left-6 bg-white rounded-full shadow-md p-2">
            <div className="w-3 h-3 bg-red-400 rounded-full" />
          </div>
          <div className="absolute bottom-8 right-10 bg-white rounded-full shadow-md p-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeacherToolsSection;
