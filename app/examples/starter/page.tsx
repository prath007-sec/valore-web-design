"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Sparkles, Globe, Smartphone, Search } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export default function StarterExample() {
  return (
    <>
      {/* Back link */}
      <div className="mx-auto max-w-[720px] px-6 pt-20">
        <motion.div {...fadeUp()}>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-sm text-[#7a7a7a] hover:text-[#1d1d1f] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to pricing
          </Link>
        </motion.div>
      </div>

      {/* Hero */}
      <section className="bg-white pt-16 pb-20">
        <div className="mx-auto max-w-[720px] px-6 text-center">
          <motion.div {...fadeUp(0.1)}>
            <div className="apple-badge mb-6">Starter Example</div>
          </motion.div>
          <motion.h1
            className="text-[#1d1d1f] font-semibold leading-[1.07]"
            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", letterSpacing: "-0.28px" }}
            {...fadeUp(0.2)}
          >
            A clean, single-page presence.
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-md text-[#7a7a7a]"
            style={{ fontSize: "16px", lineHeight: "1.6", letterSpacing: "-0.3px" }}
            {...fadeUp(0.3)}
          >
            Everything a freelancer or small project needs to look professional
            online — no clutter, no complexity.
          </motion.p>
        </div>
      </section>

      {/* Feature icons */}
      <section className="bg-[#f5f5f7] pb-24">
        <div className="mx-auto max-w-[720px] px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: Globe, label: "Custom Design", desc: "Unique to your brand" },
              { icon: Smartphone, label: "Responsive", desc: "Works on every device" },
              { icon: Search, label: "Basic SEO", desc: "Found on Google" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  className="card-elevated p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#0066cc]/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-4 w-4 text-[#0066cc]" />
                  </div>
                  <h3 className="text-[#1d1d1f] font-medium text-sm mb-1">{item.label}</h3>
                  <p className="text-[#7a7a7a] text-xs">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content showcase */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[720px] px-6">
          <motion.h2
            className="text-[#1d1d1f] font-semibold text-center mb-12"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.28px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What you get.
          </motion.h2>
          <div className="space-y-4">
            {[
              "A single-page layout tailored to your brand",
              "Mobile-first responsive design",
              "Contact form to capture leads",
              "Fast loading with modern code",
            ].map((item, i) => (
              <motion.div
                key={item}
                className="flex items-center gap-3 p-4 rounded-xl bg-[#f5f5f7]"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="w-6 h-6 rounded-full bg-[#0066cc]/10 flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 text-[#0066cc]" />
                </div>
                <span className="text-sm text-[#1d1d1f]">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5f5f7] py-16">
        <div className="mx-auto max-w-[720px] px-6 text-center">
          <motion.p
            className="text-[#7a7a7a] text-sm mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            This is the level of quality you can expect from the Starter package.
          </motion.p>
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] text-white hover:bg-[#0071e3] transition-all active:scale-[0.97] text-sm"
              style={{ padding: "11px 22px", fontWeight: 500, lineHeight: "1" }}
            >
              Get started for $699 <Sparkles className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/examples/growth"
              className="inline-flex items-center gap-1.5 text-xs text-[#7a7a7a] hover:text-[#0066cc] transition-colors"
            >
              Not enough? Upgrade to Growth <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Pricing", item: "https://valorewebdesign.com/pricing" },
              { "@type": "ListItem", position: 2, name: "Starter Example", item: "https://valorewebdesign.com/examples/starter" },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
