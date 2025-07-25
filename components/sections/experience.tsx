import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Volunteer Developer",
    company: "KDE",
    location: "Mucambo, Ceará, Brasil",
    period: "June 2025 - Present",
    duration: "2 months",
    type: "Volunteer",
    description: "Contributing as a volunteer developer to the KDE open-source community.",
    achievements: [
      "Learning and applying C++, Qt, and Git through real contributions",
      "Working on 'good first issues', including minor bug fixes and UI/UX improvements",
      "Collaborating with experienced developers in code reviews and discussions",
      "Participating in a global open-source project used by millions of users",
      "Gaining practical experience with open-source workflows, CI/CD pipelines, and version control",
    ],
    note: "This is a self-initiated and unpaid role, focused on learning and contributing to free software.",
  },
  {
    title: "Intern",
    company: "Arte Gráfica",
    location: "Mucambo, Ceará, Brasil",
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

                {exp.note && (
                  <div className="mt-4 p-3 bg-teal-400/5 border border-teal-400/20 rounded-lg">
                    <p className="text-sm text-teal-300 italic">{exp.note}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
