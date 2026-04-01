"use client";

import React from "react";
import { process } from "@/data/process";
import SectionLabel from "@/components/ui/SectionLabel";
import { motion } from "framer-motion";

// PRD Section 3.6 — Process Minor Tuning
// Ghost numbers (0.03 opacity), Step descriptions max-width 260px
export default function ProcessSection() {
  return (
    <section id="process" className="py-16 md:py-24 bg-bg-primary border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative">
        
        {/* SECTION HEADER */}
        <div className="mb-16">
          <SectionLabel label="Process" className="mb-6" />
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight max-w-3xl">
            Clean Engineering <br /> Lifecycle.
          </h2>
        </div>

        {/* PROCESS GRID (4 steps per data) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-12 relative">
          
          {process.map((step, index) => (
            <motion.div 
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative group pt-16 md:pt-24"
            >
              {/* GHOST NUMBER (TASKFILE T01 — 3% opacity) */}
              <span className="absolute top-0 left-0 ghost-number leading-none">
                {step.number}
              </span>

              {/* CONTENT (TASKFILE T06 — White Accents) */}
              <div className="relative z-10 max-w-[260px] ml-4 md:ml-6">
                <h4 className="text-[12px] font-bold tracking-[0.25em] uppercase text-white mb-4">
                  {step.title}
                </h4>
                <p className="text-text-secondary text-[15px] leading-relaxed">
                  {step.description}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
