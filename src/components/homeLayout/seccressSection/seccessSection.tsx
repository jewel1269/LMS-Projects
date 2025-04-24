import React from "react";

const SeccessSection = () => {
  const stats = [
    { number: "15k", label: "Students" },
    { number: "75%", label: "Total Success " },
    { number: "35", label: "Main Questions" },
    { number: "26", label: "Cheif Exparts" },
    { number: "16", label: "Years of Experience" },
  ];

  return (
    <div className="flex justify-center">
      <section className="container   py-16 bg-white text-center ">
        <h2 className="text-4xl font-bold text-black mb-4">Our Success </h2>
        <p className="text-md text-gray-700 max-w-xl mx-auto mb-12">
          Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
          sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
          ultrices eu ornare tristique vel nisl orci.{" "}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-5xl  bg-gradient-to-r from-blue-700  via-sky-500 to-teal-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-800 text-lg mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SeccessSection;
