"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, MoveRight, MoveDown, CornerDownRight, CheckCircle2 } from "lucide-react";
import RollingText from "./ui/RollingText";
import ScrambleText from "./ui/ScrambleText";
import MaskedText from "./ui/MaskedText";

interface ProjectItem {
  id: string;
  name: string;
  category: string;
  location: string;
  tagline: string;
  highlight: string;
  url: string;
  image?: string;
  specs: string[];
  metricValue: string;
  metricLabel: string;
  arm: "horizontal" | "corner" | "vertical";
}

const projects: ProjectItem[] = [
  {
    id: "kicks-chicken",
    name: "Kick's Chicken",
    category: "01 // RESTAURANT WEB ARCHITECTURE",
    location: "Springfield, MO",
    tagline: "High-Speed Menu System & Local SEO Engine",
    highlight: "80+ Verified 5-Star Reviews & Peak Rush Carryout Optimization",
    url: "https://www.kickschicken.com/",
    image: "/work/kicks-chicken.png",
    specs: ["Sub-800ms TTFB", "JSON-LD Local Schema", "One-Tap Callout Routing", "Next.js App Router"],
    metricValue: "< 0.8s",
    metricLabel: "Carryout Speed",
    arm: "horizontal",
  },
  {
    id: "lum-studio",
    name: "LÜM Studio",
    category: "02 // MINIMALIST E-COMMERCE",
    location: "St. Louis, MO",
    tagline: "Sub-Second Funnel & Contemporary Design Storefront",
    highlight: "Custom Stripe Checkout Rails & Zero Bloat Catalog Experience",
    url: "https://lumstudio.netlify.app/",
    image: "/work/lum-studio.png",
    specs: ["Stripe Checkout", "Instant Page Transitions", "Cart State Sync", "Monochrome Identity"],
    metricValue: "+42%",
    metricLabel: "Checkout Flow",
    arm: "horizontal",
  },
  {
    id: "vanguard-architects",
    name: "Vanguard Architects",
    category: "03 // ARCHITECTURAL PORTFOLIO [PIVOT]",
    location: "New York, NY",
    tagline: "Editorial Typography & Spatial Digital Experience",
    highlight: "100/100 Core Web Vitals with Custom Kinetic Transitions",
    url: "https://vangaurdarchitects.netlify.app/",
    image: "/work/vangaurd.png",
    specs: ["100/100 Lighthouse", "Sub-60ms Edge Latency", "Precision Typography", "Full Git Ownership"],
    metricValue: "100/100",
    metricLabel: "Vitals Score",
    arm: "corner",
  },
  {
    id: "harbor-hearth",
    name: "Harbor & Hearth",
    category: "04 // REAL ESTATE INFRASTRUCTURE",
    location: "Ann Arbor, MI",
    tagline: "Dynamic Property Data & Instant Filter Pipeline",
    highlight: "Interactive Listing Funnel Engineered for High-Intent Inquiries",
    url: "https://harbor-hearth.vercel.app/",
    image: "/work/harbor-hearth.png",
    specs: ["Dynamic Server Rendering", "Instant Filtering", "Automated Lead Dispatch", "Edge Architecture"],
    metricValue: "-65%",
    metricLabel: "Inquiry Friction",
    arm: "vertical",
  },
  {
    id: "valore-bespoke-spec",
    name: "Studio Valore Flagship",
    category: "05 // ENTERPRISE SPECIFICATION",
    location: "Global Edge Infrastructure",
    tagline: "Custom Architectural Engineering & Autonomous Workflows",
    highlight: "Zero Template Subscriptions. Full Intellectual Property Rights.",
    url: "#book-discovery",
    specs: ["Next.js 16 + React 19", "Autonomous Lead Sync", "Stripe Payment Rails", "Senior Lead Architect"],
    metricValue: "0% Bloat",
    metricLabel: "Bespoke Codebase",
    arm: "vertical",
  },
];

