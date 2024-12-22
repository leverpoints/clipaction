import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

const FigtreeFont = Figtree({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://clipaction.costof.capital'),
  title: 'ClipAction - Convert Screenshots to Todos',
  description: 'Transform your screenshots into actionable todos with AI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://clipaction.costof.capital',
    title: 'ClipAction - Convert Screenshots to Todos',
    description: 'Transform your screenshots into actionable todos with AI',
    siteName: 'ClipAction',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClipAction - Convert Screenshots to Todos',
    description: 'Transform your screenshots into actionable todos with AI',
    creator: '@costof_capital',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <meta property="og:image" content="/opengraph-image.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="832" />
      <meta
        property="og:site_name"
        content="Next.js + Notion — Waitlist Template"
      />
      <meta
        property="og:url"
        content="https://nextjs-notion-waitlist.vercel.app/"
      />
      <meta name="twitter:image" content="/twitter-image.png" />
      <meta name="twitter:image:type" content="image/png" />
      <meta name="twitter:image:width" content="1280" />
      <meta name="twitter:image:height" content="832" />
      <body className={FigtreeFont.className}>
        {children}
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}
