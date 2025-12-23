import { Code, Server, Cloud, Database, Brain, Gamepad2 } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Cross-Platform Dev",
    description: "React, Vue, Angular, React Native, and Electron apps",
  },
  {
    icon: Server,
    title: "API & Microservices",
    description: "RESTful & GraphQL architectures with async patterns",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "AWS, Azure, GCP deployments with Docker & K8s",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description: "Scalable SQL and NoSQL database solutions",
  },
  {
    icon: Brain,
    title: "AI/ML Systems",
    description: "PyTorch, TensorFlow, and LLM integration",
  },
  {
    icon: Gamepad2,
    title: "Game Engine Dev",
    description: "C++, C#, Rust, Physics, and Math optimization",
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
                I am a Full Stack Software Engineer and a double-degree student in <strong>Software Engineering & Computer Science</strong>, 
                based in Mucambo, Brazil. My development philosophy centers on creating code that scales, maintains, and delivers real value.
              </p>
              <p>
                My primary focus lies in <strong>Full Stack Development</strong> and <strong>Cloud-Native Architecture</strong>. 
                I specialize in building scalable web applications, exploring microservices architectures, and deploying robust systems 
                to multi-cloud environments using modern orchestration tools.
              </p>
              <p>
                Beyond standard application development, I use <strong>Game Development</strong> as a multidisciplinary laboratory. 
                In my spare time, I create engines and games using <strong>C++, C#, and Rust</strong>. This hobby consolidates my 
                Computer Science fundamentals by combining physics, mathematics, logic, and optimization into complex engineering projects.
              </p>
              <p>
                I am currently open to <strong>Internships</strong> and <strong>Junior Engineering</strong> roles where I can apply my skills 
                in backend engineering, DevOps, and AI/ML to build tomorrow's solutions with today's code.
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