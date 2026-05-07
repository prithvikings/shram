import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  DM_Mono,
  DM_Sans,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

// Import the ThemeProvider we just created
import { ThemeProvider } from "./components/theme-provider"; // <-- Adjust path if needed

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dm-sans",
  display: "swap",
});

// UPDATED: Mapping the new font files from your public folder
const gilroy = localFont({
  src: [
    {
      path: "../public/fonnts.com-Gilroy-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonnts.com-Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonnts.com-Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonnts.com-Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonnts.com-Gilroy-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Shram.ai",
    default: "Shram.ai | Stop forgetting to reply to people",
  },
  description: "Shram quietly monitors your chats and emails. When someone needs a reply or meeting, it drafts the perfect response instantly.",
  keywords: ["AI chat monitor", "auto reply AI", "meeting assistant", "Shram AI", "indidino", "personal memory layer", "productivity AI", "automated drafts"],
  authors: [{ name: "Shram.ai Team" }],
  creator: "Shram.ai",
  publisher: "Shram.ai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://shram.ai"), // Update with actual production URL
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shram.ai | Stop forgetting to reply to people",
    description: "Your personal memory layer: zero missed messages or meetings. Shram drafts perfect responses for your chats and emails instantly.",
    url: "https://shram.ai",
    siteName: "Shram.ai",
    images: [
      {
        url: "/og-image.png", // Ensure this exists or I'll need to generate a placeholder/instruction
        width: 1200,
        height: 630,
        alt: "Shram.ai - Personal Memory Layer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shram.ai | Stop forgetting to reply to people",
    description: "Never miss a reply again. Shram monitors your chats and drafts responses automatically.",
    images: ["/og-image.png"],
    creator: "@shram_ai",
  },
  icons: {
    icon: [
      { url: "/logo.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: "/logo.png",
    apple: "/favicon-dark.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning // <-- IMPORTANT: Prevents next-themes hydration mismatch
      className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${dmMono.variable} ${spaceGrotesk.variable} ${gilroy.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col selection:bg-sky-500 selection:text-white dark:selection:bg-sky-500 dark:selection:text-white bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
