import React from "react";
import img1 from "@/app/assets/course/Rectangle 187.png";
import img2 from "@/app/assets/course/Rectangle 188.png";
import img3 from "@/app/assets/course/Rectangle 189.png";
import Link from "next/link";
import Image from "next/image";

const deals = [
  {
    img: img1,
    discount: "50%",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    img: img2,
    discount: "10%",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    img: img3,
    discount: "50%",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];

const OfferSection = () => {
  return (
    <section className="lg:px-40 py-10">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-gray-900 font-semibold">
          Top Education offers and deals are listed here
        </h2>
        <Link href={"/"} className="text-lg font-semibold text-teal-500 ">
          See All
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md group"
          >
            {/* Background Image */}
            <Image
              src={deal.img}
              alt={deal.title}
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0  bg-opacity-50 p-4 flex flex-col justify-end text-white">
              <div className="absolute top-4 left-4 bg-[#00b3b3] px-3 py-1 text-sm font-bold rounded text-white">
                {deal.discount}
              </div>
              <h3 className="text-base font-semibold mb-1">{deal.title}</h3>
              <p className="text-sm text-white/90">{deal.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferSection;
