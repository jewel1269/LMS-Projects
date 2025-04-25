import Image from "next/image";
import React from "react";
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

const CourseCard = () => {
  return (
    <div className="grid grid-cols-1 lg:px-20 lg:grid-cols-4 sm:grid-cols-2 gap-6 p-6">
      {courses?.map((course) => (
        <Link href={`/coursedetails/${course.id}`} key={course.id}>
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl">
            <Image
              src={course?.image}
              alt={course?.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center">
                <span>{course?.category}</span>
                <span>{course?.duration}</span>
              </div>
              <h2 className="text-xl py-2 font-semibold text-gray-700">
                {course?.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {course?.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 py-2">
                  <Image
                    src={course?.image}
                    alt="user profile"
                    height={200}
                    width={200}
                    className="w-10 h-10 rounded-full"
                  />
                  <span>{course?.author}</span>
                </div>
                <div className="gap-2 flex items-center">
                  <p className="text-md line-through text-gray-400">
                    ${course?.oldPrice}
                  </p>
                  <p className="text-md font-semibold text-green-400">
                    ${course?.newPrice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseCard;
