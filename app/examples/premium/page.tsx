"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Sparkles, Database, Lock, BarChart3, Globe, Headphones, Cpu, Palette, Code, Zap, Layers, Star } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function PremiumExample() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative pt-24 pb-28 overflow-hidden bg-[#1d1d1f]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#0066cc]/8 blur-[140px]" />
          <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#7c3aed]/6 blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-gradient-to-r from-[#0066cc]/3 via-transparent to-[#7c3aed]/3 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-[1100px] px-6 relative z-10">
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-sm text-[#a1a1aa] hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to pricing
            </Link>
          </motion.div>
        </div>

        <div className="mx-auto max-w-[800px] px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] px-4 py-1.5 mb-6">
              <Star className="h-3 w-3 text-[#2997ff]" />
              <span className="text-xs text-[#a1a1aa] font-medium tracking-wide">Premium Example</span>
            </div>
          </motion.div>

          <motion.h1
            className="font-semibold leading-[1.06]"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", letterSpacing: "-0.4px" }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-white">A full-scale website.</span>
            <br />
            <span className="bg-gradient-to-r from-[#2997ff] via-[#60a5fa] to-[#a855f7] bg-clip-text text-transparent">
              Everything included.
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-5 max-w-2xl text-[#a1a1aa]"
            style={{ fontSize: "17px", lineHeight: "1.7", letterSpacing: "-0.3px" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            The complete package — custom backend, database, authentication,
            priority support, and a dedicated timeline. Built for ambitious
            projects that need to scale without limits.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div
              className="relative group"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="absolute inset-0 rounded-full blur-xl pointer-events-none opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, #2997ff, #a855f7)",
                  transform: "scale(1.3)",
                }}
              />
              <Link
                href="/contact"
                className="relative inline-flex items-center gap-2 rounded-full bg-white text-[#1d1d1f] hover:bg-[#f5f5f7] transition-all active:scale-[0.97] font-medium shadow-xl"
                style={{ padding: "14px 30px", fontSize: "16px", lineHeight: "1" }}
              >
                Start with Premium — $1,199 <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========== FEATURE GRID ========== */}
      <section className="relative py-24 overflow-hidden bg-[#1d1d1f]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        <div className="mx-auto max-w-[1100px] px-6">
          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {[
              { icon: Code, label: "Custom Website", desc: "Built from scratch to your exact specs", color: "#2997ff" },
              { icon: Database, label: "Backend & DB", desc: "PostgreSQL, REST API, file storage, caching", color: "#a855f7" },
              { icon: Lock, label: "Auth & Security", desc: "User accounts, roles, permissions, SSO ready", color: "#34d399" },
              { icon: Headphones, label: "Priority Support", desc: "Same-day responses, SLA backed, 1hr outage triage", color: "#fbbf24" },
              { icon: Globe, label: "API Integrations", desc: "Stripe, SendGrid, Google, OpenAI & more", color: "#f87171" },
              { icon: BarChart3, label: "Analytics", desc: "Dashboards, event tracking, user insights", color: "#2997ff" },
              { icon: Palette, label: "Advanced UI", desc: "Complex animations, interactions & transitions", color: "#a855f7" },
              { icon: Cpu, label: "Performance", desc: "CDN, edge caching, sub-second load times", color: "#34d399" },
            ].map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.label}
                  className="rounded-xl p-6 border border-white/[0.06] bg-white/[0.03] relative overflow-hidden group cursor-default"
                  variants={item}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  style={{
                    boxShadow: "0px 0px 0px 1px rgba(255,255,255,0.03), 0px 2px 8px rgba(0,0,0,0.2)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, ${feat.color}08, transparent)`,
                      boxShadow: `inset 0 0 0 1px ${feat.color}15`,
                    }}
                  />
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 relative"
                    style={{ background: `linear-gradient(135deg, ${feat.color}18, ${feat.color}08)` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: feat.color }} />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{feat.label}</h3>
                  <p className="text-[#a1a1aa] text-xs leading-relaxed">{feat.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ========== FULL FEATURE LIST ========== */}
      <section className="relative py-24 overflow-hidden bg-[#1d1d1f]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-gradient-to-r from-[#2997ff]/3 via-transparent to-[#a855f7]/3 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-[900px] px-6 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] px-4 py-1.5 mb-5">
              <Layers className="h-3 w-3 text-[#a855f7]" />
              <span className="text-xs text-[#a1a1aa]">Included features</span>
            </div>
            <h2
              className="text-white font-semibold"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.28px" }}
            >
              Everything from Starter & Growth,
            </h2>
            <p className="text-[#a1a1aa] mt-2" style={{ fontSize: "17px", letterSpacing: "-0.3px" }}>
              plus all of this.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { text: "Custom full-stack website", color: "#2997ff" },
              { text: "PostgreSQL database & REST API", color: "#a855f7" },
              { text: "Authentication & user management", color: "#34d399" },
              { text: "Custom animations & interactions", color: "#fbbf24" },
              { text: "Full SEO & performance audit", color: "#f87171" },
              { text: "Priority support & maintenance SLA", color: "#a855f7" },
              { text: "Dedicated project timeline", color: "#34d399" },
              { text: "Automated backups & monitoring", color: "#fbbf24" },
              { text: "Custom admin dashboard", color: "#f87171" },
            ].map((feat, i) => (
              <motion.div
                key={feat.text}
                className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ x: 6, borderColor: `${feat.color}30`, transition: { duration: 0.15 } }}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${feat.color}18` }}
                >
                  <Check className="h-3.5 w-3.5" style={{ color: feat.color }} />
                </div>
                <span className="text-sm text-[#e4e4e7] font-medium">{feat.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TECH STACK ========== */}
      <section className="relative py-24 overflow-hidden bg-[#1d1d1f]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        <div className="mx-auto max-w-[900px] px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] px-4 py-1.5 mb-5">
              <Zap className="h-3 w-3 text-[#2997ff]" />
              <span className="text-xs text-[#a1a1aa]">Tech Stack</span>
            </div>
            <h2
              className="text-white font-semibold mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.28px" }}
            >
              Modern tools, battle-tested stack.
            </h2>
            <p className="text-[#a1a1aa] mb-12 max-w-lg mx-auto" style={{ fontSize: "15px", lineHeight: "1.6" }}>
              Your application built on industry-standard technologies that scale
              from zero to millions of users.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {[
              { name: "Next.js", color: "#ffffff" },
              { name: "PostgreSQL", color: "#34d399" },
              { name: "Prisma", color: "#a855f7" },
              { name: "Tailwind CSS", color: "#2997ff" },
              { name: "Stripe", color: "#a855f7" },
              { name: "Vercel", color: "#ffffff" },
              { name: "Auth.js", color: "#34d399" },
              { name: "Redis", color: "#f87171" },
              { name: "Docker", color: "#2997ff" },
              { name: "Cloudflare", color: "#fbbf24" },
            ].map((tech, i) => (
              <motion.span
                key={tech.name}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm text-[#e4e4e7] font-medium"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -3, borderColor: `${tech.color}40`, color: tech.color, backgroundColor: `${tech.color}08`, transition: { duration: 0.15 } }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                viewport={{ once: true }}
              >
                {tech.name}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== WHY PREMIUM ========== */}
      <section className="relative py-24 overflow-hidden bg-[#1d1d1f]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[50%] rounded-full bg-[#2997ff]/4 blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[50%] rounded-full bg-[#a855f7]/4 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-[900px] px-6 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-white font-semibold"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.28px" }}
            >
              Why go Premium?
            </h2>
            <p className="text-[#a1a1aa] mt-3 max-w-lg mx-auto" style={{ fontSize: "15px", lineHeight: "1.6" }}>
              More than just features — it&apos;s a partnership built around your
              project&apos;s success.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Headphones,
                title: "Priority Support",
                desc: "Same-day email responses. Outages triaged in under an hour. You're never waiting.",
                color: "#2997ff",
              },
              {
                icon: Lock,
                title: "Enterprise Security",
                desc: "User auth, role management, encrypted data, automated backups — built in from day one.",
                color: "#a855f7",
              },
              {
                icon: Zap,
                title: "Scale Ready",
                desc: "CDN, edge caching, auto-scaling — your app stays fast whether you have 10 users or 10,000.",
                color: "#34d399",
              },
            ].map((ben, i) => {
              const Icon = ben.icon;
              return (
                <motion.div
                  key={ben.title}
                  className="rounded-xl p-7 border border-white/[0.06] bg-white/[0.03] text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: `linear-gradient(135deg, ${ben.color}18, ${ben.color}08)` }}
                  >
                    <Icon className="h-6 w-6" style={{ color: ben.color }} />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{ben.title}</h3>
                  <p className="text-[#a1a1aa] text-xs leading-relaxed">{ben.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="relative py-28 overflow-hidden bg-[#1d1d1f]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="absolute top-[-30%] right-[-10%] w-[60%] h-[80%] rounded-full bg-gradient-to-b from-[#2997ff]/10 to-transparent blur-[120px]" />
          <div className="absolute bottom-[-30%] left-[-10%] w-[60%] h-[80%] rounded-full bg-gradient-to-t from-[#a855f7]/8 to-transparent blur-[120px]" />
        </div>

        <div className="mx-auto max-w-[800px] px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-white font-semibold"
              style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", letterSpacing: "-0.36px", lineHeight: "1.08" }}
            >
              Ready to build something
              <br />
              <span className="bg-gradient-to-r from-[#2997ff] via-[#60a5fa] to-[#a855f7] bg-clip-text text-transparent">
                extraordinary?
              </span>
            </h2>
            <p className="text-[#a1a1aa] mt-4 mb-10 max-w-lg mx-auto" style={{ fontSize: "16px", lineHeight: "1.7" }}>
              Let&apos;s talk about your project. I&apos;ll send over a free mockup
              and a detailed quote — no strings attached.
            </p>
            <div className="flex flex-col items-center gap-4">
              <motion.div
                className="relative group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="absolute inset-0 rounded-full blur-xl pointer-events-none opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, #2997ff, #a855f7)",
                    transform: "scale(1.3)",
                  }}
                />
                <Link
                  href="/contact"
                  className="relative inline-flex items-center gap-2 rounded-full bg-white text-[#1d1d1f] hover:bg-[#f5f5f7] transition-all active:scale-[0.97] font-medium shadow-xl"
                  style={{ padding: "15px 34px", fontSize: "16px", lineHeight: "1" }}
                >
                  Start with Premium — $1,199 <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <p className="text-[#52525b] text-xs">
                Free mockup &bull; No commitment &bull; Same-day response
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
