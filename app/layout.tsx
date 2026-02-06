import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { CONFIG } from "@/src/constants/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${CONFIG.companyName} | Premium Timber & Wood Solutions`,
    template: `%s | ${CONFIG.companyName}`
  },
  description: `Official website of ${CONFIG.companyName}. Pakistan&apos;s leading industrial wood and timber solutions provider specializing in Burma Teak, Softwood, and more.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}