"use client";

import React from "react";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

// PRD Section 3.5 — Service Card Spec
// max-width: 560px, rounded corners, stack pills 4px radius
export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div 
      style={{ maxWidth: '560px' }}
      className="bg-bg-secondary w-full p-10 md:p-12 rounded-lg group hover:bg-bg-secondary/80 transition-all duration-300 border border-white/5"
    >
      {/* Title: Pure White Accent for premium contrast */}
      <h3 className="font-display font-black text-3xl md:text-4xl lg:text-5xl uppercase mb-6 tracking-tight text-white group-hover:text-accent transition-colors">
        {service.title}
      </h3>
      
      {/* Description: 15px text-secondary */}
      <p className="text-text-secondary text-[15px] leading-relaxed mb-8">
        {service.description}
      </p>

      {/* Stack Labels: border-radius: 4px, gap: 8px */}
      <div className="flex flex-wrap gap-2">
        {service.tech.map((s, i) => (
          <span 
            key={i} 
            className="text-[11px] text-text-secondary border border-white/10 px-3 py-1.5 rounded-[4px] tracking-[0.1em] transition-all group-hover:border-accent/40"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
