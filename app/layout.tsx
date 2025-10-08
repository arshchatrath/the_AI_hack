import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "AI Hackathon",
  description: "AI hackathon by Arsh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Use next-themes attribute="class" so .dark styles apply */}
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
          >
            {children}
            <Analytics />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
