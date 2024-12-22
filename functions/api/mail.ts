import { Resend } from 'resend';
import { renderWelcomeEmail } from '../../lib/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function onRequestPost(context) {
  try {
    const { email, firstname } = await context.request.json();

    // Pre-render the email template to HTML
    const html = renderWelcomeEmail(firstname);

    const { data, error } = await resend.emails.send({
      from: "ClipAction <hello@costof.capital>",
      to: [email],
      subject: "Thank you for joining the ClipAction waitlist!",
      reply_to: "hello@costof.capital",
      html: html
    });

    if (error) {
      return new Response(JSON.stringify({ error }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 