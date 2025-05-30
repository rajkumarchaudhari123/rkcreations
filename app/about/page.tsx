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
          We are a cutting-edge digital agency specializing in Web & App Development, Digital Marketing, UI/UX, and Graphic Design.
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
          RK Creation is a full-stack development agency transforming ideas into scalable, high-performance digital solutions.
        </p>
      </motion.div>

      {/* Our Mission & Vision */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.7, duration: 0.8 }}
        className="relative z-10 mt-12 max-w-4xl bg-black bg-opacity-80 p-10 rounded-3xl shadow-xl border border-white/20 backdrop-blur-md text-center"
      >
        <h2 className="text-3xl font-semibold text-white">Our Mission & Vision</h2>
        <p className="mt-4 text-gray-300 text-lg">
          🚀 <strong>Mission:</strong> Deliver high-quality, innovative digital solutions.  
          🎯 <strong>Vision:</strong> To be a leading global tech agency driving digital transformation.
        </p>
      </motion.div>

      {/* Call to Action */}
      <motion.div className="relative z-10 mt-16 text-center">
        <h2 className="text-4xl font-bold text-white">Let’s Create Something Extraordinary</h2>
        <p className="text-white mt-2 text-lg">Partner with us for your next big project.</p>
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
