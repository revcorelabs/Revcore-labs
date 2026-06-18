"use client";
import { useState } from "react";
import Link from "next/link";
import NavbarScroll from "@/components/NavbarScroll";

type Status = "idle" | "running" | "done";
interface FD { nombre: string; email: string; fecha: string; hora: string; personas: string; }

const STEPS = [
  {
    id: 0, ms: 500, type: "n8n",
    title: "Webhook recibido",
    code: "POST /reserva · 200 OK",
    detail: (f: FD) => `${f.nombre} · ${f.personas} persona${+f.personas > 1 ? "s" : ""}`,
  },
  {
    id: 1, ms: 1300, type: "check",
    title: "Verificar disponibilidad",
    code: "GET /slots · check: horario",
    detail: (f: FD) => `${f.hora} del ${fmt(f.fecha)} · disponible`,
  },
  {
    id: 2, ms: 2300, type: "sheets",
    title: "Google Sheets",
    code: "append: reservas",
    detail: (f: FD) => `${f.nombre} | ${fmt(f.fecha)} | ${f.hora} | ${f.personas} persona${+f.personas > 1 ? "s" : ""}`,
  },
  {
    id: 3, ms: 3200, type: "calendar",
    title: "Google Calendar",
    code: "create: event",
    detail: (f: FD) => `Reserva · ${fmt(f.fecha)} ${f.hora} · ${f.personas} persona${+f.personas > 1 ? "s" : ""}`,
  },
  {
    id: 4, ms: 4200, type: "gmail",
    title: "Confirmación enviada",
    code: "send: email",
    detail: (f: FD) => `→ ${f.email}`,
  },
  {
    id: 5, ms: 5100, type: "wait",
    title: "Recordatorio programado",
    code: "schedule: -24h",
    detail: (f: FD) => `${remind(f.fecha)} a las ${f.hora}`,
  },
];

function fmt(s: string) {
  if (!s) return "--";
  return new Date(s + "T12:00:00").toLocaleDateString("es-UY", { day: "2-digit", month: "2-digit", year: "numeric" });
}
function remind(s: string) {
  if (!s) return "--";
  const d = new Date(s + "T12:00:00");
  d.setDate(d.getDate() - 1);
  return d.toLocaleDateString("es-UY", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function StepIcon({ type }: { type: string }) {
  if (type === "check") return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <rect x="2" y="3" width="20" height="18" rx="2" stroke="#34D399" strokeWidth="1.6"/>
      <path d="M6 8h12M6 12h8" stroke="#34D399" strokeWidth="1.4" strokeLinecap="round" opacity=".5"/>
      <circle cx="17" cy="15" r="4" fill="#059669"/>
      <path d="M15 15l1.5 1.5L19 13" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  if (type === "calendar") return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <rect x="2" y="4" width="20" height="18" rx="2" fill="#1A73E8"/>
      <rect x="2" y="4" width="20" height="6" rx="2" fill="#1557B0"/>
      <path d="M7 2v4M17 2v4" stroke="#7BAAF7" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M6 14h3v3H6z" fill="white" opacity=".9"/>
      <path d="M10.5 14h3v3h-3z" fill="white" opacity=".6"/>
      <path d="M15 14h3v3h-3z" fill="white" opacity=".6"/>
    </svg>
  );
  if (type === "n8n") return (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <circle cx="12" cy="5" r="2.8" fill="#EA4B71" />
      <circle cx="4.5" cy="18" r="2.8" fill="#EA4B71" />
      <circle cx="19.5" cy="18" r="2.8" fill="#EA4B71" />
      <line x1="12" y1="8" x2="5.5" y2="15.5" stroke="#EA4B71" strokeWidth="1.5" />
      <line x1="12" y1="8" x2="18.5" y2="15.5" stroke="#EA4B71" strokeWidth="1.5" />
    </svg>
  );
  if (type === "sheets") return (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <rect x="3" y="2" width="15" height="19" rx="1.5" fill="#0F9D58" />
      <rect x="3" y="2" width="7" height="7" fill="#27AE60" opacity=".8" />
      <path d="M6 12h9M6 15.5h7M6 19h8" stroke="white" strokeWidth="1.3" opacity=".85" />
    </svg>
  );
  if (type === "gmail") return (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path d="M3 6C3 4.9 3.9 4 5 4h14c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6z" fill="#1a1a1a" />
      <path d="M3 4l9 8 9-8H3z" fill="#EA4335" />
      <path d="M3 6L3 18M21 6L21 18" stroke="#C5221F" strokeWidth="1.5" />
    </svg>
  );
  if (type === "wait") return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path d="M7 3h10M7 21h10" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
      <path d="M7 3L12 9.5L17 3" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 21L12 14.5L17 21" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity=".6" />
    </svg>
  );
  return null;
}

