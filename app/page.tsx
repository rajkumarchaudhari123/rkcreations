// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Sparkles, Code, Palette, Rocket, Globe, Brain, Zap } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiExpo, SiMysql } from "react-icons/si";
import Image from "next/image";

// Unsplash images for slideshow
const unsplashImages = [
  "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
];

// Brands data
const brands = [
  { id: 1, name: "Probey Services", logo: "/brands/techstart.svg" },
  { id: 2, name: "LzyCrazy", logo: "/brands/nova.svg" },
  { id: 3, name: "Algu Tech Solution", logo: "/brands/quantum.svg" },
  { id: 4, name: "IT ATMOZ", logo: "/brands/urban.svg" },
  { id: 5, name: "Canvas Chrome Design", logo: "/brands/solar.svg" },
  { id: 6, name: "Enclave Studios", logo: "/brands/zenith.svg" },
  { id: 7, name: "TheTechUniqueAcademy", logo: "/brands/apex.svg" },
  { id: 8, name: "Global Info Edge", logo: "/brands/visionary.svg" },
];

// Technologies data (for section 3)
const technologies = [
  { name: "Next.js", icon: <Globe className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: "React", icon: <Code className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: "React Native", icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: "Tailwind CSS", icon: <Palette className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: "Node.js", icon: <Zap className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: "Firebase", icon: <Rocket className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: "SQL", icon: <Brain className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: "AI Tools", icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8" /> },
];

// Process steps
const processSteps = [
  { number: "01", title: "Discover", description: "Understanding your vision" },
  { number: "02", title: "Design", description: "Creating immersive experiences" },
  { number: "03", title: "Develop", description: "Building with precision" },
  { number: "04", title: "Launch", description: "Scaling to success" },
];

// Tools data (for section 5)
const tools = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-3xl sm:text-4xl md:text-5xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-3xl sm:text-4xl md:text-5xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-3xl sm:text-4xl md:text-5xl" /> },
  {
    name: "React",
    icon: <FaReact className="text-cyan-500 text-3xl sm:text-4xl md:text-5xl animate-spin-slow" />,
  },
  { name: "Next.js", icon: <SiNextdotjs className="text-black text-3xl sm:text-4xl md:text-5xl" /> },
  {
    name: "React Native Expo",
    icon: <SiExpo className="text-gray-700 text-3xl sm:text-4xl md:text-5xl" />,
  },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-3xl sm:text-4xl md:text-5xl" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-700 text-3xl sm:text-4xl md:text-5xl" /> },
];

