import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const education = [
  {
    degree: "Bachelor's Degree",
    field: "Computer Science",
    institution: "Uninter",
    period: "November 2025 - November 2029",
    location: "Brazil",
    status: "Enrolled",
    type: "Bachelor's Degree",
  },
  {
    degree: "Bachelor's Degree",
    field: "Software Engineering",
    institution: "Estácio",
    period: "January 2025 - January 2029",
    location: "Brazil",
    status: "In Progress",
    type: "Bachelor's Degree",
  },
  {
    degree: "Formation Course",
    field: "Software Engineer",
    institution: "Escola DNC",
    period: "April 2025 - November 2025",
    location: "Brazil",
    status: "In Progress",
    type: "Professional Course",
  },
  {
    degree: "Integrated Technical Course",
    field: "Systems Development",
    institution: "EEEP Professora Maria de Jesus Rodrigues Alves",
    period: "January 2022 - December 2024",
    location: "Brazil",
    status: "Completed",
    type: "Technical Degree",
  },
]

const certifications = [
  "AWS Lambda",
  "AWS CloudFormation",
  "Amazon Web Services",
  "Jornada de Orientação de Carreira",
  "5G Basics: What it's all about",
  "HCIA-5G V2.0 Course",
  "React Development",
  "Introduction to Web Development",
]

export function Education() {
  return (
    <section id="education" className="section-padding bg-gray-800/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-teal-400 mb-8 text-center">Academic Background</h3>
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="group card-hover">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-teal-400/10 rounded-xl flex items-center justify-center">
                          <GraduationCap size={24} className="text-teal-400" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-1">{edu.degree}</CardTitle>
                          <CardDescription className="text-lg font-medium text-teal-400 mb-2">
                            {edu.field}
                          </CardDescription>
                          <p className="text-gray-300 font-medium">{edu.institution}</p>
                        </div>
                      </div>
                      <div className="flex flex-col lg:items-end gap-2">
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar size={16} className="mr-2" />
                          {edu.period}
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <MapPin size={16} className="mr-2" />
                          {edu.location}
                        </div>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                            edu.status === "Completed"
                              ? "bg-green-400/10 text-green-400 border-green-400/20"
                              : "bg-blue-400/10 text-blue-400 border-blue-400/20"
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-teal-400 mb-8 text-center">Certifications & Courses</h3>
            <Card className="group card-hover">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:bg-teal-400/5"
                    >
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-300 font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}