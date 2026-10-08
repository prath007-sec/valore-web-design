"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Terminal } from "lucide-react";
import Link from "next/link";
import ValoreLogo from "./ui/ValoreLogo";
import MaskedText from "./ui/MaskedText";
import RollingText from "./ui/RollingText";

const TECH_STACK = [
  { name: "Next.js 16", category: "React 19 & Turbopack" },
  { name: "Vercel Edge", category: "Global Serverless Compute" },
  { name: "TypeScript 5", category: "Strict Type Safety" },
  { name: "Tailwind CSS 4", category: "Modern Styling Engine" },
  { name: "Stripe", category: "Global Payment Infrastructure" },
  { name: "Framer Motion", category: "Kinetic Micro-Interactions" },
];

export default function AboutMeSection() {
  const principles = [
    {
      num: "01",
      title: "Direct Founder Access",
      desc: "Zero junior account managers or telephone tag. You collaborate directly with the lead engineer and strategist building your platform.",
    },
    {
      num: "02",
      title: "Hand-Coded Clean Architecture",
      desc: "Engineered from a blank canvas in Next.js. No bloated WordPress themes, no fragile plugins, and zero recurring template subscriptions.",
    },
    {
      num: "03",
      title: "Sub-Second Latency",
      desc: "Every asset, query, and render pass is audited for 100/100 Core Web Vitals to maximize organic search authority and conversion rates.",
    },
    {
      num: "04",
      title: "Full Intellectual Property",
      desc: "You own 100% of the custom Git repository, design tokens, and production assets upon deployment with zero licensing lock-in.",
    },
  ];

  return (
    <section className="bg-background text-foreground border-b border-border relative overflow-hidden py-28 sm:py-36 transition-colors duration-300">
      <div className="mx-auto max-w-[1140px] px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Studio Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                Studio Philosophy &bull; Leadership
              </span>
            </motion.div>

            <MaskedText
              as="h2"
              text={[
                "SENIOR ARCHITECTURE.",
                "ZERO AGENCY BUREAUCRACY."
              ]}
              className="text-foreground font-sans font-bold leading-[1.05] tracking-[-0.03em] uppercase mb-6"
              lineClassName="text-[clamp(2rem,4.5vw,3.25rem)] text-foreground"
              delay={0.1}
              stagger={0.12}
            />

            <p className="text-muted-foreground font-sans text-sm sm:text-base leading-relaxed mb-6">
              Founded and led by <strong className="text-foreground font-semibold">Pratham Verma</strong>, Studio Valore engineers custom digital systems for ambitious founders and enterprises who demand uncompromising craft.
            </p>

            <p className="text-muted-foreground font-sans text-xs sm:text-sm leading-relaxed mb-10">
              Traditional marketing agencies outsource their development to bloated templates and overburdened juniors. We work on a selective, high-touch retainer model — crafting every digital touchpoint with architectural precision, sub-second performance, and aesthetic authority.
            </p>

            {/* Principles Grid */}
            <div className="grid sm:grid-cols-2 gap-4 w-full mb-10">
              {principles.map((item) => (
                <div
                  key={item.num}
                  className="p-5 rounded-2xl bg-card border border-border hover:border-foreground/30 transition-all shadow-sm"
                >
                  <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground block mb-2">
                    {item.num} // PRINCIPLE
                  </span>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-foreground mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#book-discovery"
                className="group relative inline-flex items-center gap-2 rounded-full bg-foreground text-background font-mono text-[11px] tracking-wider uppercase px-7 py-3.5 hover:opacity-90 transition-all shadow-md active:scale-[0.97]"
              >
                <RollingText duplicateClassName="text-background">Schedule Consultation</RollingText>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <Link
                href="/work"
                className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
              >
                <RollingText duplicateClassName="text-foreground">View Production Archive</RollingText>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Technical Terminal */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Monogram Card */}
            <div className="rounded-3xl border border-border bg-card p-7 flex items-center justify-between shadow-md">
              <div>
                <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase block mb-1">
                  Studio Registry
                </span>
                <h3 className="font-sans font-bold text-lg text-foreground uppercase tracking-tight">
                  Valore Studio Practice
                </h3>
                <p className="font-mono text-xs text-muted-foreground mt-1">
                  Lead Architect &bull; Pratham Verma
                </p>
              </div>
              <ValoreLogo iconOnly size="sm" />
            </div>

            {/* Technical Stack Card */}
            <div className="rounded-3xl border border-border bg-card p-7 shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-border mb-5">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-muted-foreground" />
                  <span className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
                    Primary Production Stack
                  </span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">
                  v2026.4
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {TECH_STACK.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3.5 rounded-xl bg-muted/40 border border-border flex flex-col justify-center"
                  >
                    <span className="font-sans font-bold text-xs text-foreground">
                      {tech.name}
                    </span>
                    <span className="font-mono text-[9px] text-muted-foreground uppercase mt-0.5">
                      {tech.category}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-[10px] font-mono uppercase text-muted-foreground">
                <span className="text-foreground font-semibold">
                  Global Edge Deployed
                </span>
                <span>Sub-80ms Latency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
