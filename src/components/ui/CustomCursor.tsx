"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

// PRD Section 1 — Standardize UI
// Engineering aesthetic: custom cursor
export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring physics for Cursor
  const springConfig = { damping: 25, stiffness: 250 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkPointer = () => {
      setIsPointer(window.matchMedia("(pointer: fine)").matches);
    };
    checkPointer();

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  if (!isPointer) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent bg-accent/10 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{
        translateX: springX,
        translateY: springY,
        x: "-50%",
        y: "-50%",
      }}
    />
  );
}
