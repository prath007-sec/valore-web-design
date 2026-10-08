"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import MaskedText from "./ui/MaskedText";
import RollingText from "./ui/RollingText";

export default function FeaturedCaseStudy() {
  const [activeTab, setActiveTab] = useState<"problem" | "solution" | "result">("problem");

  const caseStudyData = {
    client: "Kick's Chicken",
    location: "Springfield, MO",
    liveUrl: "https://www.kickschicken.com/",
    category: "Web Architecture • Local SEO • Digital Menu",
    headline: "Transforming Peak Rush Hours: From Phone Bottlenecks to Frictionless Digital Ordering",
    summary:
      "Kick's Chicken is a high-volume Springfield restaurant known for fresh, hand-breaded chicken tenders and house sauces. We engineered a high-speed digital menu platform and local search architecture built to handle intense diner surges and eliminate peak-hour phone friction.",
    metrics: [
      { label: "Google Rating", value: "4.6 ★", sub: "80+ Verified Reviews" },
      { label: "Mobile Speed", value: "< 0.8s", sub: "Global TTFB" },
      { label: "Phone Load", value: "-65%", sub: "One-Tap Routing" },
      { label: "Local Rank", value: "#1 Rank", sub: "Springfield Area SEO" },
    ],
    sections: {
      problem: {
        title: "The Operational Bottleneck",
        points: [
          "Peak rush hours resulted in overwhelmed staff answering continuous phone inquiries about menu items, sauces, and pricing.",
          "Paper menus and outdated social photos couldn't showcase high-margin specialty items like loaded Buffalo Mac & Cheese and signature sauces.",
          "Mobile diners had no streamlined way to browse items, check current store hours on Sunshine St, or trigger instant directions from their phones.",
        ],
      },
      solution: {
        title: "The Architectural Solution",
        points: [
          "Constructed a custom, mobile-first web application with a visual, interactive menu categorizing signature meals, loaded macs, and craft sauces.",
          "Implemented local SEO architecture with JSON-LD LocalBusiness schema, geo-coordinates, and Springfield area targeting.",
          "Embedded real-time dual marquee social proof spotlighting 80+ verified Google reviews from local customers.",
          "Created one-tap call-to-order routing and streamlined carryout architecture with zero third-party ordering commission fees.",
        ],
      },
      result: {
        title: "The Measurable Impact",
        points: [
          "Staff phone load during peak hours dropped significantly as customers browsed the complete 20+ item menu online before calling.",
          "Local Springfield visibility surged with prominent search ranking for hand-breaded chicken tenders and Sunshine St dining.",
          "4.6-star social proof amplified customer trust and accelerated first-time diner foot traffic.",
          "Prepared the restaurant with the exact digital infrastructure needed for upcoming automated online checkout integration.",
        ],
      },
    },
  };

  return (
    <section className="bg-background text-foreground border-b border-border relative overflow-hidden py-28 sm:py-36 transition-colors duration-300">
      <div className="mx-auto max-w-[1140px] px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
              Production Case Study &bull; Real Impact
            </span>
          </motion.div>

          <MaskedText
            as="h2"
            text={[
              "MEASURABLE SCALE.",
              "AUTHENTIC RESULTS."
            ]}
            className="text-foreground font-sans font-bold leading-[1.05] tracking-[-0.03em] uppercase text-center"
            lineClassName="text-[clamp(2.2rem,5vw,3.75rem)] text-foreground"
            delay={0.1}
            stagger={0.12}
          />

          <motion.p
            className="mt-6 text-sm sm:text-base text-muted-foreground font-sans leading-relaxed tracking-tight max-w-xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            How custom web architecture and local search engineering eliminated high-volume ordering bottlenecks for a fast-growing restaurant.
          </motion.p>
        </div>

        {/* Bento Case Study Container */}
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Visual Live Mockup Preview Column */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <a
                href={caseStudyData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-2xl overflow-hidden border border-border bg-background shadow-lg transition-all duration-500 hover:border-foreground/30"
              >
                {/* Browser bar preview */}
                <div className="flex items-center justify-between px-4 py-3 bg-muted/60 border-b border-border">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-border" />
                    <span className="w-2.5 h-2.5 rounded-full bg-border" />
                    <span className="w-2.5 h-2.5 rounded-full bg-border" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground tracking-tight flex items-center gap-1">
                    https://www.kickschicken.com
                  </span>
                  <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>

                {/* Live image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <Image
                    src="/work/kicks-chicken.png"
                    alt="Kick's Chicken live website preview"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 550px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  
                  {/* Floating Live Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wider text-white uppercase">
                      Live in Production
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono tracking-wider uppercase text-white bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      Visit Site <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </a>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {caseStudyData.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-muted/40 border border-border text-center flex flex-col justify-center"
                  >
                    <span className="font-sans font-bold text-lg sm:text-xl text-foreground tracking-tight">
                      {m.value}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5">
                      {m.label}
                    </span>
                    <span className="text-[9px] text-muted-foreground/80 mt-0.5">
                      {m.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Tabbed Narrative Column */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-semibold">
                    {caseStudyData.client}
                  </span>
                  <span className="text-muted-foreground/40">&bull;</span>
                  <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                    {caseStudyData.location}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-foreground uppercase tracking-tight mb-4">
                  {caseStudyData.headline}
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  {caseStudyData.summary}
                </p>

                {/* Tab buttons */}
                <div className="flex items-center gap-2 p-1 bg-muted rounded-full border border-border w-fit mb-6">
                  {(["problem", "solution", "result"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-1.5 rounded-full text-[11px] font-mono tracking-wider uppercase transition-all ${
                        activeTab === tab
                          ? "bg-foreground text-background font-semibold shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                <div className="p-6 rounded-2xl bg-muted/30 border border-border min-h-[190px]">
                  <h4 className="font-mono text-[11px] tracking-[0.15em] uppercase text-foreground font-semibold mb-3">
                    {caseStudyData.sections[activeTab].title}
                  </h4>
                  <ul className="space-y-2.5 text-xs text-muted-foreground leading-relaxed">
                    {caseStudyData.sections[activeTab].points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <span className="text-foreground font-mono mt-0.5 shrink-0">—</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                <a
                  href={caseStudyData.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wider uppercase text-foreground hover:opacity-80 transition-colors"
                >
                  <RollingText duplicateClassName="text-foreground">Explore Live Site</RollingText>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="#book-discovery"
                  className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  Request Similar Architecture &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
