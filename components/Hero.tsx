"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import ValoreLogo from "./ui/ValoreLogo";
import MaskedText from "./ui/MaskedText";
import RollingText from "./ui/RollingText";

export default function Hero() {
  const metrics = [
    { label: "EDGE LATENCY", value: "< 80ms", desc: "Global TTFB" },
    { label: "CORE VITALS", value: "100/100", desc: "Lighthouse Performance" },
    { label: "ARCHITECTURE", value: "0% Bloat", desc: "Bespoke Clean Code" },
    { label: "FRAMEWORK", value: "Next.js 16", desc: "React 19 & Turbopack" },
  ];

  return (
    <section className="relative min-h-[96vh] flex flex-col justify-center items-center bg-black text-[#F5F5F7] pt-32 pb-20 overflow-hidden transition-colors duration-300">
      {/* Apple-grade Specular Graphite & Titanium Ambient Gradient */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-transparent blur-[140px]" 
      />
      
      {/* Precision subtle hairline architectural grid */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_60%,transparent_100%)] opacity-60" 
      />

      <div className="mx-auto max-w-[1140px] px-6 text-center z-10 w-full flex flex-col items-center">
        {/* Studio Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex justify-center"
        >
          <ValoreLogo iconOnly size="lg" />
        </motion.div>

        {/* Minimalist Studio Coordinate Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-white/[0.03] backdrop-blur-2xl px-4 py-1.5 shadow-2xl transition-all hover:border-white/20">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E5D3B3] animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#A1A1A6] uppercase">
              Studio Valore &bull; Bespoke Web Architecture & Systems
            </span>
          </div>
        </motion.div>

        {/* Apple-grade Keynote Headline with Kinetic Masked Text Reveal */}
        <div className="w-full">
          <MaskedText
            as="h1"
            text={[
              "DIGITAL ARCHITECTURE.",
              "ENGINEERED WITHOUT COMPROMISE."
            ]}
            className="text-white font-sans font-bold leading-[1.0] tracking-[-0.035em] uppercase text-center"
            lineClassName="text-[clamp(2.5rem,6.8vw,5.5rem)] bg-gradient-to-b from-white via-[#ECECEE] to-[#99999C] bg-clip-text text-transparent"
            delay={0.2}
            stagger={0.15}
            duration={1.0}
          />
        </div>

        {/* Editorial Narrative */}
        <motion.p
          className="mx-auto mt-8 max-w-2xl font-sans text-base sm:text-lg text-[#86868B] leading-relaxed tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          We design and build bespoke web platforms, pristine brand identities, and high-performance digital systems for ambitious founders and enterprises.
        </motion.p>

        {/* Dual Kinetic Rolling Text CTAs */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#book-discovery"
            className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-[#F5F5F7] text-black px-8 py-4 text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:bg-white hover:scale-[1.02] active:scale-[0.98] shadow-2xl w-full sm:w-auto"
          >
            <RollingText>Initiate Project Spec</RollingText>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <Link
            href="/work"
            className="group relative inline-flex items-center justify-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.04] backdrop-blur-xl text-[#F5F5F7] px-8 py-4 text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
          >
            <RollingText>Explore Selected Works</RollingText>
          </Link>
        </motion.div>

        {/* Apple Pro Hardware-Inspired Metrics Spec Bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 w-full max-w-4xl border-y border-white/[0.08] py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {metrics.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#86868B] uppercase mb-1">
                {item.label}
              </span>
              <span className="font-sans font-bold text-xl sm:text-2xl text-white tracking-tight">
                {item.value}
              </span>
              <span className="text-xs text-[#86868B]/80 font-sans mt-0.5">
                {item.desc}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-14 flex flex-col items-center gap-1.5 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#86868B]">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-3.5 w-3.5 text-[#86868B]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
