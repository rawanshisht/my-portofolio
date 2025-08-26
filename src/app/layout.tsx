import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Source_Code_Pro } from 'next/font/google';

import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rawan ElShishtawy | Portfolio",
  description: "Front-end developer portfolio built with Next.js & Tailwind.",
  metadataBase: new URL("https://your-domain.com"), // change after deploy
  openGraph: {
    title: "Rawan ElShishtawy | Portfolio",
    description: "Front-end developer portfolio built with Next.js & Tailwind.",
    type: "website",
    url: "https://your-domain.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth w-full h-full bg-blue-950 overflow-x-hidden">
      <body className={sourceCodePro.className}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
