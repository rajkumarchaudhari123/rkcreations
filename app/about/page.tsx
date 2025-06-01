"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen  text-white flex flex-col mt-2.5 items-center px-6 py-12 font-sans overflow-hidden">
      {/* Floating Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-5xl bg-black bg-opacity-80 backdrop-blur-md p-12 rounded-3xl shadow-xl border border-white/20"
      >
        <h1 className="text-6xl font-extrabold  bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-transparent bg-clip-text">
          About RK Creation
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          We are a cutting-edge digital agency specializing in Web & App
          Development, Digital Marketing, UI/UX, and Graphic Design.
        </p>
      </motion.div>

      {/* Who We Are Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-10 mt-12 max-w-4xl bg-black bg-opacity-80 p-10 rounded-3xl shadow-xl border border-white/20 backdrop-blur-md text-center"
      >
        <h2 className="text-3xl font-semibold text-white">Who We Are</h2>
        <p className="mt-4 text-gray-300 text-lg">
          RK Creation is a full-stack development agency transforming ideas into
          scalable, high-performance digital solutions.
        </p>
      </motion.div>

      {/* Our Mission & Vision */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="relative z-10 mt-12 max-w-4xl bg-black bg-opacity-80 p-10 rounded-3xl shadow-xl border border-white/20 backdrop-blur-md text-center"
      >
        <h2 className="text-3xl font-semibold text-white">
          Our Mission & Vision
        </h2>
        <p className="mt-4 text-gray-300 text-lg">
          🚀 <strong>Mission:</strong> Deliver high-quality, innovative digital
          solutions. 🎯 <strong>Vision:</strong> To be a leading global tech
          agency driving digital transformation.
        </p>
      </motion.div>

      {/* Call to Action */}
      <motion.div className="relative z-10 mt-16 text-center">
        <h2 className="text-4xl font-bold text-white">
          Let’s Create Something Extraordinary
        </h2>
        <p className="text-white mt-2 text-lg">
          Partner with us for your next big project.
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-transparent bg-clip-text text-center my-10">
          Meet Our Team
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-4">
          {/* Rajkumar */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-md w-full md:w-1/3">
            <h2 className="text-center text-2xl font-bold text-white mb-2">
              Rajkumar – Founder & Visionary 🚀
            </h2>
            <p className="text-amber-300 font-medium text-center">
              I’m Rajkumar, a passionate full-stack web developer and the
              creative force behind RK Creations. With years of hands-on
              experience and a strong background in Next.js, React, Firebase,
              Tailwind CSS, and modern web technologies.
            </p>
          </div>

          {/* Sunita Devi */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-md w-full md:w-1/3">
            <h2 className="text-center text-2xl font-bold text-white mb-2">
              Sunita Devi – Digital Marketing Expert
            </h2>
            <p className="text-amber-300 font-medium text-center">
              I’m Sunita Devi, a seasoned digital marketing expert with proven
              experience in boosting online presence, engagement, and growth for
              businesses across various industries.
            </p>
          </div>

          {/* Aabha Chaturvedi */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-md w-full md:w-1/3">
            <h2 className="text-center text-2xl font-bold text-white mb-2">
              Aabha Chaturvedi – Graphic Designer
            </h2>
            <p className="text-amber-300 font-medium text-center">
              I’m Aabha Chaturvedi, a highly experienced graphic designer with a
              passion for creating visually compelling and impactful designs —
              from logos and branding to social media creatives and marketing
              materials.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="relative inline-block px-6 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 overflow-hidden group hover:scale-105 transition-transform duration-300"
          >
            <span className="relative z-10">Contact Us</span>
            <span className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:blur-sm before:animate-glow before:rounded-full" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
