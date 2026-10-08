"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  MonitorPlay,
  CreditCard,
  FileCheck2,
  Cpu,
  Rocket,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  Lock,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import { useEffect } from "react";

const processSteps = [
  {
    number: "01",
    icon: MonitorPlay,
    title: "Live Mockup Presentation & Strategy (1:1 Call)",
    summary:
      "We jump on a live screen-share call with Pratham Verma where you are shown a tailored interactive mockup engineered for your business. We explain the UX architecture, why it converts better than traditional sites, and openly discuss scope and transparent pricing.",
    details: [
      "1:1 Live screen-share consultation with lead architect Pratham Verma",
      "Interactive preliminary mockup presented specifically for your brand",
      "Detailed explanation of conversion funnels and why the architecture outperforms competitors",
      "Open, transparent discussion of project investment — zero hidden fees or surprise invoices",
      "Tailored project roadmap delivered immediately following the call",
    ],
    duration: "1:1 Live Session",
  },
  {
    number: "02",
    icon: CreditCard,
    title: "Secure Stripe Payment Dispatch",
    summary:
      "Following the meeting, you receive a direct payment link sent to your email or mobile phone. Powered by Stripe with bank-grade 256-bit encryption for absolute financial security.",
    details: [
      "Direct payment link dispatched via email or SMS text message",
      "Bank-level 256-bit encryption powered by Stripe rails",
      "Supports all major business cards, Apple Pay, Google Pay, and bank transfers",
      "Instant digital invoice and payment confirmation receipt",
      "Zero recurring platform fees or builder lock-ins",
    ],
    duration: "Instant Dispatch",
  },
  {
    number: "03",
    icon: FileCheck2,
    title: "Contracts of Agreement & Terms Review",
    summary:
      "Once payment is confirmed, you are promptly sent our official client contracts of agreement to review and digitally countersign before any work mobilizes.",
    details: [
      "Itemized statement of work (SOW) outlining exact deliverables and timeline",
      "Full intellectual property (IP) transfer agreement protecting your assets",
      "Confidentiality & non-disclosure clauses ensuring total project privacy",
      "Fast, digital e-signature via encrypted platform in under 2 minutes",
      "Countersigned legal copies automatically archived in your client dashboard",
    ],
    duration: "Same-Day Execution",
  },
  {
    number: "04",
    icon: Cpu,
    title: "Initial Production Sprint (Up to 1 Week)",
    summary:
      "Initial production begins immediately with rapid, focused engineering. Takes up to one week for your full initial build. Full 100% refund is available at any time before initial production officially begins.",
    details: [
      "Focused hand-coded Next.js 16 and React 19 engineering sprint",
      "Initial production build completed and delivered in up to one week",
      "100% Full refund policy available at any point before initial production commences",
      "Custom responsive design system tailored to mobile, tablet, and desktop viewports",
      "Sub-second latency architecture built to achieve 100/100 Core Web Vitals",
    ],
    duration: "Up to 1 Week Delivery",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Private Staging Review & Live Edge Launch",
    summary:
      "You receive a private staging URL to test drive the live platform, review workflows, and approve final polish before we deploy to edge infrastructure and transfer full Git ownership.",
    details: [
      "Private interactive staging link shared for your team's real-time review",
      "Cross-browser and mobile device verification across real hardware",
      "Custom domain DNS configuration, SSL certification & edge cache warmup",
      "Google Search Console and verified JSON-LD SEO schema activation",
      "Complete handover of GitHub repository, assets, and production credentials",
    ],
    duration: "Final Polish & Deployment",
  },
];

