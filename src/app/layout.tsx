import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Мейірім — Многопрофильный медицинский центр в Астане",
  description:
    "Современная многопрофильная клиника в центре Астаны. Диагностика, консультации, стационар и хирургия. 25 специальностей, современное оборудование, национальная аккредитация.",
  keywords: [
    "клиника мейірім",
    "мейірім астана",
    "астана мейірім",
    "клиника астана",
    "медицинский центр",
    "диагностика астана",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-theme="light">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
