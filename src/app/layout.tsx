import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Canadians for Broadcast Accountability",
    template: "%s | Canadians for Broadcast Accountability",
  },
  description: "Holding Canadian broadcasters accountable to their CRTC licence obligations.",
  metadataBase: new URL("https://cba-tv.ca"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Canadians for Broadcast Accountability",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
