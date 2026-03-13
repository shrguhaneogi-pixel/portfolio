"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Magnetic from "@/components/animations/magnetic"

type ProjectCardProps = {
  title: string
  description: string
  github: string
  demo?: string
  tech: string[]
}

export default function ProjectCard({
  title,
  description,
  github,
  demo,
  tech,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="hover:scale-[1.02] transition-transform duration-300">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">

          <p className="text-body">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded-md bg-muted"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3">

            <Magnetic>
              <Button asChild size="sm">
                <a href={github} target="_blank">
                  GitHub
                </a>
              </Button>
            </Magnetic>

            {demo && (
              <Magnetic>
                <Button asChild size="sm" variant="secondary">
                  <a href={demo} target="_blank">
                    Live Demo
                  </a>
                </Button>
              </Magnetic>
            )}

          </div>

        </CardContent>
      </Card>
    </motion.div>
  )
}