import { neon } from "@neondatabase/serverless";
import { redirect } from "next/navigation";

export default async function UnsubscribePage({
    searchParams,
}: {
    searchParams: { email?: string };
}) {
    const { email } = await searchParams;
    if (!email) {
        return (
            <main className="p-8">
                <h1 className="text-2xl font-bold mb-4">Unsubscribe</h1>
                <p>Invalid unsubscribe request.</p>
            </main>
        );
    }

    // Render a confirmation page where the user must click a button.
    async function unsubscribeAction() {
        "use server";
        const sql = neon(process.env.DATABASE_URL!);
        await sql`
      UPDATE newsletter_subscribers
      SET is_removed = TRUE
      WHERE email = ${email}
    `;
        redirect("/unsubscribe/confirmed");
    }

    return (
        <main className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-4">Unsubscribe</h1>
            <p className="mb-4">
                Are you sure you want to unsubscribe {email}? Click the button below to confirm.
            </p>
            <form action={unsubscribeAction} method="POST">
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