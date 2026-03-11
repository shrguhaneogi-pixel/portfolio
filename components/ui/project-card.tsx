"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type ProjectCardProps = {
  title: string
  description: string
  github: string
  demo?: string
}

export default function ProjectCard({
  title,
  description,
  github,
  demo,
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

          <div className="flex gap-3">

            <Button asChild size="sm">
              <a href={github} target="_blank">
                GitHub
              </a>
            </Button>

            {demo && (
              <Button asChild size="sm" variant="secondary">
                <a href={demo} target="_blank">
                  Live Demo
                </a>
              </Button>
            )}

          </div>

        </CardContent>
      </Card>
    </motion.div>
  )
}