import type React from "react";
import type { Metadata } from "next";
import { Fira_Code, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { ParticleBackground } from "@/components/ui/particle-background";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emanuel Lázaro - Full-Stack Engineer, Data Scientist & ML Engineer",
  description:
    "Full-Stack Engineer, Data Scientist & ML Engineer. Double Degree student in Software Engineering & Computer Science. Building scalable cloud-native systems with TypeScript, Java, Python, and Go — and training Deep Learning models with PyTorch and TensorFlow.",
  keywords: [
    "full-stack engineer",
    "data scientist",
    "machine learning engineer",
    "software engineering student",
    "computer science student",
    "typescript",
    "javascript",
    "java",
    "spring boot",
    "spring cloud",
    "python",
    "go",
    "react",
    "next.js",
    "nestjs",
    "node.js",
    "pytorch",
    "tensorflow",
    "hugging face",
    "kaggle",
    "deep learning",
    "nlp",
    "computer vision",
    "cloud native",
    "microservices",
    "distributed systems",
    "docker",
    "kubernetes",
    "aws",
    "clean architecture",
    "domain-driven design",
  ],
  authors: [{ name: "Emanuel Lázaro" }],
  creator: "Emanuel Lázaro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emanuellcs.vercel.app",
    title: "Emanuel Lázaro - Full-Stack Engineer, Data Scientist & ML Engineer",
    description:
      "Full-Stack Engineer, Data Scientist & ML Engineer. Double Degree student in Software Engineering & Computer Science. Building scalable cloud-native systems with TypeScript, Java, Python, and Go — and training Deep Learning models with PyTorch and TensorFlow.",
    siteName: "Emanuel Lázaro's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emanuel Lázaro - Full-Stack Engineer, Data Scientist & ML Engineer",
    description:
      "Full-Stack Engineer, Data Scientist & ML Engineer. Double Degree student in Software Engineering & Computer Science. Building scalable cloud-native systems with TypeScript, Java, Python, and Go — and training Deep Learning models with PyTorch and TensorFlow.",
    creator: "@emanuellcs",
  },
  icons: {
    icon: "https://github.com/emanuellcs.png",
    shortcut: "https://github.com/emanuellcs.png",
    apple: "https://github.com/emanuellcs.png",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${firaCode.variable} ${jetbrainsMono.variable} font-mono bg-gray-900 text-gray-100 antialiased`}
      >
        <ParticleBackground />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
