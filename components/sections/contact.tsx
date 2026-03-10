import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section className="section-spacing">
      <div className="container-main">

        <div className="max-w-2xl space-y-6">

          <h2 className="text-section-title">
            Contact
          </h2>

          <p className="text-body-lg">
            Interested in collaborating, building AI products, or discussing
            new ideas? Feel free to reach out.
          </p>

          <Button
            size="lg"
            asChild
          >
            <a href="mailto:shrguhaneogi@gmail.com">
              Get in Touch
            </a>
          </Button>

        </div>

      </div>
    </section>
  )
}