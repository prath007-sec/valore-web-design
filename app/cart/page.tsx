"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/components/CartContext";

export default function CartPage() {
  const { items, packageItem, removeItem, clearCart, getTotal } = useCart();

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <div className="mx-auto max-w-[720px] px-6 pt-24 pb-20">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-sm text-[#7a7a7a] hover:text-[#1d1d1f] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to pricing
          </Link>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-[#1d1d1f] font-semibold" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.28px" }}>
                Your Cart
              </h1>
              <p className="text-[#7a7a7a] text-sm mt-1">
                {items.length === 0 ? "Your cart is empty" : `${items.length} item${items.length > 1 ? "s" : ""}`}
              </p>
            </div>
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs text-[#7a7a7a] hover:text-[#fb2c36] transition-colors flex items-center gap-1"
              >
                <Trash2 className="h-3 w-3" /> Clear
              </button>
            )}
          </div>

          {items.length === 0 ? (
            <div className="card-elevated p-12 text-center">
              <ShoppingBag className="h-10 w-10 text-[#d2d2d7] mx-auto mb-4" />
              <p className="text-[#7a7a7a] text-sm mb-6">Your cart is empty. Browse our packages to get started.</p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] text-white hover:bg-[#0071e3] transition-all active:scale-[0.97] text-sm"
                style={{ padding: "11px 22px", fontWeight: 500, lineHeight: "1" }}
              >
                View packages <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ) : (
            <>
              {/* Package item */}
              {packageItem && (
                <motion.div
                  className="card-elevated p-6 mb-4"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="apple-badge mb-2">{packageItem.packageTier} Package</div>
                      <h3 className="text-[#1d1d1f] font-semibold text-base">{packageItem.name}</h3>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <span className="text-[#1d1d1f] font-semibold text-lg">${packageItem.price}</span>
                      <span className="text-[#7a7a7a] text-xs block">One-time</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Summary */}
              <motion.div
                className="card-elevated p-6"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-[#1d1d1f] font-semibold text-sm mb-4">Order Summary</h3>
                <div className="space-y-3 text-sm">
                  {packageItem && (
                    <div className="flex justify-between text-[#7a7a7a]">
                      <span>{packageItem.name}</span>
                      <span>${packageItem.price}</span>
                    </div>
                  )}
                  <div className="border-t border-[#f0f0f0] pt-3 flex justify-between text-[#1d1d1f] font-semibold">
                    <span>Total</span>
                    <span>${getTotal()}</span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0066cc] text-white hover:bg-[#0071e3] transition-all active:scale-[0.97] text-sm"
                  style={{ padding: "13px 22px", fontWeight: 500, lineHeight: "1" }}
                >
                  Proceed to checkout <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
