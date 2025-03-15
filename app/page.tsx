'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaPaintBrush, FaVideo, FaBullhorn, FaFilm } from 'react-icons/fa';
import { IconType } from 'react-icons';   

// Image Paths (Must be in /public folder)
const images = ['/slider1.jpg', '/slider2.jpg', '/slider3.jpg'];

// Service Card Component
interface ServiceProps {
  icon: IconType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon: Icon, title, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.6 }} 
      className='bg-black bg-opacity-20 p-6 rounded-lg shadow-md text-center'
    >
      <Icon className='text-4xl text-blue-400 mx-auto' />
      <h3 className='text-xl font-semibold mt-3'>{title}</h3>
      <p className='text-gray-300 text-sm mt-2'>{description}</p>
    </motion.div>
  );
};

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen pt-14'>
      {/* Full-Width Slider Section */}
      <div className='relative w-full h-[50vh] sm:h-[80vh] md:h-[100vh] overflow-hidden'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className='absolute inset-0 w-full h-full'
          >
            <Image 
              src={images[index]} 
              alt='Slider Image'
              width={1920}
              height={1080}
              priority
              className='w-full h-full object-cover'
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RK Creations About Section */}
      <div className='mt-10 w-full max-w-5xl text-center px-6 mb-2 py-10 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg shadow-lg'>
        <motion.h2 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className='text-4xl font-extrabold'
        >
          Welcome to <span className='text-blue-500'>RK Creations</span>
        </motion.h2>
        <p className='mt-4 text-lg text-gray-300'>
          Transforming ideas into reality with top-notch web & app development, digital marketing, video editing, and design services. 🚀  
          Let's build something amazing together!
        </p>

        {/* Services Section */}
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <ServiceCard 
            icon={FaCode} 
            title='Web Development' 
            description='Next.js, React, and modern web solutions.' 
          />
          <ServiceCard 
            icon={FaPaintBrush} 
            title='Graphic Design' 
            description='Logos, UI/UX, Social Media Designs, and Branding.' 
          />
          <ServiceCard 
            icon={FaVideo} 
            title='Video Editing' 
            description='Cinematic effects, motion graphics, and ad editing.' 
          />
          <ServiceCard 
            icon={FaBullhorn} 
            title='Digital Marketing' 
            description='SEO, Social Media Ads, and Branding Strategies.' 
          />
          <ServiceCard 
            icon={FaCode} 
            title='App Development' 
            description='React Native, Flutter, and full-stack mobile apps.' 
          />
          <ServiceCard 
            icon={FaPaintBrush} 
            title='Graphics Design' 
            description='Creative posters, branding, and visual storytelling.' 
          />
          <ServiceCard 
            icon={FaFilm} 
            title='Motion Graphics' 
            description='Animations, visual effects, and 3D graphics.' 
          />
        </div>

        {/* CTA Buttons */}
        <div className='mt-8 flex flex-wrap justify-center gap-4'>
          <a
            href='/services'
            className='px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition'
          >
            Explore Services
          </a>
          <a
            href='/contact'
            className='px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition'
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}