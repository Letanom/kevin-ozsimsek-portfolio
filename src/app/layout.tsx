import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import TerminalHeader from '@/components/TerminalHeader'
import ScrollToTop from '@/components/ScrollToTop'
import ClientBackground from '@/components/ClientBackground'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Kevin Özşimşek | Platform Ops Engineer & Freelance Developer",
  description: "Platform Operations Engineer specializing in AWS SysOps, cloud monitoring, and freelance web development under Keweble.",
  keywords: ["Platform Ops", "AWS SysOps", "DevOps", "Cloud Monitoring", "Web Development", "Keweble", "New Relic", "OpenTelemetry"],
  authors: [{ name: "Kevin Özşimşek" }],
  openGraph: {
    title: "Kevin Özşimşek | Platform Ops Engineer & Freelance Developer",
    description: "Platform Operations Engineer specializing in AWS SysOps, cloud monitoring, and freelance web development under Keweble.",
    url: "https://kevinozsimsek.com",
    siteName: "Kevin Özşimşek Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Özşimşek | Platform Ops Engineer & Freelance Developer",
    description: "Platform Operations Engineer specializing in AWS SysOps, cloud monitoring, and freelance web development under Keweble.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable} scroll-smooth`}>
      <body className="antialiased bg-surface text-white min-h-screen">
        <TerminalHeader />
        <ClientBackground />
        <main className="relative">
          {children}
        </main>
        <ScrollToTop />
      </body>
    </html>
  );
}
