import Image from "next/image";
import React from "react";

const NewsSection = () => {
  const newsData = [
    {
      image:
        "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?fit=crop&w=300&q=80",
      tag: "Press Release",
      title:
        "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
      description:
        "Class Technologies Inc., the company that created Class,...",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDwOC6_XLG0gr4PCKqb1CzYd1SzD6yb39CkA&s",
      tag: "News",
      title:
        "Zoom’s earliest investors are betting millions on a better Zoom for schools",
      description:
        "Zoom was never created to be a consumer product. Nonetheless, the...",
    },
    {
      image:
        "https://www.indiantelevision.com/sites/default/files/images/tv-images/2021/08/02/news.jpg",
      tag: "News",
      title:
        "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
      description:
        "This year, investors have reaped big financial returns from betting on Zoom...",
    },
  ];
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-800">
            Lastest News and Resources
          </h2>
          <p className="text-gray-500 mt-2">
            See the developments that have occurred to TOTC in the world
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Main News Card */}
          <div className="flex flex-col md:flex-row gap-4 shadow-md p-4 rounded-xl">
            <Image
              width={500}
              height={500}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDwOC6_XLG0gr4PCKqb1CzYd1SzD6yb39CkA&s"
              alt="Main News"
              className="w-full md:w-1/2 rounded-lg object-cover"
            />
            <div className="flex flex-col justify-between">
              <span className="bg-cyan-100 text-cyan-600 text-xs px-3 py-1 rounded-full w-fit font-semibold mb-2">
                News
              </span>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Class adds $30 million to its balance sheet for a Zoom-friendly
                edtech solution
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>
              <a
                href="#"
                className="text-cyan-600 text-sm font-medium hover:underline"
              >
                Read more
              </a>
            </div>
          </div>

          {/* Sidebar News */}
          <div className="flex flex-col gap-6">
            {newsData.map((news, i) => (
              <div key={i} className="flex items-start gap-4">
                <Image
                  width={200}
                  height={200}
                  src={news.image}
                  alt={news.title}
                  className="w-24 h-20 rounded-lg object-cover"
                />
                <div>
                  <span className="bg-cyan-100 text-cyan-600 text-xs px-2 py-0.5 rounded-full font-semibold mb-1 inline-block">
                    {news.tag}
                  </span>
                  <h4 className="text-sm font-semibold text-gray-800 leading-tight mb-1">
                    {news.title}
                  </h4>
                  <p className="text-xs text-gray-500">{news.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
