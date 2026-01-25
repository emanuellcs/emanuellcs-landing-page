import { Code, Layout, Server, Brain, Cloud, Database } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      { name: "TypeScript", icon: "📘" },
      { name: "JavaScript", icon: "⚡" },
      { name: "Python", icon: "🐍" },
      { name: "Go", icon: "🐹" },
      { name: "SQL", icon: "💾" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "NestJS", icon: "🦁" },
      { name: "Express.js", icon: "🚂" },
      { name: "FastAPI", icon: "⚡" },
      { name: "Go Gin", icon: "🍸" },
      { name: "GraphQL", icon: "◈" },
    ],
  },
  {
    title: "Frontend Development",
    icon: Layout,
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind CSS", icon: "🌊" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "Vite", icon: "⚡" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "⚓" },
      { name: "CI/CD", icon: "🔄" },
      { name: "Azure", icon: "🟦" },
      { name: "Google Cloud", icon: "🌈" },
      { name: "Lambda", icon: "⚡" },
      { name: "CloudFormation", icon: "🏗️" },
    ],
  },
  {
    title: "AI/ML & Data",
    icon: Brain,
    skills: [
      { name: "PyTorch", icon: "🔥" },
      { name: "TensorFlow", icon: "🧠" },
      { name: "Hugging Face", icon: "🤗" },
      { name: "Scikit-learn", icon: "📊" },
      { name: "Pandas", icon: "🐼" },
      { name: "NumPy", icon: "🔢" },
      { name: "Kaggle", icon: "🏅" },
    ],
  },
  {
    title: "Databases & Caching",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MySQL", icon: "🐬" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Redis", icon: "🔴" },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-gray-800/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full" />
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            My stack anchors on the <strong>TypeScript ecosystem</strong> (Node.js, React, Next.js, NestJS), 
            supported by <strong>Python and Go</strong> for automation, data workflows, and concurrency-critical services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon
            return (
              <div
                key={category.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:bg-teal-400/5 group"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-400/10 rounded-2xl mb-4 group-hover:bg-teal-400/20 transition-colors">
                    <CategoryIcon size={32} className="text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold text-teal-400 mb-2">{category.title}</h3>
                  <div className="w-12 h-0.5 bg-teal-400 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center p-3 rounded-xl bg-gray-900/50 hover:bg-teal-400/10 transition-all duration-300 hover:scale-105 group/skill"
                    >
                      <span className="text-xl mb-2 group-hover/skill:scale-110 transition-transform">
                        {skill.icon}
                      </span>
                      <span className="text-xs font-medium text-center text-gray-300 group-hover/skill:text-teal-400 transition-colors leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}