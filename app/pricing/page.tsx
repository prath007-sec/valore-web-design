"use client";

import { motion } from "framer-motion";
import PackageCard from "@/components/PackageCard";
import AnimatedSection from "@/components/AnimatedSection";
import { CreditCard, MessageCircle, ChevronDown, Mail, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/components/CartContext";
import { useRouter } from "next/navigation";

const packages = [
  {
    title: "Starter",
    description:
      "A clean, single-page presence to establish your brand online. Perfect for freelancers and small projects.",
    price: "$399",
    ctaText: "Get started",
    timeline: "1 week",
    features: [
      { text: "Single-page responsive website", included: true },
      { text: "Custom design & layout", included: true },
      { text: "Mobile-optimized", included: true },
      { text: "Basic SEO setup", included: true },
      { text: "Contact form integration", included: true },
      { text: "Netlify subdomain or your own domain", included: true },
      { text: "CMS integration", included: false },
      { text: "Ongoing maintenance", included: false },
    ],
  },
  {
    title: "Growth",
    description:
      "A multi-page site with modern performance and SEO. Ideal for businesses ready to scale.",
    price: "$899",
    ctaText: "Go growth",
    timeline: "2-3 weeks",
    features: [
      { text: "Up to 5 responsive pages", included: true },
      { text: "Custom design & animations", included: true },
      { text: "Mobile & tablet optimized", included: true },
      { text: "Full SEO optimization", included: true },
      { text: "CMS integration (Sanity, Contentful)", included: true },
      { text: "Performance optimization", included: true },
      { text: "Contact form + newsletter", included: true },
      { text: "Custom domain included", included: true },
      { text: "Ongoing maintenance", included: false },
    ],
  },
  {
    title: "Premium",
    description:
      "The full package — a complete website with everything included. Best value for ambitious projects.",
    price: "$1,199",
    highlighted: true,
    ctaText: "Best value →",
    timeline: "4-6 weeks",
    features: [
      { text: "Full custom website", included: true },
      { text: "Backend & database setup", included: true },
      { text: "Authentication & user management", included: true },
      { text: "Custom animations & interactions", included: true },
      { text: "Full SEO & performance audit", included: true },
      { text: "Priority support & maintenance", included: true },
      { text: "Custom domain included", included: true },
      { text: "Dedicated project timeline", included: true },
    ],
  },
];

const PACKAGE_PRICES: Record<string, number> = {
  Starter: 399,
  Growth: 899,
  Premium: 1199,
};

const faqs = [
  {
    question: "What kind of websites do you build?",
    answer:
      "I build responsive, modern websites ranging from single landing pages to full-scale web applications. Every site is custom-built for your brand, with a focus on performance, accessibility, and clean design.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A single-page site usually takes 3–5 business days. Multi-page sites and web applications typically take 1–3 weeks depending on scope and complexity. You'll get a clear timeline before we start.",
  },
  {
    question: "Will my site work on mobile devices?",
    answer:
      "Absolutely. Every site I build is fully responsive and tested across phones, tablets, and desktops. Mobile-first design is the standard, not an add-on.",
  },
  {
    question: "Who hosts the website and owns the domain?",
    answer:
      "You do. Domains are registered in your name, hosting accounts are under your control, and the source code is yours. You walk away with full ownership of everything.",
  },
  {
    question: "What if I need updates after launch?",
    answer:
      "Premium clients receive priority same-day support. For everyone else, I offer ongoing maintenance and updates at an hourly rate. Small text or image tweaks are often included at no extra charge in the first 30 days.",
  },
  {
    question: "Do you work with CMS platforms like WordPress?",
    answer:
      "I can integrate a headless CMS so you can update content yourself without touching code. I typically use modern static-site and headless CMS workflows rather than traditional WordPress, but I'm happy to discuss what fits your needs best.",
  },
  {
    question: "How do payments work?",
    answer:
      "All payments go through Stripe — PCI-compliant and secure. Full payment is required upfront before work begins. You approve a mockup first, then pay, and I build your website. Simple and transparent.",
  },
];

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-[#e0e0e0]"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      viewport={{ once: true }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
      >
        <span
          className="text-[#1d1d1f] font-medium pr-4"
          style={{ fontSize: "17px", letterSpacing: "-0.374px", lineHeight: "1.4" }}
        >
          {question}
        </span>
        <ChevronDown
          className="h-5 w-5 text-[#7a7a7a] flex-shrink-0 transition-transform duration-250"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "200px" : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <p
          className="pb-5 text-[#7a7a7a]"
          style={{ fontSize: "15px", lineHeight: "1.6", letterSpacing: "-0.224px" }}
        >
          {answer}
        </p>
      </div>
    </motion.div>
  );
}

