import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eric Liu | Software Engineer & Developer",
  description:
    "Eric Zitai Liu is a Computer Science student at McMaster University building real-time systems, multiplayer games, and decision tools.",
  metadataBase: new URL("https://ericzitailiu.com"),
  openGraph: {
    title: "Eric Liu | Software Engineer & Developer",
    description: "Real-time systems, and tools people can trust.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..600&family=Instrument+Sans:wght@400..600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}