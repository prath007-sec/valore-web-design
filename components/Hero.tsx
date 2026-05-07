"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-14">
      <div className="mx-auto max-w-[980px] px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#e0e0e0] bg-[#f5f5f7] px-4 py-1.5 text-[#7a7a7a] mb-10">
            <Sparkles className="h-3 w-3" />
            <span
              style={{
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "-0.12px",
                lineHeight: "1",
              }}
            >
              Web developer based in Missouri
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-[#1d1d1f] font-semibold leading-[1.07]"
          style={{
            fontSize: "clamp(2.5rem, 5.5vw, 4rem)",
            letterSpacing: "-0.32px",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Custom-crafted websites.
          <br />
          Built for people who
          <br />
          <span className="relative">
            <span className="gradient-text">want to stand out.</span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mt-5 max-w-xl text-[#7a7a7a]"
          style={{
            fontSize: "clamp(16px, 1.2vw, 18px)",
            lineHeight: "1.6",
            letterSpacing: "-0.3px",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Modern, performant, and built with care. From landing pages to
          full-scale applications — one line of code at a time.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] text-white hover:bg-[#0071e3] transition-all active:scale-[0.97]"
            style={{ padding: "12px 24px", fontSize: "16px", fontWeight: 500, lineHeight: "1" }}
          >
            See pricing <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#d2d2d7] text-[#1d1d1f] hover:bg-[#f5f5f7] transition-all active:scale-[0.97]"
            style={{ padding: "12px 24px", fontSize: "16px", fontWeight: 400, lineHeight: "1" }}
          >
            Get a free mockup
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span
            className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#b0b0b8]"
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b0b0b8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
