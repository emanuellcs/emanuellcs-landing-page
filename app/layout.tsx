import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { ParticleBackground } from "@/components/ui/particle-background";

export const metadata: Metadata = {
  title:
    "Emanuel Lázaro | Full-Stack Software Engineer, Data Scientist & AI/ML Engineer",
  description:
    "Emanuel Lázaro is a Full-Stack Software Engineer and Data Scientist specializing in TypeScript, Java, Python, and Go. Double Degree student in Software Engineering & Computer Science, building scalable cloud-native systems and Deep Learning models.",
  keywords: [
    "Full-Stack Engineer",
    "Backend Developer",
    "Java Spring Boot",
    "Next.js Portfolio",
    "Data Science",
    "WebGL",
    "Brazil Developer",
    "AI/ML Engineer",
    "TypeScript",
    "Python",
    "Go",
    "Cloud Native",
  ],
  authors: [{ name: "Emanuel Lázaro" }],
  creator: "Emanuel Lázaro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emanuellcs.vercel.app",
    title:
      "Emanuel Lázaro | Full-Stack Software Engineer, Data Scientist & AI/ML Engineer",
    description:
      "Full-Stack Software Engineer and Data Scientist specializing in TypeScript, Java, Python, and Go. Building scalable cloud-native systems and Deep Learning models.",
    siteName: "Emanuel Lázaro's Portfolio",
    images: [
      {
        url: "https://github.com/emanuellcs.png",
        width: 1200,
        height: 630,
        alt: "Emanuel Lázaro - Full-Stack Engineer, Data Scientist & AI/ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Emanuel Lázaro | Full-Stack Software Engineer, Data Scientist & AI/ML Engineer",
    description:
      "Full-Stack Software Engineer and Data Scientist specializing in TypeScript, Java, Python, and Go.",
    images: ["https://github.com/emanuellcs.png"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Emanuel Lázaro",
  jobTitle: "Full-Stack Software Engineer, Data Scientist & AI/ML Engineer",
  url: "https://emanuellcs.vercel.app",
  image: "https://github.com/emanuellcs.png",
  sameAs: [
    "https://github.com/emanuellcs",
    "https://linkedin.com/in/emanuellcs",
    "https://www.kaggle.com/emanuellcs",
    "https://huggingface.co/emanuellcs",
    "https://gitlab.com/emanuellcs",
  ],
  knowsAbout: [
    "Full-Stack Development",
    "Data Science",
    "AI/ML",
    "TypeScript",
    "Java",
    "Python",
    "Go",
    "Spring Boot",
    "Next.js",
    "Cloud Native",
    "Deep Learning",
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://emanuellcs.vercel.app",
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
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-gray-900 text-gray-100 antialiased">
        <ParticleBackground />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
