import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI for Inclusion Hackathon",
  description:
    "AI for Inclusion Hackathon 2026 | By TIET–UQ Centre of Excellence in Data Science & AI",
  icons: {
    icon: "/codsai.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <MotionProvider>{children}</MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
