// Section accueil

export default function Hero() {
  return (
    <section 
    className="max-w-5xl mx-auto px-4 md:px-8 py-16"
    id="intro">
      <h1 className="text-4xl md:text-6xl font-black mb-2">Marc Blouet</h1>
      <p className="text-xl italic mb-4">Développeur web amateur.</p>
      <div className="flex gap-4">
        <a className="btn btn-primary" href="#projets">Projets</a>
        <a className="btn btn-outline" href="#contact">Contact</a>
      </div>
    </section>
  )
}