import { Code, Cloud, Brain, Shield, Cpu, Globe } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "End-to-end web applications with modern technologies",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "AWS, GCP, and Azure cloud architecture",
  },
  {
    icon: Brain,
    title: "AI/ML Engineering",
    description: "PyTorch, TensorFlow, and multimodal AI systems",
  },
  {
    icon: Shield,
    title: "Security & DevOps",
    description: "Vulnerability analysis and secure system design",
  },
  {
    icon: Cpu,
    title: "Low-Level Programming",
    description: "Rust, C/C++, and system-level development",
  },
  {
    icon: Globe,
    title: "Open Source",
    description: "Active contributor to KDE and other projects",
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
                Dynamic and motivated Full-Stack Developer with a technology journey that began in May 2019. I
                specialize in creating robust and scalable digital solutions, from practical web applications and APIs
                to advanced AI system architectures.
              </p>
              <p>
                My commitment is to develop high-impact solutions, integrating Artificial Intelligence, optimizing
                algorithms, and ensuring software quality. I'm fascinated by the potential of multimodal AI and seek to
                contribute to tools that enhance security governance and quality.
              </p>
              <p>
                Currently working as a Freelance Full-Stack Developer, facing diverse and complex challenges in AI/ML.
                I'm focused on designing architectures and developing innovative Multimodal AI systems, passionate about
                creating effective Security Tools and promoting best practices.
              </p>
              <p>
                As an enthusiast and contributor to open-source projects, I actively contribute to the KDE community,
                working with C++, Qt, and participating in global projects used by millions of users.
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
