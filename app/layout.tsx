import type { Metadata } from "next";
import {  Cabin } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const cabin = Cabin({ subsets: ["latin"], weight: ['400','500','600','700'],variable: '--font-cabin' });

export const metadata: Metadata = {
  title: "Jinxify",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: '#000000' } }} >
    <html lang="en">
      <body className={cn("font-IBMPlex antialiased",cabin.variable)}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
