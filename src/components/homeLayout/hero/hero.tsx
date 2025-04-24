import React from "react";

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
      <div>
        <div className="max-w-xl mb-16 lg:mb-0">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            <span className="text-orange-300">Studying</span> {""}
            <span className="text-white"> Online Is Now </span>
            {""}
            <span className="text-white"> musch easier</span>
          </h1>
          <p className="mt-6 text-lg text-white">
            TOTC is an interesting platform that will teach you in more an
            interactive way
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
