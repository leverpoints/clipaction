import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstname: string;
}

export const WelcomeEmail = ({ userFirstname }: EmailProps) => (
  <Html>
    <Head />
    <Preview>Thanks for Joining the Waitlist, {userFirstname}! 🎉</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={greeting}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Thanks for joining the waitlist of the ClipAction app! We are Cost of Capital Studio, the developer behind this product. I'm glad to
          have you on board.
        </Text>
        <Text style={paragraph}>
          I'll keep you posted on the progress and notify you as soon as it's
          ready for you to use. In the meantime, if you have any questions or
          feedback, don't hesitate to reach out by replying directly to{" "}
          <a href="mailto:clipaction@costof.capital" style={link}>
            this email
          </a>
          — I'm here to listen!
        </Text>
        <Text style={paragraph}>
          You can also follow me on X/Twitter for updates:{" "}
          <a href="https://x.com/costof_capital" style={link}>
            @costof_capital
          </a>
        </Text>
        <Text style={signOff}>
          Best regards,
          <br />
          Cost of Capital Studio
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          You received this email because you signed up for the ClipAction waitlist.
          If you believe this is a mistake, feel free to ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: 'figtree, "Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: "40px 0",
};

const container = {
  margin: "0 auto",
  padding: "24px 32px 48px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
};

const greeting = {
  fontSize: "18px",
  lineHeight: "28px",
  color: "#1a1a1a",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "20px",
  color: "#1a1a1a",
};

const link = {
  color: "#0066cc",
  textDecoration: "underline",
};

const signOff = {
  fontSize: "16px",
  lineHeight: "26px",
  marginTop: "20px",
  color: "#1a1a1a",
};

const hr = {
  borderColor: "#e6e6e6",
  margin: "20px 0",
};

const footer = {
  color: "#666666",
  fontSize: "12px",
};