export default function PricingPage() {
  useEffect(() => {
    document.title = "Pricing | Valore Web Design";
  }, []);
  const { addItem } = useCart();
  const router = useRouter();

  const handleCheckout = (title: string) => {
    addItem({
      id: `package-${title.toLowerCase()}`,
      name: `${title} Package`,
      price: PACKAGE_PRICES[title],
      type: "package",
      packageTier: title as "Starter" | "Growth" | "Premium",
    });
    router.push("/cart");
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-24 bg-white">
        <div className="mx-auto max-w-[980px] px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="apple-badge mb-6">Pricing</div>
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
            Simple, upfront pricing.
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-lg text-[#7a7a7a]"
            style={{
              fontSize: "17px",
              lineHeight: "1.6",
              letterSpacing: "-0.374px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            No surprises, no hidden fees. Pick a package or reach out for a
            custom quote.
          </motion.p>
        </div>
      </section>

      {/* Package cards */}
      <AnimatedSection>
        <section className="bg-[#f5f5f7]">
          <div className="mx-auto max-w-[980px] px-6 apple-section-spacing">
            <div className="grid gap-8 md:grid-cols-3">
              {packages.map((pkg, i) => (
                <div key={pkg.title} className="relative">
                  {pkg.highlighted && (
                    <div
                      className="absolute -inset-4 rounded-3xl pointer-events-none opacity-60"
                      style={{
                        background:
                          "radial-gradient(ellipse at center, rgba(0,102,204,0.25) 0%, rgba(124,58,237,0.12) 40%, transparent 70%)",
                        filter: "blur(40px)",
                      }}
                    />
                  )}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                  >
                    <PackageCard
                      {...pkg}
                      exampleHref={pkg.title === "Starter" ? "/examples/starter" : pkg.title === "Growth" ? "/examples/growth" : "/examples/premium"}
                      onCheckout={() => handleCheckout(pkg.title)}
                      timeline={pkg.timeline}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Compare plans */}
      <AnimatedSection delay={0.1}>
        <section className="bg-white">
          <div className="mx-auto max-w-[980px] px-6 apple-section-spacing">
            <div className="text-center mb-14">
              <div className="apple-badge mb-5">Compare plans</div>
              <h2
                className="text-[#1d1d1f] font-semibold"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  letterSpacing: "-0.28px",
                  lineHeight: "1.1",
                }}
              >
                Pick the right fit.
              </h2>
              <p
                className="mx-auto mt-4 max-w-lg text-[#7a7a7a]"
                style={{ fontSize: "17px", lineHeight: "1.6", letterSpacing: "-0.374px" }}
              >
                Every package is a one-time payment. Add optional maintenance for ongoing support.
              </p>
            </div>

            {/* Price cards row */}
            <div className="grid grid-cols-3 gap-6 mb-14">
              {[
                { name: "Starter", price: "$399", tag: "One-time", maint: "$29/mo", badge: false },
                { name: "Growth", price: "$899", tag: "One-time", maint: "$49/mo", badge: false },
                { name: "Premium", price: "$1,199", tag: "One-time", maint: "$99/mo", badge: "Best value" },
              ].map((plan) => (
                <div key={plan.name} className={`card-elevated p-6 text-center relative ${plan.badge ? "ring-1 ring-[#0066cc]" : ""}`}>
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#0066cc] px-4 py-1 z-10">
                      <span className="text-xs font-semibold text-white" style={{ fontSize: "11px", letterSpacing: "-0.12px", lineHeight: "1" }}>Best value</span>
                    </div>
                  )}
                  <p className="text-[#7a7a7a] text-xs font-medium mb-2" style={{ letterSpacing: "0.02em" }}>{plan.name}</p>
                  <p className="text-[#1d1d1f] font-semibold" style={{ fontSize: "32px", letterSpacing: "-0.374px", lineHeight: "1" }}>{plan.price}</p>
                  <p className="text-[#7a7a7a] text-xs mt-1.5 mb-3">{plan.tag}</p>
                  <p className="text-[11px] text-[#0066cc] font-medium">+ {plan.maint} maintenance</p>
                </div>
              ))}
            </div>

            {/* Feature comparison */}
            <div className="max-w-[780px] mx-auto">
              {[
                {
                  category: "Pricing",
                  rows: [
                    { label: "One-time price", values: ["$399", "$899", "$1,199"] },
                    { label: "Delivery time", values: ["1 week", "2–3 weeks", "4–6 weeks"] },
                  ],
                },
                {
                  category: "Features",
                  rows: [
                    { label: "Custom design & layout", values: [true, true, true] },
                    { label: "Responsive pages", values: ["1 page", "Up to 5 pages", "Full website"] },
                    { label: "Mobile optimized", values: [true, true, true] },
                    { label: "Custom animations", values: [false, true, true] },
                    { label: "Contact form", values: ["Basic", "Form + newsletter", true] },
                    { label: "SEO", values: ["Basic", "Full", "Full + audit"] },
                    { label: "Performance optimization", values: [false, true, true] },
                    { label: "CMS integration", values: [false, true, true] },
                    { label: "Custom domain", values: ["Netlify or own", "Included", "Included"] },
                    { label: "Backend & database", values: [false, false, true] },
                    { label: "Authentication", values: [false, false, true] },
                    { label: "Priority support", values: [false, false, true] },
                    { label: "Dedicated timeline", values: [false, false, true] },
                  ],
                },
                {
                  category: "Maintenance",
                  rows: [
                    { label: "Monthly", values: ["$29/mo", "$49/mo", "$99/mo"] },
                    { label: "Yearly", values: ["$290/yr", "$490/yr", "$990/yr"] },
                  ],
                },
              ].map((section, si) => (
                <div key={section.category} className={si > 0 ? "mt-10" : ""}>
                  <p className="text-[11px] font-semibold text-[#7a7a7a] uppercase tracking-[0.08em] mb-3 px-1">{section.category}</p>
                  <div className="rounded-2xl border border-[#e8e8ed] overflow-hidden">
                    {section.rows.map((row, ri) => (
                      <div
                        key={row.label}
                        className={`grid grid-cols-4 items-center px-4 sm:px-6 ${
                          ri % 2 === 0 ? "bg-[#fbfbfd]" : "bg-white"
                        }`}
                        style={{ minHeight: "48px" }}
                      >
                        <p className="text-[13px] text-[#1d1d1f] font-medium" style={{ letterSpacing: "-0.2px" }}>{row.label}</p>
                        {row.values.map((val, vi) => (
                          <p key={vi} className="text-[13px] text-center" style={{ letterSpacing: "-0.2px" }}>
                            {val === true ? (
                              <span className="text-[#0066cc] font-semibold">✓</span>
                            ) : val === false ? (
                              <span className="text-[#d2d2d7]">—</span>
                            ) : typeof val === "string" && val.startsWith("$") ? (
                              <span className="text-[#1d1d1f] font-semibold">{val}</span>
                            ) : (
                              <span className="text-[#7a7a7a]">{val}</span>
                            )}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection delay={0.1}>
        <section className="bg-[#f5f5f7]">
          <div className="mx-auto max-w-[720px] px-6 apple-section-spacing">
            <div className="text-center mb-12">
              <div className="apple-badge mb-5">FAQ</div>
              <h2
                className="text-[#1d1d1f] font-semibold"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  letterSpacing: "-0.28px",
                  lineHeight: "1.1",
                }}
              >
                Frequently asked questions.
              </h2>
              <p
                className="mx-auto mt-4 max-w-lg text-[#7a7a7a]"
                style={{ fontSize: "17px", lineHeight: "1.6", letterSpacing: "-0.374px" }}
              >
                Everything you might want to know before starting a project.
              </p>
            </div>
            <div className="card-elevated p-8">
              {faqs.map((faq, i) => (
                <FaqItem key={i} question={faq.question} answer={faq.answer} index={i} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Still have questions CTA */}
      <AnimatedSection delay={0.1}>
        <section className="bg-white">
          <div className="mx-auto max-w-[980px] px-6 text-center apple-section-spacing">
            <div className="mb-5">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0066cc]/10 mb-4">
                <MessageCircle className="h-6 w-6 text-[#0066cc]" />
              </div>
            </div>
            <h2
              className="text-[#1d1d1f] font-semibold"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                letterSpacing: "-0.28px",
                lineHeight: "1.1",
              }}
            >
              Still have questions?
            </h2>
            <p
              className="mx-auto mt-4 mb-8 max-w-md text-[#7a7a7a]"
              style={{ fontSize: "17px", lineHeight: "1.6", letterSpacing: "-0.374px" }}
            >
              Reach out directly and I&apos;ll get back to you within 24 hours — no
              obligation, no pressure.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] text-white hover:bg-[#0071e3] transition-all active:scale-[0.97]"
                style={{ padding: "13px 28px", fontSize: "15px", fontWeight: 500, lineHeight: "1" }}
              >
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:contact@valorewebdesign.com"
                className="inline-flex items-center gap-2.5 rounded-full border border-[#d2d2d7] text-[#1d1d1f] hover:bg-[#f5f5f7] transition-all active:scale-[0.97]"
                style={{ padding: "13px 28px", fontSize: "15px", fontWeight: 400, lineHeight: "1" }}
              >
                <Mail className="h-4 w-4" />
                contact@valorewebdesign.com
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
