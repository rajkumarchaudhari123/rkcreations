"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GraphicsPage() {
  const images = [
    "/graphics1.jpg",
    "/graphics2.jpg",
    "/graphics3.jpg",
    "/graphics4.jpg",
    "/graphics5.jpg",
    "/graphics6.jpg",
    "/graphics7.jpg",
    "/graphics8.jpg",
    "/graphics9.jpg",
    "/graphics10.jpg",
  ];

  const [index, setIndex] = useState(0);

  const nextImage = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">Graphics Design Portfolio</h1>

      <div className="relative w-full max-w-3xl h-[500px] perspective">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg overflow-hidden"
            initial={{ rotateY: 180, opacity: 0 }}
            animate={i === index ? { rotateY: 0, opacity: 1 } : { rotateY: 180, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
          >
            <Image
              src={src}
              alt={`Graphic ${i + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
              priority={i === index}
            />
          </motion.div>
        ))}
      </div>

      <button
        onClick={nextImage}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Next Page →
      </button>
    </div>
  );
}
