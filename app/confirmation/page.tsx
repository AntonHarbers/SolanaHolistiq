// File: app/confirmation/page.tsx
import Stripe from 'stripe';

export const dynamic = 'force-dynamic'; // ensure we can fetch at runtime

export default async function Page({
    searchParams,
}: {
    searchParams: { session_id?: string };
}) {
    const session_id = searchParams.session_id;
    if (!session_id) {
        return (
            <main className="p-8">
                <h1 className="text-2xl font-bold mb-4">Order Confirmation</h1>
                <p>No session ID provided.</p>
            </main>
        );
    }

    // Initialize Stripe on the server
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: '2025-03-31.basil',
    });

    // Retrieve the session and expand line items & customer details
    const session = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['line_items', 'customer_details'],
    });

    const item = session.line_items?.data[0];
    const email = session.customer_details?.email ?? '—';
    const amount = (session.amount_total ?? 0) / 100;

    return (
        <main className="py-16 px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
                <h1 className="text-3xl font-bold mb-4">Thank you for your purchase!</h1>
                <p className="mb-2">
                    <strong>Package:</strong> {item?.description ?? '—'}
                </p>
                <p className="mb-2">
                    <strong>Amount Paid:</strong> €{amount.toFixed(2)}
                </p>
                <p className="mb-4">
                    <strong>Receipt sent to:</strong> {email}
                </p>
                <p>Your coach will contact you shortly to schedule your sessions.</p>
            </div>
        </main>
    );
}
