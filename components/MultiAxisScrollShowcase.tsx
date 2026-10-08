"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RollingText from "./ui/RollingText";

interface ProjectItem {
  id: string;
  name: string;
  businessType: string;
  location: string;
  description: string;
  url: string;
  image: string;
  ctaText?: string;
}

const projects: ProjectItem[] = [
  {
    id: "kicks-chicken",
    name: "Kick's Chicken",
    businessType: "Restaurant Web Architecture",
    location: "Springfield, MO",
    description: "High-speed online ordering system with sub-800ms carryout routing and local discovery optimization.",
    url: "https://www.kickschicken.com/",
    image: "/work/kicks-chicken.png",
    ctaText: "Visit Live Site",
  },
  {
    id: "lum-studio",
    name: "LÜM Studio",
    businessType: "Minimalist E-Commerce",
    location: "St. Louis, MO",
    description: "Clean Stripe checkout rails and sub-second catalog transitions engineered for zero cart abandonment.",
    url: "https://lumstudio.netlify.app/",
    image: "/work/lum-studio.png",
    ctaText: "Visit Live Site",
  },
  {
    id: "vanguard-architects",
    name: "Vanguard Architects",
    businessType: "Architectural Practice",
    location: "New York, NY",
    description: "Spatial editorial typography and 100/100 Core Web Vitals built for high-value client acquisitions.",
    url: "https://vangaurdarchitects.netlify.app/",
    image: "/work/vangaurd.png",
    ctaText: "Visit Live Site",
  },
  {
    id: "harbor-hearth",
    name: "Harbor & Hearth",
    businessType: "Real Estate Infrastructure",
    location: "Ann Arbor, MI",
    description: "Dynamic property filtering engine and automated lead routing designed to cut inquiry friction by 65%.",
    url: "https://harbor-hearth.vercel.app/",
    image: "/work/harbor-hearth.png",
    ctaText: "Visit Live Site",
  },
];