export default function MultiAxisScrollShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeStep, setActiveStep] = useState(1);
  const [currentAxis, setCurrentAxis] = useState<"horizontal" | "corner" | "vertical">("horizontal");
  const [dimensions, setDimensions] = useState({ stepX: 620, stepY: 520, cardW: 580, cardH: 480, isMobile: false });

  // Measure window for responsive travel distances
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      const cardW = isMobile ? Math.min(window.innerWidth * 0.86, 360) : Math.min(Math.max(window.innerWidth * 0.46, 440), 580);
      const cardH = isMobile ? Math.min(window.innerHeight * 0.68, 480) : Math.min(Math.max(window.innerHeight * 0.62, 420), 510);
      const gap = isMobile ? 20 : 32;

      setDimensions({
        stepX: cardW + gap,
        stepY: cardH + gap,
        cardW,
        cardH,
        isMobile,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth springs for camera travel (Apple Design: critically damped, zero bounce)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 24,
    restDelta: 0.001,
  });

  // Multi-Axis Travel Transforms:
  // Phase 1 (0 -> 0.45): Horizontal Pan to the Right (X-axis shifts)
  // Phase Corner (0.45 -> 0.52): Smooth 90-degree corner transition
  // Phase 2 (0.52 -> 1.0): Vertical Descent (Y-axis shifts)
  const rawX = useTransform(
    smoothProgress,
    [0, 0.45, 0.52, 1],
    [0, -2 * dimensions.stepX, -2 * dimensions.stepX, -2 * dimensions.stepX]
  );

  const rawY = useTransform(
    smoothProgress,
    [0, 0.45, 0.52, 1],
    [0, 0, 0, -2 * dimensions.stepY]
  );

  // Monitor scroll progress to update technical HUD state
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest < 0.42) {
        setCurrentAxis("horizontal");
        setActiveStep(latest < 0.22 ? 1 : 2);
      } else if (latest < 0.55) {
        setCurrentAxis("corner");
        setActiveStep(3);
      } else {
        setCurrentAxis("vertical");
        setActiveStep(latest < 0.78 ? 4 : 5);
      }
    });
  }, [scrollYProgress]);

  // Jump to specific step by scrolling the container
  const scrollToStep = (stepNumber: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
    
    // Map step to progress
    const progressMap: Record<number, number> = {
      1: 0.05,
      2: 0.25,
      3: 0.50,
      4: 0.75,
      5: 0.95,
    };

    const targetProgress = progressMap[stepNumber] ?? 0;
    const targetScrollY = containerTop + containerHeight * targetProgress;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative bg-background text-foreground border-b border-border transition-colors duration-300"
      style={{ height: "340vh" }}
    >
      {/* Pinned Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-24 pb-8 px-4 sm:px-8 select-none">
        {/* ─── TECHNICAL HUD TOP BAR ─── */}
        <div className="mx-auto w-full max-w-7xl z-30 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border">
          {/* Section Kicker with letter scramble */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
              Production Archive
            </span>
            <span className="text-muted-foreground/30">&bull;</span>
            <ScrambleText
              text={
                currentAxis === "horizontal"
                  ? "VECTOR: [ LATERAL // HORIZONTAL TRACK → ]"
                  : currentAxis === "corner"
                  ? "VECTOR: [ 90° PIVOT NODE // ROTATING AXIS ⤵ ]"
                  : "VECTOR: [ VERTICAL // DESCENDING DOWN ↓ ]"
              }
              className="font-mono text-[10px] sm:text-[11px] tracking-[0.18em] text-foreground font-semibold uppercase"
            />
          </div>

          {/* Spatial Blueprint Path Radar & Step Buttons */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] uppercase text-muted-foreground mr-2">
              <span>Path:</span>
              <span className={activeStep <= 3 ? "text-foreground font-bold" : "text-muted-foreground/60"}>
                X [1→2→3]
              </span>
              <span>&rarr;</span>
              <span className={activeStep >= 3 ? "text-foreground font-bold" : "text-muted-foreground/60"}>
                Y [3↓4↓5]
              </span>
            </div>

            {/* Quick jump step pills */}
            <div className="flex items-center gap-1 bg-card border border-border p-1 rounded-full shadow-sm">
              {[1, 2, 3, 4, 5].map((step) => (
                <button
                  key={step}
                  onClick={() => scrollToStep(step)}
                  className={`w-6 h-6 rounded-full font-mono text-[10px] flex items-center justify-center transition-all ${
                    activeStep === step
                      ? "bg-foreground text-background font-bold shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label={`Jump to Commission ${step}`}
                >
                  {step}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ─── MULTI-AXIS CINEMATIC STAGE ─── */}
        <div className="relative flex-1 w-full overflow-hidden flex items-center justify-start my-4">
          <motion.div
            style={{
              x: rawX,
              y: rawY,
              willChange: "transform",
            }}
            className="absolute left-[8vw] sm:left-[12vw] top-[6vh] sm:top-[8vh]"
          >
            {/* L-SHAPED CANVAS CONTAINER */}
            <div className="relative">
              {/* Architectural Haired Guide Path SVG Line */}
              <svg
                className="pointer-events-none absolute -top-8 -left-8 w-[2400px] h-[1800px] z-0 opacity-40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Horizontal Guide Vector */}
                <line
                  x1="50"
                  y1="50"
                  x2={50 + 2 * dimensions.stepX}
                  y2="50"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  className="text-border"
                />
                {/* Corner Right-Angle Arc */}
                <path
                  d={`M ${50 + 2 * dimensions.stepX} 50 L ${50 + 2 * dimensions.stepX} ${50 + 2 * dimensions.stepY}`}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  className="text-border"
                />
              </svg>

              {/* CARD 1: Kick's Chicken (X: 0, Y: 0) */}
              <div
                style={{
                  width: `${dimensions.cardW}px`,
                  height: `${dimensions.cardH}px`,
                  position: "absolute",
                  left: 0,
                  top: 0,
                }}
              >
                <CommissionCard project={projects[0]} active={activeStep === 1} />
              </div>

              {/* CARD 2: LÜM Studio (X: stepX, Y: 0) */}
              <div
                style={{
                  width: `${dimensions.cardW}px`,
                  height: `${dimensions.cardH}px`,
                  position: "absolute",
                  left: `${dimensions.stepX}px`,
                  top: 0,
                }}
              >
                <CommissionCard project={projects[1]} active={activeStep === 2} />
              </div>

              {/* CARD 3: Vanguard Architects — THE CORNER PIVOT (X: 2*stepX, Y: 0) */}
              <div
                style={{
                  width: `${dimensions.cardW}px`,
                  height: `${dimensions.cardH}px`,
                  position: "absolute",
                  left: `${2 * dimensions.stepX}px`,
                  top: 0,
                }}
              >
                <CommissionCard project={projects[2]} active={activeStep === 3} isPivot />
              </div>

              {/* CARD 4: Harbor & Hearth — VERTICAL ARM (X: 2*stepX, Y: stepY) */}
              <div
                style={{
                  width: `${dimensions.cardW}px`,
                  height: `${dimensions.cardH}px`,
                  position: "absolute",
                  left: `${2 * dimensions.stepX}px`,
                  top: `${dimensions.stepY}px`,
                }}
              >
                <CommissionCard project={projects[3]} active={activeStep === 4} />
              </div>

              {/* CARD 5: Studio Valore Flagship Spec — TERMINAL (X: 2*stepX, Y: 2*stepY) */}
              <div
                style={{
                  width: `${dimensions.cardW}px`,
                  height: `${dimensions.cardH}px`,
                  position: "absolute",
                  left: `${2 * dimensions.stepX}px`,
                  top: `${2 * dimensions.stepY}px`,
                }}
              >
                <CommissionCard project={projects[4]} active={activeStep === 5} isTerminal />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ─── TECHNICAL HUD BOTTOM SCRUBBER BAR ─── */}
        <div className="mx-auto w-full max-w-7xl z-30 pt-3 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-wider">
              {currentAxis === "horizontal" ? (
                <span className="flex items-center gap-1.5 text-foreground font-semibold">
                  <MoveRight className="h-3.5 w-3.5" />
                  Phase 1: Lateral Track Across Systems
                </span>
              ) : currentAxis === "corner" ? (
                <span className="flex items-center gap-1.5 text-foreground font-semibold">
                  <CornerDownRight className="h-3.5 w-3.5 text-[#D4AF37]" />
                  Pivot Node: 90° Trajectory Shift
                </span>
              ) : (
                <span className="flex items-center gap-1.5 text-foreground font-semibold">
                  <MoveDown className="h-3.5 w-3.5" />
                  Phase 2: Vertical Descent into Architecture
                </span>
              )}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground/80">
              Scroll down to navigate 2D canvas
            </span>
            <Link
              href="/work"
              className="group inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase text-foreground hover:opacity-80 transition-opacity"
            >
              <RollingText duplicateClassName="text-foreground">Full Archive</RollingText>
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * High-performance commission hardware card for spatial multi-axis stage
 */
function CommissionCard({
  project,
  active = false,
  isPivot = false,
  isTerminal = false,
}: {
  project: ProjectItem;
  active?: boolean;
  isPivot?: boolean;
  isTerminal?: boolean;
}) {
  return (
    <div
      className={`group relative h-full w-full rounded-3xl border transition-all duration-500 overflow-hidden flex flex-col justify-between p-6 sm:p-7 ${
        active
          ? "border-foreground/40 bg-card shadow-2xl scale-[1.01]"
          : "border-border bg-card/90 shadow-lg hover:border-foreground/20"
      }`}
    >
      {/* Top Header Row */}
      <div>
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-border">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              {project.category}
            </span>
            {isPivot && (
              <span className="font-mono text-[9px] uppercase px-2 py-0.5 rounded-full bg-foreground text-background font-bold tracking-wider">
                90° Pivot
              </span>
            )}
            {isTerminal && (
              <span className="font-mono text-[9px] uppercase px-2 py-0.5 rounded-full bg-[#D4AF37] text-black font-bold tracking-wider">
                Terminal
              </span>
            )}
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            {project.location}
          </span>
        </div>

        <h3 className="font-sans font-bold text-xl sm:text-2xl text-foreground uppercase tracking-tight mb-1.5">
          {project.name}
        </h3>
        <p className="text-xs text-muted-foreground font-sans line-clamp-2 leading-relaxed mb-4">
          {project.highlight}
        </p>

        {/* Visual Preview Container */}
        {project.image ? (
          <a
            href={project.url}
            target={project.url.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="block relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-border bg-muted mb-4 group/img shadow-md"
          >
            <Image
              src={project.image}
              alt={`${project.name} preview`}
              fill
              className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-105"
              sizes="600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-between p-3.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white font-mono text-[10px] uppercase tracking-wider border border-white/10">
                {project.metricValue} &bull; {project.metricLabel}
              </span>
              <span className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                <ExternalLink className="h-3 w-3" />
              </span>
            </div>
          </a>
        ) : (
          /* Terminal Spec Box for Flagship Spec */
          <div className="aspect-[16/9] w-full rounded-2xl border border-border bg-muted/40 p-5 flex flex-col justify-between mb-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Architecture Delivery Blueprint
            </span>
            <div>
              <p className="font-sans font-bold text-lg text-foreground uppercase tracking-tight">
                Senior Engineering Rigor
              </p>
              <p className="text-xs text-muted-foreground font-sans mt-0.5">
                Bespoke codebases crafted with zero builder overhead.
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-foreground font-semibold">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#D4AF37]" />
              Guaranteed Milestone Scopes
            </div>
          </div>
        )}

        {/* Hardware Spec Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.specs.map((spec, sIdx) => (
            <span
              key={sIdx}
              className="px-2.5 py-1 rounded-full bg-muted/60 border border-border text-[9.5px] font-mono uppercase tracking-wider text-muted-foreground"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Link */}
      <div className="pt-4 border-t border-border flex items-center justify-between mt-3">
        <a
          href={project.url}
          target={project.url.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wider uppercase text-foreground hover:opacity-80 transition-opacity font-semibold"
        >
          <RollingText duplicateClassName="text-foreground">
            {isTerminal ? "Initiate Project Spec" : "Explore System"}
          </RollingText>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>

        <span className="font-mono text-[10px] text-muted-foreground uppercase">
          {project.tagline.split("&")[0]}
        </span>
      </div>
    </div>
  );
}
