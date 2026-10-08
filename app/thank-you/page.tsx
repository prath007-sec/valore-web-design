"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Calendar, Clock, Sparkles, Mail, Bot, ExternalLink } from "lucide-react";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";
  const date = searchParams.get("date") || "";
  const time = searchParams.get("time") || "";
  const topic = searchParams.get("topic") || "";
  const isConsultation = searchParams.get("type") === "consultation" || Boolean(date && time);

  useEffect(() => {
    document.title = "Specification Received | Studio Valore";
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-background text-foreground pt-20 pb-16 px-6 relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#D4AF37]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-[680px] w-full text-center relative z-10">
        {/* Animated Checkmark Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
          className="w-20 h-20 rounded-3xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-[#D4AF37]/20"
        >
          <Sparkles className="h-10 w-10 text-[#D4AF37]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-4"
        >
          <span className="apple-badge">
            <CheckCircle2 className="h-3 w-3 text-[#D4AF37]" />
            Request Received
          </span>
        </motion.div>

        <motion.h1
          className="text-foreground font-sans font-bold uppercase tracking-tight"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3rem)",
            lineHeight: "1.08",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {name ? `Glad to connect, ${name}.` : "Glad to be working with you."}
        </motion.h1>

        <motion.p
          className="mx-auto mt-4 max-w-lg text-muted-foreground font-sans text-sm sm:text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {isConsultation
            ? "Your 15-minute discovery call request has been registered. Our lead AI consultant, Pratham Verma, will review your submission and connect with you directly."
            : "Thank you for reaching out! We've received your project details and our lead architect will deliver your customized blueprint directly."}
        </motion.p>

        {/* Scheduled Slot Summary Card */}
        {isConsultation && date && time && (
          <motion.div
            className="apple-bento-card p-6 border border-[#D4AF37]/30 bg-[#121318] text-left mt-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block mb-2">
              Confirmed Session Details
            </span>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <Calendar className="h-4 w-4 text-[#D4AF37]" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <Clock className="h-4 w-4 text-[#D4AF37]" />
                <span>{time} (15-Minute Strategy Call)</span>
              </div>
              {topic && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Bot className="h-4 w-4 text-[#D4AF37]" />
                  <span>Focus: {topic}</span>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* What Happens Next 3-Step Timeline */}
        <motion.div
          className="mt-8 p-6 rounded-3xl bg-card border border-border text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <h3 className="text-foreground font-bold text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#D4AF37]" />
            What Happens Next:
          </h3>
          <div className="space-y-3.5 text-xs text-muted-foreground">
            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 border border-[#D4AF37]/20">
                1
              </span>
              <div>
                <strong className="text-foreground font-semibold block">
                  Calendar Invite & Direct Confirmation
                </strong>
                <span>
                  Check your inbox for a confirmation message from{" "}
                  <strong className="text-foreground font-mono">contact@valorewebdesign.com</strong> with your Google Meet link.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 border border-[#D4AF37]/20">
                2
              </span>
              <div>
                <strong className="text-foreground font-semibold block">
                  Pre-Call Bottleneck Analysis
                </strong>
                <span>
                  Before we jump on the call, I will conduct an initial audit of your current digital footprint and identify 2–3 high-leverage AI automation opportunities.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 border border-[#D4AF37]/20">
                3
              </span>
              <div>
                <strong className="text-foreground font-semibold block">
                  Tailored Strategic Scope
                </strong>
                <span>
                  Following our consultation, you will receive a transparent, tailored scope with fixed milestones, zero surprise fees, and live staging timeline.
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] text-black font-bold tracking-wider uppercase text-xs px-8 py-3.5 hover:bg-white transition-all shadow-lg shadow-[#D4AF37]/10"
          >
            Back to Home <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/work#kicks-chicken"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card font-semibold tracking-wider uppercase text-xs px-6 py-3.5 text-foreground hover:border-[#D4AF37] transition-all"
          >
            Explore Kick&apos;s Chicken Case Study <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <section className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Loading Confirmation...</p>
      </section>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
