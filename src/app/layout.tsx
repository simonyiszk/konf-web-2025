import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const cygrotesk = localFont({
  src: "./fonts/CyGrotesk.woff",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Simonyi Konferencia",
  description: "Simon Konferencia 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cygrotesk.className} antialiased h-screen`}>
        {children}
      </body>
    </html>
  );
}
