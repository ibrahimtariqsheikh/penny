import type { Metadata } from "next";
import { Comic_Neue, Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Navbar from "@/components/site/navbar";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Penny The Panda",
  description: "$PENNY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={clsx(font.className, "antialiased w-full")}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
