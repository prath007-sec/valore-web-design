"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import ValoreLogo from "./ui/ValoreLogo";
import MaskedText from "./ui/MaskedText";
import RollingText from "./ui/RollingText";
import ScrambleText from "./ui/ScrambleText";

export default function Hero() {
  const metrics = [
    { label: "EDGE LATENCY", value: "< 80ms", desc: "Global TTFB" },
    { label: "CORE VITALS", value: "100/100", desc: "Lighthouse Score" },
    { label: "ARCHITECTURE", value: "0% Bloat", desc: "Bespoke Clean Code" },
    { label: "FRAMEWORK", value: "Next.js 16", desc: "React 19 & Turbopack" },
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center bg-background text-foreground pt-32 pb-20 overflow-hidden transition-colors duration-300">
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

        {/* Visuvate-inspired Technical Index Header with Scramble Animation */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2">
            <ScrambleText
              text="STUDIO VALORE // BESPOKE ARCHITECTURE & DIGITAL SYSTEMS"
              className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-muted-foreground uppercase cursor-default"
              delay={200}
            />
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
            className="text-foreground font-sans font-bold leading-[1.0] tracking-[-0.035em] uppercase text-center"
            lineClassName="text-[clamp(2.5rem,6.8vw,5.5rem)] text-foreground"
            delay={0.2}
            stagger={0.15}
            duration={1.0}
          />
        </div>

        {/* Editorial Narrative */}
        <motion.p
          className="mx-auto mt-8 max-w-2xl font-sans text-base sm:text-lg text-muted-foreground leading-relaxed tracking-tight"
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
            className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-foreground text-background px-8 py-4 text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg w-full sm:w-auto"
          >
            <RollingText duplicateClassName="text-background">Initiate Project Spec</RollingText>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <Link
            href="/work"
            className="group relative inline-flex items-center justify-center gap-3 rounded-full border border-border bg-card/70 backdrop-blur-xl text-foreground px-8 py-4 text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:border-foreground/30 hover:bg-card hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
          >
            <RollingText duplicateClassName="text-foreground">Explore Selected Works</RollingText>
          </Link>
        </motion.div>

        {/* Hardware-Inspired Metrics Spec Bar with Letter Scramble */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 w-full max-w-4xl border-y border-border py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {metrics.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <ScrambleText
                text={item.label}
                className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-1 cursor-default"
                delay={900 + idx * 100}
              />
              <span className="font-sans font-bold text-xl sm:text-2xl text-foreground tracking-tight">
                {item.value}
              </span>
              <span className="text-xs text-muted-foreground font-sans mt-0.5">
                {item.desc}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-14 flex flex-col items-center gap-1.5 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
