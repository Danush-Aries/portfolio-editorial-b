import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { SiteFrame } from "@/components/SiteFrame";
import { TAGLINES } from "@/content/site";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://dhanush-shankar.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dhanush Shankar · Swiss Grid",
    template: "%s · Dhanush Shankar",
  },
  description: TAGLINES.hero_sub,
  keywords: [
    "Dhanush Shankar",
    "AI engineer",
    "agent engineer",
    "LLM red team",
    "Claude Code",
    "MCP",
    "cybersecurity",
    "Bangalore",
    "portfolio",
  ],
  authors: [{ name: "Dhanush Shankar" }],
  creator: "Dhanush Shankar",
  openGraph: {
    title: "Dhanush Shankar · Full-stack agent engineer",
    description: TAGLINES.hero_sub,
    url: SITE_URL,
    siteName: "Dhanush Shankar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanush Shankar · Full-stack agent engineer",
    description: TAGLINES.hero_sub,
    creator: "@danushankar3",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#fafaf7",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interTight.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
