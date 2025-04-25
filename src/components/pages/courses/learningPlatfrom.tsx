import Image from "next/image";
import React from "react";
import LeaningImage from "@/app/assets/course/imrg2.png";

const LearningPlatfrom = () => {
  const features = [
    "Free E-book, video & consolation",
    "Top instructors from around world",
    "Top courses from your team",
  ];
  return (
    <div className="lg:px-40 bg-gray-50 rounded-2xl p-6 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-12">
      <div>
        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 leading-snug mb-6">
          Know about learning <br /> learning platform
        </h2>
        <ul className="mb-8 space-y-4">
          {features.map((item, index) => (
            <li
              key={index}
              className="flex gap-1 items-center space-x-3 text-gray-600 text-md"
            >
              <span className="w-4  h-4 bg-teal-500 rounded-full"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <button className="border font-semibold rounded-2xl border-gray-300 bg-teal-500 hover:bg-teal-600 text-white px-6 py-2  shadow">
          Start Learning Now
        </button>
      </div>

      <div>
        <Image
          src={LeaningImage}
          alt="Learning Image"
          width={500}
          height={400}
          className="object-cover w-full"
        />
      </div>
    </div>
  );
};

export default LearningPlatfrom;