export default function ProcessPage() {
  useEffect(() => {
    document.title = "Engineering Process | Valore";
  }, []);

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-background text-foreground transition-colors duration-300 relative">
        <div className="mx-auto max-w-[980px] px-6 text-center">
          <div className="mb-6 flex justify-center">
            <Breadcrumbs items={[{ label: "Delivery Architecture", href: "/process" }]} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full border border-border bg-card">
              <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                Transparent 5-Stage Framework
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-foreground font-sans font-bold uppercase tracking-tight"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
              lineHeight: "1.06",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            How We Engineer Your System<span className="text-[#D4AF37]">.</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-4 max-w-2xl text-muted-foreground font-sans text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From live mockup walkthrough to encrypted Stripe payment, clear contracts, and rapid 1-week production sprints. Zero agency bureaucracy.
          </motion.p>
        </div>
      </section>

      {/* Steps List */}
      {processSteps.map((step, i) => (
        <AnimatedSection key={step.number} delay={i * 0.05}>
          <section
            className={
              i % 2 === 0
                ? "bg-card/40 border-y border-border py-20 transition-colors duration-300"
                : "bg-background py-20 transition-colors duration-300"
            }
          >
            <div className="mx-auto max-w-[1040px] px-6">
              <div className="grid gap-8 md:grid-cols-12 md:items-start">
                {/* Left Column: Stage Intro */}
                <motion.div
                  className="md:col-span-5 flex flex-col items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3.5 mb-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-foreground text-background font-bold text-xs font-mono shadow-sm">
                      {step.number}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Stage {step.number} of 05
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 mb-3">
                    <step.icon className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                    <h2 className="text-foreground font-sans font-bold text-lg sm:text-xl uppercase tracking-tight">
                      {step.title}
                    </h2>
                  </div>

                  <p className="text-muted-foreground font-sans text-xs sm:text-sm leading-relaxed mb-6">
                    {step.summary}
                  </p>

                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 font-mono text-[10.5px] uppercase tracking-wider text-foreground">
                    <Clock className="h-3.5 w-3.5 text-[#D4AF37]" />
                    <span>{step.duration}</span>
                  </div>
                </motion.div>

                {/* Right Column: Detailed Deliverables Card */}
                <motion.div
                  className="md:col-span-7 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-lg hover:shadow-xl hover:border-foreground/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-foreground font-mono text-[10.5px] uppercase tracking-[0.2em] font-semibold mb-5 pb-3 border-b border-border flex items-center justify-between">
                    <span>Protocol Deliverables</span>
                    <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
                  </h3>

                  <ul className="space-y-3.5">
                    {step.details.map((detail, di) => (
                      <li key={di} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground font-sans text-xs sm:text-sm leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      ))}

      {/* Transparent Policy Highlight Box */}
      <section className="bg-card/60 border-b border-border py-16 transition-colors duration-300">
        <div className="mx-auto max-w-[860px] px-6 text-center">
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-lg">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full border border-border bg-background">
              <Lock className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                Client Protection & Refund Protocol
              </span>
            </div>
            <h3 className="font-sans font-bold text-xl uppercase tracking-tight text-foreground mb-3">
              Guaranteed Milestone Peace of Mind
            </h3>
            <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6">
              You are entitled to a full 100% refund at any point before initial production begins. Once your sprint mobilizes and custom code is actively in flight, work is delivered in up to one week with dedicated revisions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-[10.5px] uppercase tracking-wider text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#D4AF37]" /> 100% Pre-Production Refund
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#D4AF37]" /> Bank-Grade Stripe Rails
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#D4AF37]" /> Complete IP Ownership
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-background py-24 transition-colors duration-300">
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <h2
            className="text-foreground font-sans font-bold uppercase tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", lineHeight: "1.05" }}
          >
            Ready to View Your Live Mockup?
          </h2>
          <p className="mx-auto mb-8 max-w-md text-muted-foreground font-sans text-sm sm:text-base leading-relaxed">
            Schedule a 15-minute discovery consultation directly with Pratham Verma to see your preliminary interactive mockup.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/#book-discovery"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-foreground text-background font-mono text-xs uppercase tracking-wider font-bold px-8 py-3.5 hover:opacity-90 active:scale-[0.98] transition-all shadow-lg"
            >
              <span>Schedule Discovery Call</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-border bg-card text-foreground font-mono text-xs uppercase tracking-wider px-8 py-3.5 hover:border-foreground/30 transition-all"
            >
              <span>Explore Selected Commissions</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
