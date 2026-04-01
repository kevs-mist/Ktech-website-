"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// PRD Section 3.2 — Hero Minor Tuning
// TASKFILE T02 — Hero headline max 96px, Serif italic sub-desc mt-8
export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 md:pt-32 pb-16 overflow-hidden">
      
      {/* BACKGROUND DOT GRID (PRD §3.2) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      
      {/* AMBIENT RADIAL GLOW (PRD §2/4.8) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        
        {/* EYEBROW (PRD §3.2 No Change) */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
           className="flex items-center gap-4 mb-4"
        >
          <span className="w-12 h-[1px] bg-accent" />
          <span className="text-[11px] font-semibold tracking-[0.4em] uppercase text-accent">
            SOFTWARE ENGINEER & DESIGNER
          </span>
        </motion.div>

        {/* HERO HEADLINE (TASKFILE T01/T02 — refined with White Accents & Decramped) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="hero-headline max-w-5xl">
            <span className="block mb-4">Engineering</span>
            <span className="relative inline-block text-white italic font-serif lowercase tracking-normal mr-4">
              Extraordinary
              <motion.span 
                className="absolute left-0 -bottom-1 md:-bottom-2 w-full h-[3px] md:h-[5px] bg-accent/60"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
              />
            </span>
            <span className="block mt-4">
               Digital <span className="text-accent">Experiences</span>.
            </span>
          </h1>
        </motion.div>

        {/* SUB-DESCRIPTION (TASKFILE T02 — mt-12 decramped) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 max-w-2xl"
        >
          <p className="text-text-secondary text-xl md:text-2xl font-serif italic leading-relaxed">
            I am <span className="text-white">Keval Mistry</span>, an engineer building high-performance 
            full-stack solutions focused on <span className="text-white">Architecture</span>, 
            <span className="text-white">Scalability</span>, and <span className="text-white">AI Systems</span>.
          </p>
        </motion.div>

        {/* CTA BUTTONS (TASKFILE T02 — gap-6 flex-wrap mt-12, visible on 390px) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-6 flex-wrap mt-12"
        >
          <Link 
            href="#contact"
            className="px-8 py-4 bg-accent text-white text-[11px] font-semibold tracking-[0.2em] uppercase 
                       rounded-sm hover:bg-accent/80 hover:scale-105 transition-all duration-300"
          >
            Let&apos;s Build Together —
          </Link>
          
          <Link 
            href="https://wa.me/916357243095"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white/20 text-white text-[11px] font-semibold tracking-[0.2em] uppercase 
                       rounded-sm hover:border-accent hover:text-accent transition-all duration-300 flex items-center gap-2"
          >
            Chat on WhatsApp <span className="text-sm">→</span>
          </Link>

          <Link 
            href="https://github.com/kevsi-mist"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold tracking-[0.2em] uppercase text-text-secondary hover:text-accent transition-colors"
          >
            GitHub Profile ↗
          </Link>
        </motion.div>

      </div>


    </section>
  );
}
