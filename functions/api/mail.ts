import { Resend } from 'resend';
import welcomeTemplate from '../templates/welcome.html' assert { type: 'text' };

interface Env {
  RESEND_API_KEY: string;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const { email, firstname } = await context.request.json();
    
    const resend = new Resend(context.env.RESEND_API_KEY);

    // Use the template directly (no need for .default)
    const html = welcomeTemplate.replace('{{firstname}}', firstname);

    const { data, error } = await resend.emails.send({
      from: "ClipAction <hello@costof.capital>",
      to: [email],
      subject: "Thank you for joining the ClipAction waitlist!",
      reply_to: "hello@costof.capital",
      html
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
    console.error('Mail API Error:', error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 