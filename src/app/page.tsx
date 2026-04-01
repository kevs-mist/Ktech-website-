import React from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ScrollTextReveal from "@/components/sections/ScrollTextReveal";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ToolsSection from "@/components/sections/ToolsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import StatsBar from "@/components/sections/StatsBar";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

/**
 * KTech Website — Homepage Assembly (Sprint 2.0 Revision)
 * Orchestrates all architectural sections as defined in PRD §3/8
 */
export default function Home() {
  return (
    <div className="relative min-h-screen">
      
      {/* UI Elements */}
      <CustomCursor />
      <Navbar />

      <main>
        {/* HERO (PRD §3.2) */}
        <HeroSection />

        {/* PHILOSOPHY (PRD §3.4 - Major Rework) */}
        <ScrollTextReveal />

        {/* SERVICES (PRD §3.5) */}
        <ServicesSection />

        {/* PROCESS (PRD §3.6) */}
        <ProcessSection />

        {/* TOOLS (Engineering Environment) */}
        <ToolsSection />

        {/* PROJECTS (PRD §3.7 - Full Rework) */}
        <ProjectsSection />

        {/* STATS BAR (PRD §3.8 - New Section) */}
        <StatsBar />

        {/* CTA (PRD §3.9) */}
        <CTASection />
      </main>

      {/* FOOTER (PRD §3.10) */}
      <Footer />

    </div>
  );
}
