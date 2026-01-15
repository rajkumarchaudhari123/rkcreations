"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, Zap, Sparkles } from "lucide-react";
import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      name: "True Fit Ayurveda",
      link: "https://true-fit-ayurveda.vercel.app/",
      img: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Health & Wellness",
      description: "Modern Ayurvedic health platform with appointment booking",
      tags: ["Next.js", "Tailwind", "Firebase"],
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Home Appliances Clinic",
      link: "https://home-appliances-repair-service.vercel.app/",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Service Platform",
      description: "On-demand appliance repair service booking system",
      tags: ["React", "Node.js", "MongoDB"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Crispy Thekua Hub",
      link: "https://crispy-thekua-hub.vercel.app/",
      img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "E-commerce",
      description: "Traditional snack delivery platform with modern UI",
      tags: ["Next.js", "Stripe", "Tailwind"],
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Travelya",
      link: "http://www.travelya.site",
      img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Travel & Tourism",
      description: "Comprehensive travel booking and planning platform",
      tags: ["React", "Express", "PostgreSQL"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Smart Fund AI",
      link: "https://smartfundai.vercel.app/",
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "FinTech AI",
      description: "AI-powered investment and financial planning tool",
      tags: ["Next.js", "AI/ML", "Firebase"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      name: "Cyber Security Dashboard",
      link: "https://warm-sprinkles-a1db70.netlify.app/",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Security",
      description: "Real-time cybersecurity monitoring and analytics dashboard",
      tags: ["React", "WebSockets", "Chart.js"],
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Jarvish AI Assistant",
      link: "https://neuro-twin-gold.vercel.app/",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "AI Assistant",
      description: "Intelligent AI assistant with natural language processing",
      tags: ["Next.js", "OpenAI", "Tailwind"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Grocery Mahadev",
      link: "https://grocery-mahadev-shop.vercel.app/",
      img: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Grocery E-commerce",
      description: "Full-featured online grocery shopping platform",
      tags: ["React", "Redux", "Node.js"],
      color: "from-lime-500 to-green-500"
    },
    {
      name: "MediCare Pro",
      link: "#",
      img: "https://images.unsplash.com/photo-1586773860418-dc22f8b874bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Healthcare",
      description: "Healthcare management system for clinics and hospitals",
      tags: ["Next.js", "TypeScript", "GraphQL"],
      color: "from-teal-500 to-blue-500"
    },
    {
      name: "EduLearn Platform",
      link: "#",
      img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "EdTech",
      description: "Interactive online learning platform with video courses",
      tags: ["React", "Video.js", "MongoDB"],
      color: "from-violet-500 to-purple-500"
    },
    {
      name: "FitTrack Pro",
      link: "#",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Fitness",
      description: "Comprehensive fitness tracking and workout planning app",
      tags: ["React Native", "Firebase", "Chart.js"],
      color: "from-rose-500 to-red-500"
    },
    {
      name: "Real Estate Hub",
      link: "#",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Real Estate",
      description: "Property listing and management platform with virtual tours",
      tags: ["Next.js", "3D.js", "Mapbox"],
      color: "from-amber-500 to-yellow-500"
    }
  ];

  const categories = ["All", "E-commerce", "Healthcare", "AI/ML", "Travel", "FinTech", "Education"];
  
  const [particles, setParticles] = useState<Array<{left: string, top: string}>>([]);

  useEffect(() => {
    // Client-side only: Generate random positions for particles
    const generatedParticles = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 3D Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
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
                left: particle.left,
                top: particle.top,
              }}
            />
          ))}
        </div>
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
            <span className="text-cyan-400 font-semibold tracking-widest">OUR PORTFOLIO</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-100 via-cyan-100 to-blue-200 bg-clip-text text-transparent">
            Showcasing Digital
            <span className="block text-cyan-400 mt-2">Excellence</span>
          </h1>
          
          <p className="text-xl text-blue-200/80 max-w-3xl mx-auto">
            Explore our portfolio of innovative projects that demonstrate our expertise 
            in creating cutting-edge digital solutions across various industries.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-blue-900/40 border border-blue-400/30 text-blue-200 hover:bg-blue-800/40 hover:border-blue-300/40'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* 3D Card Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur opacity-0 group-hover:opacity-50 transition duration-500" />
              
              <div className="relative bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-400/30 rounded-2xl overflow-hidden backdrop-blur-xl h-full">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                  <div className="relative w-full h-full">
                    <Image
                      src={project.img}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white`}>
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Live Indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-green-300 font-medium">Live</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                      <p className="text-blue-200/80 text-sm mb-4">{project.description}</p>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 90 }}
                      className="flex-shrink-0"
                    >
                      <ExternalLink className="w-5 h-5 text-cyan-400" />
                    </motion.div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-800/40 border border-blue-400/30 rounded-full text-blue-200 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 py-2.5 rounded-xl bg-gradient-to-r ${project.color} text-white font-semibold text-center flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-current/30 transition-all`}
                    >
                      <Eye className="w-4 h-4" />
                      Visit Project
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2.5 rounded-xl bg-blue-800/40 border border-blue-400/30 text-blue-200 hover:bg-blue-700/40 hover:text-white transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/0 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "50+", label: "Projects Completed", icon: <Zap className="text-cyan-400" /> },
            { number: "100%", label: "Client Satisfaction", icon: <Sparkles className="text-cyan-400" /> },
            { number: "15+", label: "Industries Served", icon: <ExternalLink className="text-cyan-400" /> },
            { number: "24/7", label: "Support Available", icon: <Eye className="text-cyan-400" /> },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500" />
              <div className="relative bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-400/30 rounded-xl p-6 backdrop-blur-xl text-center">
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200/80 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-400/30 rounded-2xl p-12 backdrop-blur-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Have a Project in Mind?
              </h2>
              <p className="text-xl text-blue-200/80 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how we can bring your vision to life with our 
                expertise in creating exceptional digital experiences.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all"
              >
                <Zap className="w-5 h-5" />
                Start Your Project Today
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}