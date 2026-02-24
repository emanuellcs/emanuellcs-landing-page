"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowRight, Gitlab, Brain, Smile } from "lucide-react"

const typingStrings = [
  "Full-Stack & Backend Engineer.",
  "Data Scientist & ML Engineer.",
  "TypeScript, Java, Python & Go developer.",
  "Spring Boot, NestJS & React practitioner.",
  "Cloud-Native systems builder.",
  "Clean Architecture & DDD advocate.",
]

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/emanuellcs",
    icon: Github,
    label: "Visit Emanuel's GitHub profile",
    hoverColor: "hover:text-gray-400",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/emanuellcs",
    icon: Linkedin,
    label: "Connect with Emanuel on LinkedIn",
    hoverColor: "hover:text-blue-500",
  },
  {
    name: "Kaggle",
    href: "https://www.kaggle.com/emanuellcs",
    icon: Brain,
    label: "Visit Emanuel's Kaggle profile",
    hoverColor: "hover:text-blue-400",
  },
  {
    name: "Hugging Face",
    href: "https://huggingface.co/emanuellcs",
    icon: Smile,
    label: "Visit Emanuel's Hugging Face profile",
    hoverColor: "hover:text-yellow-400",
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/emanuellcs",
    icon: Gitlab,
    label: "Visit Emanuel's GitLab profile",
    hoverColor: "hover:text-orange-500",
  },
  {
    name: "Email",
    href: "mailto:emanuellzr01@outlook.com",
    icon: Mail,
    label: "Send Emanuel an email",
    hoverColor: "hover:text-teal-400",
  },
]

export function Hero() {
  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const currentString = typingStrings[currentStringIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentString) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentStringIndex((prev) => (prev + 1) % typingStrings.length)
      } else {
        setCurrentText(
          isDeleting
            ? currentString.substring(0, currentText.length - 1)
            : currentString.substring(0, currentText.length + 1),
        )
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentStringIndex])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center section-padding pt-32">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full ring-4 ring-teal-400/50 ring-offset-4 ring-offset-gray-900 overflow-hidden hover:ring-teal-400 transition-all duration-300">
                  <Image
                    src="https://github.com/emanuellcs.png"
                    alt="Emanuel Lázaro"
                    width={176}
                    height={176}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <span
                  className="absolute bottom-1 right-1 w-5 h-5 bg-teal-400 rounded-full border-2 border-gray-900"
                  title="Available for work"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Hi! I'm <span className="gradient-text">Emanuel Lázaro</span>.
              </h1>

              <div className="text-xl sm:text-2xl lg:text-3xl text-gray-300 min-h-[2.5rem] lg:min-h-[3rem]">
                A{" "}
                <span className="text-teal-400 font-medium">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>

              <p className="text-lg text-gray-400 italic max-w-2xl mx-auto">
                "Building scalable systems with clean interfaces, robust backends, and measurable outcomes."
              </p>

              <p className="text-base sm:text-lg text-gray-500 flex items-center justify-center gap-2">
                <span>📍</span> Mucambo, Brazil 🇧🇷
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={scrollToProjects} className="group" rightIcon={<ArrowRight size={18} />}>
                View My Work
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`p-3 text-gray-400 ${link.hoverColor} transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-full`}
                    aria-label={link.label}
                  >
                    <Icon size={24} />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}