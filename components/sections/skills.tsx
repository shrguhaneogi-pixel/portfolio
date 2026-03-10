export default function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "AI / Machine Learning",
    "Tailwind CSS",
    "Framer Motion",
    "PostgreSQL",
    "Docker",
    "Git"
  ]

  return (
    <section className="section-spacing">
      <div className="container-main">

        <div className="max-w-3xl space-y-6 mb-16">
          <h2 className="text-section-title">
            Skills & Technologies
          </h2>

          <p className="text-body-lg">
            Technologies and tools I use to design, build, and scale modern applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill) => (
            <div
              key={skill}
              className="border rounded-xl p-4 text-center hover:bg-muted transition-colors"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}