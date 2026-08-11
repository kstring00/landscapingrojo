import type { Metadata } from "next";
import "./globals.css";
import { site } from "../config/site";

export const metadata: Metadata = {
  title: "Rojo Tree Service & Landscaping Design | League City, TX",
  description: "Tree care, landscape design, and paver work in League City, Texas. Call Rojo to discuss your property project.",
  robots: site.previewMode ? { index: false, follow: false } : { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
