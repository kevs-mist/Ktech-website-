"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionLabel from "@/components/ui/SectionLabel";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const [rotation, setRotation] = useState(0);
  
  // Carousel Geometry calculations
  const anglePerCard = 360 / Math.max(1, projects.length);
  // Dynamically calculate the radius so cards don't overlap. Reduced baseline to tighten the orbit since cards are scaled down.
  const radius = Math.max(300, (680 / 2) / Math.tan(Math.PI / Math.max(1, projects.length))) + 20;

  // Spin the entire 3D carousel
  const nextCard = () => setRotation((prev) => prev - anglePerCard);
  const prevCard = () => setRotation((prev) => prev + anglePerCard);

  // Calculate which card is natively facing the camera (0 degrees relative origin)
  const absoluteIndex = Math.round(-rotation / anglePerCard) % projects.length;
  const activeCard = absoluteIndex >= 0 ? absoluteIndex : projects.length + absoluteIndex;

  return (
    <section id="work" className="py-24 md:py-48 bg-bg-primary overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* SECTION HEADER */}
        <div className="mb-16 text-center md:text-left relative z-40">
          <SectionLabel label="Selected Work" className="mb-6 mx-auto md:mx-0" />
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-display font-black uppercase tracking-tight text-white">
            Projects<span className="text-accent">.</span>
          </h2>
          <p className="mt-4 text-text-secondary text-sm md:text-base tracking-[0.05em] opacity-80 max-w-md mx-auto md:mx-0">
            {projects.length} PROJECTS · 3D ROULETTE CAROUSEL
          </p>
        </div>
        {/* 3D ROULETTE / CONVEYOR BELT PORTAL */}
        <div className="relative w-full h-[550px] md:h-[700px] flex items-center justify-center mt-12 md:mt-24 pointer-events-none" style={{ perspective: "2000px" }}>
          
          {/* STATIC ORBIT PATH AND ARROWS */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none hidden md:block"
            style={{ 
              width: "calc(100% - 4rem)",
              maxWidth: "1100px", 
              height: radius * 0.4, 
            }}
          >
             {/* The Orbit Dashed Line */}
             <div className="absolute inset-0 border-[1.5px] border-dashed border-accent/40 shadow-[0_0_15px_rgba(59,130,246,0.15)] rounded-[100%]" />

             {/* INLINE LEFT ARROW */}
             <button 
               onClick={prevCard}
               className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto group text-white/60 hover:text-accent transition-all duration-300 p-4"
               aria-label="Previous Project on Belt"
             >
               <div className="flex items-center justify-center group-hover:-translate-x-2 transition-transform bg-bg-primary px-2 rounded-full">
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="stroke-current">
                   <path d="M15 18L9 12L15 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                 </svg>
               </div>
             </button>

             {/* INLINE RIGHT ARROW */}
             <button 
               onClick={nextCard}
               className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto group text-white/60 hover:text-accent transition-all duration-300 p-4"
               aria-label="Next Project on Belt"
             >
               <div className="flex items-center justify-center group-hover:translate-x-2 transition-transform bg-bg-primary px-2 rounded-full">
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="stroke-current">
                   <path d="M9 18L15 12L9 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                 </svg>
               </div>
             </button>

          </div>

          {/* THE SPINNING RIG */}
          <motion.div
            animate={{ rotateY: rotation }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative w-full max-w-[320px] md:max-w-[680px] h-[500px] flex items-center justify-center pointer-events-auto z-20"
          >
            {projects.map((p, i) => {
              const angle = i * anglePerCard;
              const isFront = activeCard === i;

              return (
                <div
                  key={i}
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    // Pushes the card OUT from the center to form the carousel perimeter, rotates it, and specifically scales it down by 25% (0.75) to fit the space better.
                    transform: `rotateY(${angle}deg) translateZ(${radius}px) scale(0.75)`,
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden"
                  }}
                >
                  <div className={`w-full h-full transition-all duration-700 ${isFront ? 'opacity-100 scale-100' : 'opacity-10 scale-90 blur-[8px] pointer-events-none'}`}>
                    <div className={isFront ? "shadow-[0_0_80px_rgba(59,130,246,0.15)]" : ""}>
                      <ProjectCard project={p} />
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* MOBILE PAGINATION */}
        <div className="flex md:hidden flex-col items-center gap-6 mt-16 pointer-events-auto z-50">
          <div className="flex justify-between w-full max-w-[200px]">
            <button onClick={prevCard} className="text-accent hover:text-white transition-colors p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="stroke-current">
                <path d="M15 18L9 12L15 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="flex gap-2 items-center">
              {projects.map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${activeCard === i ? 'bg-accent scale-150' : 'bg-white/20'}`} />
              ))}
            </div>
            <button onClick={nextCard} className="text-accent hover:text-white transition-colors p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="stroke-current">
                <path d="M9 18L15 12L9 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
