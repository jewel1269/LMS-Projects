import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaStar,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { BiCamera, BiCertification, BiMoney } from "react-icons/bi";
import { MdOutlineEdit } from "react-icons/md";
import RecommadationCard from "@/components/pages/courses/recommadationCard";
import ClassroomSection from "@/components/homeLayout/classroomSection/classroomSection";
import OfferSection from "@/components/pages/courses/offerSection";
import Link from "next/link";

interface Course {
  id: number;
  category: string;
  duration: string;
  title: string;
  description: string;
  author: string;
  oldPrice: number;
  newPrice: number;
  image: string;
}

const courses: Course[] = [
  {
    id: 1,
    category: "Design",
    duration: "3 Months",
    title: "AWS Certified Solutions Architect",
    description:
      "Master the skills to design and deploy scalable systems on AWS. Ideal for cloud professionals.",
    author: "Lina",
    oldPrice: 100,
    newPrice: 80,
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    category: "Development",
    duration: "3 Months",
    title: "React Frontend Developer Bootcamp",
    description:
      "Learn how to build modern and fast web applications using React, Redux, and TypeScript.",
    author: "Mark",
    oldPrice: 120,
    newPrice: 90,
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    category: "Marketing",
    duration: "2 Months",
    title: "Digital Marketing Fundamentals",
    description:
      "Understand SEO, SEM, content marketing, and data analytics to grow any business online.",
    author: "Sarah",
    oldPrice: 95,
    newPrice: 75,
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    category: "UI/UX",
    duration: "2 Months",
    title: "UI/UX Design with Figma",
    description:
      "Design engaging user interfaces and learn UX principles using Figma and Adobe XD.",
    author: "Alex",
    oldPrice: 110,
    newPrice: 85,
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    category: "Programming",
    duration: "4 Months",
    title: "Full-Stack JavaScript Developer",
    description:
      "Build backend and frontend applications with Node.js, Express, MongoDB, and React.",
    author: "Nora",
    oldPrice: 150,
    newPrice: 110,
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    category: "Business",
    duration: "2 Months",
    title: "Startup Business Strategy",
    description:
      "Learn how to validate, launch, and grow your startup with lean methodology.",
    author: "Tom",
    oldPrice: 100,
    newPrice: 70,
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=60",
  },
];

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const findCourse = courses.find((item) => item.id === Number(id));

  return (
    <section>
      <div>
        <div>
          <Image
            src={findCourse?.image ?? "/default-course-image.jpg"}
            alt={findCourse?.title ?? "Course Image"}
            height={500}
            width={500}
            className="w-[1950px] h-[650px]"
          />
        </div>
        <div className="lg:px-32 lg:flex  justify-around gap-44 items-center">
          <div className="lg:px-0 px-3">
            <div className="flex lg:gap-5 gap-1 py-10">
              {["overveiw", "overveiw", "overveiw", "overveiw"].map(
                (label, i) => (
                  <button
                    key={i}
                    className={`px-4 py-2 rounded-xl  border ${
                      i === 3
                        ? "bg-teal-600 text-white"
                        : "bg-white text-black border-gray-300"
                    }`}
                  >
                    {label}
                  </button>
                )
              )}
            </div>

            <div className="bg-[#9DCCFF4D] p-6 rounded-xl">
              <div className="flex gap-8">
                <div className="text- bg-white h-32 p-3 rounded-2xl space-y-2">
                  <h2 className="text-2xl font-bold">4 out of 5 </h2>
                  <div className="text-yellow-500 flex justify-center text-xl">
                    {Array(5)
                      .fill(0)
                      .map((_, idx) => (
                        <FaStar key={idx} />
                      ))}
                  </div>
                  <p className="text-lg text-gray-600">Top Rating</p>
                </div>

                <div className="flex-1 space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <div
                      key={stars}
                      className="flex items-center gap-2 text-sm"
                    >
                      <p>{stars} Stars</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-600 h-2 rounded-full w-2/3"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 mt-6">
                {[1, 2].map((review) => (
                  <div key={review} className="border-t pt-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=60"
                        alt="User"
                        width={40}
                        height={40}
                        className="rounded-full h-12 w-12"
                      />
                      <div>
                        <p className="font-semibold">Lina</p>
                        <div className="flex text-[#FFB800] text-sm">
                          {Array(5)
                            .fill(0)
                            .map((_, idx) => (
                              <FaStar key={idx} />
                            ))}
                        </div>
                      </div>
                      <span className="ml-auto text-gray-500 text-sm">
                        3 Month
                      </span>
                    </div>
                    <p className="text-sm mt-2 text-gray-700">
                      Class, launched less than a year ago by Blackboard
                      co-founder Michael Chasen, integrates exclusively...
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:px-0 px-3">
            <Image
              src={findCourse?.image ?? "/default-course-image.jpg"}
              alt={findCourse?.title ?? "Course Image"}
              width={300}
              height={300}
              className="border-8  rounded-2xl border-white lg:-mt-52"
            />

            <div className="flex lg:justify-between lg:gap-0 gap-3 px-3 items-center">
              <h1 className="text-2xl font-semibold text-black ">
                ${findCourse?.newPrice}
              </h1>
              <h1 className="text-2xl line-through text-gray-500  ">
                ${findCourse?.oldPrice}
              </h1>
              <h1 className="text-2xl  text-gray-500 font-semibold ">
                50% Off{" "}
              </h1>
            </div>

            <h1 className="text-teal-600 text-sm text-center font-bold mt-5">
              11 hour left at this price
            </h1>

            <div className="flex justify-center mt-5">
              <Link href={"/checkout"}>
                <button className="text-white border border-gray-500 px-28 py-2 bg-teal-600 rounded-xl ">
                  Buy Now
                </button>
              </Link>
            </div>

            <hr className="mt-5 font-bold px-3" />

            <div className="mt-5 ">
              <h1 className="text-2xl text-black font-semibold">
                This Course included
              </h1>
              <div className="flex items-center gap-2">
                {" "}
                <span>
                  <BiMoney className="w-6 h-6 text-teal-600" />
                </span>
                <h1>Money Back Guarantee</h1>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <BiCamera className="w-6 h-6 text-teal-600" />
                </span>
                <h1>Access on all devices</h1>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <BiCertification className="w-6 h-6 text-teal-600" />
                </span>
                <h1>Certification of completion</h1>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <MdOutlineEdit className="w-6 h-6 text-teal-600" />
                </span>
                <h1>32 Moduls</h1>
              </div>
            </div>

            <hr className="mt-5 font-bold px-3" />

            <div className="mt-5">
              <h1 className="text-2xl text-black mt-3">
                Training 5 or more people
              </h1>
              <p className="text-lg text-gray-600">
                Class, launched less than a <br />
                year ago by Blackboard co-founderb <br />
                Michael Chasen, integrates exclusively...
              </p>
            </div>
            <hr className="mt-5 font-bold px-3" />

            <div className="mt-5">
              <h2 className="text-2xl text-black mt-3">Share this course</h2>
              <div className="flex items-center justify-around gap-2">
                <FaTwitter />
                <FaFacebook />
                <FaYoutube />
                <FaInstagram />
                <FaTelegram />
                <FaWhatsapp />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:py-10">
        <RecommadationCard />
      </div>
      <div className="lg:py-10">
        <ClassroomSection />
      </div>
      <div className="lg:py-10">
        <OfferSection />
      </div>
    </section>
  );
};

export default Page;
