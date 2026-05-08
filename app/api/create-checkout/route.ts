import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

const MAINTENANCE_PRICE_IDS: Record<string, string> = {
  Starter: "price_1TUp0qJFDaRM78F21qigRn4A",
  Growth: "price_1TUp2KJFDaRM78F2taXBe99g",
  Premium: "price_1TUp2yJFDaRM78F2XOUgJVpo",
};

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "No items provided" }, { status: 400 });
    }

    const packageItem = items.find((i: any) => i.type === "package");
    const maintenanceItem = items.find((i: any) => i.type === "maintenance");

    const lineItems: any[] = [];

    // Package is a one-time charge
    if (packageItem) {
      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: { name: packageItem.name },
          unit_amount: packageItem.price * 100,
        },
        quantity: 1,
      });
    }

    const hasSubscription = maintenanceItem?.billingPeriod === "monthly";

    // Yearly maintenance: one-time charge
    if (maintenanceItem && maintenanceItem.billingPeriod === "yearly") {
      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: { name: "Maintenance & Support (Yearly)" },
          unit_amount: maintenanceItem.price * 100,
        },
        quantity: 1,
      });
    }

    // Monthly maintenance: subscription via price ID
    if (maintenanceItem && maintenanceItem.billingPeriod === "monthly") {
      const priceId = MAINTENANCE_PRICE_IDS[maintenanceItem.packageTier];
      if (!priceId) {
        return NextResponse.json({ error: "Invalid maintenance tier" }, { status: 400 });
      }
      lineItems.push({
        price: priceId,
        quantity: 1,
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: hasSubscription ? "subscription" : "payment",
      line_items: lineItems,
      success_url: `${req.headers.get("origin")}/checkout?success=true`,
      cancel_url: `${req.headers.get("origin")}/checkout`,
      metadata: {
        packageTier: packageItem?.packageTier || "",
        hasMaintenance: maintenanceItem ? "true" : "false",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
