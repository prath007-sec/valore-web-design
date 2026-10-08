"use client";

import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutMeSection from "@/components/AboutMeSection";
import PricingQuoteSection from "@/components/PricingQuoteSection";
import DiscoveryScheduler from "@/components/DiscoveryScheduler";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";
import MultiAxisScrollShowcase from "@/components/MultiAxisScrollShowcase";
import AnimatedSection from "@/components/AnimatedSection";
import MaskedText from "@/components/ui/MaskedText";
import { useEffect, useState } from "react";

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

      {/* ─── PORTFOLIO SHOWCASE: 2D MULTI-AXIS SPATIAL JOURNEY (HORIZONTAL THEN DOWN) ─── */}
      <MultiAxisScrollShowcase />

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
        <section className="bg-background text-foreground border-b border-border py-28 sm:py-36 transition-colors duration-300">
          <div className="mx-auto max-w-[980px] px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="mb-4">
                <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                  Client Verification &bull; Endorsements
                </span>
              </div>
              <MaskedText
                as="h2"
                text={[
                  "PROVEN BY LEADERS."
                ]}
                className="text-foreground font-sans font-bold leading-[1.05] tracking-[-0.03em] uppercase text-center"
                lineClassName="text-[clamp(2.2rem,4.5vw,3.5rem)] text-foreground"
                delay={0.1}
              />
              <p className="mt-4 text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
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
                  className="rounded-3xl border border-border bg-card p-8 sm:p-10 flex flex-col items-center text-center shadow-lg"
                >
                  <p className="text-foreground font-sans text-sm sm:text-base leading-relaxed max-w-lg mb-8">
                    &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                  </p>

                  <div className="pt-6 border-t border-border w-full max-w-[280px] mx-auto text-center">
                    <p className="text-foreground font-sans font-bold text-sm">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                      {testimonials[currentTestimonial].title}, {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider bar indicator */}
            <div className="flex justify-center items-center gap-2.5 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentTestimonial === idx
                      ? "bg-foreground w-7"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/60 w-2"
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
