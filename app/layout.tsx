import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sigmar, PT_Sans_Narrow } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const sigmar = Sigmar({
  weight: "400",
  variable: "--font-sigmar",
  subsets: ["latin"],
});

const ptSansNarrow = PT_Sans_Narrow({
  variable: "--font-pt-sans-narrow",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RBLSN - Portfolio",
  description: "Created by create RBLSNico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/rblsn.svg" />
      </head>
      <body
        className={`${plusJakartaSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
