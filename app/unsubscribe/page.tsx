// File: app/unsubscribe/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import unsubscribeAction from "../actions/unsubscribe";

export default function UnsubscribePage() {
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
            {/* 
          Instead of using a client handler, we pass the email as a hidden input
          and set the form's action to the server action. Next.js will call the
          unsubscribeAction on the server, which will process the request and redirect.
      */}
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
