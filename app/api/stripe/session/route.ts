// File: app/api/stripe/session/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export const runtime = 'edge'; // or 'nodejs'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
});

export async function GET(req: Request) {
  const url = new URL(req.url);
  const session_id = url.searchParams.get('session_id');
  if (!session_id) {
    return NextResponse.json({ error: 'session_id required' }, { status: 400 });
  }
  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'customer_details'],
  });
  return NextResponse.json(session);
}
