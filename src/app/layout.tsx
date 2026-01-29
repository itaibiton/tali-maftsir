import type { Metadata } from "next";
import { Heebo, Assistant } from "next/font/google";
import "./globals.css";

// Heebo - modern, clean Hebrew display font (fresh, sophisticated)
const heebo = Heebo({
  variable: "--font-display",
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "700", "800"],
  display: "swap",
});

// Assistant - clean, friendly body text with excellent Hebrew support
const assistant = Assistant({
  variable: "--font-body",
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "טלי מפציר | ליווי אישי בשיטת סאטיה",
  description: "ליווי אישי ומקצועי בשיטת סאטיה לצמיחה אישית, תקשורת זוגית ומשפחתית",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${assistant.variable}`}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
