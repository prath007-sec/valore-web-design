"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Palette, RefreshCw, Rocket, CheckCircle, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useEffect } from "react";

const processSteps = [
  {
    number: "01",
    icon: Target,
    title: "Strategy",
    summary:
      "We map out your goals, audience, and content structure before a single line of code is written.",
    details: [
      "Discovery call to understand your business, audience, and goals",
      "Competitive analysis and inspiration gathering",
      "Sitemap and content structure planning",
      "Defining success metrics and milestones",
      "Timeline and milestone agreement",
    ],
    duration: "1-2 days",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design & Build",
    summary:
      "I design and develop your site using modern tools — responsive, fast, and polished.",
    details: [
      "Wireframing key pages based on sitemap",
      "Custom design mockups in Figma",
      "Development in Next.js with Tailwind CSS",
      "Mobile-first responsive implementation",
      "Performance optimization throughout",
    ],
    duration: "1-3 weeks",
  },
  {
    number: "03",
    icon: RefreshCw,
    title: "Review & Refine",
    summary:
      "You review a live preview, give feedback, and we iterate until it's perfect.",
    details: [
      "Share a live preview link for real-world testing",
      "Structured feedback rounds via dedicated document",
      "Design and content refinements",
      "Cross-browser and device testing",
      "Final approval before launch",
    ],
    duration: "3-5 days",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    summary:
      "We deploy to production with SSL, analytics, and ongoing support included.",
    details: [
      "Domain configuration and DNS setup",
      "SSL certificate installation",
      "Analytics setup (Google Analytics or Plausible)",
      "Performance final check and optimization",
      "Ongoing support and maintenance options",
    ],
    duration: "1-2 days",
  },
];

export default function ProcessPage() {
  useEffect(() => {
    document.title = "Process | Valore Web Design";
  }, []);

  return (
    <>
      <section className="pt-24 bg-white">
        <div className="mx-auto max-w-[980px] px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="apple-badge mb-6">Process</div>
          </motion.div>
          <motion.h1
            className="text-[#1d1d1f] font-semibold"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              letterSpacing: "-0.28px",
              lineHeight: "1.1",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            How it works.
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 mb-10 max-w-lg text-[#7a7a7a]"
            style={{
              fontSize: "17px",
              lineHeight: "1.6",
              letterSpacing: "-0.374px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A straightforward process designed to deliver quality without the
            headache.
          </motion.p>
        </div>
      </section>

      {processSteps.map((step, i) => (
        <AnimatedSection key={step.number} delay={i * 0.05}>
          <section className={i % 2 === 0 ? "bg-white" : "bg-[#f5f5f7]"}>
            <div className="mx-auto max-w-[980px] px-6 apple-section-spacing">
              <div className="grid gap-8 md:grid-cols-2 md:items-start">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0066cc]/10 text-[#0066cc] font-semibold">
                      {step.number}
                    </span>
                    <div className="flex items-center gap-2">
                      <step.icon className="h-5 w-5 text-[#0066cc]" />
                      <h2
                        className="text-[#1d1d1f] font-semibold"
                        style={{
                          fontSize: "22px",
                          letterSpacing: "-0.28px",
                          lineHeight: "1.1",
                        }}
                      >
                        {step.title}
                      </h2>
                    </div>
                  </div>
                  <p
                    className="text-[#7a7a7a]"
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.7",
                      letterSpacing: "-0.224px",
                    }}
                  >
                    {step.summary}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#0066cc]/5 text-[#0066cc] px-3 py-1 text-[11px] font-medium">
                    <Clock className="h-3 w-3" /> {step.duration}
                  </div>
                </motion.div>

                <motion.div
                  className="card-elevated p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3
                    className="text-[#1d1d1f] font-semibold mb-4"
                    style={{ fontSize: "14px", letterSpacing: "-0.2px" }}
                  >
                    What happens in this phase:
                  </h3>
                  <ul className="space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-[#0066cc] mt-0.5 flex-shrink-0" />
                        <span
                          className="text-[#7a7a7a]"
                          style={{
                            fontSize: "14px",
                            lineHeight: "1.5",
                            letterSpacing: "-0.224px",
                          }}
                        >
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

      <AnimatedSection delay={0.1}>
        <section className="bg-white">
          <div className="mx-auto max-w-[980px] px-6 text-center apple-section-spacing">
            <h2
              className="text-[#1d1d1f] font-semibold"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                letterSpacing: "-0.28px",
                lineHeight: "1.1",
              }}
            >
              Ready to start your project?
            </h2>
            <p
              className="mx-auto mt-4 mb-8 max-w-md text-[#7a7a7a]"
              style={{
                fontSize: "17px",
                lineHeight: "1.6",
                letterSpacing: "-0.374px",
              }}
            >
              Let&apos;s talk about what you need. Free consultation, no
              obligation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] text-white hover:bg-[#0071e3] transition-all active:scale-[0.97]"
              style={{ padding: "12px 24px", fontSize: "16px", fontWeight: 500, lineHeight: "1" }}
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
