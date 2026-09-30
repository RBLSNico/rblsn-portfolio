import type { Metadata } from "next";
import { Syne, IBM_Plex_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "RBLSN — Portfolio",
  description: "Gabriel Nicolas Robles — Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/svg/rblsn.svg" />
      </head>
      <body
        className={`${syne.variable} ${ibmPlexMono.variable} ${dmSans.variable} bg-grid min-h-screen`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
