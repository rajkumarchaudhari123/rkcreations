// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight, Sparkles, Code, Palette, Rocket, Globe, Brain, Zap } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiExpo, SiMysql } from "react-icons/si";

// Brands data - easy to add/remove
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

// Technologies data
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

// Tools data
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

// Custom animation for slow spin
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
`;

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const { scrollY } = useScroll();

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
      {/* Add custom CSS for spin animation */}
      <style jsx global>{spinAnimation}</style>

      {/* Navigation Dots */}
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
        {[...Array(9)].map((_, i) => (
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
          animate={{ width: `${((currentSection + 1) / 9) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
          style={{ scale: heroScale, opacity: heroOpacity }}
        >
          {/* Animated background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-[#ff1493]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-pink-500/10 rounded-full blur-3xl" />
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 text-center w-full max-w-6xl mx-auto px-4"
          style={{ y: heroY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 font-space-grotesk text-white leading-tight">
              <span className="block">We Build</span>
              <span className="block text-[#ff1493] mt-2">Future-Ready</span>
              <span className="block mt-2">Digital Experiences</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-10 font-inter text-white px-2">
              Web • App • AI • Design • Branding
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-[#ff1493] text-white font-semibold rounded-full flex items-center gap-2 group hover:bg-[#ff1493]/90 transition-all text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                Start Your Project
                <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:border-white/50 transition-all text-sm sm:text-base w-full sm:w-auto"
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
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center px-4"
        >
          <div className="inline-flex items-center gap-2 mb-6 md:mb-8">
            <span className="font-orbitron text-[#ff1493] text-xl md:text-2xl">01</span>
            <div className="w-16 md:w-20 h-px bg-gradient-to-r from-[#ff1493] to-pink-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 font-space-grotesk text-white leading-tight">
            We Transform Ideas Into <span className="text-[#ff1493]">Digital Reality</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-inter text-white">
            RK Creations is a digital agency focused on creating immersive, scalable, 
            and future-ready experiences that push boundaries and deliver results.
          </p>
        </motion.div>
      </section>

      {/* Section 02: Founder & Vision */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 md:mb-8">
              <span className="font-orbitron text-[#ff1493] text-xl md:text-2xl">02</span>
              <div className="w-16 md:w-20 h-px bg-gradient-to-r from-[#ff1493] to-purple-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 font-space-grotesk text-white leading-tight">
              Built with <span className="text-[#ff1493]">Vision & Purpose</span>
            </h2>
            <div className="space-y-4 md:space-y-6">
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative mt-8 md:mt-0"
          >
            {/* Abstract founder representation */}
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff1493]/10 to-pink-500/10" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-b from-transparent to-[#ff1493]/20 rounded-full blur-xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full border-4 border-[#ff1493]/30 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#ff1493]">R</span>
                </div>
                <div className="text-white/80 font-space-grotesk text-lg md:text-xl">
                  Visionary Leader
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 03: What We Build */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto text-center px-4"
        >
          <div className="inline-flex items-center gap-2 mb-8 md:mb-12">
            <span className="font-orbitron text-[#ff1493] text-xl md:text-2xl">03</span>
            <div className="w-16 md:w-20 h-px bg-gradient-to-r from-[#ff1493] to-pink-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 md:mb-12 font-space-grotesk text-white leading-tight">
            Digital Solutions That <span className="text-[#ff1493]">Scale</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { title: "Web Platforms", desc: "Scalable web applications" },
              { title: "Mobile Apps", desc: "Native & cross-platform" },
              { title: "AI Integrations", desc: "Smart automation" },
              { title: "UI/UX Design", desc: "Immersive experiences" },
              { title: "Brand Identity", desc: "Memorable branding" },
              { title: "E-commerce", desc: "High-conversion stores" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm"
              >
                <div className="text-3xl md:text-4xl text-[#ff1493] mb-3 md:mb-4">0{index + 1}</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-4 text-white">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 text-white">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 04: Technologies We Use */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-gradient-to-b from-black to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto text-center px-4"
        >
          <div className="inline-flex items-center gap-2 mb-8 md:mb-12">
            <span className="font-orbitron text-[#ff1493] text-xl md:text-2xl">04</span>
            <div className="w-16 md:w-20 h-px bg-gradient-to-r from-[#ff1493] to-purple-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 md:mb-12 font-space-grotesk text-white leading-tight">
            We Build With <span className="text-[#ff1493]">Modern Technologies</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm group hover:border-[#ff1493]/30 transition-all"
              >
                <div className="text-[#ff1493] mb-3 md:mb-4 flex justify-center">
                  {tech.icon}
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 05: Tools Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto w-full text-center px-4"
        >
          <div className="inline-flex items-center gap-2 mb-6 md:mb-8">
            <span className="font-orbitron text-[#ff1493] text-xl md:text-2xl">05</span>
            <div className="w-16 md:w-20 h-px bg-gradient-to-r from-[#ff1493] to-pink-500" />
          </div>
          
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-transparent bg-clip-text text-center mb-8 md:mb-16 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Built Using Trusted & Scalable Tools
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8 max-w-6xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <ToolCard name={tool.name} icon={tool.icon} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 06: Our Process */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-gradient-to-b from-black to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto px-4"
        >
          <div className="inline-flex items-center gap-2 mb-8 md:mb-12">
            <span className="font-orbitron text-[#ff1493] text-xl md:text-2xl">06</span>
            <div className="w-16 md:w-20 h-px bg-gradient-to-r from-[#ff1493] to-pink-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 md:mb-12 text-center font-space-grotesk text-white leading-tight">
            Simple Process, <span className="text-[#ff1493]">Extraordinary Results</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#ff1493]/20 mb-3 md:mb-4 font-orbitron">
                  {step.number}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 text-white">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 text-white">{step.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                    <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-[#ff1493]" />
                  </div>
                )}
                {index < 2 && (
                  <div className="lg:hidden block w-full h-px my-6 sm:my-8 bg-gradient-to-r from-[#ff1493] to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 07: Brands Marquee */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto w-full px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-8 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6 md:mb-8">
              <span className="font-orbitron text-[#ff1493] text-xl md:text-2xl">07</span>
              <div className="w-16 md:w-20 h-px bg-gradient-to-r from-[#ff1493] to-purple-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 font-space-grotesk text-white leading-tight">
              We Work With <span className="text-[#ff1493]">Top Brands & Startups</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 text-white">
              Trusted by innovative companies worldwide
            </p>
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
              {/* Double the brands for seamless loop */}
              {[...brands, ...brands].map((brand, index) => (
                <motion.div
                  key={`${brand.id}-${index}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex-shrink-0 w-40 h-24 md:w-48 md:h-32 rounded-xl md:rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm flex items-center justify-center p-4 md:p-6 hover:border-[#ff1493]/30 transition-all"
                >
                  <div className="text-center">
                    <div className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 md:mb-2">
                      {brand.name.split(" ")[0]}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400">
                      {brand.name.split(" ")[1]}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile-friendly brands grid */}
          <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {brands.map((brand) => (
              <motion.div
                key={brand.id}
                whileHover={{ scale: 1.05 }}
                className="h-20 sm:h-24 md:h-28 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
              >
                <div className="text-center">
                  <div className="text-base sm:text-lg font-bold text-white mb-1">
                    {brand.name.split(" ")[0]}
                  </div>
                  <div className="text-xs text-gray-400">
                    {brand.name.split(" ")[1]}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 08: Portfolio Highlights */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-gradient-to-b from-black to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto text-center px-4"
        >
          <div className="inline-flex items-center gap-2 mb-8 md:mb-12">
            <span className="font-orbitron text-[#ff1493] text-xl md:text-2xl">08</span>
            <div className="w-16 md:w-20 h-px bg-gradient-to-r from-[#ff1493] to-pink-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 md:mb-12 font-space-grotesk text-white leading-tight">
            Impactful Projects, <span className="text-[#ff1493]">Measurable Results</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { metric: "100%", label: "Client Satisfaction" },
              { metric: "50+", label: "Projects Delivered" },
              { metric: "40%", label: "Average Growth" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl lg:rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#ff1493] mb-2 md:mb-4">
                  {item.metric}
                </div>
                <div className="text-base sm:text-lg md:text-xl font-semibold text-white">{item.label}</div>
              </motion.div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 md:mt-12 px-6 py-3 sm:px-8 sm:py-4 border-2 border-[#ff1493] text-[#ff1493] font-semibold rounded-full hover:bg-[#ff1493]/10 transition-all text-sm sm:text-base"
          >
            View Case Studies
          </motion.button>
        </motion.div>
      </section>

      {/* Section 09: Final CTA */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-black">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center px-4"
        >
          <div className="inline-flex items-center gap-2 mb-6 md:mb-8">
            <span className="font-orbitron text-[#ff1493] text-xl md:text-2xl">09</span>
            <div className="w-16 md:w-20 h-px bg-gradient-to-r from-[#ff1493] to-purple-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 font-space-grotesk text-white leading-tight">
            Ready to Build Something <span className="text-[#ff1493]">Powerful?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-12 font-inter text-white">
            Let&apos;s create your next digital masterpiece together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6 bg-gradient-to-r from-[#ff1493] to-pink-500 text-white text-base sm:text-lg md:text-xl font-bold rounded-full flex items-center gap-2 md:gap-3 mx-auto group hover:shadow-xl hover:shadow-[#ff1493]/30 transition-all"
          >
            Let&apos;s Start
            <ArrowRight className="group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>

          {/* Footer */}
          <div className="mt-12 md:mt-16 lg:mt-24 pt-6 md:pt-8 border-t border-white/10">
            <div className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-space-grotesk text-white">
              RK Creations
            </div>
            <p className="text-sm md:text-base text-gray-400 text-white">
              Future-ready digital experiences. Founded by Rajkumar.
            </p>
            <p className="text-xs md:text-sm text-gray-500 mt-4 md:mt-8 text-white">
              © {new Date().getFullYear()} RK Creations. All rights reserved.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

// Tool Card Component
function ToolCard({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="flex flex-col items-center p-3 sm:p-4 md:p-6 bg-white border border-gray-800 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition duration-300"
    >
      {icon}
      <h3 className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg font-semibold text-gray-800 text-center">{name}</h3>
    </motion.div>
  );
}