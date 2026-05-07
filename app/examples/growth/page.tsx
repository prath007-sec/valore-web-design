"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Sparkles, Layout, BarChart3, Image, Zap, Users, TrendingUp, Palette } from "lucide-react";

const stagger = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeSlideUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function GrowthExample() {
  return (
    <>
      {/* Back link */}
      <div className="mx-auto max-w-[980px] px-6 pt-20">
        <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-sm text-[#7a7a7a] hover:text-[#1d1d1f] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to pricing
          </Link>
        </motion.div>
      </div>

      {/* Hero - with subtle ambient glow */}
      <section className="relative pt-16 pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-15%] right-[-5%] w-[40%] h-[50%] rounded-full bg-[#0066cc]/2 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[40%] rounded-full bg-[#7c3aed]/2 blur-[80px]" />
        </div>

        <div className="mx-auto max-w-[800px] px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#e0e0e0] bg-white shadow-sm px-4 py-1.5 text-[#7a7a7a] mb-6">
              <TrendingUp className="h-3 w-3 text-[#7c3aed]" />
              <span className="text-xs font-medium">Growth Example</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-[#1d1d1f] font-semibold leading-[1.07]"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3rem)", letterSpacing: "-0.36px" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Scale your online presence
            <br />
            with <span className="gradient-text">performance & polish.</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-4 max-w-xl text-[#7a7a7a]"
            style={{ fontSize: "17px", lineHeight: "1.65", letterSpacing: "-0.3px" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Built for businesses ready to grow — with custom animations, a CMS you
            control, and a full SEO strategy baked into every page.
          </motion.p>
        </div>
      </section>

      {/* Feature grid - richer than Starter */}
      <section className="bg-gradient-to-b from-[#f5f5f7] to-white pb-24">
        <div className="mx-auto max-w-[980px] px-6">
          <motion.div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
          >
            {[
              { icon: Layout, label: "Up to 5 Pages", desc: "Home, About, Services, Blog, Contact — tell your full story", color: "#0066cc" },
              { icon: Palette, label: "Custom Animations", desc: "Scroll-triggered reveals, transitions & micro-interactions", color: "#7c3aed" },
              { icon: Zap, label: "Lightning Fast", desc: "Optimized for speed, Core Web Vitals & instant loads", color: "#059669" },
              { icon: BarChart3, label: "Full SEO Suite", desc: "Meta tags, sitemaps, schema markup & analytics", color: "#d97706" },
              { icon: Users, label: "CMS Control", desc: "Edit your own content via Sanity or Contentful", color: "#0066cc" },
              { icon: Sparkles, label: "Growth Tools", desc: "Newsletter signup, lead capture & conversion ready", color: "#7c3aed" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  className="card-elevated p-6 relative overflow-hidden group flex flex-col"
                  variants={fadeSlideUp}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}04, transparent)`,
                    }}
                  />
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 flex-shrink-0"
                    style={{ backgroundColor: `${item.color}12` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-[#1d1d1f] font-semibold text-sm mb-1">{item.label}</h3>
                  <p className="text-[#7a7a7a] text-xs leading-relaxed flex-1">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Everything from Starter, plus */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[800px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-[#1d1d1f] font-semibold text-center"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.28px" }}
            >
              Everything from Starter, plus.
            </h2>
            <p className="text-center text-[#7a7a7a] mt-2 mb-10 max-w-lg mx-auto" style={{ fontSize: "15px", lineHeight: "1.6" }}>
              The Growth package takes your site further — more pages, more polish,
              and the tools you need to scale.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { text: "Content management system (CMS)", color: "#0066cc" },
              { text: "Custom animations & scroll effects", color: "#7c3aed" },
              { text: "Full SEO with analytics setup", color: "#059669" },
              { text: "Newsletter & lead capture forms", color: "#d97706" },
              { text: "Performance optimization & CDN", color: "#0066cc" },
              { text: "Up to 5 custom page designs", color: "#7c3aed" },
              { text: "Mobile & tablet optimized", color: "#059669" },
              { text: "Contact form + blog ready", color: "#d97706" },
            ].map((feat, i) => (
              <motion.div
                key={feat.text}
                className="flex items-center gap-3 p-4 rounded-xl bg-[#f5f5f7]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ x: 4, transition: { duration: 0.15 } }}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${feat.color}12` }}
                >
                  <Check className="h-3.5 w-3.5" style={{ color: feat.color }} />
                </div>
                <span className="text-sm text-[#1d1d1f] font-medium">{feat.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process section - adds depth */}
      <section className="bg-gradient-to-b from-white to-[#f5f5f7] py-20">
        <div className="mx-auto max-w-[800px] px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="apple-badge mb-4">How it works</div>
            <h2
              className="text-[#1d1d1f] font-semibold"
              style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", letterSpacing: "-0.28px" }}
            >
              From strategy to launch.
            </h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { step: "01", title: "Strategy", desc: "Goals, audience, sitemap — planned before we write a line of code." },
              { step: "02", title: "Design & Build", desc: "Polished design + development with animations and CMS setup." },
              { step: "03", title: "Launch & Grow", desc: "Deploy to production with SEO, analytics, and ongoing support." },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0066cc] to-[#7c3aed] flex items-center justify-center mx-auto mb-3 shadow-md shadow-[#0066cc]/20">
                  <span className="text-xs font-semibold text-white">{step.step}</span>
                </div>
                <h3 className="text-[#1d1d1f] font-semibold text-sm mb-1">{step.title}</h3>
                <p className="text-[#7a7a7a] text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-gradient-to-r from-[#0066cc]/3 via-transparent to-[#7c3aed]/3 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-[800px] px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-[#1d1d1f] font-semibold"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.28px", lineHeight: "1.15" }}
            >
              Ready to grow your online presence?
            </h2>
            <p className="text-[#7a7a7a] mt-3 mb-8 max-w-md mx-auto" style={{ fontSize: "15px", lineHeight: "1.6" }}>
              Pick the Growth package and get a multi-page site with modern
              performance, animations, and full SEO.
            </p>
            <div className="flex flex-col items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0066cc] to-[#7c3aed] text-white hover:opacity-90 transition-all active:scale-[0.97] shadow-lg shadow-[#0066cc]/20"
                style={{ padding: "13px 28px", fontSize: "15px", fontWeight: 500, lineHeight: "1" }}
              >
                Start with Growth — $899 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/examples/premium"
                className="inline-flex items-center gap-1.5 text-xs text-[#7a7a7a] hover:text-[#7c3aed] transition-colors"
              >
                Need more power? Upgrade to Premium <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
