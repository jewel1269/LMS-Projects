import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa";
import heroImage from "@/app/assets/image/image 12.png";
import { MdOutlineCalendarToday } from "react-icons/md";

const Hero = () => {
  return (
    <section className="relative bg-[#34C4BE] lg:h-[500px]  ">
      <div className="absolute bottom-0 left-0 w-full h-32 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,160 C360,320 1080,0 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
      <div className="relative z-10 container mx-auto px-6 py-20 lg:flex lg:items-center lg:justify-between">
        {/* left text */}
        <div className="max-w-xl mb-16 lg:mb-0">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            <span className="text-orange-300">Studying</span> {""}
            <span className="text-white"> Online Is Now </span>
            {""}
            <span className="text-white"> musch easier</span>
          </h1>
          <p className="mt-6 text-xl text-white">
            TOTC is an interesting platform that will teach you in more an
            interactive way
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href={"/courses"}
              className="px-6 py-3 text-lg font-semibold text-white bg-teal-300 rounded-full shadow hover:bg-teal-400 transition duration-200 ease-in-out"
            >
              Join for free
            </Link>
            <button className="flex items-center text-white gap-2 hover:text-gray-200">
              <div className="w-12 h-12 flex items-center justify-center  rounded-full bg-white text-teal-500">
                <FaPlay />
              </div>
              <span className="font-medium text-black">Watch how it works</span>
            </button>
          </div>
        </div>

        {/* right side  */}

        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-72 h-96 -mt-12 overflow-hidden">
            <Image src={heroImage} alt="hero" fill className="bg-cover" />
          </div>
          {/* instructor card */}
          <div className="absolute -left-2 mt-40 top-0 right-0 bg-white text-gray-800 p-4 rounded-lg  shadow-md w-64 flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full  overflow-hidden">
              <Image
                src={heroImage}
                alt="instructor"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-md">User Experience Class</p>
              <p className="text-sm text-gray-700">Today at 12:00 pm</p>
              <button className="border px-6 bg-rose-400 text-white rounded-full mt-1">
                Join Now
              </button>
            </div>
          </div>

          <div className="absolute -left-16 top-24 -mt-16 right-0 bg-white text-gray-800 p-4 rounded-lg shadow-md w-64 flex items-center gap-3">
            <MdOutlineCalendarToday className="text-[#0e68d5] text-xl" />
            <div>
              <p className="text-sm font-bold">250k</p>
              <p className="text-xs text-gray-700">Assisted Student</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
