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
        <div className="ticker-bar py-1.5">
          <div className="ticker-content">
            RBLSN_PORTFOLIO v2.0 — STATUS: ONLINE — DEV: GABRIEL NICOLAS ROBLES — STACK: NEXT.JS / REACT / TYPESCRIPT — AVAILABLE FOR WORK — RBLSN_PORTFOLIO v2.0 — STATUS: ONLINE — DEV: GABRIEL NICOLAS ROBLES — STACK: NEXT.JS / REACT / TYPESCRIPT — AVAILABLE FOR WORK —&nbsp;
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
