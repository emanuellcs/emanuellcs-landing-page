import {
  Code,
  Server,
  Cloud,
  Database,
  Brain,
  Layers,
  Coffee,
  Cpu,
} from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Systems",
    description:
      "React, Next.js, Node.js, and NestJS with production-grade ergonomics.",
  },
  {
    icon: Coffee,
    title: "Java / Spring Backend",
    description:
      "Spring Boot, Spring Cloud, JPA/Hibernate, Spring Security, and Maven/Gradle.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Docker, Kubernetes, CI/CD pipelines, and AWS cloud delivery.",
  },
  {
    icon: Brain,
    title: "AI/ML Integration",
    description:
      "Deep Learning, Kaggle experimentation, and Python data workflows.",
  },
  {
    icon: Layers,
    title: "Architecture & Design",
    description:
      "Clean Architecture, Domain-Driven Design (DDD), and SOLID principles.",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description:
      "REST/GraphQL/gRPC APIs, microservices patterns, and event-driven systems with Kafka & RabbitMQ.",
  },
  {
    icon: Cpu,
    title: "Systems & Low-Level",
    description:
      "Passionate hobby: C, C++, C#, and Rust for exploring game engines and concurrency.",
  },
  {
    icon: Database,
    title: "Data Strategy",
    description:
      "Relational and NoSQL modeling, query optimization, and caching strategies.",
  },
];

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
                I'm a{" "}
                <strong>
                  Full-Stack Engineer, Data Scientist & ML Engineer
                </strong>
                , and a double-degree student in{" "}
                <strong>
                  Software Engineering & Computer Science (2025–2029)
                </strong>
                . I build across the entire stack, from pixel-precise frontends
                to distributed backends and trained neural networks.
              </p>
              <p>
                I operate across multiple ecosystems: the{" "}
                <strong>TypeScript ecosystem</strong> (React, Next.js, Node.js,
                NestJS) for modern web, the <strong>Java ecosystem</strong>{" "}
                (Spring Boot, Spring Cloud, JPA/Hibernate) for enterprise
                backends, and <strong>Python and Go</strong> for data workflows
                and automation. Outside of my primary professional focus, I'm an
                avid hobbyist in low-level systems and game engine development
                using <strong>C, C++, C#, and Rust</strong>.
              </p>
              <p>
                On the AI/ML side, I train and fine-tune Deep Learning models
                using <strong>PyTorch</strong> and <strong>TensorFlow</strong>,
                compete on <strong>Kaggle</strong>, and publish models on{" "}
                <strong>Hugging Face</strong>, with a focus on Computer Vision,
                NLP, and applied data workflows.
              </p>
              <p>
                Everything I build is shaped by{" "}
                <strong>Clean Architecture</strong>,{" "}
                <strong>Domain-Driven Design</strong>, and{" "}
                <strong>SOLID</strong> principles. I care about code that is
                testable, maintainable, and built to last, not just code that
                works today.
              </p>
              <p>
                I'm actively looking for <strong>Internship</strong> or{" "}
                <strong>Junior Engineering</strong> roles where I can contribute
                to real systems, learn from strong teams, and grow as an
                engineer.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-12">
              {highlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={highlight.title}
                    className="flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:bg-teal-400/5 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-400/20 transition-colors">
                      <Icon
                        size={24}
                        className="text-teal-400 group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-teal-400 mb-2 text-base">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
