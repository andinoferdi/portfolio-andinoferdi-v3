import type React from "react";
import type { Metadata } from "next";
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "aos/dist/aos.css"; // AOS styles
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ParallaxProvider from "@/components/parallax-provider";
import Particles from "@/components/particles";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Andino Ferdi - Portfolio",
  description: "Personal portfolio website of Andino Ferdi",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="/js/particles.js" strategy="beforeInteractive" />
        <Script src="/js/theme-script.js" strategy="beforeInteractive" />
      </head>
      <body>
        <Particles id="particles-js" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="theme"
        >
          <ParallaxProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ParallaxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
