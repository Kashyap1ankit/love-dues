import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ValBreak",
  description: "Get Insaaf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` max-w-7xl  mx-auto antialiased bg-gradient-to-l from-customLightPink to-customPink mt-24`}
      >
        {children}
      </body>
    </html>
  );
}
