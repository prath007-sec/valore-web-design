"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutMeSection from "@/components/AboutMeSection";
import PricingQuoteSection from "@/components/PricingQuoteSection";
import DiscoveryScheduler from "@/components/DiscoveryScheduler";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";
import AnimatedSection from "@/components/AnimatedSection";
import MaskedText from "@/components/ui/MaskedText";
import RollingText from "@/components/ui/RollingText";
import { useEffect, useState } from "react";

const portfolioProjects = [
  {
    name: "Kick's Chicken",
    location: "Springfield, MO",
    category: "Restaurant Web Architecture & Local SEO",
    image: "/work/kicks-chicken.png",
    url: "https://www.kickschicken.com/",
    role: "Full Web Build & Menu System",
    highlight: "80+ 5-Star Reviews & Instant One-Tap Carryout",
  },
  {
    name: "LÜM Studio",
    location: "St. Louis, MO",
    category: "Minimalist E-Commerce Platform",
    image: "/work/lum-studio.png",
    url: "https://lumstudio.netlify.app/",
    role: "Strategy & Custom Code",
    highlight: "Sub-second checkout funnel & custom catalog",
  },
  {
    name: "Vanguard Architects",
    location: "New York, NY",
    category: "Bespoke Portfolio & Digital Presence",
    image: "/work/vangaurd.png",
    url: "https://vangaurdarchitects.netlify.app/",
    role: "Complete Redesign & Performance",
    highlight: "Bold typography & architectural layout",
  },
  {
    name: "Harbor & Hearth",
    location: "Ann Arbor, MI",
    category: "Property Management & Market Data",
    image: "/work/harbor-hearth.png",
    url: "https://harbor-hearth.vercel.app/",
    role: "Interactive Listings & Speed",
    highlight: "Dynamic listing filters & instant page transitions",
  },
];

