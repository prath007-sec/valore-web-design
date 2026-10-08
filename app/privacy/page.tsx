"use client";

import { motion } from "framer-motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useEffect } from "react";
import { ShieldCheck, Lock, EyeOff, FileText } from "lucide-react";

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | Valore";
  }, []);

  return (
    <>
      <section className="pt-32 pb-20 bg-background text-foreground transition-colors duration-300">
        <div className="mx-auto max-w-[760px] px-6">
          <div className="mb-8">
            <Breadcrumbs items={[{ label: "Privacy Specification", href: "/privacy" }]} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full border border-border bg-card">
              <ShieldCheck className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Data Governance &bull; GDPR &bull; CCPA / CPRA
              </span>
            </div>

            <h1
              className="font-sans font-bold uppercase tracking-tight mb-2 text-foreground"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "1.08" }}
            >
              Privacy Policy & Data Integrity.
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
              <h2 className="font-sans font-bold uppercase tracking-wide text-foreground text-base mb-3 flex items-center gap-2">
                <Lock className="h-4 w-4 text-[#D4AF37]" />
                1. Data Minimization & Necessary Collection Only
              </h2>
              <p className="mb-3">
                Studio Valore enforces strict data minimization principles. We collect <strong>only the information strictly necessary</strong> to deliver custom architectural proposals, answer technical inquiries, or provide contracted services.
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground/90 pl-1">
                <li>Direct contact submissions: Your name, business email address, requested technical scope, and project brief.</li>
                <li>Commercial transactions: Encrypted payments processed directly through Stripe API rails. We do not store or process raw credit card numbers.</li>
                <li>Zero invasive telemetry: We do not log behavioral tracking cookies, cross-site pixels, or biometric data.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-sans font-bold uppercase tracking-wide text-foreground text-sm mb-3">
                2. GDPR (European Union) & UK Compliance
              </h2>
              <p>
                If you reside within the European Economic Area (EEA) or United Kingdom, your data is processed in accordance with the General Data Protection Regulation (GDPR). Our lawful basis for processing is contractual necessity and legitimate interest in delivering engineering proposals. You retain rights to access, rectify, restrict, or erase your personal records upon request.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold uppercase tracking-wide text-foreground text-sm mb-3">
                3. CCPA / CPRA (California) & State Laws Compliance
              </h2>
              <p className="mb-2">
                Under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), as well as consumer laws in Virginia (VCDPA), Colorado (CPA), and Connecticut (CTDPA):
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground/90 pl-1">
                <li><strong>No Sale or Sharing:</strong> We do not sell, rent, monetize, or share your personal data with third-party data brokers or marketing networks.</li>
                <li><strong>Right to Know & Delete:</strong> You may request full disclosure or deletion of all personal details provided to us without penalty or discriminatory pricing.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-sans font-bold uppercase tracking-wide text-foreground text-sm mb-3 flex items-center gap-2">
                <EyeOff className="h-4 w-4 text-[#D4AF37]" />
                4. Cookies & Local Storage
              </h2>
              <p>
                This site operates using strictly necessary functional cookies (theme mode preference and session security tokens). Optional analytical preferences are governed by our on-site Cookie Preferences Banner, where users may select &ldquo;Essential Only&rdquo; at any time.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold uppercase tracking-wide text-foreground text-sm mb-3">
                5. Data Retention & Secure Transport
              </h2>
              <p>
                All communications and form data are encrypted in transit via Transport Layer Security (TLS 1.3/HTTPS). Records are retained solely for the duration of the active client engagement or prospective evaluation, after which inactive inquiry records are purged.
              </p>
            </section>

            <section className="pt-6 border-t border-border">
              <h2 className="font-sans font-bold uppercase tracking-wide text-foreground text-sm mb-3">
                6. Contact the Data Controller
              </h2>
              <p>
                To exercise any privacy rights, request data deletion, or query our data governance policies, contact lead architect Pratham Verma directly at:{" "}
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
