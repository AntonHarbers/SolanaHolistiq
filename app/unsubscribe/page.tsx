// File: app/unsubscribe/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import unsubscribeAction from "../actions/unsubscribe";

export default function UnsubscribePage() {
    return (
        <Suspense fallback={<p className="p-8 text-center">Loading unsubscribe...</p>}>
            <UnsubscribePageContent />
        </Suspense>
    );
}

function UnsubscribePageContent() {
    const searchParams = useSearchParams();
    const email = searchParams.get("email");

    if (!email) {
        return (
            <main className="p-8">
                <h1 className="text-2xl font-bold mb-4">Unsubscribe</h1>
                <p>Invalid unsubscribe request.</p>
            </main>
        );
    }

    return (
        <main className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-4">Unsubscribe</h1>
            <p className="mb-4">
                Are you sure you want to unsubscribe {email}? Click the button below to confirm.
            </p>
            <form action={unsubscribeAction} method="POST">
                <input type="hidden" name="email" value={email} />
                <button
                    type="submit"
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
                >
                    Confirm Unsubscribe
                </button>
            </form>
        </main>
    );
}
