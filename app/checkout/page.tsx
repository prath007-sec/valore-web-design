"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CreditCard, ShieldCheck, ArrowRight } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const { items, getTotal } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const params = typeof window !== "undefined"
    ? new URLSearchParams(window.location.search)
    : null;
  const isSuccess = params?.get("success") === "true";

  const hasMonthly = items.some(
    (i) => i.type === "maintenance" && i.billingPeriod === "monthly"
  );

  const handleCheckout = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Failed to start checkout. Please try again.");
        setLoading(false);
      }
    } catch {
      setError("Failed to connect to payment server.");
      setLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#f5f5f7]">
        <div className="mx-auto max-w-[520px] px-6 pt-24 pb-20">
          <motion.div
            className="card-elevated p-12 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#059669]/10 flex items-center justify-center mx-auto mb-5">
              <ShieldCheck className="h-8 w-8 text-[#059669]" />
            </div>
            <h2 className="text-[#1d1d1f] font-semibold text-xl mb-2">Payment successful!</h2>
            <p className="text-[#7a7a7a] text-sm mb-6">
              Thank you for your purchase
              {hasMonthly && " — you'll be billed monthly for maintenance. You'll receive a confirmation email shortly."}
              {!hasMonthly && ". You'll receive a confirmation email shortly."}
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] text-white hover:bg-[#0071e3] transition-all active:scale-[0.97] text-sm"
              style={{ padding: "11px 22px", fontWeight: 500, lineHeight: "1" }}
            >
              Back to home
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <div className="mx-auto max-w-[520px] px-6 pt-24 pb-20">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Link
            href="/cart"
            className="inline-flex items-center gap-1.5 text-sm text-[#7a7a7a] hover:text-[#1d1d1f] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to cart
          </Link>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <CreditCard className="h-6 w-6 text-[#0066cc]" />
            <h1 className="text-[#1d1d1f] font-semibold" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", letterSpacing: "-0.28px" }}>
              Checkout
            </h1>
          </div>

          {items.length === 0 ? (
            <div className="card-elevated p-12 text-center">
              <p className="text-[#7a7a7a] text-sm mb-6">Your cart is empty.</p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] text-white hover:bg-[#0071e3] transition-all active:scale-[0.97] text-sm"
                style={{ padding: "11px 22px", fontWeight: 500, lineHeight: "1" }}
              >
                View packages
              </Link>
            </div>
          ) : (
            <>
              {/* Order summary */}
              <div className="card-elevated p-6 mb-6">
                <h3 className="text-[#1d1d1f] font-semibold text-sm mb-4">Order Summary</h3>
                <div className="space-y-3 text-sm">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-[#7a7a7a]">
                      <span>{item.name}</span>
                      <span>${item.price}/{item.billingPeriod === "monthly" ? "mo" : item.billingPeriod === "yearly" ? "yr" : ""}</span>
                    </div>
                  ))}
                  <div className="border-t border-[#f0f0f0] pt-3 flex justify-between text-[#1d1d1f] font-semibold text-base">
                    <span>Due today</span>
                    <span>${getTotal()}</span>
                  </div>
                </div>
              </div>

              {/* Stripe checkout redirect */}
              <div className="card-elevated p-6">
                <p className="text-xs text-[#7a7a7a] mb-4 leading-relaxed">
                  You&apos;ll be redirected to Stripe&apos;s secure checkout to complete your payment
                  {hasMonthly && ". After today's payment, monthly maintenance will be billed automatically."}.
                </p>

                {error && (
                  <div className="mb-4 p-3 rounded-xl bg-[#fb2c36]/5 border border-[#fb2c36]/20 text-sm text-[#fb2c36]">
                    {error}
                  </div>
                )}

                <button
                  onClick={handleCheckout}
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0066cc] text-white hover:bg-[#0071e3] transition-all active:scale-[0.97] text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ padding: "13px 22px", fontWeight: 500, lineHeight: "1" }}
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Redirecting to Stripe...
                    </>
                  ) : (
                    <>
                      Continue to Stripe <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
