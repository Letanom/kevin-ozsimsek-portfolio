import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from '@/components/ScrollToTop'
import ClientComponents from '@/components/ClientComponents'

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="next-head-count" content="2" />
      </head>
      <body suppressHydrationWarning className="antialiased bg-black text-white min-h-screen overflow-x-hidden">
        <div id="app-root" className="relative min-h-screen">
          <ClientComponents />
          <main className="relative z-10">
            {children}
          </main>
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
