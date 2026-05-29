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
        whileHover={{ scale: 1.08, y: -1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Neon outer pink glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-[#ff1493]/20 to-pink-500/20 blur-xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
        
        {/* Main logo image container with glass effect */}
        <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-black/85 via-zinc-900/80 to-black/85 border border-[#ff1493]/35 p-1.5 flex items-center justify-center shadow-[0_4px_20px_rgba(255,20,147,0.3)] group-hover:border-[#ff1493]/60 transition-all duration-300">
          {/* Inner pink neon glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff1493]/10 to-pink-500/10 rounded-full" />
          
          <Image
            src="/rklogo.PNG"
            alt="RK Creations Logo"
            width={38}
            height={38}
            className="object-contain w-full h-full rounded-full"
            priority
          />
        </div>
      </motion.div>
    </Link>
  );
};

// Standalone Desktop Quote Button using main Pink/Hot-Pink Theme
const DesktopQuoteButton = () => {
  return (
    <Link href="/contact" className="hidden lg:block">
      <motion.div
        className="relative px-6 py-3 rounded-full overflow-hidden group"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Pink neon gradient base */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff1493] to-pink-600 rounded-full shadow-lg group-hover:shadow-[#ff1493]/30 transition-all duration-300" />
        <div className="absolute inset-0.5 bg-gradient-to-r from-pink-500 to-[#ff1493] rounded-full" />
        
        {/* Glass shine sweep */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-800 ease-in-out" />
        
        {/* Inner subtle glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent rounded-full" />
        
        {/* Button content */}
        <div className="relative flex items-center justify-center gap-1.5">
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

// Standalone Mobile Quote Button using Pink Theme
interface MobileQuoteButtonProps {
  onClick: () => void;
}

const MobileQuoteButton: React.FC<MobileQuoteButtonProps> = ({ onClick }) => {
  return (
    <Link href="/contact" onClick={onClick} className="block w-full">
      <motion.div
        className="relative w-full py-3.5 rounded-full overflow-hidden group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Pink neon gradient base */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff1493] to-pink-600 rounded-full shadow-lg" />
        <div className="absolute inset-0.5 bg-gradient-to-r from-pink-500 to-[#ff1493] rounded-full" />
        
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

  // Handle scroll boundary cleanly
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

  // Lock scroll on mobile when menu open
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
    { name: 'Portfolio', path: '/web', icon: '📁' },
    { name: 'About', path: '/about', icon: '👤' },
    { name: 'AI Tools', path: '/ai-tools', icon: '🤖' },
    { name: 'Contact', path: '/contact', icon: '📞' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Centered Floating Capsule/Island Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="fixed top-0 left-0 right-0 z-50 w-full px-3 sm:px-6 md:px-8 pt-3 sm:pt-4 pointer-events-none"
      >
        <div className={`mx-auto max-w-5xl w-full rounded-full transition-all duration-300 border pointer-events-auto ${
          isScrolled 
            ? 'px-4 py-2 sm:px-6 sm:py-2.5 bg-black/85 backdrop-blur-xl border-[#ff1493]/30 shadow-[0_8px_30px_rgba(255,20,147,0.2)]' 
            : 'px-4 py-3 sm:px-6 sm:py-3.5 bg-black/40 backdrop-blur-md border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
        }`}>
          <div className="flex items-center justify-between">
            {/* Circular Logo Only */}
            <div className="z-50">
              <Logo />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-7">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link key={item.path} href={item.path}>
                    <motion.div
                      className="relative group"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={`px-3 py-1.5 text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                        isActive 
                          ? 'text-white' 
                          : 'text-gray-300 hover:text-white'
                      }`}>
                        <span className="text-base">{item.icon}</span>
                        {item.name}
                        
                        {/* Pink Neon Underline active indicator */}
                        {isActive && (
                          <motion.div 
                            className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-[#ff1493] to-pink-500 shadow-[0_0_12px_rgba(255,20,147,0.6)]"
                            layoutId="activeIndicator"
                            initial={false}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                        
                        {/* Hover accent line */}
                        <motion.div 
                          className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-[#ff1493]/50 to-pink-500/50"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                        />
                      </div>
                      
                      {/* Gentle Hover pink glow */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-[#ff1493]/0 to-pink-500/0 group-hover:from-[#ff1493]/5 group-hover:to-pink-500/5 rounded-xl blur-md transition-all duration-300" />
                    </motion.div>
                  </Link>
                );
              })}
              
              {/* Pink Get a Quote Button */}
              <div className="ml-3">
                <DesktopQuoteButton />
              </div>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <motion.button
                className="hamburger-button relative w-11 h-11 flex flex-col items-center justify-center rounded-full bg-gradient-to-br from-zinc-900/60 to-black/60 border border-[#ff1493]/20 backdrop-blur-xl"
                onClick={toggleMenu}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05, rotate: 90 }}
                aria-label="Toggle menu"
              >
                {/* Neon blur ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ff1493]/15 to-pink-500/15 blur-md rounded-full" />
                
                <motion.span 
                  className="relative block w-5 h-0.5 bg-gradient-to-r from-[#ff1493] to-pink-400 rounded-full mb-1"
                  animate={isMenuOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                <motion.span 
                  className="relative block w-5 h-0.5 bg-gradient-to-r from-[#ff1493] to-pink-400 rounded-full mb-1"
                  animate={isMenuOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: 20 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span 
                  className="relative block w-5 h-0.5 bg-gradient-to-r from-[#ff1493] to-pink-400 rounded-full"
                  animate={isMenuOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop with lightweight GPU opacity */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-slate-950/80 z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Drawer Menu Panel */}
            <motion.div
              className="mobile-menu fixed inset-y-0 right-0 z-40 w-full max-w-xs sm:max-w-sm lg:hidden shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <div className="relative h-full flex flex-col justify-between bg-gradient-to-b from-[#09090b] via-[#09050d] to-[#09090b] border-l border-[#ff1493]/15 overflow-y-auto scrollbar-none">
                {/* Glowing neon shapes in drawer background */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-[#ff1493]/5 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />
                </div>

                <div className="flex-1 flex flex-col">
                  {/* Drawer Header wrapper */}
                  <div className="pt-20 pb-4 px-6 border-b border-white/5 flex items-center justify-between relative">
                    <Logo />
                    
                    <motion.button
                      onClick={() => setIsMenuOpen(false)}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff1493]/10 to-pink-500/10 border border-[#ff1493]/40 flex items-center justify-center group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <X className="w-5 h-5 text-white" />
                    </motion.button>
                  </div>

                  {/* Brand description tag */}
                  <div className="px-6 py-4">
                    <p className="text-gray-400 text-xs flex items-center gap-1.5 font-medium leading-relaxed">
                      <Zap className="w-3.5 h-3.5 text-[#ff1493] flex-shrink-0" />
                      Crafting next-gen digital experiences with cutting-edge tech.
                    </p>
                  </div>

                  {/* Menu Items with matching Pink visual hover highlight */}
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
                              ? 'bg-gradient-to-r from-[#ff1493]/20 to-pink-500/20 border border-[#ff1493]/30 text-white shadow-lg shadow-[#ff1493]/10'
                              : 'text-gray-300 hover:text-white hover:bg-[#ff1493]/5'
                          }`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-[#ff1493]/0 to-pink-500/0 group-hover:from-[#ff1493]/5 group-hover:to-pink-500/5 transition-all duration-300" />
                          
                          <div className="relative flex items-center gap-3">
                            <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                              isActive 
                                ? 'bg-gradient-to-br from-[#ff1493] to-pink-500 text-white shadow-[0_2px_8px_rgba(255,20,147,0.3)]' 
                                : 'bg-zinc-900/40 text-gray-400 group-hover:bg-zinc-800/40'
                            }`}>
                              <span className="text-base">{item.icon}</span>
                            </div>
                            <span className="font-semibold text-sm">{item.name}</span>
                          </div>
                          
                          <ChevronRight className={`w-4 h-4 transition-transform ${
                            isActive ? 'text-[#ff1493]' : 'text-gray-500'
                          } group-hover:translate-x-1`} />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile Quote button & CTA block in drawer bottom */}
                <div className="p-6 border-t border-white/5 bg-zinc-950/40 mt-auto space-y-5 relative">
                  <div className="space-y-3">
                    <h3 className="text-white font-bold text-sm flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#ff1493]" />
                      Ready to Build?
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Let&apos;s create something extraordinary together.
                    </p>
                    <MobileQuoteButton onClick={() => setIsMenuOpen(false)} />
                  </div>

                  {/* Contact Grid */}
                  <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                    <a
                      href="mailto:ceorkcreations@gmail.com"
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-zinc-900/30 border border-white/5 hover:bg-[#ff1493]/5 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff1493]/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <span className="text-[#ff1493] text-sm">@</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-gray-400 text-[10px] font-bold leading-none">Email</p>
                        <p className="text-[#ff1493] text-[9px] truncate mt-1">ceorkcreations...</p>
                      </div>
                    </a>
                    <a
                      href="tel:+919667048566"
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-zinc-900/30 border border-white/5 hover:bg-[#ff1493]/5 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff1493]/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <span className="text-[#ff1493] text-sm">📞</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-gray-400 text-[10px] font-bold leading-none">Call</p>
                        <p className="text-[#ff1493] text-[9px] truncate mt-1">+91 9667048566</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacing padding spacer */}
      <div className="h-20 md:h-24" />
    </>
  );
}