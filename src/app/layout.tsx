import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "alrzkyy - Personal Dashboard",
  description: "High-end personal dashboard portfolio showcasing projects, skills, and real-time activity. Built with Next.js, Tailwind CSS, and Framer Motion.",
  keywords: ["alrzkyy", "portfolio", "dashboard", "developer", "Next.js", "TypeScript"],
  authors: [{ name: "alrzkyy" }],
  openGraph: {
    title: "alrzkyy - Personal Dashboard",
    description: "High-end personal dashboard portfolio showcasing projects, skills, and real-time activity",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#D4AF37",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSProvider />
        {children}
      </body>
    </html>
  );
}
