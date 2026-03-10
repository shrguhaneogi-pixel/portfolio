"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function Hero() {
  return (
    <section className="section-spacing">
      <div className="container-main">
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl space-y-6"
        >

          <motion.h1 variants={item} className="text-display">
            Building Intelligent Interfaces
          </motion.h1>

          <motion.p variants={item} className="text-body-lg">
            I'm Shreyas, a Full-Stack Developer and AI Engineer building
            modern web experiences and intelligent products powered by
            cutting-edge technologies.
          </motion.p>

          <motion.div variants={item} className="flex gap-4 pt-4">

            <Link
              href="/projects"
              className="px-6 py-3 rounded-lg bg-[hsl(var(--primary))] text-white font-medium hover:opacity-90 transition"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg border border-[hsl(var(--border))] hover:bg-[hsl(var(--muted))] transition"
            >
              Contact Me
            </Link>

          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}