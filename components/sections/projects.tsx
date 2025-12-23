import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Gitlab, Brain, ArrowRight, Layers, Cpu, Network } from "lucide-react"

const platforms = [
  {
    title: "Open Source & Web",
    platform: "GitHub",
    description: "My primary hub for full-stack applications, cloud-native systems, and developer tools. Home to my experiments with Node.js, Go, and microservices architecture.",
    icon: Github,
    secondaryIcon: Network,
    href: "https://github.com/emanuellcs",
    color: "text-gray-200",
    hoverColor: "group-hover:text-white",
    bgColor: "bg-gray-800",
    tags: ["Full Stack", "Cloud Native", "DevOps"],
  },
  {
    title: "Game Engines & Systems",
    platform: "GitLab",
    description: "A multidisciplinary laboratory for low-level engineering. Here I build game engines, physics simulations, and graphics renderers using C++, C#, and Rust.",
    icon: Gitlab,
    secondaryIcon: Cpu,
    href: "https://gitlab.com/emanuellcs",
    color: "text-orange-500",
    hoverColor: "group-hover:text-orange-400",
    bgColor: "bg-orange-900/20",
    tags: ["C++", "Rust", "Game Dev"],
  },
  {
    title: "AI & Machine Learning",
    platform: "Hugging Face",
    description: "The repository for my research into artificial intelligence. Includes trained models, datasets, and experiments with PyTorch, TensorFlow, and LLMs.",
    icon: Brain,
    secondaryIcon: Layers,
    href: "https://huggingface.co/emanuellcs",
    color: "text-yellow-400",
    hoverColor: "group-hover:text-yellow-300",
    bgColor: "bg-yellow-900/20",
    tags: ["PyTorch", "TensorFlow", "MLOps"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Code <span className="gradient-text">Repositories</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I organize my development work across specialized platforms to maintain clean architecture and focus. 
            Explore my code based on your area of interest.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {platforms.map((item) => {
            const Icon = item.icon
            const SecondaryIcon = item.secondaryIcon
            
            return (
              <Card key={item.title} className="group card-hover h-full flex flex-col relative overflow-hidden border-gray-800">
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${item.bgColor} rounded-bl-full -mr-8 -mt-8 opacity-20 transition-opacity group-hover:opacity-40`} />
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl bg-gray-800 border border-gray-700 ${item.color} ${item.hoverColor} transition-colors`}>
                      <Icon size={32} />
                    </div>
                    <SecondaryIcon size={24} className="text-gray-600 group-hover:text-teal-400 transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <span className={`text-sm font-bold tracking-wider uppercase ${item.color}`}>{item.platform}</span>
                    <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="flex-grow relative z-10">
                  <CardDescription className="text-gray-400 leading-relaxed mb-6">
                    {item.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-md border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0 relative z-10">
                  <Button 
                    asChild 
                    className="w-full group-hover:bg-teal-500 group-hover:text-white transition-all duration-300"
                    variant="secondary"
                  >
                    <Link href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      Visit Profile <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}