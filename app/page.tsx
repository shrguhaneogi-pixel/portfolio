export default function HomePage() {
  return (
    <main className="section-spacing">
      <div className="container-main space-y-10">

        <div className="space-y-4">
          <h1 className="text-display">
            Developer Portfolio System Test
          </h1>

          <p className="text-body-lg">
            If you can see this styled correctly, the design token system,
            typography scale, and layout engine are working.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-section-title">Typography Preview</h2>

          <p className="text-body">
            This is body text using the global typography utilities.
            These classes will power the entire portfolio layout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="p-6 rounded-xl bg-[hsl(var(--card))] border">
            <h3 className="text-hero mb-2">Card One</h3>
            <p className="text-body">
              Card surfaces are using global design tokens.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[hsl(var(--card))] border">
            <h3 className="text-hero mb-2">Card Two</h3>
            <p className="text-body">
              This confirms the color system is working.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[hsl(var(--card))] border">
            <h3 className="text-hero mb-2">Card Three</h3>
            <p className="text-body">
              Layout spacing should feel balanced.
            </p>
          </div>

        </div>

      </div>
    </main>
  )
}