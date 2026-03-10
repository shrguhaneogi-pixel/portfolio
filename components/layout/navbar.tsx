"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <header className="w-full border-b border-[hsl(var(--border))] backdrop-blur-md">
      <div className="container-main flex items-center justify-between h-16">

        <Link href="/" className="font-semibold text-lg">
          Shreyas
        </Link>

        <nav className="flex items-center gap-8 text-sm">

          <Link
            href="/about"
            className="text-body hover:text-white transition-colors"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="text-body hover:text-white transition-colors"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="text-body hover:text-white transition-colors"
          >
            Contact
          </Link>

        </nav>

      </div>
    </header>
  )
}