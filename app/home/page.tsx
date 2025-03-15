"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFilm } from "react-icons/fa";

import Link from "next/link";
import { FaLaptopCode, FaBullhorn, FaPaintBrush, FaMobileAlt, FaCheckCircle, FaPhotoVideo } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className=" text-white flex flex-col items-center font-sans relative min-h-screen">
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center mt-16 md:mt-24 px-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold">Welcome to RK Creation</h1>
        <p className="mt-4 text-lg md:text-xl text-slate-900 max-w-3xl mx-auto">
          Transforming ideas into digital reality with cutting-edge solutions.
        </p>
        <Link href="/contact" className="mt-6 inline-block bg-[#1a1a2e] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:bg-[#e84118]">
          Get Started
        </Link>
      </motion.div>

      {/* Services Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl px-6"
      >
        {[ 
          { title: "Web Development", desc: "Crafting high-performance websites with Next.js and React.", icon: <FaLaptopCode /> },
          { title: "Digital Marketing", desc: "Boost your brand with strategic marketing solutions.", icon: <FaBullhorn /> },
          { title: "UI/UX Design", desc: "Creating user-friendly and visually stunning designs.", icon: <FaPaintBrush /> },
          { title: "App Development", desc: "Building mobile applications for iOS and Android.", icon: <FaMobileAlt /> },
          { title: "Graphics Design", desc: "Designing creative and engaging visuals for brands.", icon: <FaPaintBrush /> },
          { title: "Video Editing", desc: "Professional video editing services for all needs.", icon: <FaPhotoVideo /> },
          { title: "Motion Graphics", desc: "Animations, visual effects, and 3D graphics.", icon: <FaFilm /> },
        ].map((service, index) => (
          <div key={index} className="bg-black p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-700 text-center flex flex-col items-center">
            <div className="text-5xl text-[#ff512f] mb-4">{service.icon}</div>
            <h2 className="text-2xl font-bold text-white">{service.title}</h2>
            <p className="text-gray-400 mt-3 text-base">{service.desc}</p>
          </div>
        ))}
      </motion.div>

      <Link href="/services" className="mt-8 inline-block bg-[#1a1a2e] text-white px-6 py-3 text-lg font-semibold rounded-lg transition-all hover:bg-[#e84118]">
        View All Services
      </Link>

      {/* Why Choose Us */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-20 text-center px-6 max-w-4xl"
      >
        <h2 className="text-4xl font-bold">Why Choose RK Creation?</h2>
        <p className="text-slate-900 mt-4 text-lg">
          We are committed to delivering top-notch digital solutions that help businesses grow.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[ 
            "Experienced Professionals",
            "Cutting-Edge Technologies",
            "Client-Centric Approach",
            "Timely Project Delivery",
          ].map((point, index) => (
            <div key={index} className="flex items-center space-x-3">
              <FaCheckCircle className="text-[#ff512f] text-xl" />
              <p className="text-lg text-white">{point}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Contact CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-20 text-center"
      >
        <h2 className="text-4xl font-bold text-white">Let’s Work Together</h2>
        <p className="text-slate-900 mt-2 text-lg">Let's bring your vision to life with our expertise.</p>
        <Link href="/contact" className="mt-6 inline-block bg-yellow-400 text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:bg-[#e84118]">
          Contact Us
        </Link>
      </motion.div>

      {/* Footer */}
      <div className="mt-16 w-full bg-[#151a30] text-white text-center py-6">
        <p>© {new Date().getFullYear()} RK Creation. All rights reserved.</p>
      </div>
    </div>
  );
}