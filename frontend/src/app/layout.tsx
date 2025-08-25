import type { Metadata, Viewport } from "next";
import { Inter, Merriweather, Lora } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AuroraBackground } from "@/components/ui/aurora-background";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const aeonik = localFont({
  src: [
    {
      path: "../fonts/Aeonik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Aeonik-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aeonik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Indian Student Organization - SJSU",
  description: "Official website of the Indian Student Organization at San Jose State University. Join us to celebrate Indian culture, connect with fellow students, and participate in exciting events.",
  keywords: "Indian Student Organization, SJSU, San Jose State University, Indian culture, student community",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${merriweather.variable} ${lora.variable} ${aeonik.variable} font-body antialiased`}
      >
        <AuroraBackground>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </AuroraBackground>
      </body>
    </html>
  );
}
