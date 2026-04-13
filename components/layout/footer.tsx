import Link from "next/link";
import Image from "next/image";
import { Mail, Brain, Smile } from "lucide-react";
import {
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaGitlab as Gitlab,
} from "react-icons/fa6";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/emanuellcs",
    icon: Github,
    label: "Visit Emanuel's GitHub profile",
    hoverColor: "hover:text-gray-300",
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
];

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container-custom py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Profile Picture */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full ring-2 ring-teal-400/40 ring-offset-2 ring-offset-gray-950 overflow-hidden hover:ring-teal-400 transition-all duration-300">
              <Image
                src="https://github.com/emanuellcs.png"
                alt="Emanuel Lázaro - Portfolio Profile"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-teal-400 rounded-full border-2 border-gray-950" />
          </div>

          {/* Name & title */}
          <div className="text-center">
            <p className="text-white font-semibold">Emanuel Lázaro</p>
            <p className="text-gray-400 text-sm mt-0.5">
              Full-Stack Engineer · Data Scientist · AI/ML Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`p-3 text-gray-400 ${link.hoverColor} transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-950 rounded-full`}
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gray-800" />

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} Emanuel Lázaro. All rights reserved.
            </p>
            <p className="mt-1">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
