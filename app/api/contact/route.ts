import { NextResponse } from "next/server";

const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const nom = String(body.nom ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();
    const company = String(body.company ?? "").trim();

    // Honeypot : un bot le remplit, un humain non. On fait semblant d’ok.
    if (company) {
      return NextResponse.json({ ok: true });
    }

    if (!nom || !email || !message) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    if (nom.length > 100 || email.length > 200 || message.length > 2000) {
      return NextResponse.json({ error: "Champs trop longs" }, { status: 400 });
    }

    if (!EMAIL_OK.test(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY ?? "",
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Portfolio", email: "marcblouet.pro@gmail.com" },
        to: [{ email: "marcblouet.pro@gmail.com", name: "Marc Blouet" }],
        replyTo: { email, name: nom },
        subject: `Contact portfolio — ${nom}`,
        textContent: `De : ${nom}\nEmail : ${email}\n\n${message}`,
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Envoi impossible" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Envoi impossible" }, { status: 500 });
  }
}
