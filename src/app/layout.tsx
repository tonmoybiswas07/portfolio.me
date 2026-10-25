import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ToastContainer } from "react-toastify";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tonmoybiswas.dev"),
  title: "Tonmoy Biswas | Frontend & MERN Stack Developer",
  description:
    "Portfolio of Tonmoy Biswas, a Frontend & MERN Stack Developer based in Dhaka, Bangladesh specializing in high-performance web applications with clean, responsive user interfaces.",
  keywords: [
    "Tonmoy Biswas",
    "Frontend Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Portfolio",
    "Web Developer Dhaka Bangladesh",
  ],
  authors: [{ name: "Tonmoy Biswas", url: "https://github.com/tonmoybiswas07" }],
  creator: "Tonmoy Biswas",
  openGraph: {
    title: "Tonmoy Biswas | Frontend & MERN Stack Developer",
    description:
      "Frontend & MERN Stack Developer building modern, performant web applications with React, Next.js, and TypeScript.",
    url: "https://tonmoybiswas.dev",
    siteName: "Tonmoy Biswas Portfolio",
    images: [
      {
        url: "/images/tonmoy-profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Tonmoy Biswas - Frontend & MERN Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tonmoy Biswas | Frontend & MERN Stack Developer",
    description:
      "Frontend & MERN Stack Developer building modern web applications with React, Next.js, and TypeScript.",
    creator: "@TonmoyBiswas945",
    images: ["/images/tonmoy-profile.jpeg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0B1220] font-sans text-[#F8FAFC] antialiased selection:bg-[#22D3EE] selection:text-[#0B1220]">
        <Navbar />
        <main id="main-content" className="relative min-h-screen overflow-hidden">
          {children}
        </main>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={3500}
          theme="dark"
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </body>
    </html>
  );
}
