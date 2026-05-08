import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

async function sendDiscord(embed: object) {
  if (!DISCORD_WEBHOOK_URL) return;
  await fetch(DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ embeds: [embed] }),
  });
}

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature") || "";

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const tier = session.metadata?.packageTier || "N/A";
      const email = session.customer_details?.email || "No email";
      const hasMaintenance = session.metadata?.hasMaintenance === "true";

      await sendDiscord({
        title: hasMaintenance ? "New subscription + package purchased" : "Package purchased",
        color: 0x059669,
        fields: [
          { name: "Tier", value: tier, inline: true },
          { name: "Customer", value: email, inline: true },
          { name: "Maintenance", value: hasMaintenance ? "Yes (monthly)" : "No", inline: true },
        ],
        timestamp: new Date().toISOString(),
      });
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      const customer = await stripe.customers.retrieve(subscription.customer as string);
      const customerEmail = (customer as Stripe.Customer).email || "No email";

      await sendDiscord({
        title: "Subscription cancelled",
        color: 0xef4444,
        fields: [
          { name: "Customer", value: customerEmail, inline: true },
        ],
        timestamp: new Date().toISOString(),
      });
      break;
    }

    case "invoice.payment_succeeded": {
      const invoice = event.data.object as Stripe.Invoice;
      if (invoice.subscription && invoice.billing_reason === "subscription_cycle") {
        const cust = await stripe.customers.retrieve(invoice.customer as string);
        const custEmail = (cust as Stripe.Customer).email || "No email";

        await sendDiscord({
          title: "Monthly payment received",
          color: 0x059669,
          fields: [
            { name: "Customer", value: custEmail, inline: true },
            { name: "Amount", value: `$${((invoice.amount_paid || 0) / 100).toFixed(0)}`, inline: true },
          ],
          timestamp: new Date().toISOString(),
        });
      }
      break;
    }

    case "invoice.payment_failed": {
      const failedInvoice = event.data.object as Stripe.Invoice;
      if (failedInvoice.subscription) {
        const cust = await stripe.customers.retrieve(failedInvoice.customer as string);
        const custEmail = (cust as Stripe.Customer).email || "No email";

        await sendDiscord({
          title: "Payment failed",
          color: 0xef4444,
          fields: [
            { name: "Customer", value: custEmail, inline: true },
            { name: "Amount", value: `$${((failedInvoice.amount_due || 0) / 100).toFixed(0)}`, inline: true },
          ],
          timestamp: new Date().toISOString(),
        });
      }
      break;
    }
  }

  return NextResponse.json({ received: true });
}
