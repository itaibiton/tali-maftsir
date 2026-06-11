import type { Metadata } from "next";
import { Rubik, Assistant } from "next/font/google";
import "./globals.css";

// Rubik - geometric, friendly Hebrew display sans (young, modern, energetic in bold)
const rubik = Rubik({
  variable: "--font-display",
  subsets: ["latin", "hebrew"],
  weight: ["500", "700", "800"],
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
    <html lang="he" dir="rtl" className={`${rubik.variable} ${assistant.variable}`}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
