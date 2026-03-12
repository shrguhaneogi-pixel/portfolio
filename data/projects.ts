export type Project = {
  title: string
  description: string
  github: string
  demo?: string
  tech: string[]
}

export const projects: Project[] = [
  {
    title: "AI Study Assistant",
    description:
      "An AI-powered platform that helps students manage study sessions while prioritizing mental wellness.",
    github: "https://github.com/yourusername/ai-study-assistant",
    demo: "https://example.com",
    tech: ["Next.js", "TypeScript", "OpenAI", "Tailwind"],
  },
  {
    title: "RepoLens AI",
    description:
      "A tool that analyzes GitHub repositories using AI to explain code structure and project architecture.",
    github: "https://github.com/yourusername/repolens-ai",
    tech: ["Next.js", "Gemini API", "Node.js"],
  },
  {
    title: "Interactive Developer Portfolio",
    description:
      "A cinematic portfolio built with Next.js, motion systems, and interactive 3D visuals.",
    github: "https://github.com/shrguhaneogi-pixel/portfolio",
    demo: "https://your-portfolio.vercel.app",
    tech: ["Next.js", "Framer Motion", "Spline", "Tailwind"],
  },
]