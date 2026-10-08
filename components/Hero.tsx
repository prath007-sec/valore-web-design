"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { ArrowUpRight, CheckCircle2, ShieldCheck, ChevronDown, Loader2 } from "lucide-react";
import ValoreLogo from "./ui/ValoreLogo";
import MaskedText from "./ui/MaskedText";
import RollingText from "./ui/RollingText";
import ScrambleText from "./ui/ScrambleText";

// Dynamically load MeshGradient on client side to guarantee zero SSR hydration mismatches
const MeshGradient = dynamic(
  () => import("@paper-design/shaders-react").then((mod) => mod.MeshGradient),
  { ssr: false }
);

const scopeOptions = [
  { value: "custom-web", label: "Custom Web Architecture" },
  { value: "ecommerce", label: "E-Commerce System (Stripe)" },
  { value: "replatform", label: "Replatform & Modernization" },
  { value: "ai-workflows", label: "AI & Automated Workflows" },
];

const budgetOptions = [
  { value: "launch", label: "$2,000 – $4,000", shortLabel: "$2k – $4k" },
  { value: "commercial", label: "$4,000 – $8,000", shortLabel: "$4k – $8k" },
  { value: "enterprise", label: "$8,000+", shortLabel: "$8k+" },
];

export default function Hero() {
  const router = useRouter();

  // Contact Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [scope, setScope] = useState("custom-web");
  const [budget, setBudget] = useState("commercial");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          projectType: scopeOptions.find((o) => o.value === scope)?.label || scope,
          budget: budgetOptions.find((b) => b.value === budget)?.label || budget,
          message: message || "Requested preliminary architecture spec via Hero Form.",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setTimeout(() => {
          router.push(`/thank-you?name=${encodeURIComponent(name)}&type=spec`);
        }, 1200);
      } else {
        setErrorMsg(data.message || "Failed to submit. Please try again.");
      }
    } catch {
      setErrorMsg("Network error. Please email contact@valorewebdesign.com directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const metrics = [
    { label: "EDGE LATENCY", value: "< 80ms", desc: "Global TTFB" },
    { label: "CORE VITALS", value: "100/100", desc: "Lighthouse Score" },
    { label: "ARCHITECTURE", value: "0% Bloat", desc: "Hand-Coded Clean Code" },
    { label: "FRAMEWORK", value: "Next.js 16", desc: "React 19 & Turbopack" },
  ];

  return (
    <section className="relative min-h-[94vh] flex flex-col justify-center bg-background text-foreground pt-32 pb-20 overflow-hidden transition-colors duration-300">
      {/* ─── KINETIC SHADER MESH GRADIENT (INTEGRATED AMBIENT CANVAS) ─── */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-35 overflow-hidden">
        <MeshGradient
          className="w-full h-full"
          colors={["#000000", "#1a1a1a", "#2e2e2e", "#ffffff"]}
          speed={0.18}
          distortion={0.3}
          swirl={0.1}
        />
      </div>

      <div className="mx-auto max-w-[1240px] px-6 z-10 w-full relative">
        {/* ─── 2-COLUMN SPLIT GRID: CONTENT ON LEFT, CONTACT FORM ON RIGHT ─── */}
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-center">
          {/* ─── LEFT COLUMN: STUDIO IDENTITY, HEADLINE, CTAs, METRICS ─── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Studio Monogram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5 flex items-center gap-3"
            >
              <ValoreLogo iconOnly size="lg" />
            </motion.div>

            {/* Technical Index Header with Letter Scramble */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2">
                <ScrambleText
                  text="STUDIO VALORE // CUSTOM ARCHITECTURE & DIGITAL SYSTEMS"
                  className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-muted-foreground uppercase cursor-default"
                  delay={200}
                />
              </div>
            </motion.div>

            {/* Main Headline */}
            <div className="w-full">
              <MaskedText
                as="h1"
                text={[
                  "DIGITAL ARCHITECTURE.",
                  "ENGINEERED WITHOUT",
                  "COMPROMISE."
                ]}
                className="text-foreground font-sans font-bold leading-[0.98] tracking-[-0.035em] uppercase text-left"
                lineClassName="text-[clamp(2.4rem,5.6vw,4.75rem)] text-foreground"
                delay={0.15}
                stagger={0.12}
                duration={0.9}
              />
            </div>

            {/* Editorial Narrative */}
            <motion.p
              className="mt-6 font-sans text-sm sm:text-base text-muted-foreground leading-relaxed tracking-tight max-w-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              We design and build custom web platforms, pristine brand identities, and high-performance digital systems for ambitious founders and enterprises.
            </motion.p>

            {/* Dual Action CTAs */}
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href="#hero-spec-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("hero-spec-form")?.scrollIntoView({ behavior: "smooth" });
                  const nameInput = document.getElementById("hero-name-input");
                  if (nameInput) nameInput.focus();
                }}
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-foreground text-background px-7 py-3.5 text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg cursor-pointer"
              >
                <RollingText duplicateClassName="text-background">Initiate Project Spec</RollingText>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <Link
                href="/work"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-full border border-border bg-card/70 backdrop-blur-xl text-foreground px-7 py-3.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:border-foreground/30 hover:bg-card hover:scale-[1.02] active:scale-[0.98]"
              >
                <RollingText duplicateClassName="text-foreground">Explore Selected Works</RollingText>
              </Link>
            </motion.div>

            {/* 4-Stat Hardware Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 w-full border-t border-border pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {metrics.map((item, idx) => (
                <div key={idx} className="flex flex-col items-start">
                  <ScrambleText
                    text={item.label}
                    className="font-mono text-[9.5px] tracking-[0.2em] text-muted-foreground uppercase mb-1 cursor-default"
                    delay={800 + idx * 100}
                  />
                  <span className="font-sans font-bold text-lg sm:text-xl text-foreground tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-[11px] text-muted-foreground font-sans mt-0.5">
                    {item.desc}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ─── RIGHT COLUMN: HERO CONTACT FORM ─── */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              id="hero-spec-form"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-border bg-card/95 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Card Header (Green dot removed) */}
              <div className="pb-5 mb-5 border-b border-border">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                    Lead Architect Available
                  </span>
                  <span className="font-mono text-[9px] uppercase px-2.5 py-0.5 rounded-full border border-border bg-background text-muted-foreground font-medium">
                    Direct Inquiry
                  </span>
                </div>
                <h3 className="font-sans font-bold text-xl uppercase tracking-tight text-foreground">
                  Initiate Project Spec
                </h3>
                <p className="text-xs text-muted-foreground font-sans mt-0.5">
                  Direct engagement with Pratham Verma. Zero agency delegation.
                </p>
              </div>

              {/* Form Content */}
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center text-center"
                  >
                    <div className="h-12 w-12 rounded-full bg-foreground/10 text-foreground flex items-center justify-center mb-4">
                      <CheckCircle2 className="h-6 w-6 text-[#D4AF37]" />
                    </div>
                    <h4 className="font-sans font-bold text-lg uppercase tracking-tight text-foreground">
                      Specification Logged
                    </h4>
                    <p className="text-xs text-muted-foreground font-sans mt-1 max-w-xs">
                      Redirecting to consultation briefing... Pratham will respond within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-4">
                    {/* Name & Email Row */}
                    <div className="grid gap-3.5 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                          Full Name *
                        </label>
                        <input
                          id="hero-name-input"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Marcus Vance"
                          className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="marcus@company.com"
                          className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                        />
                      </div>
                    </div>

                    {/* Scope Selector with Fixed Dropdown Arrow Position */}
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                        Architecture Scope
                      </label>
                      <div className="relative">
                        <select
                          value={scope}
                          onChange={(e) => setScope(e.target.value)}
                          className="w-full appearance-none rounded-xl border border-border bg-background pl-3.5 pr-10 py-2.5 text-xs text-foreground focus:outline-none focus:border-foreground transition-colors cursor-pointer"
                        >
                          {scopeOptions.map((opt) => (
                            <option key={opt.value} value={opt.value} className="bg-card text-foreground">
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground transition-colors" />
                      </div>
                    </div>

                    {/* Target Investment Tier Buttons */}
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">
                        Target Investment
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {budgetOptions.map((b) => (
                          <button
                            key={b.value}
                            type="button"
                            onClick={() => setBudget(b.value)}
                            className={`py-2 px-2 rounded-xl font-mono text-[10.5px] text-center transition-all border cursor-pointer ${
                              budget === b.value
                                ? "border-foreground bg-foreground text-background font-bold shadow-sm"
                                : "border-border bg-background text-muted-foreground hover:text-foreground hover:border-foreground/30"
                            }`}
                          >
                            {b.shortLabel}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message / Brief */}
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                        Project Vision & Bottlenecks
                      </label>
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Briefly describe your goals, required integrations, or launch timeline..."
                        className="w-full rounded-xl border border-border bg-background p-3 text-xs text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors resize-none"
                      />
                    </div>

                    {errorMsg && (
                      <p className="text-[11px] text-red-500 font-sans">{errorMsg}</p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full group inline-flex items-center justify-center gap-2 rounded-xl bg-foreground text-background py-3 font-mono text-xs uppercase tracking-wider font-bold hover:opacity-90 active:scale-[0.99] transition-all shadow-md disabled:opacity-50 cursor-pointer"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          <span>Encrypting Specification...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Specification Inquiry</span>
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>

                    {/* Privacy & Confidentiality Guarantee */}
                    <div className="pt-2 flex items-center justify-center gap-1.5 text-muted-foreground font-mono text-[9px] uppercase tracking-wider">
                      <ShieldCheck className="h-3 w-3 text-[#D4AF37]" />
                      <span>100% Confidential &bull; Zero Spam &bull; &lt; 24h Response</span>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
