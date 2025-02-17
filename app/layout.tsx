import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--fonts-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--fonts-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emma Zepter",
  description: "Coming Soon!",
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
        {children}
      </body>
    </html>
  );
}
