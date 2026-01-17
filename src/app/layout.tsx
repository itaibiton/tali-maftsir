import type { Metadata } from "next";
import { Playpen_Sans_Hebrew } from "next/font/google";
import { Lato } from "next/font/google";
import "./globals.css";

// Playpen Sans Hebrew - warm, friendly font for headings with full Hebrew support
const playpenSans = Playpen_Sans_Hebrew({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Warm, friendly sans-serif for body text - human, approachable
const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
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
    <html lang="he" dir="rtl" className={`${playpenSans.variable} ${lato.variable}`}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
