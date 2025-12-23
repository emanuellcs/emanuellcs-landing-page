import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Full Stack Software Engineer",
    company: "Freelance / Self-Employed",
    location: "Mucambo, Ceará, Brazil (Remote)",
    period: "May 2019 - Present",
    duration: "5+ years",
    type: "Freelance",
    description: "Designing and developing scalable full-stack solutions, focusing on cloud-native architectures, microservices, and high-performance systems.",
    achievements: [
      "Architecting and building RESTful & GraphQL APIs using Node.js, Go, and Python",
      "Deploying microservices to multi-cloud environments (AWS, Azure, GCP) using Docker and Kubernetes",
      "Developing responsive cross-platform applications with React, Vue, React Native, and Electron",
      "Implementing secure authentication systems and optimizing database performance (SQL & NoSQL)",
      "Integrating AI/ML models (PyTorch/TensorFlow) into production web applications",
    ],
  },
  {
    title: "Intern",
    company: "Arte Gráfica",
    location: "Mucambo, Ceará, Brazil",
    period: "August 2024 - December 2024",
    duration: "5 months",
    type: "Internship",
    description: "Gained practical experience in graphic design and digital media production.",
    achievements: [
      "Developed skills in graphic design and visual communication",
      "Worked with design software and digital media tools",
      "Collaborated on various design projects and client deliverables",
      "Applied technical knowledge in a professional environment",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="group card-hover">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-teal-400 mb-2">{exp.company}</CardDescription>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-400/10 text-teal-400 border border-teal-400/20">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-teal-400 text-sm">Key Achievements & Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-300">
                        <span className="text-teal-400 mr-3 mt-1.5 flex-shrink-0">•</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}