// Projets

export default function Projets() {
  return (
    <section
      className="scroll-mt-15 max-w-5xl mx-auto px-4 md:px-8 py-16"
      id="projets">

      <h2 className="text-2xl md:text-4xl font-bold mb-4">Projets en chantier</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

        <div className="card bg-base-200 shadow-sm rounded-xl">
          <div className="card-body">
            <div className="badge badge-soft badge-success">Live</div>
            <h3 className="card-title">Portfolio</h3>
            <p>Cette page. Bac à sable pour pratiquer la mise en page, l’accessibilité et le mode sombre.</p>
          </div>
        </div>

        <div className="card bg-base-200 shadow-sm rounded-xl">
          <div className="card-body">
            <div className="badge badge-soft badge-warning">En cours</div>
            <h3 className="card-title">CaristePrêt</h3>
            <p>Quiz CACES pour réviser les autorisations de conduite. Mon premier vrai projet — je l’utilise moi-même.</p>
          </div>
        </div>

        <div className="card bg-base-200 shadow-sm rounded-xl">
          <div className="card-body">
            <div className="badge badge-soft badge-info">Concept</div>
            <h3 className="card-title">Snippix</h3>
            <p>Gestionnaire de snippets pour freelances et solopreneurs : ranger, retrouver, réutiliser ses bouts de code.</p>
          </div>
        </div>
      </div>

    </section>
  )
}