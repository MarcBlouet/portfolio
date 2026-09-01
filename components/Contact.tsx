"use client"
import { useState } from "react"

//Contact(formulaire)

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      nom: (form.elements.namedItem("nom") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
    }

    setStatus("loading")
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      form.reset()
      setStatus("ok")
    } else {
      setStatus("error")
    }
  }

  return (
    <section
      className="scroll-mt-15 max-w-5xl mx-auto px-4 md:px-8 py-16 min-h-[calc(100svh-4rem)] grid gap-10 md:grid-cols-2 items-start"
      id="contact">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Contact</h2>
        <p>Réponse sous 48 h ouvrées. Pour tout le reste, les liens ci-dessous fonctionnent aussi très bien.</p>

        <ul className="flex gap-4 mt-4">
          <li><a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            href="https://github.com/MarcBlouet">
            <svg className="size-6 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
          </a></li>
          <li><a
            href="https://x.com/MarcBlouet"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X">
            <svg
              viewBox="0 0 24 24" className="size-6 fill-current" aria-hidden="true"><path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" /></svg>

          </a></li>
        </ul>

      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-2 bg-base-200 shadow-sm p-6 w-full max-w-2xl mx-auto rounded-xl">

        <label htmlFor="nom" className="label">Prénom et nom</label>
        <input
          className="input w-full" type="text" placeholder="John Doe" name="nom" id="nom"
          required maxLength={100} autoComplete="name" disabled={status === "ok"} />

        <label htmlFor="email" className="label">E-mail</label>
        <input
          className="input w-full" type="email" name="email" id="email"
          required maxLength={200} autoComplete="email" disabled={status === "ok"} />

        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Société</label>
          <input type="text" name="company" id="company" tabIndex={-1} autoComplete="off" />
        </div>

        <label htmlFor="message" className="label">Message</label>
        <textarea
          className="textarea w-full mb-2"
          id="message" name="message" placeholder="Bonjour,..."
          required maxLength={2000} disabled={status === "ok"}>
        </textarea>

        <button type="submit" className="btn btn-primary" disabled={status === "loading" || status === "ok"}>
          {status === "loading" ? "Envoi…" : "Envoyer"}
        </button>
        {status === "ok" && <p>Message envoyé. Pas besoin d’envoyer une deuxième fois, je te réponds par e-mail.</p>}
        {status === "error" && <p>Envoi impossible. Réessaie.</p>}
      </form>
    </section >
  )
}