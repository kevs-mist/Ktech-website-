"use client";

import { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

/**
 * SmoothScrollProvider — REVISION SPRINT 2.0
 * Integrates Lenis for high-end, responsive smooth scrolling.
 * Solves the "sloppy/stuck" feel of native browser scroll when spammed.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.04, 
      duration: 1.4, 
      smoothWheel: true,
      wheelMultiplier: 1.0,
      infinite: false,
      autoRaf: true 
    }}>
      {children}
    </ReactLenis>
  );
}
