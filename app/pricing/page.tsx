"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import PricingQuoteSection from "@/components/PricingQuoteSection";
import DiscoveryScheduler from "@/components/DiscoveryScheduler";
import { ChevronDown, MessageCircle, ArrowRight, Mail, Sparkles, Clock, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { useState, useEffect } from "react";

const faqs = [
  {
    question: "Why do you provide tailored scopes instead of flat fixed rates?",
    answer:
      "Every business has distinct operational bottlenecks. A local business needing a digital footprint and local SEO has completely different requirements than a growing enterprise wanting a custom 24/7 AI customer service chatbot and automated CRM pipeline. We deliver a comprehensive, tailored preliminary blueprint and scope aligned directly with your ROI.",
  },
  {
    question: "What specific bottlenecks does your AI consulting solve?",
    answer:
      "We focus on high-impact automations: 24/7 AI customer chatbots to qualify leads while you sleep, automated lead routing to notify your team via SMS/Slack within 3 seconds, automated CRM data entry to eliminate spreadsheet chaos, and custom internal workflow tools saving 10 to 20 hours of manual labor every week.",
  },
  {
    question: "How long does a typical custom build take?",
    answer:
      "Rapid Web Launch deployments deliver in approximately 1 week. Full Growth Platforms integrated with 24/7 AI chatbots typically deliver in 1 to 2 weeks. Ongoing AI retainers are flexible monthly partnerships with zero long-term lock-in.",
  },
  {
    question: "Do I retain full legal ownership of the code and AI assets?",
    answer:
      "Yes, 100%. Upon final handoff, you receive full intellectual property ownership of your Next.js source code, custom API credentials, AI prompt archives, domain DNS setups, and database assets.",
  },
  {
    question: "How do client payments and milestones work?",
    answer:
      "All invoices are processed securely through Stripe with PCI-compliant checkout. Projects follow a structured milestone schedule: 50% upon project kickoff and 50% upon production deployment and final sign-off.",
  },
  {
    question: "What does the 15-minute discovery call entail?",
    answer:
      "You will speak directly with Pratham Verma, lead AI consultant and architect. We examine your current digital presence, pinpoint your largest operational bottlenecks, and determine if an AI workflow or custom web architecture will generate measurable ROI for your business.",
  },
];

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-border transition-colors duration-300"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group text-foreground"
      >
        <span className="font-semibold pr-4 font-sans tracking-wide text-sm sm:text-base uppercase text-foreground">
          {question}
        </span>
        <ChevronDown
          className="h-4 w-4 text-muted-foreground group-hover:text-[#D4AF37] flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "220px" : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <p className="pb-5 text-muted-foreground text-xs sm:text-sm font-sans leading-relaxed">
          {answer}
        </p>
      </div>
    </motion.div>
  );
}

export default function PricingPage() {
  useEffect(() => {
    document.title = "Investment & Scopes | Valore";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-background transition-colors duration-300 relative">
        <div className="mx-auto max-w-[1000px] px-6 text-center">
          <div className="mb-6 flex justify-center">
            <Breadcrumbs items={[{ label: "Investment & Scopes", href: "/pricing" }]} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-3 mb-6"
          >
            <div className="apple-badge">
              <Clock className="h-3.5 w-3.5 text-[#D4AF37]" />
              Tailored Engagement Models
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
            Tailored Scope. Zero Locked Surprises.
          </motion.h1>

          <motion.p
            className="mx-auto mt-4 max-w-xl text-muted-foreground font-sans text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose a tailored engagement model below or schedule a 15-minute discovery call to receive a custom project scope tailored to your business.
          </motion.p>
        </div>
      </section>

      {/* Pricing Models Section */}
      <PricingQuoteSection />

      {/* FAQ Section */}
      <AnimatedSection>
        <section className="bg-card border-y border-border transition-colors duration-300">
          <div className="mx-auto max-w-[800px] px-6 apple-section-spacing">
            <div className="text-center mb-12">
              <div className="apple-badge mb-4">
                <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
                Frequently Asked
              </div>
              <h2
                className="text-foreground font-sans font-bold uppercase tracking-tight"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: "1.1",
                }}
              >
                Engagement F.A.Q.
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground font-sans text-sm">
                Clear answers regarding our 24-hour turnaround, AI integrations, code ownership, and retainers.
              </p>
            </div>

            <div className="apple-bento-card p-6 sm:p-8 bg-background">
              {faqs.map((faq, i) => (
                <FaqItem key={i} question={faq.question} answer={faq.answer} index={i} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Direct Booking Scheduler Terminal */}
      <DiscoveryScheduler id="book-discovery" />
    </>
  );
}
