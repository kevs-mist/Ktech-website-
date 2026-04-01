import type { Metadata, Viewport } from "next";
import { inter, barlowCondensed, playfairDisplay } from "@/lib/fonts";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import ArrowKeyNavigation from "@/components/ui/ArrowKeyNavigation";
import "@/app/globals.css";

// KTech SEO Metadata per PRD §10 Goal
export const metadata: Metadata = {
  title: "Keval Mistry | KTech — Engineering Extraordinary Digital Experiences",
  description: 
    "Software Developer and Entrepreneur specialize in Full-stack Development, ML (C++), and Cross-platform Apps (Flutter). Based in Ahmedabad, GJ.",
  keywords: ["Software Developer", "Full Stack", "ML", "C++ Neural Network", "Flutter ERP", "KTech Website"],
  openGraph: {
    title: "Keval Mistry | KTech",
    description: "Personal portfolio of Keval Mistry, building high-performance engineered digital solutions.",
    url: "https://ktech.dev", // Update once domain finalized
    siteName: "KTech Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keval Mistry | KTech Portfolio",
    description: "Modern, high-performance web and mobile products.",
    creator: "@kevsi_mist",
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${barlowCondensed.variable} ${playfairDisplay.variable} h-full antialiased dark`}
      style={{ colorScheme: 'dark' }}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary selection:bg-accent selection:text-white">
        <SmoothScrollProvider>
          <ThemeProvider>
            {/* 
                Global layout wrapper per PRD Section 5.1 
                Page max-width: 1400px (applied at page level or section level to avoid constrained bg)
            */}
            <main className="flex-grow flex flex-col relative text-clip">
              {children}
            </main>
          </ThemeProvider>
          {/* UI Elements */}
          <CustomCursor />
          <ArrowKeyNavigation />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
