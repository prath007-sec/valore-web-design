"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CreditCard, Lock, ShieldCheck } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { useEffect, useState } from "react";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_placeholder",
);

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { items, clearCart, getTotal } = useCart();
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setProcessing(true);
    setError("");

    const { error: submitError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout?success=true`,
      },
      redirect: "if_required",
    });

    if (submitError) {
      setError(submitError.message || "Something went wrong.");
      setProcessing(false);
    } else {
      setSucceeded(true);
      clearCart();
      setProcessing(false);
    }
  };

  if (succeeded) {
    return (
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
          Thank you for your purchase. You&apos;ll receive a confirmation email shortly.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] text-white hover:bg-[#0071e3] transition-all active:scale-[0.97] text-sm"
          style={{ padding: "11px 22px", fontWeight: 500, lineHeight: "1" }}
        >
          Back to home
        </Link>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <div className="space-y-3 text-sm">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between text-[#7a7a7a]">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          ))}
          <div className="border-t border-[#f0f0f0] pt-3 flex justify-between text-[#1d1d1f] font-semibold text-base">
            <span>Total</span>
            <span>${getTotal()}</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <PaymentElement />
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-xl bg-[#fb2c36]/5 border border-[#fb2c36]/20 text-sm text-[#fb2c36]">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0066cc] text-white hover:bg-[#0071e3] transition-all active:scale-[0.97] text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ padding: "13px 22px", fontWeight: 500, lineHeight: "1" }}
      >
        {processing ? "Processing..." : `Pay $${getTotal()} securely`}
      </button>

      <p className="flex items-center justify-center gap-1.5 text-[10px] text-[#7a7a7a] mt-3">
        <Lock className="h-3 w-3" /> Secured by Stripe. Your card details never reach our servers.
      </p>
    </form>
  );
}

export default function CheckoutPage() {
  const { items, getTotal } = useCart();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const params = typeof window !== "undefined"
    ? new URLSearchParams(window.location.search)
    : null;
  const isSuccess = params?.get("success") === "true";

  useEffect(() => {
    if (isSuccess) {
      setLoading(false);
      return;
    }

    if (items.length === 0) {
      setLoading(false);
      return;
    }

    const createPaymentIntent = async () => {
      try {
        const res = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items }),
        });
        const data = await res.json();
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          setError("Failed to initialize payment. Please try again.");
        }
      } catch {
        setError("Failed to connect to payment server. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    createPaymentIntent();
  }, [items, isSuccess]);

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
              Thank you for your purchase. You&apos;ll receive a confirmation email shortly.
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

          {items.length === 0 && !loading ? (
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
          ) : loading ? (
            <div className="card-elevated p-12 text-center">
              <div className="w-8 h-8 border-2 border-[#0066cc] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-[#7a7a7a] text-sm">Preparing checkout...</p>
            </div>
          ) : error ? (
            <div className="card-elevated p-12 text-center">
              <div className="w-14 h-14 rounded-full bg-[#0066cc]/10 flex items-center justify-center mx-auto mb-5">
                <CreditCard className="h-7 w-7 text-[#0066cc]" />
              </div>
              <h2 className="text-[#1d1d1f] font-semibold text-lg mb-2">Payment coming soon</h2>
              <p className="text-[#7a7a7a] text-sm mb-6 max-w-xs mx-auto">
                Online payment processing will be available once the site is published. For now, reach out to get started.
              </p>
              <div className="flex flex-col items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] text-white hover:bg-[#0071e3] transition-all active:scale-[0.97] text-sm"
                  style={{ padding: "11px 22px", fontWeight: 500, lineHeight: "1" }}
                >
                  Get in touch
                </Link>
                <Link
                  href="/cart"
                  className="text-xs text-[#7a7a7a] hover:text-[#1d1d1f] transition-colors"
                >
                  Back to cart
                </Link>
              </div>
            </div>
          ) : (
            <div className="card-elevated p-6">
              <Elements stripe={stripePromise} options={{ clientSecret } as StripeElementsOptions}>
                <CheckoutForm />
              </Elements>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
