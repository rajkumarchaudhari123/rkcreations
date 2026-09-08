// components/Navbar.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X, ChevronRight, Zap, Layers, Sparkles, Tag } from 'lucide-react';

// Standalone Logo component
const Logo = () => {
  return (
    <Link href="/" className="relative group block">
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="relative flex items-center gap-3"
      >
        {/* Pink Glow behind logo */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#ff1493] via-pink-500 to-cyan-500 rounded-full blur-md opacity-60 group-hover:opacity-90 transition-opacity duration-300 animate-pulse" />
        
        {/* White circular container */}
        <div className="relative w-11 h-11 md:w-13 md:h-13 rounded-full bg-white border-2 border-white shadow-[0_0_15px_rgba(255,20,147,0.5)] p-0.5 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(255,20,147,0.8)]">
          <Image
            src="/rklogo.PNG"
            alt="RK Creations Logo"
            width={48}
            height={48}
            className="object-contain w-full h-full rounded-full"
            priority
          />
        </div>

        {/* Brand Name Text for Desktop */}
        <div className="hidden sm:flex flex-col text-left">
          <span className="font-extrabold text-base md:text-lg tracking-wider bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent group-hover:text-cyan-300 transition-colors">
            RK CREATIONS
          </span>
          <span className="text-[10px] text-cyan-400 font-semibold tracking-widest uppercase -mt-1">
            Digital Agency
          </span>
        </div>
      </motion.div>
    </Link>
  );
};

// Standalone Desktop Quote Button
const DesktopQuoteButton = () => {
  return (
    <Link href="/contact" className="hidden lg:block">
      <motion.div
        className="relative px-5 py-2.5 rounded-xl overflow-hidden group cursor-pointer"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Glowing border background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff1493] via-pink-500 to-cyan-500 rounded-xl shadow-lg shadow-[#ff1493]/20" />
        <div className="absolute inset-[1.5px] bg-slate-950 rounded-[10px] group-hover:bg-opacity-80 transition-all duration-300" />
        
        {/* Shimmer sweep */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 pointer-events-none" />
        
        {/* Button content */}
        <div className="relative flex items-center justify-center gap-2 z-10">
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-cyan-200 text-sm">
            Get a Quote
          </span>
          <ChevronRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.div>
    </Link>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll state change efficiently
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(prev => prev !== scrolled ? scrolled : prev);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Portfolio', path: '/portfolio', icon: '📁' },
    { name: 'Pricing', path: '/pricing', icon: '🏷️' },
    { name: 'About', path: '/about', icon: '👤' },
    { name: 'AI Tools', path: '/ai-tools', icon: '🤖' },
    { name: 'Contact', path: '/contact', icon: '📞' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Main Navbar Header */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'py-2.5 bg-slate-950/85 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-b border-cyan-500/20' 
            : 'py-4 md:py-5 bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <div className="z-50">
              <Logo />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-slate-900/60 border border-white/10 backdrop-blur-xl px-4 py-1.5 rounded-full shadow-inner">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link key={item.path} href={item.path}>
                    <motion.div
                      className="relative px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-sm">{item.icon}</span>
                      <span className={isActive ? 'text-white font-bold' : 'text-gray-300 hover:text-white'}>
                        {item.name}
                      </span>
                      
                      {/* Active indicator pill */}
                      {isActive && (
                        <motion.div 
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff1493]/30 to-cyan-500/30 border border-[#ff1493]/50 shadow-[0_0_12px_rgba(255,20,147,0.3)] -z-10"
                          layoutId="navActivePill"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <DesktopQuoteButton />
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center z-50">
              <motion.button
                className="hamburger-button relative w-11 h-11 flex flex-col items-center justify-center rounded-xl bg-slate-900/80 border border-cyan-400/30 backdrop-blur-xl shadow-md cursor-pointer"
                onClick={toggleMenu}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                aria-label="Toggle navigation menu"
              >
                <motion.span 
                  className="relative block w-5 h-0.5 bg-gradient-to-r from-[#ff1493] to-cyan-300 rounded-full mb-1"
                  animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span 
                  className="relative block w-5 h-0.5 bg-gradient-to-r from-pink-300 to-cyan-300 rounded-full mb-1"
                  animate={isMenuOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: 20 }}
                  transition={{ duration: 0.15 }}
                />
                <motion.span 
                  className="relative block w-5 h-0.5 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full"
                  animate={isMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Drawer Panel */}
            <motion.div
              className="mobile-menu fixed inset-y-0 right-0 z-40 w-full max-w-xs sm:max-w-sm lg:hidden shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <div className="relative h-full flex flex-col justify-between bg-slate-950 border-l border-cyan-500/30 overflow-y-auto pt-20 px-4 pb-6">
                {/* Background ambient glow */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff1493]/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 space-y-6">
                  {/* Brand Tagline */}
                  <div className="px-2 py-3 bg-slate-900/60 rounded-xl border border-white/10">
                    <p className="text-cyan-300 text-xs flex items-center gap-2 font-medium">
                      <Zap className="w-4 h-4 text-[#ff1493] flex-shrink-0" />
                      Crafting next-gen web solutions & AI platforms
                    </p>
                  </div>

                  {/* Navigation Links */}
                  <div className="space-y-1.5">
                    {navItems.map((item) => {
                      const isActive = pathname === item.path;
                      return (
                        <Link
                          key={item.path}
                          href={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                            isActive
                              ? 'bg-gradient-to-r from-[#ff1493]/20 via-pink-500/10 to-cyan-500/20 border border-[#ff1493]/40 text-white shadow-lg'
                              : 'text-gray-300 hover:text-white hover:bg-slate-900/50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{item.icon}</span>
                            <span className="font-semibold text-sm">{item.name}</span>
                          </div>
                          
                          <ChevronRight className={`w-4 h-4 ${isActive ? 'text-cyan-300' : 'text-gray-500'}`} />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile CTA Footer */}
                <div className="relative z-10 pt-6 border-t border-white/10 space-y-4">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ff1493] via-pink-600 to-cyan-600 text-white font-bold text-sm shadow-lg shadow-[#ff1493]/30 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Get a Free Quote</span>
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </Link>

                  <div className="text-center pt-2">
                    <p className="text-[11px] text-gray-400">Call / WhatsApp: <span className="text-cyan-300 font-bold">+91 9667048566</span></p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer div to push content below fixed header */}
      <div className="h-16 md:h-20" />
    </>
  );
}