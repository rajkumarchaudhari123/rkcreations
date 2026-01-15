"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaRocket,
  FaEye,
  FaLightbulb,
  FaHandshake,
  FaChartLine,
  FaCode,
  FaCloud,
  FaShieldAlt,
  FaBrain
} from "react-icons/fa";
import {
  Sparkles,
  Target,
  Zap,
  Award,
  TrendingUp,
  Cpu,
  Palette,
  Smartphone,
  Server,
  Lock,
  CircuitBoard
} from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Rajkumar",
      role: "Founder & Lead Developer",
      description: "Full-stack developer with expertise in Next.js, React, Firebase, and modern web technologies. Passionate about creating scalable digital solutions.",
      expertise: ["Next.js", "React", "Firebase", "Node.js", "AI/ML"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Design Team",
      role: "UI/UX & Creative",
      description: "Our creative minds crafting beautiful, user-centric designs that engage and convert.",
      expertise: ["UI/UX Design", "Figma", "Prototyping", "Brand Identity"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Development Team",
      role: "Full-Stack Engineers",
      description: "Expert developers building robust, scalable applications with cutting-edge technologies.",
      expertise: ["Web Apps", "Mobile Apps", "APIs", "Databases", "DevOps"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const values = [
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Client Partnership",
      description: "We work as an extension of your team, not just a service provider."
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Innovation First",
      description: "Constantly exploring new technologies and approaches to solve problems."
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Results Driven",
      description: "Every project is measured by the impact it creates for your business."
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Quality & Security",
      description: "Enterprise-grade security and rigorous quality assurance processes."
    }
  ];

  const technologies = [
    { icon: <Cpu />, name: "Next.js 14", color: "bg-black" },
    { icon: <CircuitBoard />, name: "React", color: "bg-cyan-500" },
    { icon: <Server />, name: "Node.js", color: "bg-green-500" },
    { icon: <Smartphone />, name: "React Native", color: "bg-blue-500" },
    { icon: <Palette />, name: "Tailwind CSS", color: "bg-cyan-400" },
    { icon: <FaCloud />, name: "Firebase", color: "bg-yellow-500" },
    { icon: <Lock />, name: "MongoDB", color: "bg-green-400" },
    { icon: <FaBrain />, name: "AI/ML", color: "bg-purple-500" },
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 3D Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>

  // app/about/page.tsx में इस part को बदलें:

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {typeof window !== 'undefined' &&
          [...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))
        }
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <span className="text-cyan-400 font-semibold tracking-widest">OUR STORY</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-100 via-cyan-100 to-blue-200 bg-clip-text text-transparent">
            Building The Future
            <span className="block text-cyan-400 mt-2">Of Digital Experiences</span>
          </h1>

          <p className="text-xl text-blue-200/80 max-w-3xl mx-auto">
            We are a cutting-edge digital agency transforming ideas into scalable,
            high-performance solutions that drive real business impact.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {[
            { number: "50+", label: "Projects Delivered", icon: <FaRocket className="text-cyan-400" /> },
            { number: "100%", label: "Client Satisfaction", icon: <Award className="text-cyan-400" /> },
            { number: "40%", label: "Avg. Growth", icon: <TrendingUp className="text-cyan-400" /> },
            { number: "24/7", label: "Support", icon: <Zap className="text-cyan-400" /> },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-400/30 rounded-2xl p-6 backdrop-blur-xl text-center">
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200/80 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            <div className="relative bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-400/30 rounded-2xl p-8 backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-blue-200/80 leading-relaxed mb-6">
                To deliver exceptional digital solutions that empower businesses to thrive
                in the modern digital landscape. We combine technical excellence with
                creative innovation to build products that make a difference.
              </p>
              <div className="space-y-3">
                {[
                  "✓ Deliver high-quality, scalable solutions",
                  "✓ Foster innovation through cutting-edge tech",
                  "✓ Build lasting client partnerships",
                  "✓ Drive measurable business results"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-cyan-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            <div className="relative bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-400/30 rounded-2xl p-8 backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <FaEye className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-blue-200/80 leading-relaxed mb-6">
                To be the most trusted digital innovation partner globally, recognized
                for transforming industries through technology and design excellence.
              </p>
              <div className="space-y-3">
                {[
                  "✓ Lead digital transformation worldwide",
                  "✓ Pioneer in emerging technologies",
                  "✓ Set industry standards for excellence",
                  "✓ Create sustainable tech solutions"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-pink-300">
                    <div className="w-2 h-2 bg-pink-400 rounded-full" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-blue-200/80 max-w-3xl mx-auto">
              The principles that guide everything we do at RK Creations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500" />
                <div className="relative bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-400/30 rounded-2xl p-6 backdrop-blur-xl">
                  <div className="text-cyan-300 mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-blue-200/80">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies We Use */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Tech Stack</h2>
            <p className="text-xl text-blue-200/80 max-w-3xl mx-auto">
              We build with modern, scalable technologies that deliver exceptional performance
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-400/30 rounded-xl p-4 backdrop-blur-xl flex flex-col items-center justify-center">
                  <div className={`w-10 h-10 rounded-lg ${tech.color} flex items-center justify-center mb-2`}>
                    <div className="text-white text-lg">{tech.icon}</div>
                  </div>
                  <span className="text-sm text-blue-200 text-center">{tech.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Meet The Team */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-blue-200/80 max-w-3xl mx-auto">
              The passionate minds behind every successful project at RK Creations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -15, scale: 1.02 }}
                className="relative group"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${member.color} rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500`} />
                <div className="relative bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-400/30 rounded-2xl p-8 backdrop-blur-xl">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mb-6`}>
                      <span className="text-3xl font-bold text-white">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${member.color} text-white text-sm font-semibold mb-4`}>
                      {member.role}
                    </div>
                    <p className="text-blue-200/80 mb-6">{member.description}</p>
                    <div className="w-full">
                      <h4 className="text-white font-semibold mb-3">Expertise</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-800/40 border border-blue-400/30 rounded-full text-blue-200 text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-blue-200/80 max-w-3xl mx-auto">
              A structured approach that ensures success from concept to launch
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: "01", title: "Discover", desc: "Understanding your vision and requirements" },
              { number: "02", title: "Design", desc: "Creating wireframes and prototypes" },
              { number: "03", title: "Develop", desc: "Building with modern technologies" },
              { number: "04", title: "Deploy", desc: "Launching and ongoing support" },
            ].map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
                <div className="relative bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-400/30 rounded-2xl p-6 backdrop-blur-xl text-center">
                  <div className="text-5xl font-bold text-cyan-400/30 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-blue-200/80 text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          className="relative text-center"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl" />
          <div className="relative bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-400/30 rounded-2xl p-12 backdrop-blur-xl">
            <Sparkles className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-blue-200/80 mb-8 max-w-2xl mx-auto">
              Partner with us to bring your digital vision to life with expertise,
              innovation, and passion.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl flex items-center gap-3 shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all"
                >
                  <FaHandshake className="text-xl" />
                  Start Your Project
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-400/30 text-white font-bold rounded-xl flex items-center gap-3 hover:bg-blue-800/40 transition-all"
                >
                  <FaCode className="text-xl" />
                  View Our Work
                </motion.button>
              </Link>
            </div>
            <div className="mt-8 text-blue-200/60 text-sm">
              <p>📍 Based in Noida, Uttar Pradesh | 🌍 Serving clients worldwide</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}