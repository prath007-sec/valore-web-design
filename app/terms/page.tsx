"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service | Valore Web Design";
  }, []);
  return (
    <>
      <section className="pt-24 pb-16 bg-white">
        <div className="mx-auto max-w-[700px] px-6">
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-[#7a7a7a] hover:text-[#1d1d1f] transition-colors mb-8"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to home
            </Link>
          </motion.div>

          <motion.h1
            className="text-[#1d1d1f] font-semibold mb-2"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.28px", lineHeight: "1.1" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Terms of Service
          </motion.h1>
          <motion.p
            className="text-[#7a7a7a] mb-10"
            style={{ fontSize: "14px", letterSpacing: "-0.2px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Last updated: May 2026
          </motion.p>

          <motion.div
            className="space-y-6 text-[#1d1d1f]"
            style={{ fontSize: "15px", lineHeight: "1.7", letterSpacing: "-0.224px" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <section>
              <h2 className="font-semibold text-lg mb-2" style={{ letterSpacing: "-0.28px" }}>1. Services</h2>
              <p className="text-[#7a7a7a]">
                Valore Web Design provides custom web design and development services as described in the project proposal and statement of work (SOW) agreed upon by both parties. Each project is unique and the specific deliverables, timeline, and price will be outlined in a written agreement.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2" style={{ letterSpacing: "-0.28px" }}>2. Payments</h2>
              <p className="text-[#7a7a7a]">
                Full payment is required upfront before work begins. You approve a mockup first, then pay in full, and development starts. All payments are processed securely through Stripe.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2" style={{ letterSpacing: "-0.28px" }}>3. Ownership</h2>
              <p className="text-[#7a7a7a]">
                Upon full payment, you own the completed work — source code, design assets, and any deliverables created specifically for your project. We retain the right to display completed work in our portfolio unless otherwise agreed.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2" style={{ letterSpacing: "-0.28px" }}>4. Maintenance & Support</h2>
              <p className="text-[#7a7a7a]">
                Ongoing maintenance and support are available through separate agreements. Without a maintenance plan, we are not responsible for updates, security patches, or issues arising from third-party platform changes after project completion.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2" style={{ letterSpacing: "-0.28px" }}>5. Limitation of Liability</h2>
              <p className="text-[#7a7a7a]">
                Valore Web Design is not liable for any damages arising from the use or inability to use the delivered website, including but not limited to lost revenue, data loss, or business interruption, to the fullest extent permitted by law.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2" style={{ letterSpacing: "-0.28px" }}>6. Contact</h2>
              <p className="text-[#7a7a7a]">
                For questions about these terms, reach out at{" "}
                <a href="mailto:contact@valorewebdesign.com" className="text-[#0066cc] hover:underline">
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
