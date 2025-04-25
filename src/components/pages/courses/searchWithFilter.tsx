import React from "react";
import Image from "next/image";
import seacrhBg from "@/app/assets/course/Rectangle 180.png";
const SearchWithFilter = () => {
  return (
    <div className="relative w-full h-[500px]">
      <Image
        src={seacrhBg}
        alt="seacr bg"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />

      {/* seacrhing and filter */}
      <div
        className="absolute inset-0 bg-opacity-80 p-6 md:p-10 flex flex-col justify-center items-center
      "
      >
        <div className="relative w-full max-w-5xl mb-6">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Search your favorite course "
            className="w-full px-4 py-3 rounded-md border border-gray-200 bg-white focus:outline-none pr-16 "
          />

          <button
            type="submit"
            className="absolute right-1 top-1/2 transform -translate-y-1/2  bg-emerald-500 text-white px-6 py-3 rounded-xl hover:bg-teal-600 transition"
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl ">
          {[
            "Subject",
            "Partner",
            "Program",
            "Langueges",
            "Availablity",
            "Learning Type",
          ].map((label) => (
            <div key={label} className="relative">
              <select className="w-full px-4 py-3  rounded-md border border-gray-300 bg-white text-gray-800 font-semibold focus:outline-none">
                <option value={label}>{label}</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchWithFilter;
