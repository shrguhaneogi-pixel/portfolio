"use client"

import { motion } from "framer-motion"
import ProjectCard from "@/components/ui/project-card"
import { projects } from "@/data/projects"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

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

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </motion.div>

      </div>
    </section >
  )
}