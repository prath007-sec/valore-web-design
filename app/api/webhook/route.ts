import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

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
      console.log(`Checkout completed — subscription: ${session.subscription}, tier: ${session.metadata?.packageTier}`);
      break;
    }

    case "customer.subscription.deleted": {
      console.log("Subscription cancelled");
      break;
    }

    case "invoice.payment_succeeded": {
      const invoice = event.data.object as Stripe.Invoice;
      if (invoice.subscription) {
        console.log(`Monthly payment succeeded for subscription: ${invoice.subscription}`);
      }
      break;
    }

    case "invoice.payment_failed": {
      const failedInvoice = event.data.object as Stripe.Invoice;
      console.error(`Payment failed for subscription: ${failedInvoice.subscription}`);
      break;
    }
  }

  return NextResponse.json({ received: true });
}
