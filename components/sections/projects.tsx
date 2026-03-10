import ProjectCard from "@/components/ui/project-card"

export default function Projects() {
  return (
    <section className="section-spacing">
      <div className="container-main">

        <div className="max-w-3xl space-y-6 mb-16">
          <h2 className="text-section-title">
            Projects
          </h2>

          <p className="text-body-lg">
            A selection of projects exploring AI systems, developer tools,
            and modern web experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <ProjectCard
            title="AI Study Assistant"
            description="An AI-powered platform that helps students manage study sessions while prioritizing mental wellness."
          />

          <ProjectCard
            title="RepoLens AI"
            description="A tool that analyzes GitHub repositories using AI to explain code structure and project architecture."
          />

          <ProjectCard
            title="Interactive Developer Portfolio"
            description="A cinematic portfolio built with Next.js, 3D visuals, and motion systems."
          />

        </div>

      </div>
    </section>
  )
}