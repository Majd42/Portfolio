import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Background from "./components/background/Background";
import Mouse from "./components/Mouse";
import StoreProvider from "./StoreProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Majd Shaheen | Dev",
  description: "My personal web developer portfolio ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Mouse />
        <Background />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
