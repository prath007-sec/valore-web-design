"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Trash2, ShoppingBag, ArrowRight, Check } from "lucide-react";
import { useCart } from "@/components/CartContext";

const MAINTENANCE_PRICES: Record<string, { monthly: number; yearly: number }> = {
  Starter: { monthly: 29, yearly: 290 },
  Growth: { monthly: 49, yearly: 490 },
  Premium: { monthly: 99, yearly: 990 },
};

export default function CartPage() {
  const { items, packageItem, maintenanceItem, removeItem, clearCart, getTotal, setMaintenance } = useCart();
  const [billing, setBilling] = useState<"monthly" | "yearly">(
    maintenanceItem?.billingPeriod ?? "monthly"
  );

  const tier = packageItem?.packageTier ?? "Starter";
  const prices = MAINTENANCE_PRICES[tier];
  const monthlyTotal = prices.monthly * 12;
  const yearlySavings = monthlyTotal - prices.yearly;

  const handleBillingChange = (period: "monthly" | "yearly") => {
    setBilling(period);
    setMaintenance(tier, true, period);
  };

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

              {/* Maintenance addon */}
              {packageItem && (
                <motion.div
                  className="card-elevated p-6 mb-4"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <h3 className="text-[#1d1d1f] font-semibold text-base">Maintenance & Support</h3>
                      <p className="text-[#7a7a7a] text-xs mt-1">Keep your site updated, secure, and running smoothly.</p>
                    </div>
                    <button
                      onClick={() => {
                        if (maintenanceItem) {
                          setMaintenance(tier, false, "monthly");
                        } else {
                          setMaintenance(tier, true, billing);
                        }
                      }}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ml-4 ${
                        maintenanceItem ? "bg-[#0066cc]" : "bg-[#d2d2d7]"
                      }`}
                    >
                      <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-sm ${
                          maintenanceItem ? "translate-x-[23px]" : "translate-x-[2px]"
                        }`}
                      />
                    </button>
                  </div>

                  {maintenanceItem && (
                    <>
                      {/* Billing toggle */}
                      <div className="bg-[#f5f5f7] rounded-xl p-1 flex mb-4">
                        <button
                          onClick={() => handleBillingChange("monthly")}
                          className={`flex-1 text-center text-sm py-2 px-3 rounded-lg font-medium transition-all ${
                            billing === "monthly"
                              ? "bg-white text-[#1d1d1f] shadow-sm"
                              : "text-[#7a7a7a] hover:text-[#1d1d1f]"
                          }`}
                        >
                          Monthly
                        </button>
                        <button
                          onClick={() => handleBillingChange("yearly")}
                          className={`flex-1 text-center text-sm py-2 px-3 rounded-lg font-medium transition-all relative ${
                            billing === "yearly"
                              ? "bg-white text-[#1d1d1f] shadow-sm"
                              : "text-[#7a7a7a] hover:text-[#1d1d1f]"
                          }`}
                        >
                          Yearly
                          <span className="absolute -top-2 -right-1 bg-[#0066cc] text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
                            Save ${yearlySavings}
                          </span>
                        </button>
                      </div>

                      {/* Price display */}
                      <div className="flex items-end justify-between">
                        <div>
                          <span className="text-[#1d1d1f] font-semibold text-lg">
                            ${billing === "monthly" ? prices.monthly : prices.yearly}
                          </span>
                          <span className="text-[#7a7a7a] text-sm ml-1">
                            /{billing === "monthly" ? "mo" : "yr"}
                          </span>
                          {billing === "yearly" && (
                            <span className="text-[#0066cc] text-xs ml-2 font-medium">
                              ${prices.monthly}/mo × 12 = ${monthlyTotal}
                            </span>
                          )}
                        </div>
                        {billing === "yearly" && (
                          <div className="text-right">
                            <span className="text-[#7a7a7a] text-xs line-through">${monthlyTotal}/yr</span>
                            <span className="text-[#0066cc] text-xs block font-medium">Save ${yearlySavings}</span>
                          </div>
                        )}
                      </div>

                      <ul className="mt-4 space-y-2">
                        {[
                          "Monthly performance & security updates",
                          "Content changes & text edits",
                          "Uptime monitoring",
                          "Priority email support",
                        ].map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-[#7a7a7a]">
                            <Check className="h-3.5 w-3.5 text-[#0066cc] mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
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
                  {maintenanceItem && (
                    <div className="flex justify-between text-[#7a7a7a]">
                      <span>
                        {maintenanceItem.name}
                        {billing === "yearly" && (
                          <span className="text-[#0066cc] ml-1.5 text-[11px] font-medium">
                            Save ${yearlySavings}
                          </span>
                        )}
                      </span>
                      <span>${maintenanceItem.price}</span>
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
