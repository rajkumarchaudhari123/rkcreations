"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLaptopCode, FaBullhorn, FaPaintBrush, FaMobileAlt, FaPhotoVideo } from "react-icons/fa";

export default function ServicesPage() {
  return (
    <div className="min-h-screen text-white flex flex-col items-center p-6 font-sans relative overflow-hidden ">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center mt-12 relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Our Services
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white max-w-3xl mx-auto font-bold">
          Empowering businesses with cutting-edge digital solutions.
        </p>
      </motion.div>

      {/* Services Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl relative z-10"
      >
        {[ 
          { title: "Web Development", desc: "Crafting high-performance websites with Next.js and React.", icon: <FaLaptopCode /> },
          { title: "Digital Marketing", desc: "Boost your brand with strategic marketing solutions.", icon: <FaBullhorn /> },
          { title: "UI/UX Design", desc: "Creating user-centric and visually appealing interfaces.", icon: <FaPaintBrush /> },
          { title: "App Development", desc: "Building mobile applications for iOS and Android.", icon: <FaMobileAlt /> },
          { title: "Graphics Design", desc: "Designing creative and engaging visuals for brands.", icon: <FaPaintBrush /> },
          { title: "Video Editing", desc: "Professional video editing services for all needs.", icon: <FaPhotoVideo /> },
        ].map((service, index) => (
          <div key={index} className="bg-black p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-700 text-center flex flex-col items-center">
            <div className="text-5xl text-[#ff512f] mb-4">{service.icon}</div>
            <h2 className="text-2xl font-bold text-white">{service.title}</h2>
            <p className="text-white mt-3 text-base font-bold">{service.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Contact Section */}
      <motion.div className="mt-20 text-center relative z-10">
        <h2 className="text-4xl font-bold text-white">Let’s Work Together</h2>
        <p className="text-white mt-2 text-lg font-bold">Transform your vision into reality with our expertise.</p>
        <Link href="/contact" className="mt-6 inline-block bg-yellow-400 text-black px-8 py-4 text-lg font-bold rounded-lg transition-all hover:bg-yellow-300">
          Contact Us
        </Link>
      </motion.div>
    </div>
  );
}
