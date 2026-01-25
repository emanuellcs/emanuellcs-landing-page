import { Code, Server, Cloud, Database, Brain, Layers } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Full Stack Systems",
    description: "React, Next.js, Node.js, and NestJS with production-grade ergonomics.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Docker, Kubernetes, CI/CD pipelines, and AWS cloud delivery.",
  },
  {
    icon: Brain,
    title: "AI/ML Integration",
    description: "Deep Learning, Kaggle experimentation, and Python data workflows.",
  },
  {
    icon: Layers,
    title: "Architecture & Design",
    description: "Clean Architecture, Domain-Driven Design (DDD), and SOLID principles.",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description: "REST/GraphQL APIs, microservices patterns, and high-concurrency systems.",
  },
  {
    icon: Database,
    title: "Data Strategy",
    description: "Relational and NoSQL modeling, query optimization, and caching strategies.",
  },
]

export function About() {
  return (
    <section id="about" className="section-padding bg-gray-800/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-teal-400/10 rounded-3xl mb-8 hover:bg-teal-400/20 transition-colors group">
              <Code className="w-12 h-12 text-teal-400 group-hover:scale-110 transition-transform" />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
              <p>
                I am a <strong>Software Engineering & Computer Science student (2025–2029)</strong> focused on high-performance 
                Full Stack development. I work with an engineering vision, combining modern interfaces with robust backends.
              </p>
              <p>
                My development philosophy is guided by <strong>Clean Architecture</strong>, <strong>Domain-Driven Design (DDD)</strong>, 
                and <strong>SOLID</strong> principles. I strive to create code that scales, maintains, and delivers real value, 
                ensuring production-grade ergonomics in every project.
              </p>
              <p>
                My primary stack anchors on the <strong>TypeScript ecosystem</strong> (Node.js, React, Next.js, NestJS), while 
                strategically utilizing <strong>Python and Go</strong> for automation, data workflows, and concurrency-critical services.
              </p>
              <p>
                I am currently open to <strong>Internships</strong> and <strong>Junior Engineering</strong> roles where I can apply 
                modern web development, cloud-native delivery, and applied AI/ML to real-world systems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
              {highlights.map((highlight) => {
                const Icon = highlight.icon
                return (
                  <div
                    key={highlight.title}
                    className="flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:bg-teal-400/5 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-400/20 transition-colors">
                      <Icon size={24} className="text-teal-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-teal-400 mb-2 text-base">{highlight.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}