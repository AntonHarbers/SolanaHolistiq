// File: app/api/stripe/checkout/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
});

export async function POST(request: Request) {
  try {
    const { packageTitle, price } = await request.json();

    // Convert your $850 into cents: remove “$” then *100
    const amount = Math.round(parseFloat(price.replace(/[^0-9\.]/g, '')) * 100);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            unit_amount: amount,
            product_data: {
              name: packageTitle,
            },
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.headers.get(
        'origin'
      )}/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get(
        'origin'
      )}/payment?package=${encodeURIComponent(packageTitle)}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Stripe checkout error', err);
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    console.error('Stripe checkout error', err);
    return NextResponse.json(
      { error: 'An unknown error occurred' },
      { status: 500 }
    );
  }
}
