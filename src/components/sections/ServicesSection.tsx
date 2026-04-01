"use client";

import React, { useRef } from "react";
import { services, Service } from "@/data/services";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

// PRD Section 3.5 — Services Golden Triangle
// 3 compact cards at 3 non-overlapping vertices, connected by lines on scroll
export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const tri = services.slice(0, 3);

  // Beams draw AFTER all cards placed (scroll 50%–95%)
  const beam1 = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);
  const beam2 = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);
  const beam3 = useTransform(scrollYProgress, [0.8, 0.95], [0, 1]);
  const beamFade = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);

  return (
    <section id="services" ref={containerRef} className="relative h-[350vh] bg-bg-primary">
      <div className="sticky top-0 h-screen flex flex-col lg:flex-row items-center pt-24 overflow-hidden px-6 md:px-12 lg:px-24">

        {/* LEFT STICKY SIDEBAR (Icomat style) */}
        <div className="w-full lg:w-1/3 flex flex-col items-start lg:items-start lg:mb-0 mb-12">
            <SectionLabel label="Our Services" className="mb-6" />
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight text-white max-w-sm leading-[0.95]">
                Engineering <br/> <span className="text-accent">Architectures</span> <br/> Beyond Limits.
            </h2>
        </div>

        {/* RIGHT SCROLLABLE SPACE — Triangle logic moved here */}
        <div className="relative flex-1 w-full h-full">

            {/* SVG TRIANGLE LINES (Refocused for the side header layout) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-[1]" preserveAspectRatio="none" viewBox="0 0 100 100">
                <motion.line x1="50" y1="36" x2="20" y2="82" stroke="rgba(59,130,246,0.35)" strokeWidth="0.2" style={{ pathLength: beam1, opacity: beamFade }} />
                <motion.line x1="20" y1="82" x2="80" y2="82" stroke="rgba(59,130,246,0.35)" strokeWidth="0.2" style={{ pathLength: beam2, opacity: beamFade }} />
                <motion.line x1="80" y1="82" x2="50" y2="36" stroke="rgba(59,130,246,0.35)" strokeWidth="0.2" style={{ pathLength: beam3, opacity: beamFade }} />
            </svg>

            {/* CARD GRID — Optimized for the new layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 h-full gap-8 py-12">
                {/* P1 — TOP CENTER */}
                <div style={{ gridColumn: '2', gridRow: '1' }} className="flex items-start justify-center pt-16">
                    <TriCard service={tri[0]} progress={scrollYProgress} range={[0, 0.15]} />
                </div>
                {/* P2 — BOTTOM LEFT */}
                <div style={{ gridColumn: '1', gridRow: '2' }} className="flex items-end justify-center pb-8">
                    <TriCard service={tri[1]} progress={scrollYProgress} range={[0.15, 0.3]} />
                </div>
                {/* P3 — BOTTOM RIGHT */}
                <div style={{ gridColumn: '3', gridRow: '2' }} className="flex items-end justify-center pb-8">
                    <TriCard service={tri[2]} progress={scrollYProgress} range={[0.3, 0.45]} />
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}

/* Compact card built for the triangle — smaller padding, shorter text */
function TriCard({ service, progress, range }: { service: Service; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0, 1]);
  const scale = useTransform(progress, range, [0.92, 1]);
  const y = useTransform(progress, range, [24, 0]);

  return (
    <motion.div style={{ opacity, scale, y, maxWidth: '300px', width: '100%' }}>
      <div className="bg-bg-secondary p-6 rounded-lg border border-white/5 group hover:border-accent/30 transition-all duration-300">
        <h3 className="font-display font-black text-lg md:text-xl uppercase mb-3 tracking-tight text-white group-hover:text-accent transition-colors">
          {service.title}
        </h3>
        <p className="text-text-secondary text-[13px] leading-relaxed mb-4 line-clamp-3">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {service.tech.slice(0, 4).map((t, i) => (
            <span key={i} className="text-[10px] text-text-secondary border border-white/10 px-2 py-1 rounded-[4px] tracking-[0.1em]">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
