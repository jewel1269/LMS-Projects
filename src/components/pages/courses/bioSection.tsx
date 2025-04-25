import React from "react";
import Image from "next/image";
import bioImage from "@/app/assets/course/Ellipse 119.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const BioSection = () => {
  return (
    <div className="bg-[#c6dbf2] lg:px-40 lg:py-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        What our students have to say
      </h2>
      <div className="bg-white rounded-3xl px-6 py-8 md:px-12 md:py-12 flex flex-col md:flex-row  items-center gap-8 shadow-md">
        <div className="relative w-64 h-64 shrink-0">
          <div className=" absolute bg-[#88FFD478] w-20 h-20 rounded-full -bottom-6 -left-6 z-0"></div>
          <div className=" absolute bg-amber-300 w-20 h-20 rounded-full -bottom-4 -right-4 z-0 "></div>
          <div className=" absolute bg-[#FBBC829E] w-20 h-20 rounded-full -top-4 right-12 z-0 "></div>
          <div className="rounded-full overflow-hidden w-full h-full relative z-10">
            <Image
              src={bioImage}
              alt="bioImage"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-800">Savannah Nguyen</h3>
          <p className="text-md mb-4 text-gray-700">tanya.hill@example.com</p>
          <div className="space-y-1 text-md text-gray-800 mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
              Tempore, adipisci.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
              Tempore, adipisci.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
              Tempore, adipisci.
            </p>
          </div>

          <div className="flex justify-center md:justify-start gap-4  text-teal-500 text-lg mt-2 ">
            <i className="fab  fa-twitter" />
            <i className="fab  fa-facebook" />
            <i className="fab  fa-instagram" />
          </div>
        </div>

        <div>
          {[
            "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740",
            "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
            "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740",
            "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="w-20 h-20 rounded-full overflow-hidden border border-white shadow"
            >
              <Image
                src={src}
                alt="Avater"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BioSection;
