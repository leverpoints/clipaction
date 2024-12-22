import { render } from "@react-email/render";
import WelcomeTemplate from "@/emails";
import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "edge";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, firstname } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "ClipAction <hello@costof.capital>",
      to: [email],
      subject: "Thank you for joining the ClipAction waitlist!",
      reply_to: "hello@costof.capital",
      react: WelcomeTemplate({ userFirstname: firstname }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
