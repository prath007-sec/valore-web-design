"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a selection
    const consent = localStorage.getItem("valore_cookie_consent");
    if (!consent) {
      // Delay display slightly for clean page load experience
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (preference: "essential" | "all") => {
    localStorage.setItem("valore_cookie_consent", preference);
    localStorage.setItem("valore_cookie_consent_date", new Date().toISOString());
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          role="region"
          aria-label="Cookie consent banner"
          className="fixed bottom-5 left-5 z-50 max-w-sm sm:max-w-md w-[calc(100vw-2.5rem)] rounded-3xl border border-border bg-card/95 backdrop-blur-2xl p-5 sm:p-6 shadow-2xl text-foreground"
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground/10 text-foreground">
                <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                Privacy & Data Governance
              </span>
            </div>
            <button
              onClick={() => handleChoice("essential")}
              aria-label="Dismiss cookie notice"
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="text-xs text-muted-foreground font-sans leading-relaxed mb-4">
            Studio Valore adheres to strict privacy standards (GDPR & CCPA). We only collect data necessary to deliver your requested architecture specifications. We never sell or exchange personal telemetry. Read our{" "}
            <Link
              href="/privacy"
              className="text-foreground underline underline-offset-2 hover:opacity-80 transition-opacity font-medium"
            >
              Privacy Policy
            </Link>
            .
          </p>

          <div className="flex items-center gap-2.5 pt-2">
            <button
              onClick={() => handleChoice("essential")}
              className="flex-1 rounded-full border border-border bg-card px-4 py-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-foreground hover:border-foreground/30 transition-all active:scale-[0.98]"
            >
              Essential Only
            </button>
            <button
              onClick={() => handleChoice("all")}
              className="flex-1 rounded-full bg-foreground text-background px-4 py-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity active:scale-[0.98] shadow-sm"
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
