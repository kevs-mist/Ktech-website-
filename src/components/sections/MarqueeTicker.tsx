"use client";

import React from "react";

// PRD Section 3.3 — Marquee Ticker
// Engineering aesthetic: smooth infinite scroll
export default function MarqueeTicker() {
  const items = [
    "Software Development",
    "Clean Architecture",
    "Machine Learning",
    "Neural Networks",
    "Flutter Engineering",
    "Production-Ready",
    "Modular Systems",
    "Performance-First",
    "Scalable Designs",
  ];

  return (
    <section className="py-12 bg-bg-secondary/30 border-y border-white/5 overflow-hidden flex whitespace-nowrap">
      <div className="flex animate-marquee hover:pause whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-8 mx-8">
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-text-secondary/60">
              {item}
            </span>
            <div className="w-2 h-2 rounded-full bg-accent/40" />
          </div>
        ))}
      </div>
      
      {/* 
        Tailwind v4 CSS animation configuration must be in globals.css 
        or inline style here for speed 
      */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }
        .hover\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
