// File: app/actions/unsubscribe.ts
'use server';

import { neon } from '@neondatabase/serverless';
import { redirect } from 'next/navigation';

export default async function unsubscribeAction(formData: FormData) {
  'use server';
  // Extract the email from the form data
  const email = formData.get('email') as string;
  if (!email) throw new Error('Email is required');

  // Connect to your Neon database using your DATABASE_URL env variable
  const sql = neon(process.env.DATABASE_URL!);

  // Update the newsletter_subscribers table to mark this email as removed
  await sql`
    UPDATE newsletter_subscribers
    SET is_removed = TRUE
    WHERE email = ${email}
  `;
  // Redirect to the confirmation page (or any other route you choose)
  redirect('/unsubscribe/confirmed');
}
