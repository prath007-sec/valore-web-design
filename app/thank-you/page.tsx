"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { useEffect } from "react";

export default function ThankYouPage() {
  useEffect(() => {
    document.title = "Thank You | Valore Web Design";
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-14">
      <div className="mx-auto max-w-[600px] px-6 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
        >
          <div className="w-20 h-20 rounded-full bg-[#0066cc]/10 flex items-center justify-center mx-auto mb-8">
            <Sparkles className="h-10 w-10 text-[#0066cc]" />
          </div>
        </motion.div>

        <motion.h1
          className="text-[#1d1d1f] font-semibold"
          style={{
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            letterSpacing: "-0.28px",
            lineHeight: "1.1",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Glad to be working with you.
        </motion.h1>

        <motion.p
          className="mx-auto mt-4 text-[#7a7a7a]"
          style={{
            fontSize: "17px",
            lineHeight: "1.7",
            letterSpacing: "-0.374px",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          Thank you for reaching out! I&apos;ve received your message and will
          reply very soon — so be on the lookout for an email from{" "}
          <strong className="text-[#1d1d1f]">
            hello@valorewebdesign.com
          </strong>
          .
        </motion.p>

        <motion.div
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0066cc]/10 text-[#0066cc] px-5 py-2"
          style={{ fontSize: "14px", lineHeight: "1" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <Mail className="h-4 w-4" />
          hello@valorewebdesign.com
        </motion.div>

        <motion.p
          className="mx-auto mt-6 max-w-md text-[#7a7a7a]"
          style={{
            fontSize: "14px",
            lineHeight: "1.6",
            letterSpacing: "-0.224px",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          If you don&apos;t receive a reply within 24 hours, please check your
          spam folder. You can always reach me directly at{" "}
          <a
            href="mailto:hello@valorewebdesign.com"
            className="text-[#0066cc] hover:underline"
          >
            hello@valorewebdesign.com
          </a>
          .
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] text-white hover:bg-[#0071e3] transition-all active:scale-[0.97]"
            style={{ padding: "12px 24px", fontSize: "16px", fontWeight: 500, lineHeight: "1" }}
          >
            Back to home <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
