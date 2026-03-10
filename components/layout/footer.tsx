import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))] mt-20">
      <div className="container-main py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-body">

        <p>
          © {new Date().getFullYear()} Shreyas Guha Neogi
        </p>

        <div className="flex gap-6">

          <Link
            href="https://github.com/shrguhaneogi-pixel"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            GitHub
          </Link>

          <Link
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </Link>

          <Link
            href="/contact"
            className="hover:text-white transition-colors"
          >
            Contact
          </Link>

        </div>

      </div>
    </footer>
  )
}