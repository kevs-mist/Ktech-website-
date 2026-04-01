"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

// PRD Section 3.4 — Philosophy Section
// Sticky scroll-reveal, line-by-line opacity, no WAAPI color/scale transforms
export default function ScrollTextReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  const lines = [
    "ENGINEERING EXTRAORDINARY",
    "DIGITAL EXPERIENCES THROUGH",
    "STRUCTURAL MODULARITY, CLEAN",
    "ARCHITECTURAL PATTERNS, AND",
    "HIGH-PERFORMANCE FOUNDATIONAL",
    "AI SYSTEMS DESIGNED FOR",
    "NEXT-GENERATION SOLUTIONS."
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative h-[500vh] bg-bg-primary"
    >
      <div className="sticky top-0 h-screen flex flex-col pt-20 pb-10">

        <div className="flex-1 container relative z-10 mx-auto px-4 md:px-8 max-w-7xl flex flex-col items-center justify-center text-center">

          <SectionLabel label="Philosophy" className="mb-6 md:mb-10 text-[10px]" />

          <div className="max-w-[1000px] mx-auto">
            <div
              style={{
                fontSize: 'clamp(20px, 4vw, 52px)',
                lineHeight: 1.1,
              }}
              className="font-display font-black uppercase flex flex-col items-center gap-1"
            >
              {lines.map((line, i) => (
                <RevealLine
                  key={i}
                  progress={scrollYProgress}
                  index={i}
                  total={lines.length}
                  text={line}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-[80px] h-[1px] bg-accent mt-12 md:mt-16 origin-center"
          />

        </div>
      </div>
    </section>
  );
}

// Uses only opacity via inline style binding — avoids WAAPI color/scale keyframe issues
function RevealLine({ progress, index, total, text }: {
  progress: MotionValue<number>;
  index: number;
  total: number;
  text: string;
}) {
  const start = (index / total) * 0.25;
  const end = start + 0.08;
  const opacity = useTransform(progress, [start, end], [0.15, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="block text-white"
    >
      {text}
    </motion.span>
  );
}
