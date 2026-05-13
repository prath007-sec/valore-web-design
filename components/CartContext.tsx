"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  type: "package" | "maintenance";
  packageTier?: "Starter" | "Growth" | "Premium";
  billingPeriod?: "monthly" | "yearly";
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
  packageItem: CartItem | undefined;
  maintenanceItem: CartItem | undefined;
  setMaintenance: (tier: "Starter" | "Growth" | "Premium", enabled: boolean, billing: "monthly" | "yearly") => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const MAINTENANCE_PRICES: Record<string, { monthly: number; yearly: number }> = {
  Starter: { monthly: 39, yearly: 390 },
  Growth: { monthly: 69, yearly: 690 },
  Premium: { monthly: 129, yearly: 1290 },
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("cart");
      if (saved) setItems(JSON.parse(saved));
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("cart", JSON.stringify(items));
    }
  }, [items, loaded]);

  const addItem = useCallback((item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) return prev;
      return [...prev, item];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const getTotal = useCallback(() => {
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);

  const getItemCount = useCallback(() => items.length, [items]);

  const packageItem = items.find((i) => i.type === "package");
  const maintenanceItem = items.find((i) => i.type === "maintenance");

  const setMaintenance = useCallback(
    (tier: "Starter" | "Growth" | "Premium", enabled: boolean, billing: "monthly" | "yearly") => {
      setItems((prev) => {
        const withoutMaintenance = prev.filter((i) => i.type !== "maintenance");
        if (!enabled) return withoutMaintenance;
        const prices = MAINTENANCE_PRICES[tier];
        const price = billing === "monthly" ? prices.monthly : prices.yearly;
        return [
          ...withoutMaintenance,
          {
            id: `maintenance-${tier.toLowerCase()}`,
            name: `Maintenance (${tier}) - ${billing === "monthly" ? "Monthly" : "Yearly"}`,
            price,
            type: "maintenance",
            packageTier: tier,
            billingPeriod: billing,
          },
        ];
      });
    },
    [],
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearCart,
        getTotal,
        getItemCount,
        packageItem,
        maintenanceItem,
        setMaintenance,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
