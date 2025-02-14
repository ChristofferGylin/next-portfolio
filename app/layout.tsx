import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/Language";
import ModalContainer from "@/components/ModalContainer";
import CookieConsent from "@/components/CookieConsent";
import { ModalProvider } from "@/contexts/Modal";
import { cookies } from "next/headers";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

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
          <div className=" h-screen grid grid-rows-[3rem_1fr_3rem]">
          <Menu />
          <ModalProvider>
            <ModalContainer />
            {children}
          </ModalProvider>
          <Footer />
          <CookieConsent />
          </div>
        </LanguageProvider>
        
      </body>
    </html>
  );
}
