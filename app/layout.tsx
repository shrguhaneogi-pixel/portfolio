import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ScrollProvider from "@/components/providers/scroll-provider"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shreyas Guha Neogi | AI Engineer & Full-Stack Developer",

  description:
    "AI Engineer and Full-Stack Developer building intelligent systems, developer tools, and cinematic web experiences.",

  keywords: [
    "Shreyas Guha Neogi",
    "AI Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "Machine Learning Engineer",
    "Developer Portfolio",
  ],

  authors: [{ name: "Shreyas Guha Neogi" }],

  openGraph: {
    title: "Shreyas Guha Neogi — AI Engineer",
    description:
      "Interactive developer portfolio showcasing AI systems, full-stack projects, and cinematic web engineering.",
    url: "https://your-portfolio.vercel.app",
    siteName: "Shreyas Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shreyas Guha Neogi — AI Engineer",
    description:
      "AI systems, developer tools, and immersive web engineering.",
    images: ["/og-image.png"],
  },
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
        <ScrollProvider>
          <Navbar />

          {children}

          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
