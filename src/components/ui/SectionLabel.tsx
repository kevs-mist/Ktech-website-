"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionLabelProps {
  label: string;
  className?: string;
}

// PRD Section 3.7 / 3.4 — "Eyebrow" / Section Label
// 11px, tracking 0.3em, uppercase, text-secondary
export default function SectionLabel({ label, className = "" }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-center gap-4 ${className}`}
    >
      <span className="text-accent">—</span>
      <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-text-secondary">
        {label}
      </span>
    </motion.div>
  );
}
