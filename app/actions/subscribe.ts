'use server';
import { neon } from '@neondatabase/serverless';
import nodemailer from 'nodemailer';

export async function subscribe(formData: FormData) {
  'use server';
  const email = formData.get('email') as string;
  if (!email) throw new Error('Email is required');

  const sql = neon(process.env.DATABASE_URL!);

  // Check if the email already exists
  const result = await sql`
    SELECT * FROM newsletter_subscribers
    WHERE email = ${email}
  `;

  if (result.length > 0) {
    // If email exists and is not removed, it's already subscribed.
    if (result[0].is_removed === false) {
      return { alreadySubscribed: true };
    } else {
      // If the email exists but is marked as removed, update it back.
      await sql`
        UPDATE newsletter_subscribers
        SET is_removed = FALSE
        WHERE email = ${email}
      `;
    }
  } else {
    // Insert new record if not existing.
    await sql`
      INSERT INTO newsletter_subscribers (email)
      VALUES (${email})
    `;
  }

  // Set up Nodemailer transporter using existing SMTP settings.
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Send the welcome email with an unsubscribe link.
  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: email,
    subject: 'Welcome to Our Newsletter!',
    text: `Thank you for signing up! Please find your free meal plan attached.

To unsubscribe at any time, click the link below:
https://yourdomain.com/unsubscribe?email=${encodeURIComponent(email)}`,
    attachments: [
      {
        filename: 'MealPlan.pdf',
        path: './public/MealPlan.pdf', // Ensure this file exists in your public folder.
      },
    ],
  });

  return { alreadySubscribed: false };
}
