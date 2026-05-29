// app/page.tsx
"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Sparkles, Code, Palette, Rocket, Globe, Brain, Zap, Network, Cpu } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaChartLine } from "react-icons/fa";
import { SiNextdotjs, SiExpo, SiMysql, SiPytorch, SiTensorflow, SiPandas, SiNumpy, SiHuggingface, SiPython } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

// Unsplash images for slideshow - reduced quality for faster loading
const unsplashImages = [
  "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=60"
];

// Brands data
const brands = [
  { id: 1, name: "Probey Services" },
  { id: 2, name: "LzyCrazy" },
  { id: 3, name: "Algu Tech Solution" },
  { id: 4, name: "IT ATMOZ" },
  { id: 5, name: "Canvas Chrome Design" },
  { id: 6, name: "Enclave Studios" },
  { id: 7, name: "TheTechUnique Academy" },
  { id: 8, name: "Global Info Edge" },
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
  { name: "AI/ML", icon: <Cpu className="w-6 h-6 md:w-8 md:h-8" /> },
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
  { name: "Python", icon: <SiPython className="text-sky-400 text-3xl sm:text-4xl md:text-5xl" /> },
  { name: "PyTorch", icon: <SiPytorch className="text-[#EE4C2C] text-3xl sm:text-4xl md:text-5xl" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF9900] text-3xl sm:text-4xl md:text-5xl" /> },
  { name: "NLP", icon: <SiHuggingface className="text-[#FFD21E] text-3xl sm:text-4xl md:text-5xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-500 text-3xl sm:text-4xl md:text-5xl animate-spin-slow" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-3xl sm:text-4xl md:text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-3xl sm:text-4xl md:text-5xl" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-500 text-3xl sm:text-4xl md:text-5xl" /> },
  { name: "Pandas", icon: <SiPandas className="text-indigo-400 text-3xl sm:text-4xl md:text-5xl" /> },
  { name: "NumPy", icon: <SiNumpy className="text-blue-400 text-3xl sm:text-4xl md:text-5xl" /> },
  { name: "Matplotlib", icon: <FaChartLine className="text-pink-400 text-3xl sm:text-4xl md:text-5xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-3xl sm:text-4xl md:text-5xl" /> },
];

// Services data
const services = [
  { title: "Web Platforms", desc: "Scalable web applications", icon: "🌐" },
  { title: "Mobile Apps", desc: "Native & cross-platform", icon: "📱" },
  { title: "AI Integrations", desc: "Smart automation", icon: "🤖" },
  { title: "UI/UX Design", desc: "Immersive experiences", icon: "🎨" },
  { title: "Brand Identity", desc: "Memorable branding", icon: "🏷️" },
  { title: "E-commerce", desc: "High-conversion stores", icon: "🛒" },
];

// Stats data
const stats = [
  { metric: "100%", label: "Client Satisfaction", icon: "🎯" },
  { metric: "50+", label: "Projects Delivered", icon: "🚀" },
  { metric: "40%", label: "Average Growth", icon: "📈" },
];

// Pre-generate deterministic particle positions (seeded, no randomness at render time)
type ParticleData = { x: number; y: number; x2: number; duration: number; delay: number; scale?: number };

function createParticles(count: number): ParticleData[] {
  return Array.from({ length: count }, (_, i) => ({
    x: ((i * 37 + 13) % 100),
    y: ((i * 53 + 7) % 100),
    x2: ((i * 41 + 19) % 100) - 50,
    duration: 10 + (i % 10),
    delay: (i % 5),
    scale: 0.5 + ((i * 29) % 50) / 100,
  }));
}