const testimonials = [
  {
    quote: "Pratham didn't just build us a website; he completely re-engineered our customer flow. Our online menu is lightning fast, and our carryout calls are smoother than ever during peak dinner rushes.",
    name: "Kyle & Xavier",
    title: "Founders",
    company: "Kick's Chicken (Springfield, MO)",
  },
  {
    quote: "Working with an independent lead architect who writes pristine custom code is a night-and-day difference from traditional agencies. We received our preliminary spec in 24 hours and the live store in two weeks.",
    name: "Alex Chen",
    title: "Founder",
    company: "LÜM Studio",
  },
  {
    quote: "His focus on high-intent conversion traffic and sub-second performance doubled our client inquiries within the first month. The Apple-level aesthetic blew our executive team away.",
    name: "Sarah Mitchell",
    title: "Principal",
    company: "Vanguard Architects",
  },
  {
    quote: "Outsourcing our digital identity and automated client workflow pipelines to Valore was our smartest strategic move this year. High-intent traffic grew 150% with zero maintenance headache.",
    name: "Julian Brooks",
    title: "Co-Founder",
    company: "Apex Venture Partners",
  },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    document.title = "Valore Studio — Bespoke Web Architecture & Digital Systems";
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ─── HERO SECTION ─── */}
      <Hero />

      {/* ─── CORE CAPABILITIES & CAPABILITY SPECIFICATIONS ─── */}
      <div id="services" className="scroll-mt-20">
        <ServicesSection />
      </div>

      {/* ─── PORTFOLIO SHOWCASE ─── */}
      <AnimatedSection>
        <section id="work" className="bg-black text-[#F5F5F7] border-b border-white/[0.08] relative scroll-mt-20 py-28 sm:py-36">
          <div className="mx-auto max-w-[1140px] px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-4"
              >
                <span className="font-mono text-[10px] tracking-[0.25em] text-[#86868B] uppercase">
                  Production Archive &bull; Live Deployments
                </span>
              </motion.div>

              <MaskedText
                as="h2"
                text={[
                  "SELECTED COMMISSIONS.",
                  "BUILT FOR SCALE."
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
                A curated selection of live digital systems custom-architected with pristine aesthetics, sub-second latency, and measurable market authority.
              </motion.p>
            </div>

            {/* Portfolio Grid */}
            <div className="grid gap-8 md:grid-cols-2">
              {portfolioProjects.map((project, idx) => (
                <motion.div
                  key={project.name}
                  className="group relative flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-[#0A0A0D] overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-[#101014] hover:shadow-2xl"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    bounce: 0,
                    duration: 0.6,
                    delay: idx * 0.1,
                  }}
                >
                  {/* Image aspect container */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-[16/10] overflow-hidden bg-black"
                  >
                    <Image
                      src={project.image}
                      alt={`${project.name} preview`}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 550px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0D] via-black/30 to-transparent" />
                    
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-black font-mono text-[10px] font-bold uppercase tracking-wider shadow-xl">
                        Visit Live <ExternalLink className="h-3 w-3" />
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-6 right-6">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#E5D3B3] block mb-1">
                        {project.category}
                      </span>
                      <h3 className="text-white font-bold text-xl sm:text-2xl uppercase tracking-tight">
                        {project.name}
                      </h3>
                    </div>
                  </a>

                  {/* Card bottom details */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                    <p className="text-xs sm:text-sm text-[#86868B] font-sans leading-relaxed mb-6">
                      {project.highlight}
                    </p>

                    <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="font-mono text-[10px] text-[#86868B] uppercase tracking-wider">
                        {project.location}
                      </span>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1 font-mono text-[11px] tracking-wider uppercase text-white hover:text-[#E5D3B3] transition-colors"
                      >
                        <RollingText duplicateClassName="text-[#E5D3B3]">Explore System</RollingText>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-14 text-center">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-8 py-3.5 font-mono text-[11px] tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-[0.97]"
              >
                <RollingText duplicateClassName="text-black">View Full Commission Archive</RollingText>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── FEATURED CLIENT CASE STUDY (KICK'S CHICKEN) ─── */}
      <FeaturedCaseStudy />

      {/* ─── ABOUT ME / FOUNDER DISCIPLINE ─── */}
      <div id="about-me" className="scroll-mt-20">
        <AboutMeSection />
      </div>

      {/* ─── DIRECT CALENDAR SCHEDULER & PROJECT SPEC ─── */}
      <DiscoveryScheduler id="book-discovery" />

      {/* ─── PRICING & SCOPE SPECIFICATIONS ─── */}
      <PricingQuoteSection />

      {/* ─── TESTIMONIALS (FOUNDER FEEDBACK) ─── */}
      <AnimatedSection>
        <section className="bg-black text-[#F5F5F7] border-b border-white/[0.08] py-28 sm:py-36">
          <div className="mx-auto max-w-[980px] px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="mb-4">
                <span className="font-mono text-[10px] tracking-[0.25em] text-[#86868B] uppercase">
                  Client Verification &bull; Endorsements
                </span>
              </div>
              <MaskedText
                as="h2"
                text={[
                  "PROVEN BY LEADERS."
                ]}
                className="text-white font-sans font-bold leading-[1.05] tracking-[-0.03em] uppercase text-center"
                lineClassName="text-[clamp(2.2rem,4.5vw,3.5rem)] bg-gradient-to-b from-white via-[#EFEFF0] to-[#88888C] bg-clip-text text-transparent"
                delay={0.1}
              />
              <p className="mt-4 text-xs sm:text-sm text-[#86868B] font-sans leading-relaxed">
                Direct statements from real business partners and founders.
              </p>
            </div>

            <div className="mx-auto max-w-2xl relative min-h-[260px] sm:min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl border border-white/[0.08] bg-[#0A0A0D] p-8 sm:p-10 flex flex-col items-center text-center shadow-2xl"
                >
                  <p className="text-[#ECECEE] font-sans text-sm sm:text-base leading-relaxed max-w-lg mb-8">
                    &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                  </p>

                  <div className="pt-6 border-t border-white/[0.06] w-full max-w-[280px] mx-auto text-center">
                    <p className="text-white font-sans font-bold text-sm">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#86868B] mt-1">
                      {testimonials[currentTestimonial].title}, {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots indicator with Apple touch targets */}
            <div className="flex justify-center items-center gap-2.5 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentTestimonial === idx
                      ? "bg-white w-7"
                      : "bg-white/20 hover:bg-white/40 w-2"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
