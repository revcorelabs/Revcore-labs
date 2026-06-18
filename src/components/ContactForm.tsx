"use client";
import { useState } from "react";

const WEBHOOK = "https://n8n.revcorelabs.com/webhook/contacto-revcore";

// Token que n8n va a verificar. Sin él, el webhook rechaza el request.
// Aunque este token sea visible en el código del browser, igual funciona
// como filtro: bots genéricos no lo tienen, y requiere conocer tu sitio
// específicamente para abusar del webhook.
const WEBHOOK_TOKEN = process.env.NEXT_PUBLIC_WEBHOOK_TOKEN ?? "";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "", apellido: "", correo: "", empresa: "", mensaje: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(WEBHOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-webhook-token": WEBHOOK_TOKEN,
        },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="contact-success">
        <div className="contact-success-icon">✓</div>
        <h3>Mensaje enviado</h3>
        <p>
          Te vamos a responder a <strong>{form.correo}</strong> a la brevedad.
          Revisá también tu carpeta de spam.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor="cf-nombre">Nombre</label>
          <input
            id="cf-nombre" type="text" placeholder="Juan"
            value={form.nombre} onChange={set("nombre")} required
          />
        </div>
        <div className="cf-field">
          <label htmlFor="cf-apellido">Apellido</label>
          <input
            id="cf-apellido" type="text" placeholder="Pérez"
            value={form.apellido} onChange={set("apellido")} required
          />
        </div>
      </div>
      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor="cf-correo">Correo electrónico</label>
          <input
            id="cf-correo" type="email" placeholder="juan@empresa.com"
            value={form.correo} onChange={set("correo")} required
          />
        </div>
        <div className="cf-field">
          <label htmlFor="cf-empresa">Empresa</label>
          <input
            id="cf-empresa" type="text" placeholder="Mi Empresa S.A."
            value={form.empresa} onChange={set("empresa")} required
          />
        </div>
      </div>
      <div className="cf-field">
        <label htmlFor="cf-mensaje">Mensaje</label>
        <textarea
          id="cf-mensaje" rows={4}
          placeholder="Contanos brevemente qué necesitás o en qué te podemos ayudar..."
          value={form.mensaje} onChange={set("mensaje")} required
        />
      </div>

      {status === "error" && (
        <p className="cf-error">
          Algo salió mal. Intentá de nuevo o escribinos a{" "}
          <a href="mailto:revcorelabs@gmail.com">revcorelabs@gmail.com</a>.
        </p>
      )}

      <button type="submit" className="btn btn-primary cf-submit" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <span className="cf-spinner" />
            Enviando...
          </>
        ) : (
          <>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Enviar mensaje
          </>
        )}
      </button>
    </form>
  );
}
