import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const defaultDescription =
  "Spairally is an AI-powered defense technology startup focused on enhancing public safety by detecting concealed weapons using mobile phones in real time. We provide a non-intrusive, seamless way to identify potential threats for users in schools, public spaces, events, and other environments. Spairally aims to improve overall community safety.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Spairally — AI-Powered Public Safety & Threat Detection",
    template: "%s | Spairally",
  },
  description: defaultDescription,
  applicationName: "Spairally",
  authors: [{ name: "Spairally", url: siteUrl }],
  creator: "Spairally",
  publisher: "Spairally",
  category: "technology",
  keywords: [
    "Spairally",
    "public safety",
    "concealed weapon detection",
    "AI security",
    "mobile threat detection",
    "school safety",
    "event security",
    "real-time detection",
    "non-intrusive security",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Spairally",
    title: "Spairally — AI-Powered Public Safety & Threat Detection",
    description: defaultDescription,
    images: [
      {
        url: "/images/spairally.webp",
        alt: "Spairally — AI-powered defense technology for community safety",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spairally — AI-Powered Public Safety & Threat Detection",
    description: defaultDescription,
    images: ["/images/spairally.webp"],
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Spairally",
  url: siteUrl,
  logo: `${siteUrl}/images/spairally.webp`,
  description: defaultDescription,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Spairally",
  url: siteUrl,
  description: defaultDescription,
  publisher: { "@type": "Organization", name: "Spairally", url: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
