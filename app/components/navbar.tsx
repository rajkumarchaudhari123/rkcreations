// components/Navbar.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X, ChevronRight, Sparkles, Zap, Layers } from 'lucide-react';

// Standalone, self-contained Logo component to prevent unmounting and DOM recreation on Navbar updates
const Logo = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <Link href="/" className="relative group block">
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Pink Glow behind the logo */}
        <div className="absolute -inset-1.5 bg-gradient-to-r from-[#ff1493] to-pink-500 rounded-full blur-md opacity-50 group-hover:opacity-85 transition-opacity duration-300 animate-pulse" />
        
        {/* Bright white circular bubble logo container to make the dark logo details perfectly visible */}
        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-white shadow-[0_0_15px_rgba(255,20,147,0.4)] p-1 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(255,20,147,0.75)]">
          <Image
            src="/rklogo.PNG"
            alt="RK Creations Logo"
            width={48}
            height={48}
            className="object-contain w-full h-full rounded-full"
            priority
          />
        </div>
      </motion.div>
    </Link>
  );
};

// Standalone Desktop Quote Button to avoid rendering recreation
const DesktopQuoteButton = () => {
  return (
    <Link href="/contact" className="hidden lg:block">
      <motion.div
        className="relative px-6 py-3 rounded-xl overflow-hidden group"
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* 3D depth layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg" />
        <div className="absolute inset-0.5 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl" />
        
        {/* Shine effect */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white/50 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700" />
        
        {/* Inner glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent rounded-xl" />
        
        {/* Button content */}
        <div className="relative flex items-center justify-center gap-2">
          <span className="font-bold text-white text-sm md:text-base">
            Get a Quote
          </span>
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2 }}
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

// Standalone Mobile Quote Button
interface MobileQuoteButtonProps {
  onClick: () => void;
}

const MobileQuoteButton: React.FC<MobileQuoteButtonProps> = ({ onClick }) => {
  return (
    <Link href="/contact" onClick={onClick} className="block w-full">
      <motion.div
        className="relative w-full py-4 rounded-xl overflow-hidden group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* 3D depth layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg" />
        <div className="absolute inset-0.5 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl" />
        
        {/* Inner glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent rounded-xl" />
        
        {/* Button content */}
        <div className="relative flex items-center justify-center gap-2">
          <span className="font-bold text-white text-base">
            Get a Quote
          </span>
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2 }}
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle scroll state change efficiently (only sets state if the state boundary actually changes)
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(prev => prev !== scrolled ? scrolled : prev);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.hamburger-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
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
    { name: 'About', path: '/about', icon: '👤' },
    { name: 'AI Tools', path: '/ai-tools', icon: '🤖' },
    { name: 'Contact', path: '/contact', icon: '📞' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Main Navbar with 3D Blue Background */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-gradient-to-b from-blue-900/90 via-blue-800/90 to-cyan-900/90 backdrop-blur-xl shadow-2xl border-b border-blue-400/20' 
            : 'py-4 md:py-6 bg-gradient-to-b from-blue-900/40 via-blue-800/40 to-cyan-900/40'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between">
            {/* Logo - Standardized standalone element */}
            <div className="z-50">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link key={item.path} href={item.path}>
                    <motion.div
                      className="relative group"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={`px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                        isActive 
                          ? 'text-white' 
                          : 'text-blue-200 hover:text-white'
                      }`}>
                        <span className="text-lg">{item.icon}</span>
                        {item.name}
                        
                        {/* Active indicator */}
                        {isActive && (
                          <motion.div 
                            className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                            layoutId="activeIndicator"
                            initial={false}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                        
                        {/* Hover effect */}
                        <motion.div 
                          className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-blue-400/50 to-cyan-400/50"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                        />
                      </div>
                      
                      {/* Hover glow */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/10 group-hover:to-blue-500/10 rounded-xl blur-md transition-all duration-300" />
                    </motion.div>
                  </Link>
                );
              })}
              
              {/* Desktop Quote Button (Only on desktop) */}
              <div className="ml-4">
                <DesktopQuoteButton />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <motion.button
                className="hamburger-button relative w-12 h-12 flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-blue-800/40 to-cyan-800/40 border border-blue-400/30 backdrop-blur-xl"
                onClick={toggleMenu}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05, rotate: 90 }}
                aria-label="Toggle menu"
              >
                {/* 3D effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-lg rounded-2xl" />
                
                <motion.span 
                  className="relative block w-6 h-0.5 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full mb-1.5"
                  animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                <motion.span 
                  className="relative block w-6 h-0.5 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full mb-1.5"
                  animate={isMenuOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: 24 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span 
                  className="relative block w-6 h-0.5 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full"
                  animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop with optimized GPU-friendly opacity transition (no expensive backdrop blur) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-slate-950/80 z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel - Responsive max-width, ease-in-out lightweight transitions */}
            <motion.div
              className="mobile-menu fixed inset-y-0 right-0 z-40 w-full max-w-xs sm:max-w-sm lg:hidden shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <div className="relative h-full flex flex-col justify-between bg-gradient-to-b from-[#0b0f19] via-[#0f172a] to-[#0b0f19] border-l border-blue-500/20 overflow-y-auto scrollbar-none">
                {/* 3D Background Effects */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
                </div>

                <div className="flex-1 flex flex-col">
                  {/* Close button inside header wrapper */}
                  <div className="pt-20 pb-4 px-6 border-b border-blue-400/10 flex items-center justify-between relative">
                    <Logo />
                    
                    <motion.button
                      onClick={() => setIsMenuOpen(false)}
                      className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-cyan-700 border border-blue-400/40 flex items-center justify-center group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <X className="w-5 h-5 text-white" />
                    </motion.button>
                  </div>

                  {/* Brand description tag */}
                  <div className="px-6 py-4">
                    <p className="text-blue-300/80 text-xs flex items-center gap-1.5 font-medium leading-relaxed">
                      <Zap className="w-3.5 h-3.5 text-cyan-300 flex-shrink-0" />
                      Crafting next-gen digital experiences with cutting-edge tech.
                    </p>
                  </div>

                  {/* Menu Items (no laggy stagger offsets, instant GPU-ready rendering) */}
                  <div className="py-2 px-3 space-y-1">
                    {navItems.map((item) => {
                      const isActive = pathname === item.path;
                      return (
                        <Link
                          key={item.path}
                          href={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 relative overflow-hidden group ${
                            isActive
                              ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 text-white shadow-lg shadow-blue-500/10'
                              : 'text-blue-200 hover:text-white hover:bg-blue-500/5'
                          }`}
                        >
                          {/* Background glow on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300" />
                          
                          <div className="relative flex items-center gap-3">
                            <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                              isActive 
                                ? 'bg-gradient-to-br from-blue-400 to-cyan-400 text-white' 
                                : 'bg-blue-900/30 text-blue-300 group-hover:bg-blue-800/40'
                            }`}>
                              <span className="text-base">{item.icon}</span>
                            </div>
                            <span className="font-semibold text-sm">{item.name}</span>
                          </div>
                          
                          <ChevronRight className={`w-4 h-4 transition-transform ${
                            isActive ? 'text-cyan-300' : 'text-blue-400'
                          } group-hover:translate-x-1`} />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile CTA & Contact Section - Placed naturally at the bottom (mt-auto) to avoid overlays on short screens */}
                <div className="p-6 border-t border-blue-400/10 bg-blue-950/40 mt-auto space-y-5 relative">
                  <div className="space-y-3">
                    <h3 className="text-white font-bold text-sm flex items-center gap-2">
                      <Layers className="w-4 h-4 text-cyan-300" />
                      Ready to Build?
                    </h3>
                    <p className="text-blue-300/80 text-xs leading-relaxed">
                      Let&apos;s create something extraordinary together.
                    </p>
                    <MobileQuoteButton onClick={() => setIsMenuOpen(false)} />
                  </div>

                  {/* Contact Info Grid */}
                  <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                    <a
                      href="mailto:ceorkcreations@gmail.com"
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-blue-950/50 border border-blue-500/10 hover:bg-blue-900/30 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <span className="text-cyan-300 text-sm">@</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-blue-300 text-[10px] font-bold leading-none">Email</p>
                        <p className="text-cyan-300 text-[9px] truncate mt-1">ceorkcreations...</p>
                      </div>
                    </a>
                    <a
                      href="tel:+919667048566"
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-blue-950/50 border border-blue-500/10 hover:bg-blue-900/30 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <span className="text-blue-300 text-sm">📞</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-blue-300 text-[10px] font-bold leading-none">Call</p>
                        <p className="text-cyan-300 text-[9px] truncate mt-1">+91 9667048566</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Add padding to main content */}
      <div className="h-20 md:h-24" />
    </>
  );
}