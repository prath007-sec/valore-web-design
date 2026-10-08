"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Palette, RefreshCw, Rocket, CheckCircle2, Clock, Bot, Sparkles, Terminal } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useEffect } from "react";

const processSteps = [
  {
    number: "01",
    icon: Target,
    title: "Discovery & Bottleneck Audit",
    summary:
      "We jump on a 15-minute discovery call to dissect your operations, identify manual administrative choke-points, and map your digital conversion strategy before writing a single line of code.",
    details: [
      "15-minute 1:1 discovery call with Pratham Verma",
      "Analysis of customer acquisition funnels & manual admin tasks",
      "Identification of 24/7 AI chatbot & lead automation opportunities",
      "Drafting a tailored visual blueprint and technical scope",
      "Guaranteed proposal and project timeline delivered within 24 hours",
    ],
    duration: "1–2 Days",
  },
  {
    number: "02",
    icon: Palette,
    title: "Web Engineering & AI Integration",
    summary:
      "I craft a bespoke Next.js web application paired with custom AI assistants and workflow automations, prioritizing sub-second speeds and high conversion.",
    details: [
      "Custom responsive design system tailored to your brand identity",
      "Sub-second Next.js architecture with 100/100 Core Web Vitals",
      "Configuring 24/7 AI customer service chatbot trained on your data",
      "Automated lead capture workflows connecting forms to CRM, SMS & Slack",
      "Stripe payment gateway integration & local SEO schema mapping",
    ],
    duration: "1–2 Weeks",
  },
  {
    number: "03",
    icon: RefreshCw,
    title: "Live Staging & Prompt Refinement",
    summary:
      "You receive a private staging URL to test the live web platform, test drive the AI chatbot responses, and review conversion flows in real time.",
    details: [
      "Interactive staging link shared for your team's review",
      "Testing AI conversational accuracy and lead capture triggers",
      "Pixel-perfect refinements to layout grids and mobile viewports",
      "Cross-device QA on mobile, tablet, and desktop screens",
      "Zero-downtime pre-flight checklist verification",
    ],
    duration: "2–3 Days",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Production Launch & Retainer Scaling",
    summary:
      "We deploy your platform to edge infrastructure, point your custom domain, verify SSL encryption, and provide continuous AI optimization.",
    details: [
      "Custom domain DNS configuration and Vercel edge deployment",
      "Bank-grade SSL certification & production performance verification",
      "Google Business and local SEO schema activation",
      "Complete transfer of code repository, AI prompts & credentials",
      "Optional monthly retainer for ongoing AI feature rollouts",
    ],
    duration: "1 Day",
  },
];

export default function ProcessPage() {
  useEffect(() => {
    document.title = "4-Step Engineering Process | Valore AI & Web Architecture";
  }, []);

  return (
    <>
      <section className="pt-32 pb-16 bg-background transition-colors duration-300 relative">
        <div className="mx-auto max-w-[980px] px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="apple-badge mb-4">
              <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
              The Framework
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
            How I Engineer Your System<span className="text-[#D4AF37]">.</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-4 max-w-xl text-muted-foreground font-sans text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A streamlined 4-step framework combining bespoke web engineering with practical AI automation, taking your system from blueprint to live deployment in 1–2 weeks.
          </motion.p>
        </div>
      </section>

      {/* Steps List */}
      {processSteps.map((step, i) => (
        <AnimatedSection key={step.number} delay={i * 0.05}>
          <section className={i % 2 === 0 ? "bg-card border-y border-border transition-colors duration-300" : "bg-background transition-colors duration-300"}>
            <div className="mx-auto max-w-[1000px] px-6 apple-section-spacing">
              <div className="grid gap-8 md:grid-cols-2 md:items-start">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] font-bold text-sm font-mono">
                      {step.number}
                    </span>
                    <div className="flex items-center gap-2.5">
                      <step.icon className="h-5 w-5 text-[#D4AF37]" />
                      <h2 className="text-foreground font-sans font-bold text-lg uppercase tracking-wider">
                        {step.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-muted-foreground font-sans text-xs sm:text-sm leading-relaxed mb-4">
                    {step.summary}
                  </p>

                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                    <Clock className="h-3 w-3" /> {step.duration}
                  </div>
                </motion.div>

                <motion.div
                  className="apple-bento-card p-6 sm:p-8 bg-background border border-white/[0.08]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-foreground font-sans font-bold text-xs uppercase tracking-wider mb-4 text-[#D4AF37]">
                    Milestone Deliverables:
                  </h3>
                  <ul className="space-y-3">
                    {step.details.map((detail, di) => (
                      <li key={di} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground font-sans text-xs leading-relaxed">
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

      {/* Bottom CTA */}
      <section className="bg-background transition-colors duration-300">
        <div className="mx-auto max-w-[980px] px-6 text-center apple-section-spacing">
          <h2
            className="text-foreground font-sans font-bold uppercase tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", lineHeight: "1.1" }}
          >
            Ready to Begin?
          </h2>
          <p className="mx-auto mt-4 mb-8 max-w-md text-muted-foreground font-sans text-base leading-relaxed">
            Schedule a 15-minute discovery call directly with Pratham Verma to get your tailored scope and proposal within 24 hours.
          </p>
          <Link
            href="/#book-discovery"
            className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider px-8 py-3.5 hover:bg-white transition-all shadow-lg shadow-[#D4AF37]/10"
          >
            Book Discovery Call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
