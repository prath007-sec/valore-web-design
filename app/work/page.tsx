"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, Globe, Sparkles, Zap, Utensils, ShoppingCart, Layers, Building, Music } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useEffect, useState } from "react";

const projects = [
  {
    id: "sonix-matrix",
    name: "SONIX Matrix",
    url: "https://sonix-matrix-audio.vercel.app/",
    image: "/work/sonix-matrix.png",
    location: "Audio / DSP Hardware",
    tagline: "Tactile quantum dot-matrix synthesizer & generative spatial audio workstation.",
    description:
      "SONIX Matrix MK-IV is a tactile generative synthesizer and audio workstation driven by an illuminated quantum dot matrix interface. Powered by a 24x24 optical micro-array, 64-voice analog-modelled DSP, and real-time Web Audio API synthesis.",
    problem:
      "Modern sound design workstations separate producers from tactile physical intuition, relying on generic knob-and-fader screens that lack real-time optical expressiveness.",
    solution:
      "Engineered an interactive optical dot-matrix web architecture featuring suspended requestAnimationFrame loops, real-time Web Audio harmonic synthesis, dynamic audio visualizers (♫ Music Logo, Spectrum Analyzer, Vinyl Grooves, Studio Monitors), and zero-latency hardware control modeling.",
    result:
      "Delivered sub-millisecond tactile responsiveness directly in the browser, complete with full DAW ecosystem bridging and an international pre-order launch platform.",
    elements: [
      "Custom 24x24 optical micro-array canvas with visibility-gated RAF loop",
      "Interactive Web Audio API polyphonic chord & arpeggio synthesis",
      "Dynamic visualizer modes (♫ Music Logo, Equalizer, Vinyl, Studio Monitors)",
      "Interactive browser sound audition deck with live gain & filter modulation",
      "Comprehensive hardware engineering showcase with full DAW ecosystem compatibility",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "HTML5 Canvas", "Web Audio API", "Vercel Edge"],
    icon: Music,
  },
  {
    id: "kicks-chicken",
    name: "Kick's Chicken",
    url: "https://www.kickschicken.com/",
    image: "/work/kicks-chicken.png",
    location: "Springfield, MO",
    tagline: "High-speed digital menu platform & local search architecture for a premier chicken brand.",
    description:
      "Kick's Chicken is a fast-casual chicken restaurant in Springfield, MO known for hand-breaded tenders, bone-in wings, loaded mac & cheese, and signature craft sauces. We built an ultra-fast, mobile-first digital menu and local search experience engineered to streamline high carryout order volume.",
    problem:
      "During peak lunch and dinner rushes, phone lines backed up with customers asking about menu options, sauces, and store hours. Their paper menus and social photos could not properly spotlight high-margin loaded macs and signature tenders, and diners lacked an instant mobile carryout interface.",
    solution:
      "Engineered a custom, mobile-optimized web app featuring a categorized 20+ item visual menu, Springfield local business JSON-LD schema, interactive item customization modals, and automated dual marquee social proof highlighting 80+ 5-star Google reviews.",
    result:
      "Staff phone time dropped significantly as customers checked items and sauces online before ordering. 4.6★ local visibility surged across Springfield search queries, driving immediate foot traffic and establishing the exact infrastructure for automated online ordering.",
    elements: [
      "Interactive 20+ item visual menu with customization detail modals",
      "Springfield, MO LocalBusiness schema & geographic search ranking",
      "Dynamic dual-marquee live Google reviews ticker with 80+ ratings",
      "One-tap mobile call-to-order routing and native maps integration",
      "Sub-second page speeds with zero third-party ordering commissions",
    ],
    tech: ["Next.js", "Tailwind CSS", "Local SEO Schema", "Vercel Edge", "Semantic HTML5"],
    icon: Utensils,
  },
  {
    id: "lum-studio",
    name: "LÜM Studio",
    url: "https://lumstudio.netlify.app/",
    image: "/work/lum-studio.png",
    location: "St. Louis, MO",
    tagline: "Minimalist e-commerce storefront for a contemporary furniture designer.",
    description:
      "LÜM Studio is a St. Louis-based furniture and interior design brand focused on clean, minimalist living. We built a stripped-down, luxury e-commerce experience that mirrors their physical design standards while delivering a frictionless purchasing flow.",
    problem:
      "Generic Shopify themes bloated the site, slowed down page loads on mobile, and failed to reflect the high-end architectural aesthetic demanded by their clientele.",
    solution:
      "Developed a custom Next.js storefront with tailored typography, sub-second product page transitions, seamless cart state management, and direct Stripe checkout.",
    result:
      "Mobile bounce rates decreased by 42% and customer cart completions doubled within 60 days of deployment.",
    elements: [
      "Full e-commerce cart & Stripe checkout flow",
      "Newsletter capture with instant promo code delivery",
      "Mobile-first luxury monochrome design language",
      "High-resolution image optimization with zero lag",
      "Clean semantic architecture with sub-second page loads",
    ],
    tech: ["Next.js", "Tailwind CSS", "Stripe API", "Netlify", "Framer Motion"],
    icon: ShoppingCart,
  },
  {
    id: "vanguard-architects",
    name: "Vanguard Architects",
    url: "https://vangaurdarchitects.netlify.app/",
    image: "/work/vangaurd.png",
    location: "New York, NY",
    tagline: "High-impact visual showcase for an urban architectural firm.",
    description:
      "Vanguard Architects needed a web presence that matched their international reputation in urban planning, interior architecture, and sustainable commercial design.",
    problem:
      "Their previous web presence was static, difficult to update, and failed to communicate their scale across multi-city project locations.",
    solution:
      "Engineered an editorial-style digital showcase with bold grid layouts, interactive project filter categories, and a clean global office presence directory.",
    result:
      "Inbound commercial project inquiries doubled in the first quarter, establishing Vanguard as modern digital leaders in their field.",
    elements: [
      "Dynamic service & portfolio showcase with detailed project briefs",
      "Multi-location corporate presence mapping",
      "Responsive fluid layout optimized for 4K displays down to mobile",
      "Editorial typography with smooth scroll transitions",
    ],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Netlify"],
    icon: Building,
  },
  {
    id: "harbor-hearth",
    name: "Harbor & Hearth",
    url: "https://harbor-hearth.vercel.app/",
    image: "/work/harbor-hearth.png",
    location: "Ann Arbor, MI",
    tagline: "Interactive property management platform with live rental listings.",
    description:
      "Harbor & Hearth is a boutique property management firm in Michigan. We built a warm, inviting platform showcasing their active residential portfolio with interactive market analytics.",
    problem:
      "Prospective tenants had to download PDF flyers or wait for phone callbacks to view rental availability and property specs.",
    solution:
      "Constructed a dynamic listings catalog with instant search filters, unit specifications, and an interactive local rental market intelligence chart.",
    result:
      "Tenant inquiries shifted from chaotic emails to organized online applications, saving the leasing office over 12 hours every week.",
    elements: [
      "Filterable property catalog with 15+ live units",
      "Interactive market intelligence and pricing charts",
      "Fast leasing inquiry forms with automated notifications",
      "Warm earth-toned responsive design system",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Chart.js", "Vercel"],
    icon: Layers,
  },
];

export default function WorkPage() {
  useEffect(() => {
    document.title = "Selected Works | Valore";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background transition-colors duration-300 relative">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="mb-8">
            <Breadcrumbs items={[{ label: "Selected Commissions", href: "/work" }]} />
          </div>

          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="apple-badge mb-4">
              <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
              Proven Case Studies
            </div>
            <h1
              className="text-foreground font-sans font-bold uppercase tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)", lineHeight: "1.06" }}
            >
              Deliverables & Case Studies<span className="text-[#D4AF37]">.</span>
            </h1>
            <p
              className="mx-auto mt-4 max-w-xl text-muted-foreground font-sans text-base leading-relaxed"
            >
              Every project below is framed by the manual bottleneck the client faced, the specific web or AI solution engineered, and the measurable results achieved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Detailed List */}
      <section className="bg-card border-y border-border transition-colors duration-300">
        <div className="mx-auto max-w-[1100px] px-6 apple-section-spacing">
          <div className="space-y-24">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                id={project.id}
                className="scroll-mt-28 apple-bento-card p-6 sm:p-10 border border-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-60px" }}
              >
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/20">
                      <project.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h2 className="text-foreground font-sans font-bold text-xl sm:text-2xl uppercase tracking-tight">
                        {project.name}
                      </h2>
                      <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider">
                        {project.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Preview Image */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-border bg-muted mb-8 shadow-xl"
                >
                  <Image
                    src={project.image}
                    alt={`${project.name} live web architecture platform preview — ${project.location}`}
                    fill
                    className="object-cover object-top filter brightness-90 group-hover:brightness-100 transition-all duration-700 scale-[1.01] group-hover:scale-[1.03]"
                    sizes="(max-width: 1100px) 100vw, 1100px"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-6">
                    <span className="text-white text-xs font-semibold">
                      {project.tagline}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider shadow-lg group-hover:bg-white transition-colors">
                      Visit Live Site <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </a>

                {/* Problem - Solution - Result 3-Column Bento */}
                <div className="grid gap-4 md:grid-cols-3 mb-8">
                  <div className="p-5 rounded-2xl bg-card border border-border">
                    <span className="text-red-400 text-[10px] font-bold uppercase tracking-wider block mb-2">
                      1. The Bottleneck
                    </span>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-card border border-[#D4AF37]/30 bg-[#D4AF37]/[0.02]">
                    <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider block mb-2">
                      2. The Solution
                    </span>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-card border border-emerald-500/30 bg-emerald-500/[0.02]">
                    <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider block mb-2">
                      3. Measurable Result
                    </span>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                </div>

                {/* Deliverables & Tech Stack */}
                <div className="grid gap-6 md:grid-cols-2 pt-6 border-t border-border">
                  <div>
                    <h3 className="text-foreground font-sans font-bold text-xs uppercase tracking-wider mb-3">
                      Delivered Features:
                    </h3>
                    <ul className="space-y-2.5">
                      {project.elements.map((el, ei) => (
                        <li key={ei} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                          <span>{el}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-foreground font-sans font-bold text-xs uppercase tracking-wider mb-3">
                      Engineered With:
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full bg-card border border-border text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] text-black hover:bg-white transition-all font-bold text-xs uppercase tracking-wider px-6 py-2.5 shadow-lg shadow-[#D4AF37]/10"
                    >
                      Visit {project.name} <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-background transition-colors duration-300">
        <div className="mx-auto max-w-[980px] px-6 text-center apple-section-spacing">
          <h2
            className="text-foreground font-sans font-bold uppercase tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", lineHeight: "1.1" }}
          >
            Ready to solve your digital bottleneck?
          </h2>
          <p className="mx-auto mt-4 mb-8 max-w-md text-muted-foreground font-sans text-base leading-relaxed">
            Partner directly with Pratham Verma. Book a 15-minute discovery call and receive a tailored project scope.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#book-discovery"
              className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] text-black hover:bg-white transition-all font-bold tracking-wider uppercase text-xs px-8 py-3.5 shadow-lg shadow-[#D4AF37]/10"
            >
              Book Discovery Call <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-foreground hover:border-[#D4AF37] transition-all"
            >
              Review Engagement Models
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