export default function AutoDemo() {
  const [status, setStatus] = useState<Status>("idle");
  const [done, setDone] = useState<number[]>([]);
  const [form, setForm] = useState<FD>({ nombre: "", email: "", fecha: "", hora: "20:00", personas: "2" });

  const today = new Date().toISOString().split("T")[0];

  const onchange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("running");
    setDone([]);
    STEPS.forEach(s => setTimeout(() => setDone(p => [...p, s.id]), s.ms));
    setTimeout(() => setStatus("done"), 5700);
  };

  const reset = () => {
    setStatus("idle");
    setDone([]);
    setForm({ nombre: "", email: "", fecha: "", hora: "20:00", personas: "2" });
  };

  const isDone = status === "done";
  const isRunning = status === "running";

  return (
    <main>
      <NavbarScroll />

      {/* Header */}
      <section style={{ paddingTop: 120, paddingBottom: 56 }}>
        <div className="container">
          <Link href="/" className="demo-back">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al sitio
          </Link>
          <div style={{ marginTop: 32 }}>
            <div className="section-label">demo interactiva</div>
            <h1 className="demo-heading">
              Probá la automatización<br />en tiempo real
            </h1>
            <p className="demo-subtext">
              Completá el formulario como si fueras a reservar una mesa. Vas a ver exactamente qué hace el sistema debajo del capó, paso a paso.
            </p>
          </div>
        </div>
      </section>

      {/* Main demo */}
      <section style={{ paddingBottom: 96 }}>
        <div className="container">
          <div className="demo-grid">

            {/* FORM */}
            <div className="demo-panel">
              <div className="term-chrome">
                <span className="term-dot term-dot-r" /><span className="term-dot term-dot-y" /><span className="term-dot term-dot-g" />
                <span className="term-title">Formulario de reserva</span>
              </div>
              <div className="demo-panel-body">
                {isDone ? (
                  <div className="demo-form-success">
                    <div className="demo-success-icon">✓</div>
                    <p className="demo-success-title">Reserva procesada</p>
                    <p className="demo-success-sub">El workflow ya corrió. Mirá el panel de la derecha y el email que aparece abajo.</p>
                    <button onClick={reset} className="btn btn-outline" style={{ marginTop: 24, fontSize: 13 }}>
                      Reiniciar demo →
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={submit}
                    className="demo-form"
                    style={{ opacity: isRunning ? 0.45 : 1, pointerEvents: isRunning ? "none" : "auto", transition: "opacity 300ms ease" }}
                  >
                    <div className="cf-field">
                      <label>Nombre</label>
                      <input name="nombre" value={form.nombre} onChange={onchange} placeholder="Tu nombre completo" required />
                    </div>
                    <div className="cf-field">
                      <label>Email</label>
                      <input name="email" type="email" value={form.email} onChange={onchange} placeholder="tu@email.com" required />
                    </div>
                    <div className="cf-row">
                      <div className="cf-field">
                        <label>Fecha</label>
                        <input name="fecha" type="date" value={form.fecha} onChange={onchange} min={today} required />
                      </div>
                      <div className="cf-field">
                        <label>Hora</label>
                        <select name="hora" value={form.hora} onChange={onchange} className="demo-select">
                          {["12:00", "13:00", "14:00", "19:00", "20:00", "21:00", "22:00"].map(h => (
                            <option key={h} value={h}>{h}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="cf-field">
                      <label>Personas</label>
                      <select name="personas" value={form.personas} onChange={onchange} className="demo-select">
                        {["1", "2", "3", "4", "5", "6", "7", "8"].map(n => (
                          <option key={n} value={n}>{n} persona{+n > 1 ? "s" : ""}</option>
                        ))}
                      </select>
                    </div>
                    <button type="submit" className="btn btn-primary cf-submit" disabled={isRunning}>
                      {isRunning
                        ? <><span className="cf-spinner" /> Procesando...</>
                        : "Enviar reserva →"}
                    </button>
                    <p className="demo-form-note">* Esto es una simulación. No se envía ningún dato real.</p>
                  </form>
                )}
              </div>
            </div>

            {/* SYSTEM */}
            <div className="demo-panel">
              <div className="term-chrome">
                <span className="term-dot term-dot-r" /><span className="term-dot term-dot-y" /><span className="term-dot term-dot-g" />
                <span className="term-title">n8n · workflow</span>
                <span className={`n8n-exec-badge${isDone ? " n8n-exec-success" : isRunning ? " n8n-exec-running" : ""}`}>
                  {isDone ? "✓ success" : isRunning ? "● running" : "○ idle"}
                </span>
              </div>
              <div className="demo-panel-body">
                {status === "idle" ? (
                  <div className="demo-idle">
                    <div className="demo-idle-pulse" />
                    <p className="demo-idle-label">Esperando evento...</p>
                    <p className="demo-idle-sub">Completá el formulario para ver el workflow en acción</p>
                  </div>
                ) : (
                  <div className="demo-steps">
                    {STEPS.map((step, i) => {
                      const isStepDone = done.includes(step.id);
                      const isStepActive = isRunning && done.length === step.id;
                      const isPending = !isStepDone && !isStepActive;
                      return (
                        <div
                          key={step.id}
                          className={`demo-step${isStepDone ? " demo-step-done" : ""}${isStepActive ? " demo-step-active" : ""}`}
                          style={{ opacity: isPending ? 0.28 : 1, transition: "opacity 400ms ease" }}
                        >
                          <div className="demo-step-track">
                            <div className={`demo-step-icon-wrap${isStepActive ? " demo-step-icon-active" : ""}${isStepDone ? " demo-step-icon-done" : ""}`}>
                              <StepIcon type={step.type} />
                            </div>
                            {i < STEPS.length - 1 && (
                              <div className={`demo-step-connector${isStepDone ? " demo-step-connector-done" : ""}`} />
                            )}
                          </div>
                          <div className="demo-step-content">
                            <div className="demo-step-row">
                              <span className="demo-step-title">{step.title}</span>
                              {isStepActive && (
                                <span className="demo-step-running">
                                  <span className="nf-dp" /><span className="nf-dp" style={{ animationDelay: ".2s" }} /><span className="nf-dp" style={{ animationDelay: ".4s" }} />
                                </span>
                              )}
                              {isStepDone && <span className="demo-step-ok">✓ ok</span>}
                            </div>
                            <div className="demo-step-code">{step.code}</div>
                            {isStepDone && (
                              <div className="demo-step-detail">{step.detail(form)}</div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                    {isDone && (
                      <div className="demo-completed">
                        <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Automatización completada en 1.4s
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Email preview */}
          {isDone && (
            <div className="demo-email-section">
              <div className="section-label" style={{ marginBottom: 20 }}>lo que recibió el cliente</div>
              <div className="demo-email-panel">
                <div className="demo-email-meta">
                  <div className="demo-email-field"><span>De</span><strong>reservas@restaurante.com</strong></div>
                  <div className="demo-email-field"><span>Para</span><strong>{form.email}</strong></div>
                  <div className="demo-email-field demo-email-subject-row"><span>Asunto</span><strong>Tu reserva está confirmada ✓</strong></div>
                </div>
                <div className="demo-email-body">
                  <p style={{ marginBottom: 18 }}>Hola <strong>{form.nombre}</strong>,</p>
                  <p style={{ marginBottom: 18, color: "var(--text-2)" }}>Tu reserva quedó registrada. Aquí están los detalles:</p>
                  <div className="demo-email-card">
                    <div className="demo-email-row"><span>Fecha</span><strong>{fmt(form.fecha)}</strong></div>
                    <div className="demo-email-row"><span>Hora</span><strong>{form.hora}</strong></div>
                    <div className="demo-email-row"><span>Personas</span><strong>{form.personas}</strong></div>
                  </div>
                  <p style={{ marginTop: 20, fontSize: 14, color: "var(--text-2)", lineHeight: 1.7 }}>
                    Te vamos a enviar un recordatorio el <strong style={{ color: "var(--text)" }}>{remind(form.fecha)}</strong> a las <strong style={{ color: "var(--text)" }}>{form.hora}</strong> para que no se te olvide.
                  </p>
                  <div className="demo-email-footer">
                    Automatización gestionada por <span style={{ color: "var(--amber)" }}>Revcore Labs</span> · Este es un email simulado
                  </div>
                </div>
              </div>
              <div className="demo-cta-row">
                <p>¿Querés esta automatización para tu negocio?</p>
                <a href="mailto:revcorelabs@gmail.com" className="btn btn-primary" style={{ fontSize: 14, padding: "12px 24px" }}>
                  Consultá gratis →
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
