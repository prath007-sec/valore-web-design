"use client";

import { motion } from "framer-motion";
import { Mail, Clock, Sparkles, Send, Bot, Globe, ShieldCheck, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import DiscoveryScheduler from "@/components/DiscoveryScheduler";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const projectTypes = [
  { value: "full-ai-web", label: "Full Custom Web Build + AI Automation" },
  { value: "ai-chatbot", label: "24/7 AI Customer Service Chatbot" },
  { value: "lead-automation", label: "Automated Lead Capture & CRM Workflow" },
  { value: "custom-web", label: "Custom High-Performance Website" },
  { value: "ai-retainer", label: "Monthly AI Retainer & Strategic Advisory" },
];

export default function ContactPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [projectType, setProjectType] = useState("full-ai-web");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Direct Consultation | Valore";
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          website: website || "N/A",
          projectType: projectTypes.find((t) => t.value === projectType)?.label || "",
          message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        router.push(`/thank-you?name=${encodeURIComponent(name)}&type=quote`);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again or email contact@valorewebdesign.com.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-14 bg-background transition-colors duration-300 relative">
        <div className="mx-auto max-w-[980px] px-6 text-center">
          <div className="mb-6 flex justify-center">
            <Breadcrumbs items={[{ label: "Direct Consultation", href: "/contact" }]} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="apple-badge mb-4">
              <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
              Start an Engagement
            </div>
          </motion.div>

          <motion.h1
            className="text-foreground font-sans font-bold uppercase tracking-tight"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              lineHeight: "1.06",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let&apos;s Solve Your Digital Bottleneck<span className="text-[#D4AF37]">.</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-4 max-w-xl text-muted-foreground font-sans text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Speak directly with Pratham Verma. Book a 15-minute discovery call below or submit your project requirements to receive a tailored project proposal.
          </motion.p>
        </div>
      </section>

      {/* Embedded Discovery Call Scheduler */}
      <DiscoveryScheduler id="book-discovery" />

      {/* Alternative Direct Written Spec Form */}
      <AnimatedSection>
        <section className="bg-background border-t border-border transition-colors duration-300">
          <div className="mx-auto max-w-[1000px] px-6 apple-section-spacing">
            <div className="grid gap-10 md:grid-cols-5">
              {/* Form Column */}
              <motion.div
                className="apple-bento-card p-6 sm:p-8 md:col-span-3 bg-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block mb-1">
                    Written Specification
                  </span>
                  <h3 className="text-foreground font-bold text-base uppercase tracking-tight">
                    Prefer Email First? Send a Direct Spec
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    We review submissions immediately and formulate a visual proposal within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-muted-foreground block mb-1.5 font-bold text-[11px] uppercase tracking-wider"
                    >
                      Your Name <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Alex Morgan"
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground/30 focus:border-[#D4AF37] focus:outline-none transition-all text-xs"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="text-muted-foreground block mb-1.5 font-bold text-[11px] uppercase tracking-wider"
                      >
                        Email <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="alex@company.com"
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground/30 focus:border-[#D4AF37] focus:outline-none transition-all text-xs"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="website"
                        className="text-muted-foreground block mb-1.5 font-bold text-[11px] uppercase tracking-wider"
                      >
                        Brand or Website
                      </label>
                      <input
                        type="text"
                        id="website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="Company or Current URL"
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground/30 focus:border-[#D4AF37] focus:outline-none transition-all text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="projectType"
                      className="text-muted-foreground block mb-1.5 font-bold text-[11px] uppercase tracking-wider"
                    >
                      Primary Service Focus <span className="text-[#D4AF37]">*</span>
                    </label>
                    <select
                      id="projectType"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground focus:border-[#D4AF37] focus:outline-none transition-all text-xs cursor-pointer"
                    >
                      {projectTypes.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-card text-foreground">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-muted-foreground block mb-1.5 font-bold text-[11px] uppercase tracking-wider"
                    >
                      What manual bottleneck or goal are you tackling? <span className="text-[#D4AF37]">*</span>
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={4}
                      placeholder="Outline what manual bottlenecks consume your time, why your current site isn't converting, or what AI capabilities you want to integrate..."
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground/30 focus:border-[#D4AF37] focus:outline-none resize-none transition-all text-xs leading-relaxed"
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-center text-xs">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest py-3.5 hover:bg-white transition-all shadow-lg shadow-[#D4AF37]/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? "Processing..." : (
                      <>
                        <Send className="h-3.5 w-3.5" />
                        Request Custom Spec (24h Turnaround)
                      </>
                    )}
                  </button>
                </form>
              </motion.div>

              {/* Sidebar Info Column */}
              <div className="md:col-span-2 space-y-5">
                <div className="apple-bento-card p-6 bg-card border border-white/[0.08]">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-3">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h4 className="text-foreground font-bold text-xs uppercase tracking-wider mb-1">
                    Direct Communication
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    No middle management or endless delays. You collaborate directly with the architect building your systems.
                  </p>
                </div>

                <div className="apple-bento-card p-6 bg-card border border-white/[0.08] space-y-4">
                  <h4 className="text-foreground font-bold text-xs uppercase tracking-wider mb-2">
                    Direct Channel
                  </h4>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-[#D4AF37]" />
                    <div>
                      <span className="text-[10px] text-muted-foreground uppercase font-bold block">Email</span>
                      <a href="mailto:contact@valorewebdesign.com" className="text-xs font-mono text-foreground hover:text-[#D4AF37]">
                        contact@valorewebdesign.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="apple-bento-card p-6 bg-card border border-white/[0.08]">
                  <h4 className="text-foreground font-bold text-xs uppercase tracking-wider mb-3">
                    Every Engagement Includes:
                  </h4>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      Direct access to Pratham Verma
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      Sub-second Next.js architecture
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      Practical AI workflow automation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      100% legal intellectual property handoff
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
