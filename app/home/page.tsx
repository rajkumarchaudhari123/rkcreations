'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaFilm, FaObjectGroup } from 'react-icons/fa';
import Link from 'next/link';
import { FaLaptopCode, FaBullhorn, FaPaintBrush, FaMobileAlt, FaCheckCircle, FaPhotoVideo } from 'react-icons/fa';

export default function HomePage() {
  return (
   <div className="text-white font-bold flex flex-col items-center m-2.5 font-sans relative min-h-screen">
  <div className="relative w-full h-[75vh] sm:h-[85vh] md:h-screen overflow-hidden">
  <video
    src="/home video.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover object-center"
  >
    Your browser does not support the video tag.
  </video>

  {/* Text Overlay */}
  <div className="absolute  font-serif font-bold flex-col inset-0 flex items-center justify-center md:justify-center px-4 md:px-10 ">
    <h2 className=" text-2xl sm:text-3xl md:text-5xl font-bold text-center md:text-left leading-tight bg-gradient-to-b from-purple-500 via-green-500 to-red-500 text-transparent bg-clip-text">
      Welcome to Our Agency
    </h2>
    <p className='text-sm font-serif font-bold sm:text-base md:text-lg mt-4 max-w-4xl bg-gradient-to-t from-blue-500 via-yellow-500 to-teal-500 text-transparent bg-clip-text'>
    At RK Creations, we don&apos;t just build websites — we craft digital experiences that elevate your brand, connect with your audience, and drive results. Your growth is our mission, and innovation is at the heart of everything we do.</p>
  </div>
</div>



      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className='text-center mt-16 md:mt-24 px-6'
      >
        <h1 className='text-5xl md:text-7xl font-serif font-bold text-white'>
          Welcome to <span className="text-[#ff512f]">RK Creation</span>
        </h1>
        <p className='mt-4 text-lg md:text-xl text-white max-w-3xl font-serif mx-auto'>
          Transforming ideas into digital reality with cutting-edge solutions.
        </p>
        <Link href='/contact' className='mt-6 inline-block bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:bg-[#e84118]'>
          Get Started
        </Link>
      </motion.div>

      {/* Services Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5, duration: 0.8 }}
        className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl px-6'
      >
        {[
          { title: 'Web Development', desc: 'Crafting high-performance websites with Next.js and React.', icon: <FaLaptopCode /> },
          { title: 'Digital Marketing', desc: 'Boost your brand with strategic marketing solutions.', icon: <FaBullhorn /> },
          { title: 'UI/UX Design', desc: 'Creating user-friendly and visually stunning designs.', icon: <FaPaintBrush /> },
          { title: 'App Development', desc: 'Building mobile applications for iOS and Android.', icon: <FaMobileAlt /> },
          { title: 'Graphics Design', desc: 'Creative branding and visuals that stand out.', icon: <FaObjectGroup /> },
          { title: 'Video Editing', desc: 'Professional video editing services for all needs.', icon: <FaPhotoVideo /> },
          { title: 'Motion Graphics', desc: 'Animations, VFX, and 3D visuals.', icon: <FaFilm /> },
        ].map((service, index) => (
          <div key={index} className='bg-black p-8  font-serif rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-700 text-center flex flex-col items-center'>
            <div className='text-5xl font-serif  text-[#ff512f] mb-4'>{service.icon}</div>
            <h2 className='text-2xl font-serif  font-bold text-white'>{service.title}</h2>
            <p className='text-white mt-3 font-serif  text-base'>{service.desc}</p>
          </div>
        ))}
      </motion.div>

      

      {/* Why Choose Us */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.8, duration: 0.8 }}
        className='mt-20 text-center px-6 max-w-4xl'
      >
        <h2 className='text-4xl font-bold text-white font-serif'>Why Choose RK Creation?</h2>
        <p className='text-slate-200 mt-4 font-serif text-lg'>
          We are committed to delivering top-notch digital solutions that help businesses grow.
        </p>
        <div className='mt-6 grid grid-cols-1  font-serif md:grid-cols-2 gap-6'>
          {[ 
            'Experienced Professionals',
            'Cutting-Edge Technologies',
            'Client-Centric Approach',
            'Timely Project Delivery',
          ].map((point, index) => (
            <div key={index} className='flex items-center space-x-3'>
              <FaCheckCircle className='text-[#ff512f] text-xl' />
              <p className='text-lg text-slate-300'>{point}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Contact CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 1, duration: 0.8 }}
        className='mt-20 text-center'
      >
        <h2 className='text-4xl font-serif font-bold text-white'>Let&apos;s Work Together</h2>
        <p className='text-slate-300 mt-2  font-serif text-lg'>Let&apos;s bring your vision to life with our expertise.</p>
        <Link href='/contact' className='mt-6  font-serif inline-block bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500  mb-2 text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:bg-[#e8c547]'>
          Contact Us
        </Link>
      </motion.div>
    </div>
  );
}
