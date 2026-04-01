"use client";

import React from "react";
import ContactForm from "@/components/ui/ContactForm";
import SectionLabel from "@/components/ui/SectionLabel";
import Link from "next/link";

// PRD Section 3.9 — CTA Section Minor Tuning
// TASKFILE T06 — 3 buttons, Hairline above section, Radial glow 12% opacity
export default function CTASection() {
  return (
    <section id="contact" className="relative py-32 md:py-56 bg-bg-primary overflow-hidden">
      
      {/* SEPARATOR (T06 — Hairline exists above CTA section) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5" />

      {/* RADIAL GLOW (T06 — Radial glow 12% opacity §3.9) */}
      <div 
        className="absolute bottom-0 right-0 w-[1200px] h-[1200px] pointer-events-none opacity-100 z-0"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)'
        }}
      />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* CTA TEXT (PRD Layout §3.9) */}
          <div>
            <SectionLabel label="Contact" className="mb-6" />
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tight leading-[0.95] mb-8 max-w-2xl">
              Ready to <br /> <span className="text-accent underline decoration-[6px] underline-offset-[12px]">Build</span>?
            </h2>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-12 max-w-lg font-medium opacity-80 uppercase tracking-widest">
              Available for freelance architecture, full-stack engineering, and AI systems integration.
            </p>

            {/* CTA BUTTONS (T06 — 3 buttons: Let's Talk, Chat on WhatsApp →, GitHub Profile ↗) */}
            <div className="flex flex-col sm:flex-row items-center gap-6 flex-wrap relative">
              <Link 
                href="mailto:kevalmistry5927@gmail.com"
                className="w-full sm:w-auto px-8 py-4 bg-accent text-white text-[11px] font-semibold tracking-[0.2em] uppercase 
                           rounded-sm hover:scale-105 transition-all text-center"
              >
                Let&apos;s Talk —
              </Link>
              
              <Link 
                href="https://wa.me/916357243095"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white text-[11px] font-semibold tracking-[0.2em] uppercase 
                           rounded-sm hover:border-accent hover:text-accent transition-all text-center flex items-center justify-center gap-2"
              >
                WhatsApp <span className="text-sm">→</span>
              </Link>

              <Link 
                href="https://github.com/kevsi-mist"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold tracking-[0.2em] uppercase text-text-secondary hover:text-white transition-colors"
              >
                GitHub Profile ↗
              </Link>
            </div>
          </div>

          {/* CONTACT FORM (MUI components as requested) — RIGHT COLUMN */}
          <div className="relative pt-24 lg:pt-32">
            {/* HANDWRITTEN HINT (Topological style) */}
            <div className="absolute top-0 left-12 lg:left-24 z-20 hidden md:flex flex-col items-center transform -rotate-3 opacity-90 pointer-events-none max-w-[280px]">
              <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap');" }} />
              <span 
                className="text-white/95 text-xl lg:text-2xl text-center leading-tight tracking-wide"
                style={{ fontFamily: '"Caveat", cursive' }}
              >
                You scrolled this Far, <br/> might aswell contact me. <br/>
                My work is as mooth as <br/> those animations
              </span>
              {/* Hand-drawn curving arrow pointing down into the form */}
              <svg width="80" height="60" viewBox="0 0 100 100" fill="none" className="text-white/30 stroke-current mt-1 transform rotate-[100deg]">
                <path d="M 20,20 Q 50,20 70,70" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4" />
                <path d="M 55,60 L 70,70 L 75,50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="bg-bg-secondary/40 p-8 md:p-12 rounded-lg border border-white/5 backdrop-blur-sm shadow-2xl relative z-10 overflow-hidden">
              <h3 className="text-xl font-display font-black uppercase tracking-widest mb-2 border-b border-white/10 pb-4">
                Send a Message<span className="text-accent">.</span>
              </h3>
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
