import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SwRegister } from "./sw-register";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leaderstreams.io"),
  title: "LeaderStreams — Live Streaming for Leaders",
  description: "Social scheduling for field leaders. Schedule and publish to every social channel for your whole team from one calendar. Built for network marketing.",
  applicationName: "LeaderStreams",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "LeaderStreams",
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    siteName: "LeaderStreams",
    title: "LeaderStreams — Every post, scheduled and published.",
    description: "Social scheduling for field leaders — schedule and publish to every channel for your whole team from one calendar.",
    url: "https://leaderstreams.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeaderStreams — Every post, scheduled and published.",
    description: "Social scheduling for field leaders — schedule and publish to every channel for your whole team from one calendar.",
  },
};

export const viewport: Viewport = {
  themeColor: "#06163E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <SwRegister />
      </body>
    </html>
  );
}
