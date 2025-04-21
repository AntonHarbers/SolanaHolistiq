// File: app/payment/page.tsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { oneOnOnePackages, groupPackages, Package } from "../../lib/packages";
import { useEffect, useState } from "react";

export default function PaymentPage() {
    const searchParams = useSearchParams();
    const pkgTitle = searchParams.get("package");
    const router = useRouter();
    const [pkg, setPkg] = useState<Package | null>(null);

    useEffect(() => {
        if (!pkgTitle) return;
        // Look in both arrays
        const all = [...oneOnOnePackages, ...groupPackages];
        const found = all.find((p) => p.title === pkgTitle);
        if (!found) {
            // If no match, send back to packages
            router.replace("/#packages");
        } else {
            setPkg(found);
        }
    }, [pkgTitle, router]);

    async function handlePayment() {
        if (!pkg) return;
        const res = await fetch("/api/stripe/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                packageTitle: pkg.title,
                price: pkg.price,
            }),
        });
        const { url, error } = await res.json();
        if (url) {
            window.location.href = url;            // send user to Stripe Checkout
        } else {
            console.error("Checkout session error:", error);
        }
    }

    if (!pkg) {
        return <p className="p-8 text-center">Loading package…</p>;
    }

    return (
        <section className="flex py-24 items-center  bg-gradient-to-b from-[#f7e3cf] to-[#e7ddef] animate-fadeIn">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow animate-fadeIn">
                <h1 className="text-3xl font-bold mb-4">{pkg.title}</h1>
                <p className="mb-2"><strong>Goal:</strong> {pkg.goal || "—"}</p>
                <p className="mb-2"><strong>Duration:</strong> {pkg.duration}</p>
                <p className="mb-2"><strong>Format:</strong> {pkg.format}</p>
                <p className="mb-4"><strong>Price:</strong> {pkg.price}</p>
                <ul className="list-disc list-inside mb-6 text-gray-600">
                    {pkg.details.map((d: string, i: number) => (
                        <li key={i} className="text-sm">{d}</li>
                    ))}
                </ul>
                {/* Placeholder for now */}
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
