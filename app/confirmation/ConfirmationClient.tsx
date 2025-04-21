// File: app/confirmation/ConfirmationClient.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type Session = {
    customer_details: { email?: string };
    amount_total: number;
    line_items: { data: { description?: string }[] };
};

export default function ConfirmationClient() {
    const params = useSearchParams();
    const session_id = params.get('session_id');
    const [session, setSession] = useState<Session | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!session_id) {
            setError('No session_id in URL');
            return;
        }
        fetch(`/api/stripe/session?session_id=${session_id}`)
            .then((r) => r.json())
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                } else {
                    setSession(data);
                }
            })
            .catch((e) => setError(e.message));
    }, [session_id]);

    if (error) {
        return <p className="p-8 text-center text-red-600">{error}</p>;
    }
    if (!session) {
        return <p className="p-8 text-center">Loading confirmation…</p>;
    }

    const item = session.line_items.data[0]?.description || '—';
    const email = session.customer_details.email || '—';
    const amount = (session.amount_total ?? 0) / 100;

    return (
        <main className="py-16 px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
                <h1 className="text-3xl font-bold mb-4">Thank you for your purchase!</h1>
                <p className="mb-2"><strong>Package:</strong> {item}</p>
                <p className="mb-2"><strong>Amount Paid:</strong> €{amount.toFixed(2)}</p>
                <p className="mb-4"><strong>Receipt sent to:</strong> {email}</p>
                <p>Your coach will contact you shortly to schedule your sessions.</p>
            </div>
        </main>
    );
}
