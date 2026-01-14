// components/Navbar.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ChevronRight, Sparkles, Zap, Layers } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
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
    { name: 'Portfolio', path: '/web', icon: '📁' },
    { name: 'About', path: '/about', icon: '👤' },
    { name: 'Contact', path: '/contact', icon: '📞' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 3D Blueish Logo Component
  const Logo = () => (
    <Link href="/" className="relative group">
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* 3D floating effect */}
        <motion.div
          animate={{ y: isHovering ? -5 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative"
        >
          {/* Outer glow */}
          <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/30 via-cyan-400/30 to-blue-600/30 blur-2xl rounded-3xl opacity-60" />
          
          {/* 3D depth layers */}
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-2xl blur-md" />
          
          {/* Main logo container with glass effect */}
          <div className="relative bg-gradient-to-br from-blue-900/40 via-blue-800/40 to-cyan-900/40 border border-blue-500/30 rounded-2xl px-4 py-2 md:px-5 md:py-3 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,100,255,0.2)]">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 rounded-2xl" />
            
            <div className="relative flex items-center gap-2">
              {/* 3D RK badge with floating animation */}
              <motion.div
                animate={{ rotateY: isHovering ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-40" />
                <div className="relative bg-gradient-to-br from-blue-800 to-cyan-800 border border-blue-400/40 rounded-lg px-2 py-1 shadow-inner">
                  <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent font-bold text-lg md:text-xl">RK</span>
                </div>
              </motion.div>
              
              <div className="flex flex-col">
                <h1 className="font-bold text-lg md:text-xl bg-gradient-to-r from-blue-100 via-cyan-100 to-blue-200 bg-clip-text text-transparent tracking-tight leading-none">
                  Creations
                </h1>
                <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full mt-1" />
              </div>

              {/* Animated sparkle */}
              <motion.div
                animate={{ rotate: 360, scale: isHovering ? 1.2 : 1 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="hidden md:block"
              >
                <Sparkles className="w-4 h-4 text-cyan-300" />
              </motion.div>
            </div>
            
            {/* Floating particles */}
            {isHovering && (
              <>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full blur-sm"
                />
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full blur-sm"
                />
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );

  // 3D Blueish Button Component
  const QuoteButton = ({ isMobile = false }: { isMobile?: boolean }) => (
    <Link href="/contact">
      <motion.div
        className={`relative ${isMobile ? 'w-full py-4' : 'px-6 py-3'} rounded-xl overflow-hidden group`}
        whileHover={{ scale: isMobile ? 1.02 : 1.05, y: isMobile ? 0 : -3 }}
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
          <span className={`font-bold text-white ${isMobile ? 'text-base' : 'text-sm md:text-base'}`}>
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

  return (
    <>
      {/* Main Navbar with 3D Blue Background */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
          isScrolled 
            ? 'py-3 bg-gradient-to-b from-blue-900/90 via-blue-800/90 to-cyan-900/90 backdrop-blur-xl shadow-2xl border-b border-blue-400/20' 
            : 'py-4 md:py-6 bg-gradient-to-b from-blue-900/40 via-blue-800/40 to-cyan-900/40'
        }`}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              animate={{
                y: [0, Math.random() * 50 - 25],
                x: [0, Math.random() * 50 - 25],
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
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="z-50">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <motion.div
                    className="relative group"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      pathname === item.path 
                        ? 'text-white' 
                        : 'text-blue-200 hover:text-white'
                    }`}>
                      <span className="text-lg">{item.icon}</span>
                      {item.name}
                      
                      {/* Active indicator */}
                      {pathname === item.path && (
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
              ))}
              
              {/* Desktop Quote Button */}
              <div className="ml-4">
                <QuoteButton />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <div className="relative">
                <QuoteButton />
              </div>
              
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
            {/* Backdrop with blue gradient */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gradient-to-br from-blue-900/80 via-cyan-900/80 to-blue-800/80 backdrop-blur-lg z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel with 3D Blue Theme */}
            <motion.div
              className="mobile-menu fixed inset-y-0 right-0 z-40 w-full max-w-sm lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30 }}
            >
              <div className="relative h-full bg-gradient-to-b from-blue-900 via-blue-800 to-cyan-900 border-l border-blue-400/30 shadow-2xl overflow-y-auto">
                {/* 3D Background Effects */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
                </div>

                {/* Close button */}
                <div className="absolute top-6 right-6 z-50">
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-cyan-700 border border-blue-400/40 flex items-center justify-center group"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5 text-white" />
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.button>
                </div>

                {/* Menu Header */}
                <div className="pt-24 pb-10 px-6 border-b border-blue-400/20 relative">
                  <div className="mb-8">
                    <Logo />
                  </div>
                  <p className="text-blue-200 text-sm flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-300" />
                    Crafting next-gen digital experiences with cutting-edge tech
                  </p>
                </div>

                {/* Menu Items */}
                <div className="py-8 px-4 relative">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="mb-3"
                    >
                      <Link
                        href={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-300 relative overflow-hidden group ${
                          pathname === item.path
                            ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/40 text-white shadow-lg shadow-blue-500/20'
                            : 'text-blue-200 hover:text-white hover:bg-blue-500/10 border border-transparent'
                        }`}
                      >
                        {/* Background glow on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300" />
                        
                        <div className="relative flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            pathname === item.path 
                              ? 'bg-gradient-to-br from-blue-400 to-cyan-400' 
                              : 'bg-blue-800/50'
                          }`}>
                            <span className="text-lg">{item.icon}</span>
                          </div>
                          <span className="font-medium">{item.name}</span>
                        </div>
                        
                        <ChevronRight className={`w-5 h-5 transition-transform ${
                          pathname === item.path ? 'text-cyan-300' : 'text-blue-400'
                        } group-hover:translate-x-1`} />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA Section */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-blue-400/20 bg-gradient-to-t from-blue-900/80 to-transparent">
                  <div className="mb-6">
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-cyan-300" />
                      Ready to Build?
                    </h3>
                    <p className="text-blue-200 text-sm mb-4">
                      Let&apos;s create something extraordinary together
                    </p>
                    <QuoteButton isMobile={true} />
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <a
                      href="mailto:ceorkcreations@gmail.com"
                      className="flex items-center gap-3 p-3 rounded-xl bg-blue-800/30 border border-blue-400/20 hover:bg-blue-700/40 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-cyan-300 text-lg">@</span>
                      </div>
                      <div>
                        <p className="text-blue-200">Email</p>
                        <p className="text-cyan-300 text-xs">ceorkcreations@gmail.com</p>
                      </div>
                    </a>
                    <a
                      href="tel:+919667048566"
                      className="flex items-center gap-3 p-3 rounded-xl bg-blue-800/30 border border-blue-400/20 hover:bg-blue-700/40 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-blue-300 text-lg">📞</span>
                      </div>
                      <div>
                        <p className="text-blue-200">Call</p>
                        <p className="text-cyan-300 text-xs">+91 9667048566</p>
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