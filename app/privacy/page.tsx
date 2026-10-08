"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | VALORE";
  }, []);
  return (
    <>
      <section className="pt-32 pb-16 bg-[#0A0A0A]">
        <div className="mx-auto max-w-[700px] px-6">
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-[#C0C0C0] hover:text-[#D4AF37] transition-colors mb-8 uppercase tracking-widest font-bold"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to home
            </Link>
          </motion.div>

          <motion.h1
            className="text-[#F5F5F5] font-sans font-bold uppercase tracking-tight mb-2"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: "1.1" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            className="text-[#D4AF37] mb-10 font-sans text-[10px] uppercase tracking-wider font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Last updated: May 2026
          </motion.p>

          <motion.div
            className="space-y-8 text-[#C0C0C0] font-sans text-xs leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <section>
              <h2 className="text-[#F5F5F5] font-sans font-bold uppercase tracking-wide text-sm mb-3">1. Information We Collect</h2>
              <p className="text-[#C0C0C0]">
                We collect only the information you provide directly — your name, email address, and project details when you fill out the contact form or request a quote. We do not collect any information automatically beyond standard server logs (IP address, browser type, pages visited).
              </p>
            </section>

            <section>
              <h2 className="text-[#F5F5F5] font-sans font-bold uppercase tracking-wide text-sm mb-3">2. How We Use Your Information</h2>
              <p className="text-[#C0C0C0]">
                Your information is used solely to respond to your inquiries, provide the services you request, and communicate with you about your project. We do not sell, rent, or share your personal information with third parties for their marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-[#F5F5F5] font-sans font-bold uppercase tracking-wide text-sm mb-3">3. Data Storage & Security</h2>
              <p className="text-[#C0C0C0]">
                Any information you submit through our contact forms is transmitted over HTTPS and stored securely. We retain your information only as long as necessary to provide our services or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-[#F5F5F5] font-sans font-bold uppercase tracking-wide text-sm mb-3">4. Third-Party Services</h2>
              <p className="text-[#C0C0C0]">
                We may use third-party services such as Stripe for payment processing. These services have their own privacy policies governing the use of your information. We do not store or process payment card details directly.
              </p>
            </section>

            <section>
              <h2 className="text-[#F5F5F5] font-sans font-bold uppercase tracking-wide text-sm mb-3">5. Cookies</h2>
              <p className="text-[#C0C0C0]">
                This website does not use tracking cookies. We may use essential cookies required for the functionality of the site, such as session management for the cart feature.
              </p>
            </section>

            <section>
              <h2 className="text-[#F5F5F5] font-sans font-bold uppercase tracking-wide text-sm mb-3">6. Contact</h2>
              <p className="text-[#C0C0C0]">
                If you have any questions about this privacy policy, please reach out at{" "}
                <a href="mailto:contact@valorewebdesign.com" className="text-[#D4AF37] hover:underline">
                  contact@valorewebdesign.com
                </a>.
              </p>
            </section>
          </motion.div>
        </div>
      </section>
    </>
  );
}
