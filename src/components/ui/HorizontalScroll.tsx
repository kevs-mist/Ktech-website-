"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HorizontalScrollProps {
  children: React.ReactNode;
  onActiveChange?: (index: number) => void;
  itemsCount: number;
}

// PRD Section 3.7 — Horizontal Scroll Project Showcase
// Card width min(680px, 85vw), Gap 32px
export default function HorizontalScroll({ children, onActiveChange, itemsCount }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Drag constraints Calculation
  useEffect(() => {
    // Width logic would go here if needed for custom scrollbars
  }, [children]);

  // Handle active card tracking for pagination dots (T04d)
  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollLeft = containerRef.current.scrollLeft;
    const cardWidth = containerRef.current.scrollWidth / itemsCount;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
      if (onActiveChange) onActiveChange(newIndex);
    }
  };

  // Keyboard Navigation (Taskfile T07)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!containerRef.current) return;
    if (e.key === "ArrowRight") {
      containerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    } else if (e.key === "ArrowLeft") {
      containerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  return (
    <div 
      className="relative w-full group outline-none"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Project showcase carousel"
    >
      <div 
        ref={containerRef}
        onScroll={handleScroll}
        className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing px-[max(16px,calc((100vw-1200px)/2))] pb-12 transition-all duration-500"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {/*
          PRD Requirement §3.7: Staggered entrance
          Cards translated in horizontally using Framer Motion 
        */}
        {React.Children.map(children, (child, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.8, 
              delay: i * 0.12, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="flex-shrink-0 snap-start snap-always"
          >
            {child}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
