"use client";

import React from "react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

// PRD Section 3.7 — Project Card Spec
// Width: min(680px, 85vw), Height: min 480px, Padding: 48px, Radius: 8px
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div 
      style={{ width: 'min(680px, 85vw)', minHeight: '480px' }}
      className="bg-bg-secondary rounded-lg p-10 md:p-12 flex flex-col group hover:ring-1 hover:ring-white/10 transition-all duration-500"
    >
      {/* Top row: Tag & Badge (PRD Layout Architecture) */}
      <div className="flex items-start justify-between mb-8">
        <span className="text-accent text-[11px] font-semibold tracking-[0.3em] uppercase">
          {project.tag}
        </span>
        <span className="text-[11px] font-semibold tracking-[0.15em] uppercase 
                         border border-white/20 px-3 py-1 rounded-sm text-text-secondary">
          {project.badge}
        </span>
      </div>

      {/* Title with White Accent: clamp(32px, 5.5vw, 64px) */}
      <h3 
        style={{ fontSize: 'clamp(32px, 5.5vw, 64px)', lineHeight: 1.0 }}
        className="font-display font-black uppercase mb-8 line-clamp-2 text-white"
      >
        {project.title}
      </h3>

      {/* Divider */}
      <div className="w-full h-[1px] bg-white/10 mb-6" />

      {/* Metadata Row: 12px uppercase text-secondary */}
      <div className="flex gap-8 mb-6">
        <span className="text-[12px] text-text-secondary tracking-[0.1em] uppercase">
          {project.location}
        </span>
        <span className="text-[12px] text-text-secondary tracking-[0.1em] uppercase">
          {project.period}
        </span>
      </div>

      {/* Description: 15px leading-relaxed */}
      <p className="text-text-secondary text-[15px] leading-relaxed mb-6 line-clamp-3">
        {project.description}
      </p>

      {/* Bullets: 13px with accent dash prefix */}
      <ul className="space-y-2 mb-auto">
        {project.bullets.map((bullet, i) => (
          <li key={i} className="text-[13px] text-text-secondary flex gap-3">
            <span className="text-accent mt-1">—</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {/* Bottom row: Divider → Stack & GitHub link ↗ */}
      <div className="w-full h-[1px] bg-white/10 mt-8 mb-6" />
      <div className="flex items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {project.stack.map((s, i) => (
            <span key={i} className="text-[11px] text-text-secondary border border-white/10 
                                      px-2 py-1 rounded-[4px] tracking-[0.1em] group-hover:border-accent/40 transition-colors">
              {s}
            </span>
          ))}
        </div>
        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={`View ${project.title} on GitHub`}
          className="text-[11px] font-semibold tracking-[0.15em] text-text-secondary 
                     hover:text-accent transition-colors duration-300 uppercase flex-shrink-0 ml-4"
        >
          GitHub ↗
        </a>
      </div>
    </div>
  );
}
