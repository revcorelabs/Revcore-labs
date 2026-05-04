import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const WA_LINK = "https://wa.me/59894486143?text=Hola%20Revcore%20Labs%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20sus%20servicios.";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050A14] text-[#E2E8F0] overflow-x-hidden">

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050A14]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Revcore Labs" width={34} height={34} className="rounded-md" />
            <span className="font-bold text-base tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              REVCORE <span className="text-[#00D4FF] font-light">LABS</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#94A3B8]">
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#automatizar" className="hover:text-white transition-colors">Automatización</a>
            <a href="#como" className="hover:text-white transition-colors">Cómo trabajamos</a>
            <a href="#casos" className="hover:text-white transition-colors">Trabajos</a>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-violet-500/20"
          >
            Hablemos
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-44 pb-32 px-6 text-center overflow-hidden grid-bg">
        {/* Orbs */}
        <div className="orb orb-violet animate-pulse-slow" />
        <div className="orb orb-cyan animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        <div className="orb orb-pink animate-pulse-slow" style={{ animationDelay: "3s" }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div
            className="inline-flex items-center gap-2 bg-[#0D1627]/80 border border-[#7C3AED]/30 rounded-full px-4 py-1.5 text-sm text-[#9D5FFB] mb-10"
            style={{ animation: "fadeInUp 0.6s ease forwards" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
            Agencia de digitalización y automatización — Uruguay
          </div>

          <h1
            className="text-5xl md:text-7xl font-extrabold leading-[1.08] mb-7 tracking-tight text-balance"
            style={{ animation: "fadeInUp 0.7s ease 0.1s both", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Hacemos el trabajo digital{" "}
            <span className="gradient-text">para que vos te enfoques en tu negocio.</span>
          </h1>

          <p
            className="text-xl text-[#94A3B8] max-w-xl mx-auto mb-12 leading-relaxed text-balance"
            style={{ animation: "fadeInUp 0.7s ease 0.2s both" }}
          >
            Tu negocio ya funciona. Lo que falta es que internet trabaje para vos.
            Diseñamos páginas, tiendas online y automatizaciones para negocios que quieren crecer.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animation: "fadeInUp 0.7s ease 0.3s both" }}
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold px-8 py-4 rounded-xl transition-all text-lg glow-violet"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultá gratis por WhatsApp
            </a>
            <a
              href="#casos"
              className="border border-white/10 hover:border-[#7C3AED]/50 text-[#E2E8F0] font-medium px-8 py-4 rounded-xl transition-all text-lg hover:bg-white/5"
            >
              Ver trabajos →
            </a>
          </div>

          {/* Stats bar */}
          <div
            className="mt-20 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
            style={{ animation: "fadeInUp 0.7s ease 0.5s both" }}
          >
            {[
              { num: "< 7 días", label: "De charla a sitio publicado" },
              { num: "24/7", label: "Tu presencia digital trabajando" },
              { num: "0", label: "Tecnicismos en nuestra comunicación" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold gradient-text">{s.num}</p>
                <p className="text-xs text-[#64748B] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAL / EL NEXO ── */}
      <section className="py-28 px-6 bg-[#080E1A] relative overflow-hidden">
        <div className="orb orb-violet opacity-40" style={{ bottom: 0, top: "auto", right: "auto", left: "-200px" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <ScrollReveal direction="left" className="order-2 md:order-1">
              <div className="relative">
                <div className="gradient-border p-8 rounded-2xl">
                  <div className="space-y-5">
                    <div className="flex items-center gap-4 opacity-40">
                      <div className="w-10 h-10 rounded-xl bg-[#1E293B] flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      </div>
                      <div className="flex-1 bg-[#0D1627] rounded-lg px-4 py-3">
                        <p className="text-sm font-semibold text-[#64748B]">Agencia tecnológica tradicional</p>
                        <p className="text-xs text-[#475569] mt-0.5">Entiende código. No entiende flujo de caja.</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 opacity-40">
                      <div className="w-10 h-10 rounded-xl bg-[#1E293B] flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                      </div>
                      <div className="flex-1 bg-[#0D1627] rounded-lg px-4 py-3">
                        <p className="text-sm font-semibold text-[#64748B]">Consultor de negocios</p>
                        <p className="text-xs text-[#475569] mt-0.5">Entiende procesos. No sabe implementar nada digital.</p>
                      </div>
                    </div>

                    {/* El nexo */}
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #7C3AED, #00D4FF)" }}>
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <div className="flex-1 rounded-lg px-4 py-3 border border-[#7C3AED]/40" style={{ background: "rgba(124,58,237,0.1)" }}>
                        <p className="text-sm font-bold text-white">Revcore Labs</p>
                        <p className="text-xs text-[#94A3B8] mt-0.5">Entiende tu negocio <span className="text-[#00D4FF] font-semibold">y</span> lo traduce a tecnología.</p>
                      </div>
                    </div>

                    <div className="border-t border-white/5 pt-5 grid grid-cols-2 gap-4">
                      <div className="bg-[#050A14] rounded-lg p-4 text-center">
                        <p className="text-xs text-[#64748B] mb-1">Formación</p>
                        <p className="text-sm font-semibold text-white">Téc. en Gestión Empresarial</p>
                      </div>
                      <div className="bg-[#050A14] rounded-lg p-4 text-center">
                        <p className="text-xs text-[#64748B] mb-1">Especialidad</p>
                        <p className="text-sm font-semibold text-white">Lic. en Negocios Digitales</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Copy */}
            <ScrollReveal direction="right" delay={200} className="order-1 md:order-2">
              <span className="text-xs font-semibold tracking-widest text-[#7C3AED] uppercase mb-4 block">Nuestro diferencial</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                El nexo entre tu negocio y la tecnología.
              </h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
                La mayoría de las agencias tech hablan de frameworks y servidores. Nosotros hablamos de <strong className="text-white">flujo de clientes, costos operativos y cómo facturar más</strong>.
              </p>
              <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
                Entendemos cómo funciona una empresa — y también sabemos construir la solución digital. Eso es lo que nos hace distintos.
              </p>

              <div className="space-y-4">
                {[
                  { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>, text: "Hablamos de tu negocio, no de tecnología" },
                  { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, text: "Precios accesibles para negocios reales" },
                  { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>, text: "Comunicación directa, sin intermediarios" },
                  { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, text: "De idea a resultado en días, no meses" },
                ].map((d) => (
                  <div key={d.text} className="flex items-center gap-3">
                    <span className="text-[#7C3AED] flex-shrink-0">{d.icon}</span>
                    <p className="text-[#E2E8F0] font-medium">{d.text}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Intermedio — post Diferencial */}
      <div className="pb-16 px-6">
        <ScrollReveal direction="fade" className="max-w-xl mx-auto text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0D1627] border border-[#7C3AED]/30 hover:border-[#7C3AED]/70 text-white rounded-full px-6 py-3 transition-all hover:bg-[#7C3AED]/10 group"
          >
            <svg className="w-5 h-5 text-[#25D366] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <span className="font-medium text-sm">¿Querés saber cómo aplica esto a tu negocio?</span>
            <svg className="w-4 h-4 text-[#7C3AED] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </ScrollReveal>
      </div>

      {/* ── SERVICIOS ── */}
      <section className="py-28 px-6" id="servicios">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-[#7C3AED] uppercase mb-4 block">Lo que hacemos</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Soluciones digitales concretas
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-lg mx-auto text-balance">
              Sin paquetes genéricos. Cada proyecto se diseña según lo que tu negocio necesita.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                color: "#7C3AED",
                bg: "rgba(124,58,237,0.1)",
                tag: "Más pedido",
                title: "Landing Pages",
                desc: "Tu negocio en internet en menos de una semana. Página profesional, clara y con formulario de contacto para que los clientes te encuentren — y te elijan.",
                detail: "",
                price: "desde USD 150",
                delay: 0,
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-[#00D4FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 7H4l1-7z" />
                  </svg>
                ),
                color: "#00D4FF",
                bg: "rgba(0,212,255,0.1)",
                tag: "Shopify",
                title: "Tiendas Online",
                desc: "Vendé tus productos las 24 horas, todos los días. Desarrollamos tu tienda completa, con catálogo, pagos y gestión de pedidos lista para operar desde el día uno.",
                detail: "",
                price: "desde USD 400",
                delay: 150,
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-[#E879F9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                color: "#E879F9",
                bg: "rgba(232,121,249,0.1)",
                tag: "IA + n8n",
                title: "Automatizaciones",
                desc: "Miramos cómo trabajás, identificamos qué se puede automatizar, y construimos la solución. Cada hora que perdés en tareas repetitivas es una hora que no invertiste en crecer. Cada automatización se diseña desde cero para lo que vos necesitás — sin que tengas que entender nada de tecnología.",
                detail: "",
                price: "desde USD 100",
                delay: 300,
              },
            ].map((s) => (
              <ScrollReveal key={s.title} delay={s.delay}>
                <div className="card-glass rounded-2xl p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: s.bg }}>
                      {s.icon}
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full border" style={{ color: s.color, borderColor: `${s.color}30`, background: `${s.color}10` }}>
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-[#94A3B8] leading-relaxed flex-1">{s.desc}</p>
                  {s.detail && (
                    <p className="text-xs text-[#64748B] border-t border-white/5 pt-4 mt-4">{s.detail}</p>
                  )}
                  <div className="border-t border-white/5 pt-4 mt-4 flex items-center justify-between">
                    <span className="text-sm font-bold" style={{ color: s.color }}>{s.price}</span>
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-xs text-[#64748B] hover:text-white transition-colors">Consultá →</a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ AUTOMATIZAR ── */}
      <section className="py-28 px-6 bg-[#080E1A] relative overflow-hidden" id="automatizar">
        <div className="orb orb-cyan opacity-50" style={{ bottom: "-100px", right: "-100px", top: "auto", left: "auto" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="text-xs font-semibold tracking-widest text-[#00D4FF] uppercase mb-4 block">Por qué automatizar</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Cuanto más crece tu negocio, más tiempo perdés en tareas que podría hacer una máquina.
              </h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
                Contestar el mismo mensaje veinte veces. Copiar datos de un formulario a una planilla. Mandar el mismo mail de confirmación una y otra vez. Eso no es trabajar — es sobrevivir.
              </p>
              <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
                <strong className="text-white">Automatizar es simple:</strong> conectamos tus herramientas para que hagan ese trabajo solo. Vos te liberás. Tu negocio sigue funcionando.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#00D4FF] font-semibold hover:gap-4 transition-all"
              >
                Quiero automatizar mi negocio
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </ScrollReveal>

            {/* Visual: flujo de automatización */}
            <ScrollReveal direction="right" delay={200}>
              <div className="relative">
                {/* Flujo */}
                <div className="space-y-4">
                  {[
                    {
                      icon: <svg className="w-5 h-5 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>,
                      title: "Un cliente llena tu formulario",
                      sub: "Nombre, email, consulta.",
                      color: "border-[#7C3AED]/40",
                    },
                    {
                      icon: <svg className="w-5 h-5 text-[#00D4FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                      title: "El sistema lo procesa solo",
                      sub: "Sin que hagas nada.",
                      color: "border-[#00D4FF]/40",
                    },
                    {
                      icon: <svg className="w-5 h-5 text-[#E879F9]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                      title: "El cliente recibe respuesta automática",
                      sub: "Instantánea, profesional.",
                      color: "border-[#E879F9]/40",
                    },
                    {
                      icon: <svg className="w-5 h-5 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
                      title: "El dato queda registrado",
                      sub: "En tu planilla, en tiempo real.",
                      color: "border-[#7C3AED]/40",
                    },
                    {
                      icon: <svg className="w-5 h-5 text-[#00D4FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>,
                      title: "Vos recibís un aviso",
                      sub: "Por WhatsApp o email.",
                      color: "border-[#00D4FF]/40",
                    },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0D1627] border border-white/10 flex items-center justify-center flex-shrink-0">
                        {step.icon}
                      </div>
                      <div className={`flex-1 bg-[#0D1627] border ${step.color} rounded-xl px-5 py-3`}>
                        <p className="font-semibold text-sm">{step.title}</p>
                        <p className="text-xs text-[#64748B] mt-0.5">{step.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-[#0D1627] border border-[#22C55E]/30 rounded-xl px-5 py-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#22C55E] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div>
                    <p className="font-bold text-[#22C55E] text-sm">Todo eso sin que toques nada.</p>
                    <p className="text-xs text-[#64748B]">Así se escala sin contratar más gente.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Intermedio — post Automatizar */}
      <div className="pb-16 px-6 bg-[#080E1A]">
        <ScrollReveal direction="fade" className="max-w-xl mx-auto text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0D1627] border border-[#00D4FF]/30 hover:border-[#00D4FF]/70 text-white rounded-full px-6 py-3 transition-all hover:bg-[#00D4FF]/10 group"
          >
            <svg className="w-5 h-5 text-[#25D366] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <span className="font-medium text-sm">Identificamos qué podemos automatizar en tu negocio — gratis</span>
            <svg className="w-4 h-4 text-[#00D4FF] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </ScrollReveal>
      </div>

      {/* ── CÓMO TRABAJAMOS ── */}
      <section className="py-28 px-6" id="como">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-20" direction="fade">
            <span className="text-xs font-semibold tracking-widest text-[#E879F9] uppercase mb-4 block">El proceso</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Cómo trabajamos
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
              De idea a resultado. Sin tecnicismos, sin demoras innecesarias.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Línea conectora (desktop) */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#7C3AED] via-[#00D4FF] to-[#E879F9] opacity-20" />

            {[
              {
                step: "01",
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
                title: "Entendemos tu negocio",
                desc: "Te escuchamos y entendemos cómo funcionan los procesos de tu negocio, qué necesitás y qué no. Una charla sin costo, sin tecnicismos.",
                color: "#7C3AED",
                delay: 0,
              },
              {
                step: "02",
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>,
                title: "Diseñamos la solución",
                desc: "Te presentamos una propuesta clara con lo que vamos a construir, cómo lo vamos a hacer y cuánto cuesta.",
                color: "#00D4FF",
                delay: 150,
              },
              {
                step: "03",
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                title: "Lo construimos",
                desc: "Ponemos manos a la obra. Te mostramos el avance para que estés al tanto en todo momento.",
                color: "#E879F9",
                delay: 300,
              },
              {
                step: "04",
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3l14 9-14 9V3z" /></svg>,
                title: "Lo lanzamos juntos",
                desc: "Entregamos todo funcionando. Y te explicamos cómo usarlo para que no dependas de nadie.",
                color: "#7C3AED",
                delay: 450,
              },
            ].map((s) => (
              <ScrollReveal key={s.step} delay={s.delay}>
                <div className="relative text-center">
                  <div className="inline-flex flex-col items-center mb-6">
                    <span
                      className="text-xs font-bold tracking-widest mb-3 px-2 py-0.5 rounded"
                      style={{ color: s.color, background: `${s.color}15` }}
                    >
                      {s.step}
                    </span>
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-[#0D1627] border border-white/10" style={{ color: s.color }}>
                      {s.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-3">{s.title}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Intermedio — post Cómo Trabajamos */}
      <div className="pb-16 px-6">
        <ScrollReveal direction="fade" className="max-w-xl mx-auto text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0D1627] border border-[#E879F9]/30 hover:border-[#E879F9]/70 text-white rounded-full px-6 py-3 transition-all hover:bg-[#E879F9]/10 group"
          >
            <svg className="w-5 h-5 text-[#25D366] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <span className="font-medium text-sm">Arrancamos con una charla. Sin costo, sin compromiso.</span>
            <svg className="w-4 h-4 text-[#E879F9] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </ScrollReveal>
      </div>

      {/* ── FAQ ── */}
      <section className="py-28 px-6 bg-[#080E1A]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-16" direction="fade">
            <span className="text-xs font-semibold tracking-widest text-[#E879F9] uppercase mb-4 block">Preguntas frecuentes</span>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Lo que siempre nos preguntan
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              {
                q: "¿Cuánto cuesta?",
                a: "Cada proyecto es distinto, pero trabajamos para que el presupuesto tenga sentido para tu negocio. Nos importa cuidar tus recursos tanto como los nuestros — por eso siempre presentamos un precio claro y justo antes de empezar. Sin letra chica.",
              },
              {
                q: "¿Cuánto tiempo tarda?",
                a: "Trabajamos de forma eficiente porque sabemos que tu tiempo vale. La idea es entregarte resultados lo antes posible sin resignar calidad. Cuando entendemos qué necesitás, te damos un plazo concreto y lo cumplimos.",
              },
              {
                q: "¿Necesito saber de tecnología?",
                a: "Para nada. Nuestra tarea es exactamente esa: traducir lo que necesita tu negocio al lenguaje tecnológico. Vos nos explicás cómo trabajás, nosotros nos encargamos del resto.",
              },
              {
                q: "¿Qué pasa si no me gusta el resultado?",
                a: "Trabajamos juntos durante todo el proceso para que el resultado sea lo que esperabas. Si algo no te convence, lo ajustamos hasta encontrar el punto que se adapta a tus necesidades.",
              },
              {
                q: "¿Qué pasa después de que me entregan el trabajo?",
                a: "No te quedás solo. Hacemos seguimiento, estamos disponibles para consultas y ofrecemos soporte post-entrega según lo que la solución requiera.",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="card-glass rounded-2xl px-8 py-6 group cursor-default">
                  <div className="flex items-start gap-4">
                    <span className="text-[#7C3AED] font-bold text-lg mt-0.5 flex-shrink-0">—</span>
                    <div>
                      <p className="font-bold text-lg mb-2 text-white">{item.q}</p>
                      <p className="text-[#94A3B8] leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500} className="text-center mt-12">
            <p className="text-[#64748B] text-sm mb-4">¿Tenés alguna otra duda?</p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#7C3AED] hover:text-[#9D5FFB] font-semibold transition-colors"
            >
              Escribinos directamente
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CASOS ── */}
      <section className="py-28 px-6" id="casos">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16" direction="fade">
            <span className="text-xs font-semibold tracking-widest text-[#00D4FF] uppercase mb-4 block">Proyectos reales</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Algunos de nuestros trabajos
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
              No vendemos promesas. Vendemos resultados que se pueden ver.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                gradient: "from-[#7C3AED] to-[#00D4FF]",
                tag: "Landing Page + Automatización",
                tagColor: "#00D4FF",
                status: "Live",
                statusBg: "bg-[#22C55E]/10 text-[#22C55E]",
                title: "Distribuidora Blue",
                desc: "Mayorista de materiales de construcción, 18 años en el mercado. Diseñamos su presencia online y automatizamos el formulario de contacto: cada consulta queda registrada y dispara un email automático de respuesta.",
                link: "https://distribuidorablue.com",
                linkText: "Ver sitio",
                delay: 0,
              },
              {
                gradient: "from-[#00D4FF] to-[#E879F9]",
                tag: "Tienda Online Shopify",
                tagColor: "#E879F9",
                status: "En desarrollo",
                statusBg: "bg-[#F59E0B]/10 text-[#F59E0B]",
                title: "Maracuya",
                desc: "Marca uruguaya de delantales personalizados. Construimos su tienda en Shopify con catálogo completo, variantes de producto, pasarela de pagos y gestión de envíos lista para operar.",
                link: null,
                linkText: "Próximamente",
                delay: 150,
              },
              {
                gradient: "from-[#E879F9] to-[#7C3AED]",
                tag: "Tienda Online Shopify",
                tagColor: "#E879F9",
                status: "En desarrollo",
                statusBg: "bg-[#F59E0B]/10 text-[#F59E0B]",
                title: "Pepina",
                desc: "Marca de indumentaria femenina. Desarrollamos su tienda Shopify con catálogo por temporada, variantes de color y talle, sistema de pagos integrado y experiencia de compra cuidada.",
                link: "https://pepina.uy",
                linkText: "Ver sitio",
                delay: 300,
              },
            ].map((c) => (
              <ScrollReveal key={c.title} delay={c.delay}>
                <div className="card-glass rounded-2xl overflow-hidden h-full flex flex-col">
                  <div className={`h-1.5 bg-gradient-to-r ${c.gradient}`} />
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full border" style={{ color: c.tagColor, borderColor: `${c.tagColor}30`, background: `${c.tagColor}10` }}>
                        {c.tag}
                      </span>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${c.statusBg}`}>
                        {c.status === "Live" ? "✓ " : ""}{c.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed flex-1 mb-6">{c.desc}</p>
                    {c.link ? (
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                        style={{ color: c.tagColor }}
                      >
                        {c.linkText}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <span className="text-sm text-[#64748B]">{c.linkText}</span>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* 4ta card — CTA */}
          <ScrollReveal delay={400} className="mt-6">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-2 border-dashed border-[#7C3AED]/30 hover:border-[#7C3AED]/60 rounded-2xl p-10 text-center transition-all hover:bg-[#7C3AED]/5 cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#7C3AED]/20 transition-colors">
                  <svg className="w-7 h-7 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold text-white mb-1">¿Tu negocio podría ser el siguiente?</p>
                  <p className="text-[#64748B] text-sm">Contanos en qué estás trabajando y vemos cómo te ayudamos. La primera charla es gratis.</p>
                </div>
                <div className="flex-shrink-0 flex items-center gap-2 bg-[#7C3AED] group-hover:bg-[#6D28D9] text-white text-sm font-semibold px-5 py-3 rounded-xl transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Escribinos
                </div>
              </div>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TESTIMONIO ── */}
      <section className="py-20 px-6 bg-[#080E1A]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal direction="fade">
            <div className="relative card-glass rounded-3xl p-10 md:p-14">
              {/* Comillas decorativas */}
              <svg className="absolute top-8 left-10 w-10 h-10 text-[#7C3AED]/20" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.5c0-1.933 1.567-3.5 3.5-3.5V8zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-6.5c0-1.933 1.567-3.5 3.5-3.5V8z"/>
              </svg>

              <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-8 pt-4">
                {/* PLACEHOLDER — reemplazar con testimonio real de Distribuidora Blue */}
                "Antes no teníamos presencia online. Revcore nos armó la página en una semana y ahora los clientes nos encuentran solos."
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#00D4FF] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  DB
                </div>
                <div>
                  {/* PLACEHOLDER — reemplazar con nombre real */}
                  <p className="font-bold text-white">Distribuidora Blue</p>
                  <p className="text-sm text-[#64748B]">Mayorista de materiales de construcción — Uruguay</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20">
                    Cliente real
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="orb orb-violet opacity-50" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <div className="gradient-border p-1 rounded-3xl">
              <div className="bg-[#080E1A] rounded-[calc(1.5rem-4px)] p-12 md:p-16">
                <span className="text-xs font-semibold tracking-widest text-[#7C3AED] uppercase mb-4 block">Siguiente paso</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  ¿Tu negocio necesita{" "}
                  <span className="gradient-text">presencia digital?</span>
                </h2>
                <p className="text-[#94A3B8] text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                  Contanos de tu negocio. Sin compromisos, sin formularios largos.
                  Una charla de 15 minutos alcanza para saber qué necesitás.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20B858] text-white font-bold px-10 py-5 rounded-xl transition-all text-lg hover:shadow-lg hover:shadow-green-500/20"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Escribinos por WhatsApp
                </a>
                <p className="text-[#475569] text-sm mt-6">Respuesta en menos de 24 horas.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Revcore Labs" width={28} height={28} className="rounded-sm opacity-80" />
            <span className="font-bold tracking-widest text-sm opacity-60" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              REVCORE <span className="text-[#00D4FF] font-light">LABS</span>
            </span>
          </div>
          <p className="text-[#475569] text-sm">© 2026 Revcore Labs — Uruguay</p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64748B] hover:text-white text-sm transition-colors"
          >
            +598 94 486 143
          </a>
        </div>
      </footer>

    </main>
  );
}
