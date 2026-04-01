"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// PRD Section 3.2 — Logo is KTECH
// Navigation philosophy: icomat.co.uk smooth
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "py-4 bg-bg-primary/80 backdrop-blur-xl border-b border-white/5" 
          : "py-8 bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-display font-black text-2xl tracking-tighter hover:text-accent transition-colors">
            KTECH<span className="text-accent group-hover:animate-pulse">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {["Work", "Services", "Process", "Contact"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[11px] font-semibold tracking-[0.25em] uppercase text-text-secondary hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
          
          <Link 
            href="#contact"
            className="text-[11px] font-semibold tracking-[0.15em] uppercase px-6 py-2.5 border border-white/20 rounded-sm hover:border-accent hover:text-accent transition-all"
          >
            Let&apos;s Build ↗
          </Link>
        </div>
        
        {/* Mobile menu would go here (omitted for speed unless requested) */}
      </nav>
    </motion.header>
  );
}
