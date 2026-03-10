import Link from "next/link"

export default function Hero() {
  return (
    <section className="section-spacing">
      <div className="container-main">

        <div className="max-w-3xl space-y-6">

          <h1 className="text-display">
            Building Intelligent Interfaces
          </h1>

          <p className="text-body-lg">
            I'm Shreyas, a Full-Stack Developer and AI Engineer building
            modern web experiences and intelligent products powered by
            cutting-edge technologies.
          </p>

          <div className="flex gap-4 pt-4">

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

          </div>

        </div>

      </div>
    </section>
  )
}