"use client"

//Contact(formulaire)

export default function Contact() {
  return (
    <section
      className="max-w-5xl mx-auto px-4 md:px-8 py-16 grid gap-10 md:grid-cols-2"
      id="contact">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Contact</h2>
        <p>Réponse sous 48 h ouvrées. Pour tout le reste, les liens ci-dessous fonctionnent aussi très bien.</p>

        <ul>
          <li><a href="https://github.com/MarcBlouet">icone github</a></li>
          <li><a href="https://x.com/MarcBlouet">icone X</a></li>
        </ul>

      </div>
      <form className="flex flex-col gap-2 bg-base-200 shadow-sm p-6 w-full max-w-2xl mx-auto">

          <label htmlFor="nom" className="label">Prénom et nom</label>
          <input 
          className="input w-full" type="text" placeholder="John Doe" name="nom" id="nom" />

          <label htmlFor="email" className="label">E-mail</label>
          <input 
          className="input w-full" type="email" name="email" id="email"/>

          <label htmlFor="message" className="label">Message</label>
          <textarea 
          className="textarea w-full mb-2"
          id="message" name="message" placeholder="Bonjour,...">
          </textarea>

          <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>
    </section >
  )
}