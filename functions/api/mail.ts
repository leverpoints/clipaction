import { Resend } from 'resend';
import welcomeTemplate from '../templates/welcome.html' assert { type: 'text' };

interface Env {
  RESEND_API_KEY: string;
}

interface WelcomeTemplateType {
  default: string;
}

const template = welcomeTemplate as unknown as WelcomeTemplateType;

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const { email, firstname } = await context.request.json();
    
    const resend = new Resend(context.env.RESEND_API_KEY);

    // Replace the placeholder with actual firstname
    const html = template.default.replace('{{firstname}}', firstname);

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