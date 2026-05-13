"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const WA_NUMBER = "59894486143";

type FormData = {
  nombre: string;
  negocio: string;
  rubro: string;
  tieneWeb: string;
  urlWeb: string;
  redes: string[];
  desafio: string;
  contacto: string;
};

const RUBROS = [
  "Construcción y materiales",
  "Gastronomía / Restaurante / Bar",
  "Retail / Tienda física",
  "Servicios profesionales",
  "Salud y bienestar",
  "Moda y vestimenta",
  "Educación",
  "Inmobiliaria",
  "Transporte y logística",
  "Otro",
];

const DESAFIOS = [
  "No tengo presencia online",
  "Tengo web pero no me trae clientes",
  "Quiero vender por internet",
  "Pierdo mucho tiempo en tareas repetitivas",
  "No sé por dónde empezar",
  "Otro",
];

const REDES_OPTIONS = ["Instagram", "Facebook", "LinkedIn", "TikTok", "Ninguna"];

export default function DiagnosticoPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    nombre: "",
    negocio: "",
    rubro: "",
    tieneWeb: "",
    urlWeb: "",
    redes: [],
    desafio: "",
    contacto: "",
  });

  const update = (field: keyof FormData, value: string | string[]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleRed = (red: string) => {
    const current = form.redes;
    if (red === "Ninguna") {
      update("redes", ["Ninguna"]);
      return;
    }
    const filtered = current.filter((r) => r !== "Ninguna");
    if (filtered.includes(red)) {
      update("redes", filtered.filter((r) => r !== red));
    } else {
      update("redes", [...filtered, red]);
    }
  };

  const canContinue = () => {
    if (step === 1) return form.nombre.trim() && form.negocio.trim() && form.rubro;
    if (step === 2) return form.tieneWeb && form.redes.length > 0;
    if (step === 3) return form.desafio && form.contacto.trim();
    return false;
  };

  const handleSubmit = () => {
    const redesText = form.redes.join(", ") || "Ninguna";
    const webText = form.tieneWeb === "si" ? (form.urlWeb || "Sí, sin URL especificada") : "No tiene";

    const mensaje = `Hola Revcore Labs! Quiero solicitar mi diagnóstico gratuito de presencia digital 🎯

*Mis datos:*
• Nombre: ${form.nombre}
• Negocio: ${form.negocio}
• Rubro: ${form.rubro}
• Web: ${webText}
• Redes sociales: ${redesText}
• Mi principal desafío: ${form.desafio}
• Contacto preferido: ${form.contacto}

¡Quedo esperando el diagnóstico!`;

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#050A14] text-[#E2E8F0] overflow-x-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050A14]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Revcore Labs" width={34} height={34} className="rounded-md" />
            <span className="font-bold text-base tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              REVCORE <span className="text-[#00D4FF] font-light">LABS</span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-[#94A3B8] hover:text-white transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </nav>

      {/* Background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-[#7C3AED]/8 blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-[#00D4FF]/6 blur-[120px]" />
      </div>

      <div className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">

          {!submitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-[#0D1627]/80 border border-[#7C3AED]/30 rounded-full px-4 py-1.5 text-sm text-[#9D5FFB] mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
                  Gratis · Sin compromiso · En menos de 24hs
                </div>
                <h1
                  className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Diagnóstico gratuito de{" "}
                  <span className="gradient-text">presencia digital</span>
                </h1>
                <p className="text-[#94A3B8] text-lg leading-relaxed">
                  Contanos sobre tu negocio y en menos de 24 horas te enviamos un análisis concreto de qué mejorar y cómo hacerlo.
                </p>
              </div>

              {/* Progress */}
              <div className="flex items-center gap-2 mb-10">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-2 flex-1">
                    <div className={`flex-1 h-1 rounded-full transition-all duration-500 ${s <= step ? "bg-[#7C3AED]" : "bg-white/10"}`} />
                  </div>
                ))}
                <span className="text-xs text-[#94A3B8] ml-2 whitespace-nowrap">{step} de 3</span>
              </div>

              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-5">
                  <div className="bg-[#0D1627]/60 border border-white/5 rounded-xl p-2">
                    <p className="text-xs text-[#7C3AED] font-semibold uppercase tracking-wider px-3 pt-2 mb-3">Tu negocio</p>

                    <div className="space-y-3 px-1">
                      <div>
                        <label className="block text-sm text-[#94A3B8] mb-1.5 px-2">Tu nombre</label>
                        <input
                          type="text"
                          placeholder="Ej: Carlos García"
                          value={form.nombre}
                          onChange={(e) => update("nombre", e.target.value)}
                          className="w-full bg-[#050A14] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-[#4A5568] focus:outline-none focus:border-[#7C3AED]/60 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[#94A3B8] mb-1.5 px-2">Nombre del negocio</label>
                        <input
                          type="text"
                          placeholder="Ej: Distribuidora García"
                          value={form.negocio}
                          onChange={(e) => update("negocio", e.target.value)}
                          className="w-full bg-[#050A14] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-[#4A5568] focus:outline-none focus:border-[#7C3AED]/60 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[#94A3B8] mb-1.5 px-2">Rubro</label>
                        <div className="grid grid-cols-2 gap-2 p-1">
                          {RUBROS.map((r) => (
                            <button
                              key={r}
                              onClick={() => update("rubro", r)}
                              className={`text-left text-sm px-3 py-2.5 rounded-lg border transition-all ${
                                form.rubro === r
                                  ? "border-[#7C3AED] bg-[#7C3AED]/15 text-white"
                                  : "border-white/8 bg-[#050A14] text-[#94A3B8] hover:border-white/20"
                              }`}
                            >
                              {r}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    disabled={!canContinue()}
                    className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] disabled:opacity-30 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-violet-500/20"
                  >
                    Continuar →
                  </button>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-5">
                  <div className="bg-[#0D1627]/60 border border-white/5 rounded-xl p-2">
                    <p className="text-xs text-[#7C3AED] font-semibold uppercase tracking-wider px-3 pt-2 mb-3">Presencia actual</p>

                    <div className="space-y-4 px-1">
                      <div>
                        <label className="block text-sm text-[#94A3B8] mb-2 px-2">¿Tu negocio tiene página web?</label>
                        <div className="grid grid-cols-2 gap-2">
                          {["si", "no"].map((op) => (
                            <button
                              key={op}
                              onClick={() => update("tieneWeb", op)}
                              className={`py-3 rounded-lg border text-sm font-medium transition-all ${
                                form.tieneWeb === op
                                  ? "border-[#7C3AED] bg-[#7C3AED]/15 text-white"
                                  : "border-white/8 bg-[#050A14] text-[#94A3B8] hover:border-white/20"
                              }`}
                            >
                              {op === "si" ? "Sí, tengo" : "No tengo"}
                            </button>
                          ))}
                        </div>
                      </div>

                      {form.tieneWeb === "si" && (
                        <div>
                          <label className="block text-sm text-[#94A3B8] mb-1.5 px-2">URL de tu web (opcional)</label>
                          <input
                            type="url"
                            placeholder="https://tunegocio.com"
                            value={form.urlWeb}
                            onChange={(e) => update("urlWeb", e.target.value)}
                            className="w-full bg-[#050A14] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-[#4A5568] focus:outline-none focus:border-[#7C3AED]/60 transition-colors"
                          />
                        </div>
                      )}

                      <div>
                        <label className="block text-sm text-[#94A3B8] mb-2 px-2">¿En qué redes estás presente?</label>
                        <div className="grid grid-cols-3 gap-2">
                          {REDES_OPTIONS.map((red) => (
                            <button
                              key={red}
                              onClick={() => toggleRed(red)}
                              className={`py-2.5 rounded-lg border text-sm transition-all ${
                                form.redes.includes(red)
                                  ? "border-[#00D4FF] bg-[#00D4FF]/10 text-[#00D4FF]"
                                  : "border-white/8 bg-[#050A14] text-[#94A3B8] hover:border-white/20"
                              }`}
                            >
                              {red}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(1)}
                      className="px-6 py-4 border border-white/10 rounded-xl text-[#94A3B8] hover:text-white hover:border-white/20 transition-all text-sm"
                    >
                      ← Atrás
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      disabled={!canContinue()}
                      className="flex-1 bg-[#7C3AED] hover:bg-[#6D28D9] disabled:opacity-30 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-violet-500/20"
                    >
                      Continuar →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="space-y-5">
                  <div className="bg-[#0D1627]/60 border border-white/5 rounded-xl p-2">
                    <p className="text-xs text-[#7C3AED] font-semibold uppercase tracking-wider px-3 pt-2 mb-3">Tu situación</p>

                    <div className="space-y-4 px-1">
                      <div>
                        <label className="block text-sm text-[#94A3B8] mb-2 px-2">¿Cuál es tu principal desafío hoy?</label>
                        <div className="space-y-2">
                          {DESAFIOS.map((d) => (
                            <button
                              key={d}
                              onClick={() => update("desafio", d)}
                              className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all ${
                                form.desafio === d
                                  ? "border-[#7C3AED] bg-[#7C3AED]/15 text-white"
                                  : "border-white/8 bg-[#050A14] text-[#94A3B8] hover:border-white/20"
                              }`}
                            >
                              {d}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm text-[#94A3B8] mb-1.5 px-2">
                          ¿A dónde te enviamos el diagnóstico?
                          <span className="text-[#4A5568] ml-1">(WhatsApp o email)</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Ej: +598 99 000 000 o tu@email.com"
                          value={form.contacto}
                          onChange={(e) => update("contacto", e.target.value)}
                          className="w-full bg-[#050A14] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-[#4A5568] focus:outline-none focus:border-[#7C3AED]/60 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-4 border border-white/10 rounded-xl text-[#94A3B8] hover:text-white hover:border-white/20 transition-all text-sm"
                    >
                      ← Atrás
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!canContinue()}
                      className="flex-1 bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-violet-500/20"
                    >
                      Quiero mi diagnóstico gratis →
                    </button>
                  </div>

                  <p className="text-center text-xs text-[#4A5568]">
                    Al enviar, abriremos WhatsApp con tu solicitud. Tu info es solo para el diagnóstico.
                  </p>
                </div>
              )}
            </>
          ) : (
            /* Success state */
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/30 flex items-center justify-content center mx-auto mb-8 flex items-center justify-center">
                <span className="text-4xl">✓</span>
              </div>
              <h2
                className="text-3xl font-extrabold mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                ¡Listo, <span className="gradient-text">{form.nombre.split(" ")[0]}!</span>
              </h2>
              <p className="text-[#94A3B8] text-lg mb-2">
                Recibimos tu solicitud para <strong className="text-white">{form.negocio}</strong>.
              </p>
              <p className="text-[#94A3B8] mb-10">
                En menos de 24 horas te enviamos tu diagnóstico personalizado.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-[#7C3AED] hover:text-[#9D5FFB] transition-colors"
              >
                ← Volver al inicio
              </Link>
            </div>
          )}

          {/* Trust signals */}
          {!submitted && (
            <div className="mt-12 grid grid-cols-3 gap-4 text-center">
              {[
                { icon: "⚡", label: "Respuesta en 24hs" },
                { icon: "🎯", label: "100% personalizado" },
                { icon: "🔒", label: "Sin compromiso" },
              ].map((item) => (
                <div key={item.label} className="bg-[#0D1627]/40 border border-white/5 rounded-xl p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-xs text-[#94A3B8]">{item.label}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
