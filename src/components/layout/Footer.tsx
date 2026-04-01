"use client";

import React from "react";
import Link from "next/link";

// PRD Section 10 Goal - Footer
// Matches Brand aesthetic: KTech 2026.
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-24 pb-12 border-t border-white/5 bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center gap-16">
        
        {/* LOGO */}
        <div className="flex flex-col items-center gap-4">
          <Link href="/" className="group flex items-center gap-2">
            <span className="font-display font-black text-6xl tracking-tighter hover:text-accent transition-all duration-700">
              KTECH<span className="text-accent group-hover:scale-150 transition-transform">.</span>
            </span>
          </Link>
          <span className="text-[11px] font-semibold tracking-[0.4em] uppercase text-text-secondary">
            Engineering Extraordinary Digital Experiences
          </span>
        </div>

        {/* Social Links Based on User Profile §Brain */}
        <div className="flex flex-wrap items-center justify-center gap-12">
          {[
            { label: "GITHUB ↗", href: "https://github.com/kevsi-mist" },
            { label: "LINKEDIN ↗", href: "#" }, // Update with Keval's Link
            { label: "WHATSAPP ↗", href: "https://wa.me/916357243095" },
            { label: "EMAIL ↗", href: "mailto:kevalmistry5927@gmail.com" },
          ].map((social) => (
            <Link 
              key={social.label} 
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold tracking-[0.25em] uppercase text-text-secondary hover:text-white transition-colors"
            >
              {social.label}
            </Link>
          ))}
        </div>

        {/* Separator / Credit line */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-6">
          <p className="text-[11px] font-medium tracking-[0.1em] text-white/30 uppercase">
            © {currentYear} KTech Portfolio. Developed by Keval Mistry.
          </p>
          <p className="text-[11px] font-medium tracking-[0.1em] text-white/30 uppercase">
            AHMEDABAD, GUJARAT, INDIA
          </p>
          <div className="flex gap-8">
             <span className="text-[11px] text-white/20 uppercase tracking-[0.1em]">Privacy</span>
             <span className="text-[11px] text-white/20 uppercase tracking-[0.1em]">Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