// Custom animations
const spinAnimation = `
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(255, 20, 147, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(255, 20, 147, 0.6);
  }
}

.animate-pulse-glow {
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.animate-shimmer {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  background-size: 1000px 100%;
  animation: shimmer 3s infinite linear;
}
`;

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollY } = useScroll();

  // Auto slideshow for hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % unsplashImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Track scroll position for parallax effects
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.2]);
  const heroY = useTransform(scrollY, [0, 300], [0, -100]);

  // Handle scroll snap
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll("section");
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative">
      {/* Add custom CSS animations */}
      <style jsx global>{spinAnimation}</style>

      {/* Navigation Dots */}
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
        {[...Array(8)].map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === i
                ? "bg-[#ff1493] scale-125"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Mobile Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50 md:hidden">
        <motion.div
          className="h-full bg-[#ff1493]"
          animate={{ width: `${((currentSection + 1) / 8) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Hero Section with Unsplash Slideshow */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Unsplash Images Slideshow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src={unsplashImages[currentImageIndex]}
              alt={`Hero image ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80" />
          </motion.div>
        </AnimatePresence>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#ff1493] rounded-full"
              initial={{
                x: Math.random() * 100 + "vw",
                y: Math.random() * 100 + "vh",
              }}
              animate={{
                y: [null, "-100vh"],
                x: [null, Math.random() * 100 - 50 + "vw"],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10 text-center w-full max-w-6xl mx-auto px-4"
          style={{ y: heroY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4 md:mb-6"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-[#ff1493] mx-auto" />
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 font-space-grotesk text-white leading-tight">
              <span className="block">We Build</span>
              <span className="block text-[#ff1493] mt-2 relative">
                Future-Ready
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff1493] to-transparent"
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
              <span className="block mt-2">Digital Experiences</span>
            </h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-10 font-inter text-white px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Web • App • AI • Design • Branding
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#ff1493] to-pink-600 text-white font-semibold rounded-full flex items-center gap-2 group hover:shadow-xl hover:shadow-[#ff1493]/30 transition-all text-sm sm:text-base w-full sm:w-auto justify-center animate-pulse-glow"
              >
                Start Your Project
                <ArrowRight className="group-hover:translate-x-2 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:border-white/50 hover:bg-white/5 transition-all text-sm sm:text-base w-full sm:w-auto"
              >
                View Our Work
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-white/60" />
        </motion.div>
      </section>

      {/* Section 01: Who We Are */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-black relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-[#ff1493]/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-pink-500/5 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center px-4 relative z-10"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 md:mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="font-orbitron text-[#ff1493] text-xl md:text-2xl">01</span>
            <motion.div 
              className="w-16 md:w-20 h-px bg-gradient-to-r from-[#ff1493] to-pink-500"
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
          
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 font-space-grotesk text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            We Transform Ideas Into <span className="text-[#ff1493]">Digital Reality</span>
          </motion.h2>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-inter text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            RK Creations is a digital agency focused on creating immersive, scalable, 
            and future-ready experiences that push boundaries and deliver results.
          </motion.p>
        </motion.div>
      </section>

      {/* Section 02: Founder & Vision */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-gradient-to-b from-black to-gray-900 relative">
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#ff1493]/20 rounded-full"
              initial={{
                x: Math.random() * 100 + "vw",
                y: Math.random() * 100 + "vh",
              }}
              animate={{
                y: [null, Math.random() * 100 - 50 + "vh"],
                x: [null, Math.random() * 100 - 50 + "vw"],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6 md:mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="font-orbitron text-[#ff1493] text-xl md:text-2xl">02</span>
              <motion.div 
                className="w-16 md:w-20 h-px bg-gradient-to-r from-[#ff1493] to-purple-500"
                initial={{ width: 0 }}
                whileInView={{ width: "5rem" }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
            
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 font-space-grotesk text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Built with <span className="text-[#ff1493]">Vision & Purpose</span>
            </motion.h2>
            
            <motion.div 
              className="space-y-4 md:space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#ff1493] mb-2">
                  Rajkumar
                </h3>
                <p className="text-base md:text-lg text-gray-300 font-inter text-white">
                  Founder & Lead Developer
                </p>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-inter text-white">
                RK Creations is founded by Rajkumar — a passionate developer
                and creator focused on building modern, scalable, and
                future-ready digital experiences for brands and startups.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative mt-8 md:mt-0"
          >
            {/* Animated founder representation */}
            <motion.div
              className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#ff1493]/5 to-pink-500/5"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated gradient rings */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 border-4 border-[#ff1493]/20 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 border-2 border-pink-500/10 rounded-full" />
              </motion.div>
              
              {/* Floating profile */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.div
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full border-4 border-[#ff1493]/30 mx-auto mb-4 md:mb-6 flex items-center justify-center bg-gradient-to-br from-[#ff1493]/10 to-pink-500/10 backdrop-blur-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#ff1493]">R</span>
                </motion.div>
                <div className="text-white/80 font-space-grotesk text-lg md:text-xl animate-pulse">
                  Visionary Leader
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 03: What We Build */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-black relative">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px),
                            linear-gradient(to bottom, #888 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto text-center px-4 relative z-10"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-8 md:mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="font-orbitron text-[#ff1493] text-xl md:text-2xl">03</span>
            <motion.div 
              className="w-16 md:w-20 h-px bg-gradient-to-r from-[#ff1493] to-pink-500"
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
          
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 md:mb-12 font-space-grotesk text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Digital Solutions That <span className="text-[#ff1493]">Scale</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { title: "Web Platforms", desc: "Scalable web applications", icon: "🌐" },
              { title: "Mobile Apps", desc: "Native & cross-platform", icon: "📱" },
              { title: "AI Integrations", desc: "Smart automation", icon: "🤖" },
              { title: "UI/UX Design", desc: "Immersive experiences", icon: "🎨" },
              { title: "Brand Identity", desc: "Memorable branding", icon: "🏷️" },
              { title: "E-commerce", desc: "High-conversion stores", icon: "🛒" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm group hover:border-[#ff1493]/30 transition-all relative overflow-hidden"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 animate-shimmer" />
                
                <motion.div
                  className="text-3xl md:text-4xl mb-3 md:mb-4"
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 2, delay: index * 0.2 }}
                >
                  {item.icon}
                </motion.div>
                
                <motion.div
                  className="text-3xl md:text-4xl text-[#ff1493]/20 mb-3 md:mb-4 font-orbitron"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  0{index + 1}
                </motion.div>
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-4 text-white group-hover:text-[#ff1493] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-400 text-white">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 04: Tools Section (Updated with animations) */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff1493] to-transparent"
            animate={{ x: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"
            animate={{ x: ["100%", "0%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          />
          
          {/* Floating particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#ff1493] rounded-full"
              initial={{
                x: Math.random() * 100 + "vw",
                y: Math.random() * 100 + "vh",
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: [null, "-100vh"],
                x: [null, Math.random() * 100 - 50 + "vw"],
                scale: [null, Math.random() + 0.5],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto w-full text-center px-4 relative z-10"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 md:mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="font-orbitron text-[#ff1493] text-xl md:text-2xl">04</span>
            <motion.div 
              className="w-16 md:w-20 h-px bg-gradient-to-r from-[#ff1493] to-pink-500"
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
          
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-[#ff512f] via-[#ff1493] to-[#dd2476] text-transparent bg-clip-text text-center mb-8 md:mb-16 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Built Using <motion.span 
              className="inline-block"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Trusted & Scalable
            </motion.span> Tools
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8 max-w-6xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -10,
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <ToolCard name={tool.name} icon={tool.icon} index={index} />
              </motion.div>
            ))}
          </div>

          {/* Animated tech stack text */}
          <motion.div
            className="mt-12 md:mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-gray-400 text-sm md:text-base">
              Modern Stack • Scalable Architecture • Optimal Performance
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 05: Our Process */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-black relative">
        {/* Animated connecting lines background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff1493" />
                <stop offset="100%" stopColor="#ff1493" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[...Array(20)].map((_, i) => (
              <motion.line
                key={i}
                x1={Math.random() * 100 + "%"}
                y1="0%"
                x2={Math.random() * 100 + "%"}
                y2="100%"
                stroke="url(#gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
              />
            ))}
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto px-4 relative z-10"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-8 md:mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="font-orbitron text-[#ff1493] text-xl md:text-2xl">05</span>
            <motion.div 
              className="w-16 md:w-20 h-px bg-gradient-to-r from-[#ff1493] to-pink-500"
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
          
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 md:mb-12 text-center font-space-grotesk text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Simple Process, <motion.span 
              className="text-[#ff1493] inline-block"
              animate={{ textShadow: ["0 0 10px #ff1493", "0 0 20px #ff1493", "0 0 10px #ff1493"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Extraordinary Results
            </motion.span>
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className="text-center relative"
                whileHover={{ scale: 1.05 }}
              >
                {/* Connecting dots */}
                {index < 3 && (
                  <motion.div
                    className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-[#ff1493] rounded-full animate-pulse" />
                      <motion.div
                        className="w-8 h-1 bg-gradient-to-r from-[#ff1493] to-transparent"
                        initial={{ width: 0 }}
                        whileInView={{ width: "2rem" }}
                        transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
                      />
                      <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-[#ff1493]" />
                    </div>
                  </motion.div>
                )}
                
                <motion.div
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#ff1493]/20 mb-3 md:mb-4 font-orbitron"
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(255,20,147,0)",
                      "0 0 20px rgba(255,20,147,0.5)",
                      "0 0 20px rgba(255,20,147,0)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {step.number}
                </motion.div>
                
                <motion.h3
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                >
                  {step.title}
                </motion.h3>
                
                <motion.p
                  className="text-sm sm:text-base text-gray-400 text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  {step.description}
                </motion.p>
                
                {index < 2 && (
                  <motion.div
                    className="lg:hidden block w-full h-px my-6 sm:my-8 bg-gradient-to-r from-[#ff1493] to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 06: Brands Marquee */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-gradient-to-b from-black to-gray-900 relative">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 border border-[#ff1493] rounded-full"
              style={{
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto w-full px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-8 md:mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6 md:mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="font-orbitron text-[#ff1493] text-xl md:text-2xl">06</span>
              <motion.div 
                className="w-16 md:w-20 h-px bg-gradient-to-r from-[#ff1493] to-purple-500"
                initial={{ width: 0 }}
                whileInView={{ width: "5rem" }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
            
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 font-space-grotesk text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              We Work With <span className="text-[#ff1493]">Top Brands & Startups</span>
            </motion.h2>
            
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Trusted by innovative companies worldwide
            </motion.p>
          </motion.div>

          {/* Desktop Marquee */}
          <div className="hidden md:block relative overflow-hidden py-6 md:py-8">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-black to-transparent z-10" />

            {/* Marquee */}
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex gap-6 md:gap-8"
            >
              {[...brands, ...brands].map((brand, index) => (
                <motion.div
                  key={`${brand.id}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -10,
                    rotateY: 180,
                    transition: { duration: 0.5 }
                  }}
                  className="flex-shrink-0 w-40 h-24 md:w-48 md:h-32 rounded-xl md:rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm flex items-center justify-center p-4 md:p-6 hover:border-[#ff1493]/30 transition-all group"
                >
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 md:mb-2 group-hover:text-[#ff1493] transition-colors">
                      {brand.name.split(" ")[0]}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400 group-hover:text-white transition-colors">
                      {brand.name.split(" ")[1]}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile-friendly brands grid */}
          <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {brands.map((brand) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="h-20 sm:h-24 md:h-28 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 group hover:border-[#ff1493]/30"
              >
                <div className="text-center">
                  <div className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-[#ff1493] transition-colors">
                    {brand.name.split(" ")[0]}
                  </div>
                  <div className="text-xs text-gray-400 group-hover:text-white transition-colors">
                    {brand.name.split(" ")[1]}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 07: Portfolio Highlights */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-black relative">
        {/* Animated stats background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[#ff1493]/10 font-bold text-4xl md:text-6xl"
              style={{
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              {["100%", "50+", "40%"][i % 3]}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto text-center px-4 relative z-10"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-8 md:mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="font-orbitron text-[#ff1493] text-xl md:text-2xl">07</span>
            <motion.div 
              className="w-16 md:w-20 h-px bg-gradient-to-r from-[#ff1493] to-pink-500"
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
          
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 md:mb-12 font-space-grotesk text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Impactful Projects, <motion.span 
              className="text-[#ff1493] inline-block"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Measurable Results
            </motion.span>
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { metric: "100%", label: "Client Satisfaction", icon: "🎯" },
              { metric: "50+", label: "Projects Delivered", icon: "🚀" },
              { metric: "40%", label: "Average Growth", icon: "📈" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl lg:rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm group hover:border-[#ff1493]/30 relative overflow-hidden"
              >
                {/* Rotating ring */}
                <motion.div
                  className="absolute inset-4 border-2 border-[#ff1493]/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                <motion.div
                  className="text-2xl md:text-3xl mb-3 md:mb-4"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {item.icon}
                </motion.div>
                
                <motion.div
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#ff1493] mb-2 md:mb-4"
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(255,20,147,0)",
                      "0 0 20px rgba(255,20,147,0.5)",
                      "0 0 20px rgba(255,20,147,0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {item.metric}
                </motion.div>
                
                <motion.div
                  className="text-base sm:text-lg md:text-xl font-semibold text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  {item.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          <motion.button
            whileHover={{ 
              scale: 1.05,
              background: "linear-gradient(45deg, #ff1493, #ff512f)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 md:mt-12 px-6 py-3 sm:px-8 sm:py-4 border-2 border-[#ff1493] text-[#ff1493] font-semibold rounded-full hover:bg-[#ff1493]/10 transition-all text-sm sm:text-base group"
          >
            <span className="group-hover:scale-110 transition-transform inline-block">
              View Case Studies
            </span>
          </motion.button>
        </motion.div>
      </section>

      {/* Section 08: Final CTA */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-[#ff1493]/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#ff1493] rounded-full"
              initial={{
                x: Math.random() * 100 + "vw",
                y: Math.random() * 100 + "vh",
              }}
              animate={{
                y: [null, "-100vh"],
                x: [null, Math.random() * 100 - 50 + "vw"],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center px-4 relative z-10"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 md:mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="font-orbitron text-[#ff1493] text-xl md:text-2xl">08</span>
            <motion.div 
              className="w-16 md:w-20 h-px bg-gradient-to-r from-[#ff1493] to-purple-500"
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
          
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 font-space-grotesk text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Ready to Build Something <motion.span 
              className="text-[#ff1493] inline-block"
              animate={{ 
                scale: [1, 1.1, 1],
                textShadow: ["0 0 10px #ff1493", "0 0 30px #ff1493", "0 0 10px #ff1493"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Powerful?
            </motion.span>
          </motion.h2>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-12 font-inter text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Let&apos;s create your next digital masterpiece together.
          </motion.p>
          
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px rgba(255, 20, 147, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6 bg-gradient-to-r from-[#ff1493] to-pink-500 text-white text-base sm:text-lg md:text-xl font-bold rounded-full flex items-center gap-2 md:gap-3 mx-auto group hover:shadow-xl hover:shadow-[#ff1493]/30 transition-all relative overflow-hidden"
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="relative z-10">Let&apos;s Start</span>
            <ArrowRight className="group-hover:translate-x-2 md:group-hover:translate-x-2 transition-transform w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
          </motion.button>

          {/* Footer */}
          <motion.div
            className="mt-12 md:mt-16 lg:mt-24 pt-6 md:pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-space-grotesk text-white">
              RK Creations
            </div>
            <p className="text-sm md:text-base text-gray-400 text-white">
              Future-ready digital experiences. Founded by Rajkumar.
            </p>
            <motion.p
              className="text-xs md:text-sm text-gray-500 mt-4 md:mt-8 text-white"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              © {new Date().getFullYear()} RK Creations. All rights reserved.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

// Updated ToolCard Component with animations
function ToolCard({ name, icon, index }: { name: string; icon: React.ReactNode; index: number }) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        boxShadow: "0 20px 40px rgba(255, 20, 147, 0.3)"
      }}
      className="flex flex-col items-center p-3 sm:p-4 md:p-6 bg-gradient-to-b from-white to-gray-50 border border-gray-800 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition duration-300 relative overflow-hidden group"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#ff1493]/0 via-[#ff1493]/5 to-[#ff1493]/0"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Icon with animation */}
      <motion.div
        className="relative z-10"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: index % 2 === 0 ? [0, 10, -10, 0] : [0, -10, 10, 0]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          delay: index * 0.2 
        }}
      >
        {icon}
      </motion.div>
      
      {/* Tool name with hover effect */}
      <motion.h3
        className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg font-semibold text-gray-800 text-center relative z-10"
        whileHover={{ color: "#ff1493" }}
        transition={{ duration: 0.3 }}
      >
        {name}
      </motion.h3>
      
      {/* Decorative dot */}
      <motion.div
        className="absolute bottom-2 right-2 w-2 h-2 bg-[#ff1493] rounded-full opacity-0 group-hover:opacity-100"
        animate={{ scale: [0, 1.5, 1] }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}