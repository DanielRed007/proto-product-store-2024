import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Comfortaa } from "@next/font/google";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const confortaa = Comfortaa({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en' className={confortaa.className}>
      <ThemeProvider>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
