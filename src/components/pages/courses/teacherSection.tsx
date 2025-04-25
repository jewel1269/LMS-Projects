import Image from "next/image";
import Link from "next/link";
import React from "react";

const teachers = [
  {
    name: "Jane Cooper",
    img: "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
  },
  {
    name: "Adam",
    img: "https://t4.ftcdn.net/jpg/05/18/65/75/360_F_518657595_keQdDMCfv8SgYvjOgPMe8BCx7hkuplIf.jpg",
  },
  {
    name: "Tomara",
    img: "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
  },
  {
    name: "Jane Cooper",
    img: "https://t4.ftcdn.net/jpg/05/18/65/75/360_F_518657595_keQdDMCfv8SgYvjOgPMe8BCx7hkuplIf.jpg",
  },
  {
    name: "Jane Cooper",
    img: "https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png",
  },
  {
    name: "Jane Cooper",
    img: "https://t4.ftcdn.net/jpg/05/18/65/75/360_F_518657595_keQdDMCfv8SgYvjOgPMe8BCx7hkuplIf.jpg",
  },
];

const TeacherSection = () => {
  return (
    <div className="lg:px-40 py-10">
      <div className="flex items-center justify-between py-4">
        <h2 className="text-3xl font-semibold  text-gray-800">
          Classes tought by real creators
        </h2>
        <Link href={"/"} className="text-2xl font-semibold text-teal-500">
          See All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow text-center  p-5 hover:shadow-md transition"
          >
            <div className="flex justify-center">
              <div className="w-56 flex  h-48 relative mb-4 rounded overflow-hidden">
                <Image
                  src={teacher?.img}
                  alt={teacher.name}
                  fill
                  className=" object-cover"
                />
              </div>
            </div>
            <h2 className="text-xl font-semibold  text-gray-900 mb-2">
              {teacher?.name}
            </h2>
            <p className=" text-md text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
              libero rerum fugit suscipit odio eos voluptatum molestias
              sapiente, dolorum expedita.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherSection;
