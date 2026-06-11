import type { Metadata } from "next";
import { Suez_One, Assistant } from "next/font/google";
import "./globals.css";

// Suez One - bold, characterful Hebrew display serif (warm, editorial, alive)
const suezOne = Suez_One({
  variable: "--font-display",
  subsets: ["latin", "hebrew"],
  weight: "400",
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
    <html lang="he" dir="rtl" className={`${suezOne.variable} ${assistant.variable}`}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
