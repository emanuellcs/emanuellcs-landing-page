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
  title: "Emanuel Lázaro - Software Developer",
  description:
    "Full stack developer and Software Engineering student passionate about creating innovative, user-friendly digital solutions.",
  keywords: ["software developer", "full stack", "web development", "react", "next.js", "python", "machine learning"],
  authors: [{ name: "Emanuel Lázaro" }],
  creator: "Emanuel Lázaro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emanuellazaro.dev",
    title: "Emanuel Lázaro - Software Developer",
    description:
      "Full stack developer and Software Engineering student passionate about creating innovative, user-friendly digital solutions.",
    siteName: "Emanuel Lázaro Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emanuel Lázaro - Software Developer",
    description:
      "Full stack developer and Software Engineering student passionate about creating innovative, user-friendly digital solutions.",
    creator: "@emanuellcs01",
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
    generator: 'v0.dev'
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
