"use client";

import { motion } from "framer-motion";
import { Mail, Clock, Sparkles, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const projectTypes = [
  { value: "new", label: "Build a new website" },
  { value: "refresh", label: "Refresh an existing site" },
  { value: "support", label: "Ongoing support / maintenance" },
  { value: "other", label: "Something else" },
];

const budgetRanges = [
  { value: "", label: "Select a budget range..." },
  { value: "under-500", label: "Under $500" },
  { value: "500-1000", label: "$500 – $1,000" },
  { value: "1000-2000", label: "$1,000 – $2,000" },
  { value: "2000-plus", label: "$2,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

export default function ContactPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [projectType, setProjectType] = useState("new");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Contact | Valore Web Design";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Get in touch for a free website mockup and quote. No obligation, we typically respond within 24 hours. Let's build something great together.");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("access_key", "94fc2fd5-4066-49f4-b618-58e6512698a8");
    formData.append("subject", `New project inquiry from ${name}`);
    formData.append("from_name", name);
    formData.append("email", email);
    formData.append("brand_name", website || "N/A");
    formData.append("project_type", projectTypes.find((t) => t.value === projectType)?.label || "");
    formData.append("budget", budgetRanges.find((b) => b.value === budget)?.label || "Not specified");
    formData.append("message", message);

    const fileInput = document.getElementById("images") as HTMLInputElement;
    if (fileInput?.files) {
      for (const file of fileInput.files) {
        formData.append("images", file);
      }
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        router.push("/thank-you");
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@valorewebdesign.com",
      href: "mailto:contact@valorewebdesign.com",
    },
    {
      icon: Clock,
      label: "Response time",
      value: "Usually within 24 hours",
      accent: true,
    },
  ];

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
            <div className="apple-badge mb-6">Contact</div>
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
            Let&apos;s build something great.
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 mb-8 max-w-lg text-[#7a7a7a]"
            style={{
              fontSize: "17px",
              lineHeight: "1.6",
              letterSpacing: "-0.374px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tell us about your project — what you&apos;re building, your goals,
            and your timeline. We&apos;ll review everything and get back to you
            with a tailored proposal.
          </motion.p>
        </div>
      </section>

      {/* Form + Info */}
      <AnimatedSection>
        <section className="bg-[#f5f5f7]">
          <div className="mx-auto max-w-[980px] px-6 apple-section-spacing">
            <div className="grid gap-10 md:grid-cols-5">
              {/* Form */}
              <motion.div
                className="card-elevated p-6 sm:p-8 md:col-span-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-[#7a7a7a] block mb-1.5"
                        style={{
                          fontSize: "13px",
                          lineHeight: "1.4",
                          letterSpacing: "-0.2px",
                          fontWeight: 500,
                        }}
                      >
                        Name <span className="text-[#0066cc]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Your name"
                        className="w-full rounded-full border border-[#d2d2d7] bg-white px-5 py-3 text-[#1d1d1f] placeholder:text-[#d2d2d7] focus:outline-none focus:ring-2 focus:ring-[#0071e3] transition-shadow"
                        style={{
                          fontSize: "15px",
                          lineHeight: "1.4",
                          letterSpacing: "-0.224px",
                        }}
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className="text-[#7a7a7a] block mb-1.5"
                          style={{
                            fontSize: "13px",
                            lineHeight: "1.4",
                            letterSpacing: "-0.2px",
                            fontWeight: 500,
                          }}
                        >
                          Email <span className="text-[#0066cc]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder="your@email.com"
                          className="w-full rounded-full border border-[#d2d2d7] bg-white px-5 py-3 text-[#1d1d1f] placeholder:text-[#d2d2d7] focus:outline-none focus:ring-2 focus:ring-[#0071e3] transition-shadow"
                          style={{
                            fontSize: "15px",
                            lineHeight: "1.4",
                            letterSpacing: "-0.224px",
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="website"
                          className="text-[#7a7a7a] block mb-1.5"
                          style={{
                            fontSize: "13px",
                            lineHeight: "1.4",
                            letterSpacing: "-0.2px",
                            fontWeight: 500,
                          }}
                        >
                          Brand name
                        </label>
                        <input
                          type="text"
                          id="website"
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                          placeholder="Your brand or business name"
                          className="w-full rounded-full border border-[#d2d2d7] bg-white px-5 py-3 text-[#1d1d1f] placeholder:text-[#d2d2d7] focus:outline-none focus:ring-2 focus:ring-[#0071e3] transition-shadow"
                          style={{
                            fontSize: "15px",
                            lineHeight: "1.4",
                            letterSpacing: "-0.224px",
                          }}
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="projectType"
                          className="text-[#7a7a7a] block mb-1.5"
                          style={{
                            fontSize: "13px",
                            lineHeight: "1.4",
                            letterSpacing: "-0.2px",
                            fontWeight: 500,
                          }}
                        >
                          Project type <span className="text-[#0066cc]">*</span>
                        </label>
                        <select
                          id="projectType"
                          value={projectType}
                          onChange={(e) => setProjectType(e.target.value)}
                          className="w-full rounded-full border border-[#d2d2d7] bg-white px-5 py-3 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#0071e3] transition-shadow appearance-none"
                          style={{
                            fontSize: "15px",
                            lineHeight: "1.4",
                            letterSpacing: "-0.224px",
                          }}
                        >
                          {projectTypes.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="budget"
                          className="text-[#7a7a7a] block mb-1.5"
                          style={{
                            fontSize: "13px",
                            lineHeight: "1.4",
                            letterSpacing: "-0.2px",
                            fontWeight: 500,
                          }}
                        >
                          Budget range
                        </label>
                        <select
                          id="budget"
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="w-full rounded-full border border-[#d2d2d7] bg-white px-5 py-3 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#0071e3] transition-shadow appearance-none"
                          style={{
                            fontSize: "15px",
                            lineHeight: "1.4",
                            letterSpacing: "-0.224px",
                          }}
                        >
                          {budgetRanges.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="text-[#7a7a7a] block mb-1.5"
                        style={{
                          fontSize: "13px",
                          lineHeight: "1.4",
                          letterSpacing: "-0.2px",
                          fontWeight: 500,
                        }}
                      >
                        Tell us about your project{" "}
                        <span className="text-[#0066cc]">*</span>
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={5}
                        placeholder="Describe what you need — the more detail, the better. What kind of site? What are your goals? Do you have a deadline? You can upload images above to help explain further."
                        className="w-full rounded-2xl border border-[#d2d2d7] bg-white px-5 py-3 text-[#1d1d1f] placeholder:text-[#d2d2d7] focus:outline-none focus:ring-2 focus:ring-[#0071e3] resize-none transition-shadow"
                        style={{
                          fontSize: "15px",
                          lineHeight: "1.5",
                          letterSpacing: "-0.224px",
                          borderRadius: "18px",
                        }}
                      />
                    </div>

                    {/* Image upload */}
                    <div>
                      <label className="text-[#7a7a7a] block mb-1.5" style={{ fontSize: "13px", lineHeight: "1.4", letterSpacing: "-0.2px", fontWeight: 500 }}>
                        Images <span className="text-[#7a7a7a] font-normal">(optional)</span>
                      </label>
                      <div className="rounded-2xl border border-dashed border-[#d2d2d7] bg-white px-5 py-4 transition-colors hover:border-[#0066cc]/40">
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          id="images"
                          className="w-full text-[13px] text-[#7a7a7a] file:mr-3 file:rounded-full file:border-0 file:bg-[#0066cc]/10 file:px-4 file:py-1.5 file:text-[13px] file:font-medium file:text-[#0066cc] hover:file:bg-[#0066cc]/20 file:cursor-pointer cursor-pointer"
                        />
                        <p className="mt-1.5 text-[11px] text-[#a1a1a1]" style={{ letterSpacing: "-0.08px" }}>
                          Images are sent along with your message directly to our inbox.
                        </p>
                      </div>
                    </div>

                    {/* Error message */}
                    {error && (
                      <p className="text-red-500 text-center text-[13px]" style={{ letterSpacing: "-0.2px" }}>
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-full bg-[#0066cc] text-white hover:bg-[#0071e3] transition-all active:scale-[0.97] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      style={{
                        padding: "14px 24px",
                        fontSize: "15px",
                        fontWeight: 500,
                        lineHeight: "1",
                      }}
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <><Send className="h-4 w-4" /> Send message</>
                      )}
                    </button>

                    <p
                      className="text-center text-[#7a7a7a]"
                      style={{
                        fontSize: "11px",
                        lineHeight: "1.4",
                        letterSpacing: "-0.08px",
                      }}
                    >
                      No spam, no commitments. Your message and images go straight to our inbox.
                      We&apos;ll respond within 24 hours.
                    </p>
                  </form>
              </motion.div>

              {/* Sidebar info */}
              <motion.div
                className="md:col-span-2 space-y-5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Quick response badge */}
                <div className="card-elevated p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0066cc]/10 mb-4">
                    <Sparkles className="h-5 w-5 text-[#0066cc]" />
                  </div>
                  <h3
                    className="text-[#1d1d1f] font-semibold"
                    style={{ fontSize: "16px", letterSpacing: "-0.224px" }}
                  >
                    Quick response
                  </h3>
                  <p
                    className="text-[#7a7a7a] mt-2"
                    style={{ fontSize: "14px", lineHeight: "1.6", letterSpacing: "-0.224px" }}
                  >
                    We typically respond within 24 hours. Most inquiries get a
                    reply same-day.
                  </p>
                </div>

                {/* Contact info */}
                <div className="card-elevated p-6 space-y-5">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-full bg-[#0066cc]/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-4 w-4 text-[#0066cc]" />
                        </div>
                        <div>
                          <p
                            className="text-[#7a7a7a]"
                            style={{
                              fontSize: "11px",
                              fontWeight: 500,
                              letterSpacing: "-0.08px",
                            }}
                          >
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-[#1d1d1f] hover:text-[#0066cc] transition-colors"
                              style={{
                                fontSize: "14px",
                                lineHeight: "1.4",
                                letterSpacing: "-0.224px",
                              }}
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p
                              className="text-[#1d1d1f]"
                              style={{
                                fontSize: "14px",
                                lineHeight: "1.4",
                                letterSpacing: "-0.224px",
                              }}
                            >
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* What to expect */}
                <div className="card-elevated p-6">
                  <h3
                    className="text-[#1d1d1f] font-semibold mb-3"
                    style={{ fontSize: "14px", letterSpacing: "-0.2px" }}
                  >
                    What happens next
                  </h3>
                  <ul className="space-y-2.5">
                    {[
                      "We review your project details",
                      "We send a tailored proposal & mockup",
                      "We refine scope & timeline together",
                      "You approve and we start building",
                    ].map((step, i) => (
                      <li
                        key={step}
                        className="flex items-start gap-2.5 text-[#7a7a7a]"
                        style={{
                          fontSize: "13px",
                          lineHeight: "1.5",
                          letterSpacing: "-0.2px",
                        }}
                      >
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#0066cc]/10 text-[#0066cc] text-[10px] font-semibold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
