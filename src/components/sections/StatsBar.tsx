"use client";

import React from "react";
import StatCounter from "@/components/ui/StatCounter";

// PRD Section 3.8 — New Section — Stats / Social Proof Bar
// TASKFILE T05 — Stats appear between Projects and CTA
export default function StatsBar() {
  const stats = [
    { value: 3, label: "Projects" },
    { value: 5, label: "Languages" },
    { value: 1, label: "Production App" },
  ];

  return (
    <section className="section-dark py-24 bg-bg-primary border-t border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center items-center">
          
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-4 group">
              {/* STAT COUNTER (T05 — numbers animate when enters viewport) */}
              <div className="flex items-baseline gap-1">
                <StatCounter 
                  end={stat.value}
                  className="font-display font-black text-accent tracking-tighter"
                  style={{ fontSize: 'clamp(48px, 6vw, 72px)' }}
                />
                {stat.label === "Languages" && (
                   <span className="font-display font-black text-accent text-3xl">+</span>
                )}
              </div>

              {/* LABEL (T05 — White Accents) */}
              <span className="text-[11px] font-semibold text-white/50 tracking-[0.4em] uppercase group-hover:text-white transition-colors duration-500">
                {stat.label}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
