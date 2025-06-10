"use client";
import React from "react";

const experience = [
  {
    image:
      "https://globalinfoedge.in/wp-content/uploads/2024/07/logo-gie-white-wide-2024-2048x365.png",
    name: "Global Info Edge",
  },
  {
    image:
      "https://thetechuniqueacademy.com/wp-content/uploads/2022/04/version-0.0.1q.png",
    name: "The Tech Unique Academy",
  },
  {
    image: "https://www.enclave-studios.com/enclave-logo-with-text.svg",
    name: "Enclave Studios",
  },
  {
    image: "https://www.unifiedmentor.com/assets/White%20Logo-dfhj5sER.png",
    name: "Unified Mentor Pvt. Ltd.",
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
      <h1 className="text-4xl font-extrabold text-center my-10 bg-gradient-to-r from-[#ff512f] to-[#dd2476] bg-clip-text text-transparent">
        Worked With Top Brands & Startups
      </h1>

      <div className="w-full max-w-7xl mx-auto overflow-hidden whitespace-nowrap border border-white/10 p-6 rounded-xl shadow-xl ">
        <div className="inline-block animate-marquee hover:pause-marquee">
          {experience.map((item, index) => (
            <span
              key={index}
              className="inline-block mr-16 text-center cursor-pointer hover:scale-105 transition-transform duration-300"
              title={item.name}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-gray-700 bg-[#9fe0da]/20 shadow-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain p-2"
                    onError={(e) =>
                      (e.currentTarget.src =
                        "https://via.placeholder.com/100x100?text=Logo")
                    }
                  />
                </div>
                <span className="text-sm text-white font-medium capitalize mt-1">
                  {item.name}
                </span>
              </div>
            </span>
          ))}
        </div>

        {/* Styles for marquee animation */}
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
            animation: marquee 18s linear infinite;
          }

          .pause-marquee {
            animation-play-state: paused;
          }

          .hover\\:pause-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </>
  );
}
