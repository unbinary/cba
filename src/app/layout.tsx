import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Canadians for Broadcast Accountability",
    template: "%s | Canadians for Broadcast Accountability",
  },
  description: "Holding Canadian broadcasters accountable to their CRTC licence obligations. Learn how to file complaints, intervene in hearings, and advocate for consumer choice.",
  metadataBase: new URL("https://cba-tv.ca"),
  keywords: ["CRTC", "Canadian broadcasting", "broadcast accountability", "consumer advocacy", "cable complaints", "CRTC complaints", "broadcast regulation", "Canadian content"],
  authors: [{ name: "Canadians for Broadcast Accountability" }],
  creator: "Canadians for Broadcast Accountability",
  publisher: "Canadians for Broadcast Accountability",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://cba-tv.ca",
    siteName: "Canadians for Broadcast Accountability",
    title: "Canadians for Broadcast Accountability",
    description: "Holding Canadian broadcasters accountable to their CRTC licence obligations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canadians for Broadcast Accountability",
    description: "Holding Canadian broadcasters accountable to their CRTC licence obligations.",
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
  alternates: {
    canonical: "https://cba-tv.ca",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Canadians for Broadcast Accountability",
  url: "https://cba-tv.ca",
  description: "Holding Canadian broadcasters accountable to their CRTC licence obligations.",
  foundingDate: "2025",
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
