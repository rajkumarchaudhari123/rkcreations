"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Sparkles, Rocket, Code, Palette } from "lucide-react";

export default function Footer() {
  const [particles, setParticles] = useState<Array<{left: string, top: string, animY: number, animX: number, duration: number}>>([]);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbw0X6vwE9pre_Am8uwonCUIhNMGKQxrgzunf9I8itd0Il84gGgVF6NpeoLPEwN9B23Umg/exec";

    const formDataToSend = new URLSearchParams();
    formDataToSend.append("name", "Newsletter Subscriber");
    formDataToSend.append("email", email.trim());
    formDataToSend.append("phone", "N/A");
    formDataToSend.append("service", "Newsletter Subscription");
    formDataToSend.append("message", "Subscribed to RK Creations newsletter from the footer.");

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formDataToSend,
      });

      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 5000);
    } catch (error) {
      console.error("Error subscribing:", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // Client-side only: Generate random positions and animation values for particles
    const generatedParticles = Array.from({ length: 10 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animY: Math.random() * 100 - 50,
      animX: Math.random() * 100 - 50,
      duration: 3 + Math.random() * 2,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* 3D Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#ff1493]/30 rounded-full"
              animate={{
                y: [0, particle.animY],
                x: [0, particle.animX],
              }}
              transition={{
                duration: particle.duration,
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

        {/* 3D Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #ff1493 1px, transparent 1px),
              linear-gradient(to bottom, #ff1493 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }} />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#ff1493]/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-[#ff1493]/20 rounded-full blur-3xl" />
      </div>

      {/* Animated RKCREATIONS 3D Text */}
      <div className="relative py-12 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center mx-8">
              <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-[#ff1493] via-pink-500 to-purple-500 bg-clip-text text-transparent opacity-10">
                RKCREATIONS
              </h1>
              <Sparkles className="w-16 h-16 text-[#ff1493]/30 ml-8" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section with 3D Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <div className="relative group w-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff1493] to-cyan-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
              <div className="relative p-8 bg-gradient-to-br from-gray-900/90 to-black/90 rounded-3xl border border-white/10 backdrop-blur-xl flex flex-col items-center lg:items-start">
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff1493] to-pink-500 flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform duration-500">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#ff1493] to-cyan-500 rounded-2xl blur opacity-30 -z-10" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#ff1493] to-cyan-500 bg-clip-text text-transparent">
                      RK Creations
                    </h2>
                    <p className="text-gray-400 text-sm">Digital Innovation Studio</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We specialize in crafting cutting-edge digital experiences through modern web/app development,
                  AI integration, stunning design, and strategic branding. Let&apos;s build the future together!
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff1493]/20 to-pink-500/20 border border-[#ff1493]/30"
                  >
                    <Code className="w-4 h-4" />
                    <span className="text-sm">Development</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -3 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30"
                  >
                    <Palette className="w-4 h-4" />
                    <span className="text-sm">Design</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm">AI Solutions</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-4 flex flex-col items-center lg:items-start">
              {[
                { name: "Home", href: "/" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-white group transition-all duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#ff1493] to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-2 transition-transform">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent w-full text-center lg:text-left">
              Get In Touch
            </h3>
            <div className="space-y-6 flex flex-col items-center lg:items-start w-full">
              {/* Contact Info */}
              <div className="space-y-4 flex flex-col items-center lg:items-start w-full">
                <a
                  href="mailto:ceorkcreations@gmail.com"
                  className="flex flex-col sm:flex-row items-center gap-3 text-gray-300 hover:text-white group text-center sm:text-left"
                >
                  <div className="relative">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff1493]/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaEnvelope className="w-5 h-5 text-[#ff1493]" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium text-sm sm:text-base">ceorkcreations@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+918800759535"
                  className="flex flex-col sm:flex-row items-center gap-3 text-gray-300 hover:text-white group text-center sm:text-left"
                >
                  <div className="relative">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaPhone className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-medium text-sm sm:text-base">+91 8800759535</p>
                  </div>
                </a>

                <div className="flex flex-col sm:flex-row items-center gap-3 text-gray-300 text-center sm:text-left">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <FaMapMarkerAlt className="w-5 h-5 text-purple-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Based in</p>
                    <p className="font-medium text-sm sm:text-base">India</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="text-center lg:text-left w-full flex flex-col items-center lg:items-start">
                <p className="text-gray-400 mb-4">Follow us</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {[
                    { icon: <FaInstagram />, color: "from-[#E4405F] to-[#833AB4]", href: "https://www.instagram.com/rkcreactions.in?igsh=MWMzZGptYjB3M2I5Nw==" },
                    { icon: <FaTwitter />, color: "from-[#1DA1F2] to-[#1DA1F2]", href: "https://x.com/RajKumar931515?t=D41GK2stCZRxKrY4Mw2Xmg&s=09" },
                    { icon: <FaLinkedinIn />, color: "from-[#0077B5] to-[#0077B5]", href: "https://www.linkedin.com/in/rajkumar-chaudhari-54b9532b5" },
                    { icon: <FaFacebookF />, color: "from-[#1877F2] to-[#1877F2]", href: "https://www.facebook.com/share/16fqau56gv/" },
                    { icon: <FaGithub />, color: "from-[#24292e] to-[#2f363d]", href: "https://github.com/rajkumarchaudhari123" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white transform hover:rotate-6 transition-transform duration-300 hover:shadow-lg hover:shadow-current/30`}
                    >
                      {social.icon}
                      <div className="absolute inset-0 rounded-xl border border-white/20" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#ff1493] to-cyan-500 bg-clip-text text-transparent">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-6">Subscribe to our newsletter for the latest updates</p>
            
            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl text-green-300 text-sm font-semibold max-w-md mx-auto"
              >
                🎉 Thank you for subscribing! We will keep you updated.
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto items-stretch">
                <div className="flex-1 flex flex-col items-stretch">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorMessage) setErrorMessage("");
                    }}
                    placeholder="Enter your email"
                    className="w-full px-6 py-3 rounded-full bg-gray-900/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff1493]/50 focus:ring-2 focus:ring-[#ff1493]/20 backdrop-blur-sm text-sm"
                    required
                    disabled={isSubmitting}
                  />
                  {errorMessage && (
                    <span className="text-red-400 text-xs pl-4 mt-1 text-left">{errorMessage}</span>
                  )}
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-[#ff1493] to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-[#ff1493]/30 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; 2025 RK Creations. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              {/* TODO: These pages don't exist yet */}
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute bottom-10 right-10">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-4 h-4 rounded-full bg-gradient-to-r from-[#ff1493] to-cyan-500"
        />
      </div>
      <div className="absolute top-10 left-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-6 h-6 border-2 border-dashed border-[#ff1493]/30 rounded-full"
        />
      </div>
    </footer>
  );
}