import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono, Orbitron, Alumni_Sans_Pinstripe } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  weight: ["400", "700"],
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const alumni = Alumni_Sans_Pinstripe({
  weight: "400",
  variable: "--font-alumni",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sebastian Blaze Frontend Developer",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${orbitron.variable} 
          ${alumni.variable} 
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
