import type { Metadata } from "next";
import { Source_Code_Pro } from 'next/font/google';

import "./globals.css";
import Navbar from "./components/Navbar";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rawan ElShishtawy | Portfolio",
  description: "Front-end developer, Software Developer, Freenlancer portfolio built with Next.js & Tailwind.",
  metadataBase: new URL("https://rawan-elshishtawy-portofolio.netlify.app/"), // change after deploy
  openGraph: {
    title: "Rawan ElShishtawy | Portfolio",
    description: "Front-end developer portfolio built with Next.js & Tailwind.",
    type: "website",
    url: "https://rawan-elshishtawy-portofolio.netlify.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth w-full h-full bg-dark-bg overflow-x-hidden">
      <body className={sourceCodePro.className}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