export default function MultiAxisScrollShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const [activeCardIndex, setActiveCardIndex] = useState(1);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const [maxDistance, setMaxDistance] = useState(1800);

  // Measure exact horizontal distance needed so the last card stops cleanly in view
  useEffect(() => {
    const calculateDistance = () => {
      if (!trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      // Last card should sit comfortably in the frame with right padding
      const rightPadding = Math.max(48, Math.min(viewportWidth * 0.08, 120));
      const distance = Math.max(0, trackWidth - viewportWidth + rightPadding);
      setMaxDistance(distance);
    };

    calculateDistance();
    window.addEventListener("resize", calculateDistance);
    return () => window.removeEventListener("resize", calculateDistance);
  }, []);

  // Track vertical scroll through container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Step 3: Add Inertia (smooth momentum physics with Apple-style critically damped spring)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 24,
    mass: 0.5,
    restDelta: 0.0001,
  });

  // Step 1 & 2: Pure horizontal slide across from right to left
  const smoothX = useTransform(smoothProgress, [0, 1], [0, -maxDistance]);

  // Update clean 1 / 4 counter based on scroll position
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest < 0.28) setActiveCardIndex(1);
      else if (latest < 0.58) setActiveCardIndex(2);
      else if (latest < 0.88) setActiveCardIndex(3);
      else setActiveCardIndex(4);
    });
  }, [scrollYProgress]);

  // Handle native touch scroll for mobile
  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const { scrollLeft, clientWidth } = mobileScrollRef.current;
    const index = Math.round(scrollLeft / (clientWidth * 0.82));
    setActiveMobileIndex(Math.max(0, Math.min(projects.length - 1, index)));
  };

  return (
    <section id="work" className="bg-background text-foreground transition-colors duration-300">
      {/* ─── DESKTOP EXPERIENCE: LOCKED VIEWPORT HORIZONTAL GLIDE WITH INERTIA (md:block) ─── */}
      <div
        ref={containerRef}
        className="hidden md:block relative border-b border-border"
        style={{ height: "290vh" }}
      >
        {/* Pinned Sticky Viewport: locks screen in place while cards glide */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-12 px-8 lg:px-14 select-none">
          {/* Header Row: Clean, Uncluttered Title + Minimal 1 / 4 Progress */}
          <div className="mx-auto w-full max-w-7xl flex items-end justify-between pb-6 border-b border-border z-20">
            <div>
              <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase block mb-2">
                Selected Work &bull; Live Deployments
              </span>
              <h2 className="font-sans font-bold text-2xl lg:text-3xl uppercase tracking-tight text-foreground">
                Engineered for Scale
              </h2>
            </div>

            {/* Clean Progress Tracker (replaces complex telemetry) */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs font-semibold tracking-wider text-foreground">
                0{activeCardIndex} / 04
              </span>
              <div className="w-28 h-1 bg-border rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-foreground rounded-full transition-all duration-300"
                  style={{ width: `${(activeCardIndex / 4) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Horizontal Track Canvas: Single-Axis Movement With Inertia */}
          <div className="relative flex-1 w-full overflow-hidden flex items-center">
            <motion.div
              ref={trackRef}
              style={{
                x: smoothX,
                willChange: "transform",
              }}
              className="flex gap-8 pl-4 lg:pl-10 pr-16 items-center"
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative w-[520px] lg:w-[580px] xl:w-[620px] flex-shrink-0 rounded-3xl border border-border bg-card p-6 lg:p-7 shadow-sm hover:shadow-xl hover:border-foreground/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* 1. Crisp Preview of the Website */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-border bg-muted mb-5 group/img"
                    >
                      <Image
                        src={project.image}
                        alt={`${project.name} website preview`}
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-[1.03]"
                        sizes="620px"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-300" />
                    </a>

                    {/* 2. Client Name & Business Type */}
                    <div className="mb-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-1">
                        {project.businessType}
                      </span>
                      <h3 className="font-sans font-bold text-xl lg:text-2xl text-foreground uppercase tracking-tight">
                        {project.name}
                      </h3>
                    </div>

                    <p className="text-xs lg:text-sm text-muted-foreground font-sans leading-relaxed line-clamp-2 mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* 3. One Single Obvious Button */}
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 font-mono text-[11px] uppercase tracking-wider font-semibold hover:opacity-90 active:scale-[0.98] transition-all shadow-sm"
                    >
                      <span>{project.ctaText ?? "Visit Live Site"}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>

                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {project.location}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Desktop Footer Row */}
          <div className="mx-auto w-full max-w-7xl pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground z-20">
            <span className="text-[11px] uppercase tracking-wider">
              Turn scroll wheel to slide across commissions
            </span>

            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wider uppercase text-foreground hover:opacity-80 transition-opacity font-semibold"
            >
              <RollingText duplicateClassName="text-foreground">View Full Commission Archive</RollingText>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ─── MOBILE EXPERIENCE (Step 5): NORMAL THUMB SWIPE CAROUSEL (NO SCROLL LOCK) ─── */}
      <div className="md:hidden py-14 px-4 border-b border-border">
        <div className="px-2 mb-6 flex items-end justify-between">
          <div>
            <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase block mb-1">
              Selected Work
            </span>
            <h2 className="font-sans font-bold text-2xl uppercase tracking-tight text-foreground">
              Live Deployments
            </h2>
          </div>
          <span className="font-mono text-xs font-semibold text-muted-foreground">
            0{activeMobileIndex + 1} / 04
          </span>
        </div>

        {/* Native Touch-Momentum Horizontal Swipe Strip */}
        <div
          ref={mobileScrollRef}
          onScroll={handleMobileScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-[84vw] max-w-[340px] flex-shrink-0 snap-center rounded-3xl border border-border bg-card p-5 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* 1. Website Preview */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-border bg-muted mb-4"
                >
                  <Image
                    src={project.image}
                    alt={`${project.name} website preview`}
                    fill
                    className="object-cover object-top"
                    sizes="340px"
                  />
                </a>

                {/* 2. Client Name & Type */}
                <div className="mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground block mb-0.5">
                    {project.businessType}
                  </span>
                  <h3 className="font-sans font-bold text-lg text-foreground uppercase tracking-tight">
                    {project.name}
                  </h3>
                </div>

                <p className="text-xs text-muted-foreground font-sans leading-relaxed line-clamp-2 mb-4">
                  {project.description}
                </p>
              </div>

              {/* 3. Obvious Button */}
              <div className="pt-3 border-t border-border flex items-center justify-between">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2 font-mono text-[10px] uppercase tracking-wider font-semibold"
                >
                  <span>Visit Live Site</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>

                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                  {project.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Swipe Dot Indicator */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {projects.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeMobileIndex === idx ? "w-6 bg-foreground" : "w-1.5 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase text-foreground"
          >
            <span>View Full Commission Archive</span>
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
