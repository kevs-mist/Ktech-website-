"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

interface StatCounterProps {
  end: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

// PRD Section 3.8 — StatCounter Section
// Numbers count up from 0 when enters viewport
export default function StatCounter({ end, className = "", style }: StatCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [isInView, end, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <motion.div 
      ref={ref}
      style={style}
      className={`${className}`}
    >
      {displayValue}
    </motion.div>
  );
}
