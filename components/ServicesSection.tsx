"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Layers, Layout, ShieldCheck, Terminal, Zap } from "lucide-react";
import Link from "next/link";
import MaskedText from "./ui/MaskedText";
import RollingText from "./ui/RollingText";

export default function ServicesSection() {
  const capabilities = [
    {
      num: "01",
      category: "CORE ARCHITECTURE",
      title: "Bespoke Web Engineering",
      desc: "Handcrafted Next.js 16 and React 19 platforms engineered for sub-second speeds, zero template bloat, and infinite scalability.",
      specs: ["Next.js App Router", "Sub-80ms Global TTFB", "100/100 Core Web Vitals", "Edge-Rendered SSR"],
      icon: Terminal,
    },
    {
      num: "02",
      category: "ART DIRECTION",
      title: "Brand Identity & Design Systems",
      desc: "Editorial typographic rigor, kinetic micro-interactions, and commanding digital presence that elevates brands above standard templates.",
      specs: ["Precision Typography", "Kinetic Motion Physics", "Apple-Grade Aesthetics", "Custom Design Tokens"],
      icon: Layout,
    },
    {
      num: "03",
      category: "SYSTEMS & BACKEND",
      title: "Automated Digital Infrastructure",
      desc: "Intelligent backend pipelines, Stripe payment rails, and synchronized workflow automation that eliminate operational bottlenecks.",
      specs: ["Stripe Checkout Rails", "Webhook Architecture", "Automated Pipelines", "Headless CMS & APIs"],
      icon: Cpu,
    },
  ];

  return (
    <section id="services" className="bg-black text-[#F5F5F7] border-b border-white/[0.08] relative overflow-hidden py-28 sm:py-36">
      {/* Precision ambient lighting */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-10 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[160px]" 
      />

      <div className="mx-auto max-w-[1140px] px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#86868B] uppercase">
              Capabilities & Architectural Rigor
            </span>
          </motion.div>

          <MaskedText
            as="h2"
            text={[
              "DISCIPLINED CRAFTSMANSHIP.",
              "MEASURABLE PERFORMANCE."
            ]}
            className="text-white font-sans font-bold leading-[1.05] tracking-[-0.03em] uppercase text-center"
            lineClassName="text-[clamp(2.2rem,5vw,3.75rem)] bg-gradient-to-b from-white via-[#EFEFF0] to-[#88888C] bg-clip-text text-transparent"
            delay={0.1}
            stagger={0.12}
          />

          <motion.p
            className="mt-6 text-sm sm:text-base text-[#86868B] font-sans leading-relaxed tracking-tight max-w-xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            We reject bloated website builders, generic templates, and fragile plugins. Every interface is custom-architected for maximum speed and authority.
          </motion.p>
        </div>

        {/* 3 Pillar Architectural Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.num}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-[#0A0A0D] p-8 sm:p-9 transition-all duration-500 hover:border-white/20 hover:bg-[#101014] hover:shadow-2xl"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <div>
                  {/* Top Index and Category */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.06]">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-[#86868B]">
                      {item.num} // {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/[0.1] flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-white/30 transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-sans font-bold text-xl sm:text-2xl text-white uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#86868B] text-xs sm:text-sm leading-relaxed mb-8">
                    {item.desc}
                  </p>

                  {/* Hardware Spec Tags */}
                  <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                    <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-[#86868B]">
                      Architectural Specs
                    </span>
                    <ul className="space-y-2">
                      {item.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2 text-xs text-[#E1E1E6]">
                          <span className="h-1 w-1 rounded-full bg-[#E5D3B3]" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="mt-10 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#86868B]">
                    Production Ready
                  </span>
                  <a
                    href="#book-discovery"
                    className="group/link inline-flex items-center gap-1 font-mono text-[11px] tracking-wider uppercase text-white hover:text-[#E5D3B3] transition-colors"
                  >
                    <RollingText duplicateClassName="text-[#E5D3B3]">Consult Spec</RollingText>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Philosophy Banner */}
        <motion.div
          className="mt-16 rounded-3xl border border-white/[0.08] bg-gradient-to-r from-white/[0.03] to-transparent p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#86868B] uppercase block mb-1">
              Engineering Standard
            </span>
            <h4 className="font-sans font-bold text-lg sm:text-xl text-white uppercase tracking-tight">
              100% Bespoke Codebase. Full Client Ownership.
            </h4>
            <p className="text-xs sm:text-sm text-[#86868B] mt-1 max-w-xl">
              You receive full intellectual property and Git repository ownership. No vendor lock-in, no hidden recurring builder fees.
            </p>
          </div>

          <Link
            href="/work"
            className="group shrink-0 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 font-mono text-[11px] tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <RollingText duplicateClassName="text-black">View Live Systems</RollingText>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
