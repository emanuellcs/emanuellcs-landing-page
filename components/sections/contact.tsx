import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Github, Linkedin, Brain } from "lucide-react"

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
    title: "LinkedIn",
    description: "Connect for professional opportunities",
    icon: Linkedin,
    href: "https://linkedin.com/in/emanuellcs",
    buttonText: "View Profile",
    color: "text-blue-500",
  },
  {
    title: "Hugging Face",
    description: "Follow my AI/ML models and datasets",
    icon: Brain,
    href: "https://huggingface.co/emanuellcs",
    buttonText: "View Models",
    color: "text-yellow-400",
  },
  {
    title: "GitHub",
    description: "Explore my code and contributions",
    icon: Github,
    href: "https://github.com/emanuellcs",
    buttonText: "Visit GitHub",
    color: "text-gray-400",
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
          
          <div className="max-w-3xl mx-auto space-y-4 text-gray-300 leading-relaxed">
            <p className="text-xl">
              I am currently open to <strong>Internships</strong>, <strong>Junior Engineering</strong> roles, and 
              <strong>Open Source Collaboration</strong> worldwide.
            </p>
            <p>
              Whether you want to discuss Cloud-Native Architecture, AI/ML pipelines, or Game Engine development 
              (check my <Link href="https://gitlab.com/emanuellcs" className="text-teal-400 hover:underline">GitLab</Link> for that!), 
              I'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <Card key={method.title} className="group card-hover h-full text-center flex flex-col">
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

                  <Button asChild className="w-full mt-auto" leftIcon={<Icon size={18} />}>
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