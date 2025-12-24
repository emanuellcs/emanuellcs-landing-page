import type React from "react"
import type { Metadata } from "next"
import { Fira_Code } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { ParticleBackground } from "@/components/ui/particle-background"

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Emanuel Lázaro - Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer and Double Degree student in SE & CS. Passionate about building scalable cloud-native architectures and AI/ML solutions.",
  keywords: [
    "software engineer",
    "computer science student",
    "full stack",
    "cloud native",
    "distributed systems",
    "microservices",
    "typescript",
    "go",
    "python",
    "react",
    "next.js",
    "dotnet",
    "kubernetes",
    "machine learning"
  ],
  authors: [{ name: "Emanuel Lázaro" }],
  creator: "Emanuel Lázaro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emanuellcs.vercel.app",
    title: "Emanuel Lázaro - Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer and Double Degree student in SE & CS. Passionate about building scalable cloud-native architectures and AI/ML solutions.",
    siteName: "Emanuel Lázaro's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emanuel Lázaro - Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer and Double Degree student in SE & CS. Passionate about building scalable cloud-native architectures and AI/ML solutions.",
    creator: "@emanuellcs",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${firaCode.variable} font-mono bg-gray-900 text-gray-100 antialiased`}>
        <ParticleBackground />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
