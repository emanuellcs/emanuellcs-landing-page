import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Palette, Zap, Shield } from "lucide-react"

const projects = [
  {
    title: "SaberLink",
    description: "Free educational resources for ENEM and university entrance exams.",
    icon: <Shield className="w-8 h-8" />,
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://projetosocialds3.github.io/SaberLink/",
    githubUrl: "https://github.com/ProjetoSocialDS3/SaberLink",
  },
  {
    title: "Pyn",
    description:
      "A Python-based tool for password analysis and generation, featuring strength evaluation and compromised password detection.",
    icon: <Shield className="w-8 h-8" />,
    technologies: ["Python", "Security"],
    githubUrl: "https://github.com/emanuellcs/pyn",
  },
  {
    title: "Drawtcha",
    description:
      "A drawing-based CAPTCHA system that uses AI to verify human input. Built with Python, TensorFlow, PyTorch, and React (in development).",
    icon: <Palette className="w-8 h-8" />,
    technologies: ["Python", "TensorFlow", "PyTorch", "React", "AI/ML"],
    githubUrl: "https://github.com/emanuellcs/drawtcha",
  },
  {
    title: "Entropicrust",
    description:
      "Rust-based project exploring chaotic systems through high-performance simulations with advanced visualization capabilities.",
    icon: <Zap className="w-8 h-8" />,
    technologies: ["Rust", "Physics", "Mathematics", "Visualization"],
    githubUrl: "https://github.com/emanuellcs/entropicrust",
  },
]

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={project.title} className="group card-hover h-full flex flex-col">
              <CardHeader className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-teal-400/10 rounded-2xl mx-auto mb-4 group-hover:bg-teal-400/20 transition-colors">
                  <div className="text-teal-400 group-hover:scale-110 transition-transform">{project.icon}</div>
                </div>
                <CardTitle className="text-xl mb-3 text-center">{project.title}</CardTitle>
                <CardDescription className="text-gray-300 leading-relaxed text-center">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow p-6 pt-0">
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-400 rounded-full border border-teal-400/20 hover:bg-teal-400/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex gap-3">
                {project.liveUrl && (
                  <Button
                    variant="secondary"
                    size="sm"
                    asChild
                    className="flex-1"
                    leftIcon={<ExternalLink size={16} />}
                  >
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </Link>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 bg-transparent"
                    leftIcon={<Github size={16} />}
                  >
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-xl text-gray-300 mb-4">And more projects coming soon!</h3>
          </div>
          <Button size="lg" asChild leftIcon={<Github size={20} />}>
            <Link href="https://github.com/emanuellcs" target="_blank" rel="noopener noreferrer">
              See All on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
