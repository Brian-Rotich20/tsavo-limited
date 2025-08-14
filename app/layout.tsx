import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://www.tsavolprintlimited.co.ke"),
  title: "Tsavol Print & E-Design Ltd | Printing & Branding Solutions",
  description: "Professional digital printing, branding, signage, and creative design services in Kenya.",
  keywords: [
    "printing", "branding", "signage", "embroidery",
    "large format printing", "Kenya printing services"
  ],
  openGraph: {
    title: "Tsavol Print & E-Design Ltd",
    description: "Your reliable partner in printing, branding, and creative design solutions.",
    url: "https://www.tsavolprintlimited.co.ke/",
    siteName: "Tsavol Print",
    images: [
      {
        url: "https://www.tsavolprintlimited.co.ke/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tsavol Print branding and printing services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "google8b1a842962d79c01.html",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tsavol Print & E-Design Ltd",
    description: "Premium printing, branding, and signage services.",
    images: ["https://www.tsavolprintlimited.co.ke/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" }
    ],
  },
  manifest: "/site.webmanifest"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
