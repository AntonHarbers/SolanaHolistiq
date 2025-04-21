// File: app/api/stripe/webhook/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { neon } from '@neondatabase/serverless';
import nodemailer from 'nodemailer';

export const config = { api: { bodyParser: false } };

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
});

async function sendEmail(opts: {
  to: string;
  subject: string;
  text: string;
  html?: string;
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: opts.to,
    subject: opts.subject,
    text: opts.text,
    html: opts.html,
  });
}

export async function POST(req: Request) {
  const buf = await req.arrayBuffer();
  const sig = req.headers.get('stripe-signature')!;
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      Buffer.from(buf),
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: unknown) {
    console.error('⚠️ Webhook signature verification failed.', err);
    return new Response(null, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const customerEmail = session.customer_details?.email;
    if (!customerEmail) {
      console.error('Customer email is missing in the session details.');
      return new Response('Customer email is required.', { status: 400 });
    }
    // Retrieve line item description (package name)
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
    const pkgName =
      lineItems.data[0]?.description ||
      session.metadata?.packageTitle ||
      'Your Package';
    const amount = session.amount_total!; // in cents
    const transactionId = session.id;

    // 1) Log to Neon Postgres
    const sql = neon(process.env.DATABASE_URL!);
    await sql`
      INSERT INTO orders (email, package_name, amount_cents, transaction_id, status)
      VALUES (${customerEmail}, ${pkgName}, ${amount}, ${transactionId}, 'paid')
    `;

    // 2) Send email to the customer
    await sendEmail({
      to: customerEmail,
      subject: `✅ Your purchase of ${pkgName} is confirmed`,
      text: `Hi there!

Thank you for purchasing *${pkgName}* for €${(amount / 100).toFixed(2)}.
Your transaction ID is ${transactionId}.

Your coach will reach out soon to schedule your sessions.

Best,
Solana Holistiq
      `,
    });

    // 3) Send notification to the coach (using MY_EMAIL env var)
    await sendEmail({
      to: process.env.MY_EMAIL!,
      subject: `📦 New package purchased: ${pkgName}`,
      text: `New purchase details:

• Customer: ${customerEmail}
• Package: ${pkgName}
• Amount: €${(amount / 100).toFixed(2)}
• Transaction ID: ${transactionId}

Please follow up to schedule sessions.
      `,
    });
  }

  return NextResponse.json({ received: true });
}
