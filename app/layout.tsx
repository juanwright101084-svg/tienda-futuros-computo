import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import IntroSequence from "./IntroSequence";
import Footer from "./Footer";

const display = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Compute Capital",
  description: "Mercado de futuros de computo y activos tokenizados",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0A0E14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${mono.variable}`}>
      <body className="bg-[#0A0E14] text-[#F5F3EE] antialiased">
        <IntroSequence>
          {children}
          <Footer />
        </IntroSequence>
      </body>
    </html>
  );
}