// Create particles once, outside component
const HERO_PARTICLES = createParticles(10);
const FOUNDER_PARTICLES = createParticles(6);
const TOOLS_PARTICLES = createParticles(8);
const CTA_PARTICLES = createParticles(10);

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto slideshow for hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % unsplashImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Parallax
  const heroY = useTransform(scrollY, [0, 300], [0, -80]);

  return (
    <div className="relative">

      {/* ======================== HERO SECTION ======================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Slideshow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={unsplashImages[currentImageIndex]}
              alt={`Hero background ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              priority={currentImageIndex === 0}
              sizes="100vw"
              quality={60}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
          </motion.div>
        </AnimatePresence>

        {/* Particles - only render on client */}
        {mounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {HERO_PARTICLES.map((p, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#ff1493] rounded-full will-change-transform"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                animate={{
                  y: [0, -500],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        )}

        <motion.div
          className="relative z-10 text-center w-full max-w-5xl mx-auto px-4"
          style={{ y: heroY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-[#ff1493] mx-auto mb-4 md:mb-6" />

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 text-white leading-tight">
              <span className="block">We Build</span>
              <span className="block text-[#ff1493] mt-1 sm:mt-2">Future-Ready</span>
              <span className="block mt-1 sm:mt-2">Digital Experiences</span>
            </h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Web • App • AI • Design • Branding
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-[#ff1493] to-pink-600 text-white font-semibold rounded-full flex items-center gap-2 group hover:shadow-lg hover:shadow-[#ff1493]/25 transition-all text-sm sm:text-base w-full sm:w-auto justify-center animate-pulse-glow"
                >
                  Start Your Project
                  <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4" />
                </motion.button>
              </Link>
              <Link href="/web">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 sm:px-8 sm:py-3.5 border-2 border-white/30 text-white font-semibold rounded-full hover:border-white/50 hover:bg-white/5 transition-all text-sm sm:text-base w-full sm:w-auto"
                >
                  View Our Work
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-white/50" />
        </motion.div>
      </section>

      {/* ======================== SECTION 01: WHO WE ARE ======================== */}
      <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 md:px-8 bg-black relative py-16 md:py-24">
        {/* Background glow - reduced from 2 to 1 for performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-[#ff1493]/8 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center px-4 relative z-10"
        >
          <SectionTag number="01" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight">
            We Transform Ideas Into <span className="text-[#ff1493]">Digital Reality</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            RK Creations is a digital agency focused on creating immersive, scalable,
            and future-ready experiences that push boundaries and deliver results.
          </p>
        </motion.div>
      </section>

      {/* ======================== SECTION 02: FOUNDER ======================== */}
      <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 md:px-8 bg-gradient-to-b from-black to-gray-900 relative py-16 md:py-24">
        {mounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {FOUNDER_PARTICLES.map((p, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#ff1493]/15 rounded-full will-change-transform"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                animate={{
                  y: [0, p.x2],
                  opacity: [0.3, 0],
                }}
                transition={{
                  duration: p.duration + 5,
                  repeat: Infinity,
                  delay: p.delay,
                }}
              />
            ))}
          </div>
        )}

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTag number="02" />

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight">
              Built with <span className="text-[#ff1493]">Vision & Purpose</span>
            </h2>

            <div className="space-y-3 md:space-y-4">
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#ff1493] mb-1">
                  Rajkumar
                </h3>
                <p className="text-sm md:text-base text-gray-400">
                  Founder & Lead Developer
                </p>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                RK Creations is founded by Rajkumar — a passionate developer
                and creator focused on building modern, scalable, and
                future-ready digital experiences for brands and startups.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative mt-6 md:mt-0"
          >
            <motion.div
              className="relative h-[280px] sm:h-[320px] md:h-[380px] w-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#ff1493]/5 to-pink-500/5"
              whileHover={{ scale: 1.02 }}
            >
              {/* Rotating ring */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-44 md:h-44 border-4 border-[#ff1493]/20 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 border-2 border-pink-500/10 rounded-full" />
              </motion.div>

              {/* Profile circle */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full border-4 border-[#ff1493]/30 mx-auto mb-3 flex items-center justify-center bg-gradient-to-br from-[#ff1493]/10 to-pink-500/10 backdrop-blur-sm">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ff1493]">R</span>
                </div>
                <div className="text-white/80 text-base md:text-lg">
                  Visionary Leader
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ======================== SECTION 03: WHAT WE BUILD ======================== */}
      <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 md:px-8 bg-black relative py-16 md:py-24">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px),
                            linear-gradient(to bottom, #888 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center px-4 relative z-10 w-full"
        >
          <SectionTag number="03" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-10 text-white leading-tight">
            Digital Solutions That <span className="text-[#ff1493]">Scale</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent group hover:border-[#ff1493]/30 transition-all"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl mb-2 md:mb-3">
                  {item.icon}
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 text-white group-hover:text-[#ff1493] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ======================== SECTION 04: TOOLS ======================== */}
      <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 md:px-8 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden py-16 md:py-24">
        {/* Top/bottom accent lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff1493]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

        {mounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {TOOLS_PARTICLES.map((p, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#ff1493] rounded-full will-change-transform"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                animate={{
                  y: [0, -400],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto w-full text-center px-4 relative z-10"
        >
          <SectionTag number="04" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#ff512f] via-[#ff1493] to-[#dd2476] text-transparent bg-clip-text mb-8 md:mb-12 leading-tight">
            Built Using Trusted & Scalable Tools
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: "0 15px 30px rgba(255, 20, 147, 0.2)" }}
              >
                <ToolCard name={tool.name} icon={tool.icon} />
              </motion.div>
            ))}
          </div>

          <p className="mt-8 md:mt-12 text-gray-500 text-xs sm:text-sm">
            Modern Stack • Scalable Architecture • Optimal Performance
          </p>
        </motion.div>
      </section>

      {/* ======================== SECTION 05: OUR PROCESS ======================== */}
      <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 md:px-8 bg-black relative py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-4 relative z-10 w-full"
        >
          <SectionTag number="05" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center text-white leading-tight">
            Simple Process, <span className="text-[#ff1493]">Extraordinary Results</span>
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.4 }}
                className="text-center relative p-4"
                whileHover={{ scale: 1.03 }}
              >
                {/* Connecting arrow - desktop only */}
                {index < 3 && (
                  <div className="hidden lg:block absolute right-0 top-1/3 translate-x-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-[#ff1493]/50" />
                  </div>
                )}

                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#ff1493]/20 mb-2 font-mono">
                  {step.number}
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 text-white">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ======================== SECTION 06: BRANDS ======================== */}
      <section className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 md:px-8 bg-gradient-to-b from-black to-gray-900 relative py-16 md:py-24">
        <div className="max-w-6xl mx-auto w-full px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <SectionTag number="06" />

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-white leading-tight">
              We Work With <span className="text-[#ff1493]">Top Brands & Startups</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-400">
              Trusted by innovative companies worldwide
            </p>
          </motion.div>

          {/* Desktop Marquee */}
          <div className="hidden md:block relative overflow-hidden py-6">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-900 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-900 to-transparent z-10" />

            <motion.div
              animate={{ x: [0, -800] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="flex gap-6"
            >
              {[...brands, ...brands].map((brand, index) => (
                <BrandCard key={`${brand.id}-${index}`} brand={brand} />
              ))}
            </motion.div>
          </div>

          {/* Mobile brands grid */}
          <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-3">
            {brands.map((brand) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="h-20 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center p-3 group hover:border-[#ff1493]/30 transition-all"
              >
                <div className="text-center">
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-[#ff1493] transition-colors">
                    {brand.name.split(" ")[0]}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-500">
                    {brand.name.split(" ").slice(1).join(" ")}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== SECTION 07: STATS ======================== */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 md:px-8 bg-black relative py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center px-4 relative z-10 w-full"
        >
          <SectionTag number="07" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-white leading-tight">
            Impactful Projects, <span className="text-[#ff1493]">Measurable Results</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent group hover:border-[#ff1493]/30 transition-all"
              >
                <div className="text-2xl md:text-3xl mb-3">
                  {item.icon}
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ff1493] mb-2">
                  {item.metric}
                </div>
                <div className="text-sm sm:text-base md:text-lg font-medium text-gray-300">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>

          <Link href="/web">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 md:mt-10 px-6 py-3 sm:px-8 sm:py-3.5 border-2 border-[#ff1493] text-[#ff1493] font-semibold rounded-full hover:bg-[#ff1493]/10 transition-all text-sm sm:text-base"
            >
              View Case Studies
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* ======================== SECTION 08: FINAL CTA ======================== */}
      <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 md:px-8 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-72 md:h-72 bg-[#ff1493]/5 rounded-full blur-3xl" />

          {mounted && CTA_PARTICLES.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-[#ff1493] rounded-full will-change-transform"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              animate={{
                y: [0, -600],
                opacity: [0.4, 0],
              }}
              transition={{
                duration: p.duration + 5,
                repeat: Infinity,
                delay: p.delay,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center px-4 relative z-10"
        >
          <SectionTag number="08" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight">
            Ready to Build Something <span className="text-[#ff1493]">Powerful?</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-10 max-w-2xl mx-auto">
            Let&apos;s create your next digital masterpiece together.
          </p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 20, 147, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-gradient-to-r from-[#ff1493] to-pink-500 text-white text-sm sm:text-base md:text-lg font-bold rounded-full inline-flex items-center gap-2 mx-auto group hover:shadow-xl hover:shadow-[#ff1493]/25 transition-all relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="relative z-10">Let&apos;s Start</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
            </motion.button>
          </Link>

          {/* Mini footer */}
          <div className="mt-12 md:mt-16 pt-6 border-t border-white/10">
            <div className="text-lg md:text-xl font-bold mb-2 text-white">
              RK Creations
            </div>
            <p className="text-xs sm:text-sm text-gray-500">
              Future-ready digital experiences. Founded by Rajkumar.
            </p>
            <p className="text-[10px] sm:text-xs text-gray-600 mt-4">
              © 2025 RK Creations. All rights reserved.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

// ======================== REUSABLE COMPONENTS ========================

function SectionTag({ number }: { number: string }) {
  return (
    <motion.div
      className="inline-flex items-center gap-2 mb-4 md:mb-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.4 }}
    >
      <span className="font-mono text-[#ff1493] text-lg md:text-xl font-bold">{number}</span>
      <div className="w-12 md:w-16 h-px bg-gradient-to-r from-[#ff1493] to-pink-500/50" />
    </motion.div>
  );
}

function ToolCard({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center p-3 sm:p-4 md:p-5 bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group">
      <div className="mb-2">{icon}</div>
      <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 text-center group-hover:text-[#ff1493] transition-colors">
        {name}
      </h3>
    </div>
  );
}

function BrandCard({ brand }: { brand: { id: number; name: string } }) {
  return (
    <div className="flex-shrink-0 w-40 h-24 md:w-44 md:h-28 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center p-4 hover:border-[#ff1493]/30 transition-all group">
      <div className="text-center">
        <div className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-[#ff1493] transition-colors">
          {brand.name.split(" ")[0]}
        </div>
        <div className="text-[10px] md:text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
          {brand.name.split(" ").slice(1).join(" ")}
        </div>
      </div>
    </div>
  );
}