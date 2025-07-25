import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Github, Linkedin } from "lucide-react"

const contactMethods = [
  {
    title: "Email",
    description: "emanuellzr01@outlook.com",
    icon: Mail,
    href: "mailto:emanuellzr01@outlook.com",
    buttonText: "Send Email",
    color: "text-blue-400",
  },
  {
    title: "GitHub",
    description: "Check out my open source projects and contributions",
    icon: Github,
    href: "https://github.com/emanuellcs",
    buttonText: "Visit GitHub",
    color: "text-gray-400",
  },
  {
    title: "LinkedIn",
    description: "Connect with me professionally",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/emanuellcs",
    buttonText: "View Profile",
    color: "text-blue-500",
  },
]

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm always eager to connect with fellow developers, potential collaborators, and anyone interested in
            technology. Whether you have a project idea, want to discuss AI/ML, open source contributions, or just chat
            about the latest in software engineering, I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <Card key={method.title} className="group card-hover h-full text-center">
                <CardHeader className="pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-400/10 rounded-2xl mx-auto mb-4 group-hover:bg-teal-400/20 transition-colors">
                    <Icon size={32} className={`${method.color} group-hover:text-teal-400 transition-colors`} />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="text-gray-300 mb-6 flex-grow leading-relaxed">
                    {method.description}
                  </CardDescription>

                  <Button asChild className="w-full" leftIcon={<Icon size={18} />}>
                    <Link
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {method.buttonText}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
