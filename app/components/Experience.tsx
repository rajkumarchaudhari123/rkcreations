import React from "react";

const experience = [
  {
    image:
      "https://globalinfoedge.in/wp-content/uploads/2024/07/logo-gie-white-wide-2024-2048x365.png",
    name: "global info edge",
  },
  {
    image:
      "https://thetechuniqueacademy.com/wp-content/uploads/2022/04/version-0.0.1q.png",
    name: "thetechunique academy",
  },
  {
    image: "https://www.enclave-studios.com/enclave-logo-with-text.svg",
    name: "enclave studios",
  },
  {
    image: "https://www.unifiedmentor.com/assets/White%20Logo-dfhj5sER.png",
    name: "Unified Mentor Private Limited",
  },
  {
    image: "https://canvaschrome.com/assets/img/logo/logo-white.png",
    name: "Canvas Chrome Designs",
  },
  {
    image: "https://alaguts.com/logo.svg",
    name: "Alagu Tech Solutions",
  },
];

export default function Experience() {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-center my-8 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
        Worked With Top Brands & Startups
      </h1>

      <div className="w-screen overflow-hidden whitespace-nowrap border p-6 rounded-lg shadow-lg ">
        <div className="inline-block animate-marquee">
          {experience.map((item, index) => (
            <span
              key={index}
              className="inline-block mr-14 text-center cursor-pointer hover:scale-110 transition-transform duration-300"
              title={item.name}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="w-24 h-24 rounded-full overflow-hidden border bg-[#9fe0da] shadow-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <span className="text-sm text-white font-medium capitalize whitespace-nowrap mt-1">
                  {item.name}
                </span>
              </div>
            </span>
          ))}
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-marquee {
            animation: marquee 12s linear infinite;
          }
        `}</style>
      </div>
    </>
  );
}
