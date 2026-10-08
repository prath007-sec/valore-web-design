"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight, Globe, Layers, ShieldCheck } from "lucide-react";
import MaskedText from "./ui/MaskedText";
import RollingText from "./ui/RollingText";

export default function PricingQuoteSection() {
  const tiers = [
    {
      title: "Rapid Web Commission",
      tagline: "Essential Bespoke Production",
      description: "A pristine, handcrafted web architecture engineered to replace outdated sites and establish commanding market credibility.",
      icon: Globe,
      timeline: "Delivery in 1–2 Weeks",
      specs: [
        "100% custom responsive architecture (Zero templates)",
        "Sub-80ms global TTFB & 100/100 Core Web Vitals",
        "Mobile-first conversion funnel & typography system",
        "JSON-LD structured schema & local SEO mapping",
        "Secure inquiry routing & automated lead dispatch",
        "Full Git repository & intellectual property ownership",
      ],
      highlighted: false,
      ctaText: "Request Scope Spec",
      focusParam: "Rapid Web Commission",
    },
    {
      title: "Flagship Digital Platform",
      tagline: "Custom Architecture + Payment Rails",
      description: "Our comprehensive digital system. Bespoke Next.js web application paired with Stripe checkout pipelines and automated backend workflows.",
      icon: Layers,
      timeline: "Delivery in 2–3 Weeks",
      specs: [
        "Everything in Rapid Web Commission",
        "Custom design tokens & kinetic micro-interactions",
        "Stripe payment checkout & automated customer receipts",
        "Automated lead synchronization to CRM, Slack & Email",
        "Interactive customer onboarding & scheduling flow",
        "Comprehensive technical SEO & OpenGraph card engine",
        "Direct 1:1 architectural consultation with Pratham",
      ],
      highlighted: true,
      badge: "Flagship Practice",
      ctaText: "Initiate Flagship Spec",
      focusParam: "Flagship Digital Platform",
    },
    {
      title: "Studio Retainer & SLA",
      tagline: "Continuous Engineering & Systems Advisory",
      description: "A dedicated monthly engineering partnership keeping your web platform blazing fast and evolving your digital infrastructure continuously.",
      icon: ShieldCheck,
      timeline: "Monthly Partnership SLA",
      specs: [
        "Continuous performance audits & Core Web Vitals maintenance",
        "Architecting new backend workflows as business expands",
        "24/7 uptime, SSL security & automated edge backups",
        "Bi-weekly strategic product sessions with Pratham",
        "Priority emergency response & same-day hotfixes",
        "Flexible month-to-month commitment; zero lock-in",
      ],
      highlighted: false,
      ctaText: "Discuss Studio Retainer",
      focusParam: "Studio Retainer & SLA",
    },
  ];

  return (
    <section id="pricing" className="bg-background text-foreground border-b border-border relative overflow-hidden py-28 sm:py-36 transition-colors duration-300">
      <div className="mx-auto max-w-[1140px] px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
              Commission Models &bull; Transparent Scope
            </span>
          </motion.div>

          <MaskedText
            as="h2"
            text={[
              "BESPOKE ARCHITECTURE.",
              "PREDICTABLE VALUE."
            ]}
            className="text-foreground font-sans font-bold leading-[1.05] tracking-[-0.03em] uppercase text-center"
            lineClassName="text-[clamp(2.2rem,5vw,3.75rem)] text-foreground"
            delay={0.1}
            stagger={0.12}
          />

          <motion.p
            className="mt-6 text-sm sm:text-base text-muted-foreground font-sans leading-relaxed tracking-tight max-w-xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Every business problem is unique. We provide guaranteed milestone scopes with zero hidden fees, delivered with senior engineering rigor.
          </motion.p>
        </div>

        {/* Tiers Grid */}
        <div className="grid gap-6 lg:grid-cols-3 items-stretch">
          {tiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.title}
                className={`group relative flex flex-col justify-between rounded-3xl p-8 sm:p-9 transition-all duration-500 ${
                  tier.highlighted
                    ? "bg-card border-2 border-foreground/30 shadow-2xl relative lg:-translate-y-2"
                    : "bg-card border border-border hover:border-foreground/30 shadow-md"
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  bounce: 0,
                  duration: 0.5,
                  delay: idx * 0.1,
                }}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                        {tier.tagline}
                      </span>
                    </div>
                    {tier.badge && (
                      <span className="font-mono text-[9px] tracking-widest uppercase bg-foreground text-background font-bold px-3 py-1 rounded-full">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-sans font-bold text-2xl text-foreground uppercase tracking-tight mb-2">
                    {tier.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  <div className="inline-block font-mono text-[11px] tracking-wider uppercase text-foreground mb-8 py-1 px-3 rounded-full bg-muted border border-border">
                    {tier.timeline}
                  </div>

                  {/* Feature specs */}
                  <div className="space-y-3 pt-6 border-t border-border">
                    <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                      Included Capabilities
                    </span>
                    <ul className="space-y-2.5">
                      {tier.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2.5 text-xs text-foreground/90">
                          <Check className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tier CTA with Instant Active Response */}
                <div className="mt-10 pt-6 border-t border-border">
                  <a
                    href={`#book-discovery?tier=${encodeURIComponent(tier.focusParam)}`}
                    className={`group/btn relative w-full inline-flex items-center justify-center gap-2 rounded-full py-3.5 px-6 font-mono text-[11px] tracking-wider uppercase transition-all duration-200 active:scale-[0.97] ${
                      tier.highlighted
                        ? "bg-foreground text-background font-bold hover:opacity-90 shadow-md"
                        : "border border-border bg-muted/50 text-foreground hover:bg-foreground hover:text-background"
                    }`}
                  >
                    <RollingText duplicateClassName={tier.highlighted ? "text-background" : "text-background"}>
                      {tier.ctaText}
                    </RollingText>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
