"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Code, Palette, FileText, CreditCard, Key, MessageCircle, Clock, Star } from "lucide-react";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { useCart } from "@/components/CartContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Valore Web Design | Custom Websites — Missouri";
  }, []);

  const { addItem } = useCart();
  const router = useRouter();

  const handleCheckout = (title: string, price: number) => {
    addItem({
      id: `package-${title.toLowerCase()}`,
      name: `${title} Package`,
      price,
      type: "package",
      packageTier: title as "Starter" | "Growth" | "Premium",
    });
    router.push("/cart");
  };

  return (
    <>
      <Hero />

      {/* Two ways we can help */}
      <AnimatedSection>
        <section className="bg-[#f5f5f7]">
          <div className="mx-auto max-w-[980px] px-6 apple-section-spacing">
            <div className="mb-5 text-center">
              <div className="apple-badge">Services</div>
            </div>
            <h2
              className="text-[#1d1d1f] font-semibold text-center"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                letterSpacing: "-0.28px",
                lineHeight: "1.1",
              }}
            >
              Two ways we can help.
            </h2>
            <p
              className="mx-auto mt-4 mb-12 max-w-lg text-center text-[#7a7a7a]"
              style={{
                fontSize: "17px",
                lineHeight: "1.6",
                letterSpacing: "-0.374px",
              }}
            >
              Whether you&apos;re starting from scratch or leveling up an
              existing site.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                className="card-elevated p-8 text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Code className="h-8 w-8 text-[#0066cc] mb-5 mx-auto md:mx-0" />
                <h3
                  className="text-[#1d1d1f] font-semibold mb-2"
                  style={{ fontSize: "20px", letterSpacing: "0.231px", lineHeight: "1.2" }}
                >
                  Build a new website
                </h3>
                <p
                  className="text-[#7a7a7a] mb-5"
                  style={{ fontSize: "14px", lineHeight: "1.6", letterSpacing: "-0.224px" }}
                >
                  A custom site built from scratch — responsive, performant, and
                  tailored to your brand. You describe what you need, and we make
                  it real.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-1.5 text-[#0066cc] font-medium hover:underline text-sm"
                  >
                    See plans <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#0066cc]/10 text-[#0066cc] hover:bg-[#0066cc]/15 transition-all px-3 py-1.5 text-xs font-medium"
                  >
                    Get a free mockup now <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="card-elevated p-8 text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Palette className="h-8 w-8 text-[#0066cc] mb-5 mx-auto md:mx-0" />
                <h3
                  className="text-[#1d1d1f] font-semibold mb-2"
                  style={{ fontSize: "20px", letterSpacing: "0.231px", lineHeight: "1.2" }}
                >
                  Refresh an existing site
                </h3>
                <p
                  className="text-[#7a7a7a] mb-5"
                  style={{ fontSize: "14px", lineHeight: "1.6", letterSpacing: "-0.224px" }}
                >
                  Already have a website that feels outdated or slow? We&apos;ll
                  polish the design, modernize the stack, and bring it up to
                  speed — no rebuild from scratch required.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[#0066cc] font-medium hover:underline text-sm"
                >
                  Get a quote <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Portfolio / Work */}
      <AnimatedSection>
        <section className="bg-white">
          <div className="mx-auto max-w-[980px] px-6 apple-section-spacing">
            <div className="text-center mb-12">
              <div className="apple-badge mb-5">Portfolio</div>
              <h2
                className="text-[#1d1d1f] font-semibold"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  letterSpacing: "-0.28px",
                  lineHeight: "1.1",
                }}
              >
                Recent work.
              </h2>
              <p
                className="mx-auto mt-4 max-w-lg text-[#7a7a7a]"
                style={{
                  fontSize: "17px",
                  lineHeight: "1.6",
                  letterSpacing: "-0.374px",
                }}
              >
                A selection of sites we&apos;ve built. More examples available on request.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "LÜM Studio", location: "St. Louis, MO", image: "/work/lum-studio.png", slug: "lum-studio" },
                { name: "Vanguard Architects", location: "New York, NY", image: "/work/vangaurd.png", slug: "vanguard-architects" },
                { name: "Echo & Pulse", location: "Los Angeles, CA", image: "/work/echo-and-pulse.png", slug: "echo-pulse" },
              ].map((project, i) => (
                <Link
                  key={project.slug}
                  href={`/work#${project.slug}`}
                  className="card-elevated overflow-hidden group cursor-pointer block"
                >
                  <div className="aspect-video relative bg-[#f5f5f7] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.name} website preview`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-[#1d1d1f] font-semibold text-sm">{project.name}</h3>
                    <p className="text-[#7a7a7a] text-xs mt-1">{project.location}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] text-[#0066cc] font-medium group-hover:underline">
                      View project details <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] text-white hover:bg-[#0071e3] transition-all active:scale-[0.97]"
                style={{ padding: "12px 24px", fontSize: "14px", fontWeight: 500, lineHeight: "1" }}
              >
                View all projects <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection>
        <section className="bg-[#f5f5f7]">
          <div className="mx-auto max-w-[980px] px-6 apple-section-spacing">
            <div className="text-center mb-12">
              <div className="apple-badge mb-5">Testimonials</div>
              <h2
                className="text-[#1d1d1f] font-semibold"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  letterSpacing: "-0.28px",
                  lineHeight: "1.1",
                }}
              >
                What clients say.
              </h2>
              <p
                className="mx-auto mt-4 max-w-lg text-[#7a7a7a]"
                style={{
                  fontSize: "17px",
                  lineHeight: "1.6",
                  letterSpacing: "-0.374px",
                }}
              >
                Real feedback from real projects.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  quote: "Valore built us a site that actually looks like our brand, not a template. The process was smooth and the result exceeded expectations.",
                  name: "Alex Chen",
                  title: "Founder",
                  company: "LÜM Studio",
                },
                {
                  quote: "We needed a site that matched the caliber of our architectural work. Valore delivered exactly that, on time and within budget.",
                  name: "Sarah Mitchell",
                  title: "Principal",
                  company: "Vanguard Architects",
                },
                {
                  quote: "Our old site was slow and outdated. The redesign is fast, beautiful, and our clients have noticed. Highly recommend.",
                  name: "Marcus Webb",
                  title: "Creative Director",
                  company: "Echo & Pulse",
                },
              ].map((t, i) => (
                <motion.div
                  key={t.name}
                  className="card-elevated p-6 flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} className="h-3.5 w-3.5 fill-[#ff9f0a] text-[#ff9f0a]" />
                    ))}
                  </div>
                  <p
                    className="text-[#7a7a7a] italic flex-1"
                    style={{ fontSize: "14px", lineHeight: "1.7", letterSpacing: "-0.224px" }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 pt-4 border-t border-[#f0f0f0]">
                    <p
                      className="text-[#1d1d1f] font-semibold"
                      style={{ fontSize: "13px", lineHeight: "1.3" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-[#7a7a7a]"
                      style={{ fontSize: "12px", lineHeight: "1.4" }}
                    >
                      {t.title}, {t.company}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Packages overview */}
      <AnimatedSection delay={0.1}>
        <section className="bg-white">
          <div className="mx-auto max-w-[980px] px-6 text-center apple-section-spacing">
            <div className="mb-5">
              <div className="apple-badge">Pricing</div>
            </div>
            <h2
              className="text-[#1d1d1f] font-semibold"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                letterSpacing: "-0.28px",
                lineHeight: "1.1",
              }}
            >
              Everything you need.
              <br />
              Nothing you don&apos;t.
            </h2>
            <p
              className="mx-auto mt-4 mb-12 max-w-lg text-[#7a7a7a]"
              style={{
                fontSize: "17px",
                lineHeight: "1.6",
                letterSpacing: "-0.374px",
              }}
            >
              Three straightforward packages — from a single landing page to a
              full-scale website. Pick what fits your project.
            </p>
            <div className="grid gap-6 text-left md:grid-cols-3">
              {[
                {
                  title: "Starter",
                  price: "$399",
                  numPrice: 399,
                  desc: "Single-page responsive website with custom design.",
                  features: ["Custom design", "Mobile-optimized", "Basic SEO"],
                  timeline: "1 week",
                },
                {
                  title: "Growth",
                  price: "$899",
                  numPrice: 899,
                  desc: "Multi-page site with modern performance and SEO.",
                  features: ["Up to 5 pages", "Animations", "CMS integration"],
                  timeline: "2-3 weeks",
                },
                {
                  title: "Premium",
                  price: "$1,199",
                  numPrice: 1199,
                  desc: "Full-scale website with everything included.",
                  features: ["Custom website", "Backend & DB", "Priority support"],
                  highlighted: true,
                  timeline: "4-6 weeks",
                },
              ].map((pkg, i) => (
                <motion.div
                  key={pkg.title}
                  className={`card-elevated flex flex-col p-6 sm:p-8 relative ${
                    pkg.highlighted ? "ring-1 ring-[#0066cc]" : ""
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#0066cc] px-4 py-1 z-10">
                      <span
                        className="text-xs font-semibold text-white"
                        style={{
                          fontSize: "11px",
                          letterSpacing: "-0.12px",
                          lineHeight: "1",
                        }}
                      >
                        Best value
                      </span>
                    </div>
                  )}
                  <h3
                    className="text-[#1d1d1f] font-semibold"
                    style={{
                      fontSize: "20px",
                      letterSpacing: "-0.374px",
                      lineHeight: "1.3",
                    }}
                  >
                    {pkg.title}
                  </h3>
                  <p
                    className="text-[#7a7a7a] mt-1.5"
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.5",
                      letterSpacing: "-0.224px",
                    }}
                  >
                    {pkg.desc}
                  </p>
                  <div className="mt-6 mb-4">
                    <span
                      className="font-semibold text-[#1d1d1f]"
                      style={{
                        fontSize: "28px",
                        letterSpacing: "-0.374px",
                        lineHeight: "1",
                      }}
                    >
                      {pkg.price}
                    </span>
                    <span className="text-[#7a7a7a] text-xs ml-1">one-time</span>
                    <div className="mt-2">
                      <span className="text-[11px] text-[#0066cc] font-medium">
                        + maintenance {pkg.title === "Starter" ? "$29/mo" : pkg.title === "Growth" ? "$49/mo" : "$99/mo"}
                      </span>
                      <span className="text-[10px] text-[#7a7a7a] ml-1">
                        or {pkg.title === "Starter" ? "$290" : pkg.title === "Growth" ? "$490" : "$990"}/yr
                      </span>
                    </div>
                  </div>
                  {pkg.timeline && (
                    <div className="flex items-center gap-1.5 mb-4 py-2.5 px-3.5 rounded-lg bg-[#f5f5f7] w-fit">
                      <Clock className="h-3 w-3 text-[#0066cc]" />
                      <span className="text-[11px] text-[#7a7a7a] font-medium">
                        Delivery: <span className="text-[#1d1d1f]">{pkg.timeline}</span>
                      </span>
                    </div>
                  )}
                  <div className="border-t border-[#f0f0f0] pt-5 pb-6 flex-1">
                    <div className="flex items-center gap-2 mb-4 py-2 px-3 rounded-lg bg-[#0066cc]/5 border border-[#0066cc]/10 w-fit">
                      <CreditCard className="h-3 w-3 text-[#0066cc] flex-shrink-0" />
                      <span className="text-[10px] text-[#0066cc] font-medium">
                        Checkout & payments included
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {pkg.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2.5">
                          <Check className="h-3.5 w-3.5 text-[#0066cc] flex-shrink-0" />
                          <span
                            className="text-[#1d1d1f]"
                            style={{
                              fontSize: "13px",
                              lineHeight: "1.4",
                              letterSpacing: "-0.2px",
                            }}
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => handleCheckout(pkg.title, pkg.numPrice)}
                    className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0066cc] text-white hover:bg-[#0071e3] transition-all active:scale-[0.97] text-sm shadow-md shadow-[#0066cc]/15 w-full sm:w-auto"
                    style={{ padding: "12px 22px", fontWeight: 600, lineHeight: "1" }}
                  >
                    <CreditCard className="h-3.5 w-3.5" /> Checkout now
                  </button>
                  <Link
                    href="/pricing"
                    className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full border border-[#d2d2d7] text-[#7a7a7a] hover:bg-[#f5f5f7] hover:text-[#1d1d1f] transition-all active:scale-[0.97] text-xs w-full sm:w-auto"
                    style={{ padding: "8px 18px", fontWeight: 400, lineHeight: "1", letterSpacing: "-0.1px" }}
                  >
                    View details <ArrowRight className="h-3 w-3" />
                  </Link>
                  <Link
                    href={pkg.title === "Starter" ? "/examples/starter" : pkg.title === "Growth" ? "/examples/growth" : "/examples/premium"}
                    className="mt-4 inline-flex items-center justify-center rounded-full border border-[#d2d2d7] text-[#7a7a7a] hover:bg-[#f5f5f7] hover:text-[#1d1d1f] transition-all active:scale-[0.97] text-xs w-full sm:w-auto"
                    style={{ padding: "8px 18px", fontWeight: 400, lineHeight: "1", letterSpacing: "-0.1px" }}
                  >
                    See example
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* How it works */}
      <AnimatedSection delay={0.1}>
        <section className="bg-[#f5f5f7]">
          <div className="mx-auto max-w-[980px] px-6 text-center apple-section-spacing">
            <div className="mb-5">
              <div className="apple-badge">Process</div>
            </div>
            <h2
              className="text-[#1d1d1f] font-semibold"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                letterSpacing: "-0.28px",
                lineHeight: "1.1",
              }}
            >
              How it works.
            </h2>
            <p
              className="mx-auto mt-4 mb-14 max-w-lg text-[#7a7a7a]"
              style={{
                fontSize: "17px",
                lineHeight: "1.6",
                letterSpacing: "-0.374px",
              }}
            >
              A straightforward process designed to deliver quality without the
              headache.
            </p>
            <div className="grid gap-10 text-left md:grid-cols-4 md:gap-8">
              {[
                { num: "01", title: "Strategy", desc: "We map out goals, audience, and structure before any code is written." },
                { num: "02", title: "Design & Build", desc: "We design and develop using modern tools — responsive, fast, and polished." },
                { num: "03", title: "Review & Refine", desc: "You review a live preview, give feedback, and we iterate." },
                { num: "04", title: "Launch & Support", desc: "Deploy to production with SSL, analytics, and ongoing support." },
              ].map((step, i) => (
                <motion.div
                  key={step.num}
                  className="step-connector"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-4 md:flex-col md:items-start md:gap-2">
                    <span
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0066cc]/10 text-[#0066cc] font-semibold flex-shrink-0"
                      style={{ fontSize: "16px", letterSpacing: "-0.28px" }}
                    >
                      {step.num}
                    </span>
                    <h3
                      className="text-[#1d1d1f] font-semibold"
                      style={{ fontSize: "18px", letterSpacing: "0.231px", lineHeight: "1.2" }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    className="text-[#7a7a7a]"
                    style={{ fontSize: "14px", lineHeight: "1.6", letterSpacing: "-0.2px" }}
                  >
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Trust section — How we work */}
      <AnimatedSection delay={0.1}>
        <section className="bg-white">
          <div className="mx-auto max-w-[980px] px-6 apple-section-spacing">
            <div className="text-center">
              <div className="apple-badge mb-5">How we work</div>
            </div>
            <h2
              className="text-[#1d1d1f] font-semibold text-center"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                letterSpacing: "-0.28px",
                lineHeight: "1.1",
              }}
            >
              Boring guarantees,
              <br />
              on purpose.
            </h2>
            <p
              className="mx-auto mt-4 mb-14 max-w-lg text-center text-[#7a7a7a]"
              style={{
                fontSize: "17px",
                lineHeight: "1.6",
                letterSpacing: "-0.374px",
              }}
            >
              A web project is a relationship. Here&apos;s the paperwork and
              infrastructure that make sure you stay in control.
            </p>
            <div className="grid gap-8 md:gap-10">
              {[
                {
                  icon: FileText,
                  title: "Signed contracts",
                  desc: 'Every project has a written MSA + SOW. Scope, price, and timeline in writing — no surprise fees, no scope creep.',
                },
                {
                  icon: CreditCard,
                  title: "Stripe-secured payments",
                  desc: 'Setup fees and monthly retainers run through Stripe. PCI-compliant, no card details ever touch our systems.',
                },
                {
                  icon: Key,
                  title: "You own it",
                  desc: 'Domain in your name, source code yours, hosting account in your name. If we ever part ways, you walk with everything.',
                },
                {
                  icon: MessageCircle,
                  title: "Same-day support",
                  desc: 'Premium clients get all email support replied to within the same business day. Outages get triaged in under an hour.',
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="flex flex-col md:flex-row md:items-start gap-5 md:gap-8 px-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#0066cc]/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-[#0066cc]" />
                      </div>
                    </div>
                    <div>
                      <h3
                        className="text-[#1d1d1f] font-semibold mb-1.5"
                        style={{ fontSize: "18px", letterSpacing: "-0.374px", lineHeight: "1.3" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-[#7a7a7a] max-w-xl"
                        style={{ fontSize: "15px", lineHeight: "1.6", letterSpacing: "-0.224px" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection delay={0.1}>
        <section className="bg-[#f5f5f7]">
          <div className="mx-auto max-w-[980px] px-6 text-center apple-section-spacing">
            <h2
              className="text-[#1d1d1f] font-semibold"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                letterSpacing: "-0.28px",
                lineHeight: "1.1",
              }}
            >
              Have a project?
              <br />
              Let&apos;s talk.
            </h2>
            <p
              className="mx-auto mt-4 mb-8 max-w-md text-[#7a7a7a]"
              style={{
                fontSize: "17px",
                lineHeight: "1.6",
                letterSpacing: "-0.374px",
              }}
            >
              Tell us about your idea and we&apos;ll send over a free mockup and
              quote — no strings attached.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] text-white hover:bg-[#0071e3] transition-all active:scale-[0.97]"
              style={{ padding: "12px 24px", fontSize: "16px", fontWeight: 500, lineHeight: "1" }}
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
