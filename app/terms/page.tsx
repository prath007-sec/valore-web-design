"use client";

import { motion } from "framer-motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useEffect } from "react";
import { Scale, FileText } from "lucide-react";

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Engagement & Service | Studio Valore";
  }, []);

  return (
    <>
      <section className="pt-32 pb-20 bg-background text-foreground transition-colors duration-300">
        <div className="mx-auto max-w-[760px] px-6">
          <div className="mb-8">
            <Breadcrumbs items={[{ label: "Terms of Engagement", href: "/terms" }]} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full border border-border bg-card">
              <Scale className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Client Agreement &bull; Engineering Terms
              </span>
            </div>

            <h1
              className="font-sans font-bold uppercase tracking-tight mb-2 text-foreground"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "1.08" }}
            >
              Terms of Engagement.
            </h1>
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-10">
              Effective Date: January 2025 &bull; Last Audited: October 2026
            </p>
          </motion.div>

          <motion.div
            className="space-y-10 font-sans text-sm leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <section className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-sans font-bold uppercase tracking-wide text-foreground text-base mb-3">
                1. Scope of Architecture Services
              </h2>
              <p>
                Studio Valore provides bespoke software engineering, web application development, brand identity systems, and automation infrastructure. Every engagement operates under an itemized statement of work (SOW) defining explicit deliverables, milestones, and timelines.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold uppercase tracking-wide text-foreground text-sm mb-3">
                2. Full Intellectual Property (IP) Transfer
              </h2>
              <p>
                Upon receipt of full and final project investment milestone payments, all bespoke codebases, custom UI designs, graphic components, and documentation transfer entirely to the client. Studio Valore retains zero proprietary locks or recurring builder license fees.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold uppercase tracking-wide text-foreground text-sm mb-3">
                3. Milestone Commitments & Payment Rails
              </h2>
              <p>
                Projects are structured around transparent milestone disbursements (typically 50% mobilization deposit and 50% upon final deployment verification). Payments are processed securely via Stripe. Invoices past 30 days are subject to work stoppage.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold uppercase tracking-wide text-foreground text-sm mb-3">
                4. Production Hosting & Third-Party Dependencies
              </h2>
              <p>
                We build on production-grade infrastructure (Vercel, AWS, Cloudflare, Supabase, Stripe). The client maintains direct ownership of third-party platform credentials and hosting accounts to ensure absolute operational independence.
              </p>
            </section>

            <section className="pt-6 border-t border-border">
              <h2 className="font-sans font-bold uppercase tracking-wide text-foreground text-sm mb-3">
                5. Inquiries & Legal Notices
              </h2>
              <p>
                For questions regarding engagement contracts, custom enterprise MSAs, or service level commitments, reach out directly to:{" "}
                <a
                  href="mailto:contact@valorewebdesign.com"
                  className="text-foreground font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
                >
                  contact@valorewebdesign.com
                </a>
              </p>
            </section>
          </motion.div>
        </div>
      </section>
    </>
  );
}
