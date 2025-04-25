import Image from "next/image";
import React from "react";
import cityImage from "@/app/assets/image/image 13.png";

const AssesmentSection = () => {
  return (
    <div className="flex justify-center">
      <section className="py-20 px-6 container bg-white flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left - Card UI */}
        <div className="relative bg-white  shadow-xl rounded-2xl p-6 w-full max-w-2xl">
          <div className="absolute -top-4 -left-4 w-6 h-6 bg-purple-500 rounded-full"></div>
          <div className="absolute -top-4 right-4 flex gap-2">
            <div className="w-6 h-6 bg-pink-400 text-white text-xs rounded-full flex items-center justify-center">
              ×
            </div>
            <div className="w-6 h-6 bg-green-400 text-white text-sm rounded-full flex items-center justify-center">
              ✔
            </div>
          </div>

          <div className="mb-3 text-lg bg-gray-100 text-gray-600 px-3 py-1 rounded-full w-max">
            Question 1
          </div>
          <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
            True or false? This play takes place in Italy
          </h3>

          <div className="rounded-xl  overflow-hidden mb-4">
            <Image
              width={500}
              height={500}
              src={cityImage}
              alt="city"
              className="w-full  object-cover"
            />
          </div>

          <div className="bg-white shadow-md border px-4 py-2 rounded-xl flex items-center gap-2 text-green-500 text-sm mt-2">
            <span>✈️</span> Your answer was sent successfully
          </div>

          {/* Decorative dots */}
          <div className="absolute bottom-4 -left-4 w-2 h-2 bg-green-400 rounded-full" />
          <div className="absolute bottom-6 right-6 w-2 h-2 bg-pink-500 rounded-full" />
        </div>

        {/* Right - Text Content */}
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-5xl font-bold text-indigo-900 leading-snug">
            Assessments, <br /> <span className="text-teal-500">Quizzes</span>,{" "}
            <span className="text-indigo-500">Tests</span>
          </h2>
          <p className="text-gray-500 text-2xl mt-4">
            Easily launch live assignments, quizzes, and tests. Student results
            are automatically entered in the online gradebook.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AssesmentSection;
