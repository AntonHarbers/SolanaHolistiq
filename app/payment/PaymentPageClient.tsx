// File: app/payment/PaymentPageClient.tsx
'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { oneOnOnePackages, groupPackages, Package } from '../../lib/packages';
import { useEffect, useState } from 'react';

export default function PaymentPageClient() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pkgTitle = searchParams.get('package');
    const [pkg, setPkg] = useState<Package | null>(null);

    useEffect(() => {
        if (!pkgTitle) return;
        const all = [...oneOnOnePackages, ...groupPackages];
        const found = all.find((p) => p.title === pkgTitle);
        if (!found) {
            router.replace('/#packages');
        } else {
            setPkg(found);
        }
    }, [pkgTitle, router]);

    if (!pkg) {
        return <p className="p-8 text-center">Loading package…</p>;
    }

    async function handlePayment() {
        if (!pkg) return;
        const res = await fetch('/api/stripe/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ packageTitle: pkg.title, price: pkg.price }),
        });
        const { url } = await res.json();
        if (url) window.location.href = url;
    }

    return (
        <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-white animate-fadeIn">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow animate-fadeIn">
                <h1 className="text-3xl font-bold mb-4">{pkg.title}</h1>
                <p className="mb-2"><strong>Goal:</strong> {pkg.goal || '—'}</p>
                <p className="mb-2"><strong>Duration:</strong> {pkg.duration}</p>
                <p className="mb-2"><strong>Format:</strong> {pkg.format}</p>
                <p className="mb-4"><strong>Price:</strong> {pkg.price}</p>
                <ul className="list-disc list-inside mb-6 text-gray-600">
                    {pkg.details.map((d: string, i: number) => <li key={i} className="text-sm">{d}</li>)}
                </ul>
                <button
                    onClick={handlePayment}
                    className="bg-primary text-white px-6 py-3 rounded hover:bg-accent transition duration-300"
                >
                    Proceed to Payment
                </button>
            </div>
        </section>
    );
}
