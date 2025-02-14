import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/Language";
import ModalContainer from "@/components/ModalContainer";
import CookieConsent from "@/components/CookieConsent";
import { ModalProvider } from "@/contexts/Modal";
import { cookies } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookieStore = await cookies()
  const consent = cookieStore.get('consent')

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider consent={consent}>
          <CookieConsent />
          <ModalProvider>
            <ModalContainer />
            {children}
          </ModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
