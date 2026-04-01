"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const tools = [
  { name: "VS Code", type: "Editor", id: "T1", x: 15, y: 25 },
  { name: "Figma", type: "Design", id: "T2", x: 80, y: 20 },
  { name: "Docker", type: "Containers", id: "T3", x: 20, y: 75 },
  { name: "Git", type: "Version Control", id: "T4", x: 75, y: 70 },
  { name: "Next.js", type: "Framework", id: "T5", x: 50, y: 40 },
  { name: "TypeScript", type: "Language", id: "T6", x: 45, y: 80 },
  { name: "Tailwind", type: "Styling", id: "T7", x: 10, y: 50 },
  { name: "Vercel", type: "Deployment", id: "T8", x: 85, y: 45 }
];

export default function ToolsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scannerY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-12 bg-bg-primary overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center relative">
          
          <div className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/40 mb-8 flex items-center gap-4 relative z-20">
            <span className="w-8 h-[1px] bg-white/20"></span>
            Engineering Topology Map
            <span className="w-8 h-[1px] bg-white/20"></span>
          </div>

          {/* Scribbled Hint & Arrow OUTSIDE the map */}
          <div className="absolute top-0 right-0 md:right-8 lg:right-12 xl:right-20 z-50 hidden md:flex flex-col items-center transform rotate-6 opacity-80 pointer-events-none max-w-[220px]">
            <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap');" }} />
            <span 
              className="text-white/90 text-2xl text-center leading-tight tracking-wide"
              style={{ fontFamily: '"Caveat", cursive' }}
            >
              Wanna find out what we work with? <br/> Just move your cursor around.
            </span>
            {/* Hand-drawn curving arrow pointing left/down into the map */}
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="text-white/40 stroke-current mt-2 mr-16 transform -scale-x-100">
              <path d="M 20,20 Q 50,20 70,70" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4" />
              <path d="M 55,60 L 70,70 L 75,50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* TOPOLOGICAL MAP CONTAINER */}
          <div className="relative w-full max-w-5xl h-[500px] overflow-hidden group/map">
            
            {/* BACKGROUND LAYER WITH FADE MASK */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
              }}
            >
              {/* Background Grid */}
              <div 
                className="absolute inset-0 opacity-10" 
                style={{ 
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                  backgroundPosition: 'center center'
                }} 
              />

              {/* Abstract Topological Elevation Contours */}
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1000 500" preserveAspectRatio="none">
                {/* Peak 1 (Left area) */}
                <path d="M 150 250 C 150 150, 250 150, 250 250 C 250 350, 150 350, 150 250" stroke="white" strokeWidth="1" fill="none" className="opacity-40" />
                <path d="M 100 250 C 100 100, 300 100, 300 250 C 300 400, 100 400, 100 250" stroke="white" strokeWidth="1" fill="none" className="opacity-30" />
                <path d="M 50 250 C 50 50, 350 50, 350 250 C 350 450, 50 450, 50 250" stroke="white" strokeWidth="1" fill="none" className="opacity-20" />
                
                {/* Peak 2 (Right area) */}
                <path d="M 750 250 C 750 180, 850 180, 850 250 C 850 320, 750 320, 750 250" stroke="white" strokeWidth="1" fill="none" className="opacity-40" />
                <path d="M 700 250 C 700 120, 900 120, 900 250 C 900 380, 700 380, 700 250" stroke="white" strokeWidth="1" fill="none" className="opacity-30" />
                <path d="M 650 250 C 650 60, 950 60, 950 250 C 950 440, 650 440, 650 250" stroke="white" strokeWidth="1" fill="none" className="opacity-20" />

                {/* Connecting Global Contours */}
                <path d="M 0 150 Q 200 0, 500 150 T 1000 100" stroke="white" strokeWidth="1" fill="none" className="opacity-20" />
                <path d="M 0 200 Q 250 50, 500 200 T 1000 150" stroke="white" strokeWidth="1" fill="none" className="opacity-15" />
                <path d="M 0 250 Q 300 100, 500 250 T 1000 200" stroke="white" strokeWidth="1" fill="none" className="opacity-10" />
                
                <path d="M 0 350 Q 200 500, 500 350 T 1000 400" stroke="white" strokeWidth="1" fill="none" className="opacity-20" />
                <path d="M 0 300 Q 250 450, 500 300 T 1000 350" stroke="white" strokeWidth="1" fill="none" className="opacity-15" />
              </svg>

              {/* Subtle Crosshairs in center */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5" />
              <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/5" />

              {/* SVG Connecting Routes */}
              <svg className="absolute inset-0 w-full h-full z-[1]">
                <motion.path d="M 15% 25% L 50% 40% L 80% 20%" stroke="rgba(59,130,246,0.3)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                <motion.path d="M 20% 75% L 50% 40% L 75% 70%" stroke="rgba(59,130,246,0.3)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                <motion.path d="M 10% 50% L 50% 40% L 85% 45%" stroke="rgba(59,130,246,0.3)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                <motion.path d="M 45% 80% L 50% 40%" stroke="rgba(59,130,246,0.3)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
              </svg>
            </div>

            {/* Perimeter Coordinates (Decorative) */}
            <div className="absolute top-12 left-[15%] text-[8px] font-mono tracking-widest text-accent/50 group-hover/map:text-accent transition-colors duration-700">LAT: 34.0522 // SYNC ACTIVATED</div>
            <div className="absolute top-12 right-[15%] text-[8px] font-mono tracking-widest text-accent/50 group-hover/map:text-accent transition-colors duration-700">LONG: -118.2437 // SECTOR 7G</div>
            <div className="absolute bottom-12 left-[15%] text-[8px] font-mono tracking-widest text-white/20">SECURE CHANNEL // ONLINE</div>
            <div className="absolute bottom-12 right-[15%] text-[8px] font-mono tracking-widest text-white/20">STATUS: NOMINAL</div>
            
            {/* SVG Connecting Routes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-[1]">
              <motion.path 
                d="M 15% 25% L 50% 40% L 80% 20%" 
                stroke="rgba(59,130,246,0.15)" strokeWidth="1" fill="none" strokeDasharray="4 4" 
              />
              <motion.path 
                d="M 20% 75% L 50% 40% L 75% 70%" 
                stroke="rgba(59,130,246,0.15)" strokeWidth="1" fill="none" strokeDasharray="4 4" 
              />
              <motion.path 
                d="M 10% 50% L 50% 40% L 85% 45%" 
                stroke="rgba(59,130,246,0.15)" strokeWidth="1" fill="none" strokeDasharray="4 4" 
              />
              <motion.path 
                d="M 45% 80% L 50% 40%" 
                stroke="rgba(59,130,246,0.15)" strokeWidth="1" fill="none" strokeDasharray="4 4" 
              />
            </svg>

            {/* Tool Data Points */}
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="absolute flex flex-col items-center justify-center group z-20 cursor-crosshair transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${tool.x}%`, top: `${tool.y}%` }}
              >
                {/* Visual Node */}
                <div className="relative flex items-center justify-center">
                  {/* Invisible Hit Area for easier sweeping and finding */}
                  <div className="absolute w-20 h-20 bg-transparent z-[100] rounded-full" />

                  {/* Intense Hover Aura */}
                  <div className="absolute w-12 h-12 rounded-full bg-accent/40 blur-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Hover Target Ring */}
                  <div className="absolute w-6 h-6 rounded-full border border-accent/50 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100" />
                  {/* The solid core node (COMPLETELY HIDDEN on idle) */}
                  <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.4)] flex items-center justify-center relative z-10 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(255,255,255,1),_0_0_20px_rgba(59,130,246,1)]" />
                  {/* Blinking/Pinging signal ONLY when hovered */}
                  <div className="absolute w-4 h-4 bg-white/80 rounded-full opacity-0 group-hover:animate-ping group-hover:opacity-100 pointer-events-none" />
                </div>

                {/* Tactical Label (Visible ONLY on Hover) */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="w-[1px] h-4 bg-accent mb-0 shadow-[0_0_8px_rgba(59,130,246,1)]" />
                  <div className="bg-[#050B1B]/95 border border-accent/80 shadow-[0_0_20px_rgba(59,130,246,0.8)] px-3 py-1.5 rounded-[4px] backdrop-blur-md whitespace-nowrap text-center relative z-20">
                    <span className="block text-white drop-shadow-[0_0_8px_rgba(255,255,255,1)] text-[11px] font-bold font-mono tracking-widest transition-all duration-300 transform scale-95 group-hover:scale-110">
                      {tool.id}:{tool.name.toUpperCase()}
                    </span>
                    <span className="block text-accent drop-shadow-[0_0_10px_rgba(59,130,246,1)] text-[9px] font-mono uppercase tracking-[0.2em] mt-1 font-bold">
                      {tool.type}
                    </span>
                  </div>
                </div>
                
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
