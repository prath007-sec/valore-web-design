"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink, Code, Palette, ShoppingCart, Globe, Monitor, Zap, Layers, Check } from "lucide-react";
import { useEffect } from "react";

const projects = [
  {
    id: "lum-studio",
    name: "LÜM Studio",
    url: "https://lumstudio.netlify.app/",
    image: "/work/lum-studio.png",
    location: "St. Louis, MO",
    tagline: "Minimalist e-commerce for a modern furniture brand.",
    description:
      "LÜM Studio is a St. Louis-based furniture brand focused on minimal, timeless designs. We built a clean e-commerce storefront that reflects their stripped-down aesthetic while providing a full shopping experience.",
    elements: [
      { icon: ShoppingCart, text: "Full e-commerce cart & checkout flow", color: "#2997ff" },
      { icon: Globe, text: "Newsletter signup with discount incentive", color: "#a855f7" },
      { icon: Monitor, text: "Responsive, mobile-first layout", color: "#34d399" },
      { icon: Palette, text: "Minimalist black-and-white design system", color: "#fbbf24" },
      { icon: Zap, text: "Fast load times & optimized images", color: "#f87171" },
    ],
    tech: ["Next.js", "Tailwind CSS", "Netlify", "Stripe"],
    color: "#2997ff",
  },
  {
    id: "vanguard-architects",
    name: "Vanguard Architects",
    url: "https://vangaurdarchitects.netlify.app/",
    image: "/work/vangaurd.png",
    location: "New York, NY",
    tagline: "Professional showcase for an architecture firm.",
    description:
      "Vanguard Architects needed a website that communicates their expertise in urban planning, interior architecture, and sustainable design. We created a bold, professional site that highlights their portfolio and global presence.",
    elements: [
      { icon: Layers, text: "Service showcase with detailed offerings", color: "#2997ff" },
      { icon: Globe, text: "Multi-location office presence", color: "#a855f7" },
      { icon: Monitor, text: "Full responsive design across devices", color: "#34d399" },
      { icon: Palette, text: "Professional, bold design language", color: "#fbbf24" },
      { icon: Code, text: "Clean, semantic codebase", color: "#f87171" },
    ],
    tech: ["Next.js", "Tailwind CSS", "Netlify", "Framer Motion"],
    color: "#a855f7",
  },
  {
    id: "echo-pulse",
    name: "Echo & Pulse",
    url: "https://echoandpulse.netlify.app/",
    image: "/work/echo-and-pulse.png",
    location: "Los Angeles, CA",
    tagline: "Immersive creative studio portfolio.",
    description:
      "Echo & Pulse is a creative studio specializing in digital experiences that blend sound, motion, and light. We built an immersive, futuristic website that showcases their work in motion design, brand identity, and interactive media.",
    elements: [
      { icon: Layers, text: "Kinetic typography & motion design", color: "#2997ff" },
      { icon: Palette, text: "Bold monochrome contrast with accent colors", color: "#a855f7" },
      { icon: Monitor, text: "Full-screen immersive layouts", color: "#34d399" },
      { icon: Globe, text: "Service & portfolio showcase", color: "#fbbf24" },
      { icon: Zap, text: "Smooth animations & transitions", color: "#f87171" },
    ],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Netlify"],
    color: "#34d399",
  },
];

export default function WorkPage() {
  useEffect(() => {
    document.title = "Our Work | Valore Web Design";
  }, []);
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-12 bg-white">
        <div className="mx-auto max-w-[980px] px-6">
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-[#7a7a7a] hover:text-[#1d1d1f] transition-colors mb-8"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to home
            </Link>
          </motion.div>
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="apple-badge mb-6">Portfolio</div>
            <h1
              className="text-[#1d1d1f] font-semibold"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", letterSpacing: "-0.28px", lineHeight: "1.1" }}
            >
              Our work.
            </h1>
            <p
              className="mx-auto mt-4 max-w-lg text-[#7a7a7a]"
              style={{ fontSize: "17px", lineHeight: "1.6", letterSpacing: "-0.374px" }}
            >
              A selection of projects we&apos;ve built. Each one tailored to the
              brand and built with modern tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project list */}
      <section className="bg-[#f5f5f7]">
        <div className="mx-auto max-w-[980px] px-6 apple-section-spacing">
          <div className="space-y-16">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                id={project.id}
                className="scroll-mt-24"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-80px" }}
              >
                {/* Preview */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-elevated overflow-hidden group block mb-8"
                >
                  <div className="aspect-video relative bg-[#f5f5f7]">
                    <Image
                      src={project.image}
                      alt={`${project.name} website preview`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 980px) 100vw, 980px"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-1.5 text-white text-sm font-medium bg-black/50 rounded-full px-4 py-2">
                        <ExternalLink className="h-3.5 w-3.5" /> Visit live site
                      </span>
                    </div>
                  </div>
                </a>

                {/* Details */}
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h2
                      className="text-[#1d1d1f] font-semibold"
                      style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", letterSpacing: "-0.28px", lineHeight: "1.2" }}
                    >
                      {project.name}
                    </h2>
                    <p className="text-[#7a7a7a] text-xs mt-1 mb-4">{project.location}</p>
                    <p className="text-[#7a7a7a] text-sm font-medium mb-3">{project.tagline}</p>
                    <p
                      className="text-[#7a7a7a]"
                      style={{ fontSize: "14px", lineHeight: "1.7", letterSpacing: "-0.224px" }}
                    >
                      {project.description}
                    </p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0066cc] text-white hover:bg-[#0071e3] transition-all active:scale-[0.97] text-sm"
                      style={{ padding: "10px 20px", fontWeight: 500, lineHeight: "1" }}
                    >
                      Visit website <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  <div>
                    {/* Elements used */}
                    <div className="mb-6">
                      <h3 className="text-[#1d1d1f] font-semibold text-sm mb-3">What was built</h3>
                      <ul className="space-y-2.5">
                        {project.elements.map((el) => {
                          const Icon = el.icon;
                          return (
                            <li key={el.text} className="flex items-center gap-2.5">
                              <Check className="h-3.5 w-3.5 flex-shrink-0" style={{ color: el.color }} />
                              <span
                                className="text-[#1d1d1f]"
                                style={{ fontSize: "13px", lineHeight: "1.4", letterSpacing: "-0.2px" }}
                              >
                                {el.text}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Tech stack */}
                    <div>
                      <h3 className="text-[#1d1d1f] font-semibold text-sm mb-3">Tech stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center rounded-full border border-[#d2d2d7] px-3 py-1.5 text-[11px] text-[#7a7a7a] font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-[980px] px-6 text-center apple-section-spacing">
          <h2
            className="text-[#1d1d1f] font-semibold"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.28px", lineHeight: "1.1" }}
          >
            Want a site like these?
          </h2>
          <p
            className="mx-auto mt-4 mb-8 max-w-md text-[#7a7a7a]"
            style={{ fontSize: "17px", lineHeight: "1.6", letterSpacing: "-0.374px" }}
          >
            Let&apos;s talk about your project. We&apos;ll send over a free mockup and
            quote.
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
    </>
  );
}
