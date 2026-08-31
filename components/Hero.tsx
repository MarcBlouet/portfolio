// Section accueil
import Image from "next/image"

export default function Hero() {
  return (
    <section
      className="max-w-5xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-black mb-2">Marc Blouet</h1>
        <p className="text-xl italic mb-4">Développeur web amateur.</p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a className="btn btn-primary" href="#projets">Projets</a>
          <a className="btn btn-outline" href="#contact">Contact</a>
        </div>
      </div>
      <Image
        src="/marc.jpg"
        width={250}
        height={250}
        alt="Une photo de Marc"
        priority
        className="object-cover rounded-xl border border-base-content/25 justify-self-center md:justify-self-end"
      />
    </section>
  )
}