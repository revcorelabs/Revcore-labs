import ScrollReveal from "@/components/ScrollReveal";
import NavbarScroll from "@/components/NavbarScroll";
import WhatsAppDemo from "@/components/WhatsAppDemo";
import ContactForm from "@/components/ContactForm";
import ScrollRevealText from "@/components/ScrollRevealText";
import N8nFlow from "@/components/N8nFlow";

const EMAIL = "mailto:revcorelabs@gmail.com";

const LogoIcon = ({ width = 30, height = 30, id = "nav" }: { width?: number; height?: number; id?: string }) => (
  <svg viewBox="0 0 60 60" width={width} height={height} xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <defs>
      <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#B45309" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <polygon points="30,8 49.05,19 49.05,41 30,52 10.95,41 10.95,19" fill="none" stroke={`url(#grad-${id})`} strokeWidth="1.8" />
    <line x1="30" y1="30" x2="30"    y2="8"    stroke="#D97706" strokeWidth="0.9" opacity="0.22" />
    <line x1="30" y1="30" x2="49.05" y2="19"   stroke="#D97706" strokeWidth="0.9" opacity="0.22" />
    <line x1="30" y1="30" x2="49.05" y2="41"   stroke="#D97706" strokeWidth="0.9" opacity="0.22" />
    <line x1="30" y1="30" x2="30"    y2="52"   stroke="#D97706" strokeWidth="0.9" opacity="0.22" />
    <line x1="30" y1="30" x2="10.95" y2="41"   stroke="#D97706" strokeWidth="0.9" opacity="0.22" />
    <line x1="30" y1="30" x2="10.95" y2="19"   stroke="#D97706" strokeWidth="0.9" opacity="0.22" />
    <circle cx="30"    cy="8"    r="2.4" fill="#B45309" />
    <circle cx="49.05" cy="19"   r="1.8" fill="#D97706" opacity={0.8} />
    <circle cx="49.05" cy="41"   r="1.8" fill="#D97706" opacity={0.8} />
    <circle cx="30"    cy="52"   r="2.4" fill="#F59E0B" />
    <circle cx="10.95" cy="41"   r="1.8" fill="#D97706" opacity={0.8} />
    <circle cx="10.95" cy="19"   r="1.8" fill="#D97706" opacity={0.8} />
    <circle cx="30" cy="30" r="5.2" fill={`url(#grad-${id})`} />
    <circle cx="30" cy="30" r="2.3" fill="#09090B" />
  </svg>
);

export default function Home() {
  return (
    <main>
      <NavbarScroll />
      <WhatsAppDemo />

      {/* ── NAVBAR ── */}
      <nav id="navbar">
        <div className="container">
          <div className="nav-inner">
            <a href="#" className="nav-logo">
              <LogoIcon width={30} height={30} id="nav" />
              <div className="nav-logo-divider" />
              <div className="nav-logo-text">
                <div className="nav-logo-wordmark">REVCORE <span style={{color:"var(--amber)",fontWeight:"inherit",letterSpacing:"inherit"}}>LABS</span></div>
                <div className="nav-logo-tagline">Digitalización · Automatización</div>
              </div>
            </a>
            <ul className="nav-links">
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#automatizar">Automatización</a></li>
              <li><a href="#proceso">Proceso</a></li>
              <li><a href="#casos">Trabajos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
            <a href={EMAIL} className="btn btn-primary" style={{ fontSize: 13, padding: "10px 20px" }}>
              Hablemos
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="dot-grid">
        <div className="container">
          <div className="hero-grid">
            {/* Left */}
            <div>
              <ScrollRevealText
                className="hero-h1"
                segments={[
                  { text: "Hacemos el trabajo digital" },
                  { text: "para que vos te enfoques en tu negocio.", amber: true },
                ]}
              />
              <p className="hero-sub">
                Tu negocio ya funciona. Lo que falta es que internet trabaje para vos. Páginas, tiendas y automatizaciones para empresas que quieren crecer.
              </p>
              <div className="hero-ctas">
                <a href={EMAIL} className="btn btn-primary">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Consultá gratis
                </a>
                <a href="#casos" className="btn btn-outline">Ver trabajos →</a>
              </div>
              <div className="hero-stats">
                <div>
                  <span className="hero-stat-num mono">&lt; 7d</span>
                  <p className="hero-stat-label">De charla a sitio publicado</p>
                </div>
                <div>
                  <span className="hero-stat-num mono">24/7</span>
                  <p className="hero-stat-label">Tu presencia trabajando</p>
                </div>
              </div>
            </div>

            {/* WhatsApp simulation */}
            <div className="hero-terminal">
              <div className="wa-topbar">
                <div className="wa-avatar">JM</div>
                <div>
                  <div className="wa-contact-name">Juliana Martínez</div>
                  <div className="wa-contact-status">en línea</div>
                </div>
                <div className="wa-topbar-icons">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="19" r="1" /></svg>
                </div>
              </div>
              <div className="wa-chat">
                <div className="wa-date-divider">Hoy</div>
                <div className="wa-msg wa-msg-in" id="waMsg1">
                  Hola! Vi su página, ¿hacen tiendas online para venta de ropa?
                  <div className="wa-msg-time">10:14</div>
                </div>
                <div className="wa-typing" id="waTyping">
                  <div className="wa-dot" /><div className="wa-dot" /><div className="wa-dot" />
                </div>
                <div className="wa-msg wa-msg-out" id="waMsg2">
                  ¡Hola Juliana! 👋 Sí, armamos tiendas Shopify completas. ¿Qué tipo de ropa vendés? Te cuento todo sin compromiso.
                  <div className="wa-msg-time">10:14 &nbsp;<span className="wa-ticks">✓✓</span></div>
                </div>
                <div className="wa-msg wa-msg-in" id="waMsg3">
                  Ropa femenina, tengo una marca local 🙌 me interesa!
                  <div className="wa-msg-time">10:15</div>
                </div>
              </div>
              <div className="wa-badge" id="waBadge">
                ⚡&nbsp; Respondido automáticamente · 0.8s
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAL ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="nexo-grid">
            <ScrollReveal direction="left">
              <div className="nexo-panel">
                <div className="term-chrome">
                  <span className="term-dot term-dot-r" /><span className="term-dot term-dot-y" /><span className="term-dot term-dot-g" />
                  <span className="term-title">Comparativa</span>
                </div>
                <div className="nexo-row dim">
                  <div className="nexo-icon"><svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#52525B"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" /></svg></div>
                  <div className="nexo-text"><p>Agencia tecnológica</p><span>Entiende código. No entiende tu negocio.</span></div>
                </div>
                <div className="nexo-row dim">
                  <div className="nexo-icon"><svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#52525B"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div>
                  <div className="nexo-text"><p>Freelancer</p><span>Ejecuta bien. No piensa en estrategia.</span></div>
                </div>
                <div className="nexo-row" style={{ background: "rgba(217,119,6,.04)" }}>
                  <div className="nexo-icon" style={{ background: "rgba(217,119,6,.12)", border: "1px solid rgba(217,119,6,.2)" }}>
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#D97706"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div className="nexo-text">
                    <p style={{ color: "#FAFAF9" }}>Revcore Labs</p>
                    <span>Tecnología con foco en tu negocio.</span>
                    <div><span className="nexo-badge">✓ &nbsp;resultado medible</span></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="section-label">diferencial</div>
              <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 700, letterSpacing: "-.02em", marginBottom: 20, lineHeight: 1.15 }}>
                Muchas agencias llegan con soluciones antes de entender el problema. Nosotros hablamos de <strong style={{ color: "#FAFAF9" }}>cómo funciona tu negocio — y buscamos los puntos donde la tecnología puede hacerlo más eficiente</strong>.
              </h2>
              <p style={{ fontSize: 16, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 20 }}>
                Entendemos <strong style={{ color: "var(--amber)", fontWeight: 700 }}>cómo funciona tu empresa</strong> — y también sabemos construir la solución digital. Eso es lo que nos hace distintos.
              </p>
              <ul className="check-list" style={{ marginTop: 28 }}>
                <li>Hablamos en tu idioma, sin tecnicismos innecesarios</li>
                <li>Nos importa el resultado de tu negocio, no solo el código</li>
                <li>Cada decisión técnica tiene un "para qué" concreto</li>
                <li>Acompañamos el proceso, no solo entregamos un archivo</li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section className="section" id="servicios">
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <div className="section-label" style={{ justifyContent: "center" }}>servicios</div>
              <h2>Lo que construimos</h2>
              <p>Tres servicios concretos para llevar tu negocio a internet y hacerlo trabajar solo.</p>
            </ScrollReveal>
          </div>
          <div className="services-grid">
            {[
              {
                delay: 0, title: "Landing Pages", tag: "// más pedido", termTitle: "Landing Page",
                price: "desde USD 190", icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                desc: "Tu negocio en internet en menos de una semana. Página profesional, clara y con formulario de contacto para que los clientes te encuentren — y te elijan.",
              },
              {
                delay: 80, title: "Tiendas Online", tag: "// shopify", termTitle: "Tienda Online",
                price: "desde USD 400", icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 7H4l1-7z" /></svg>,
                desc: "Vendé tus productos las 24 horas, todos los días. Tienda completa con catálogo, pagos y gestión de pedidos lista para operar desde el día uno.",
              },
              {
                delay: 160, title: "Automatizaciones", tag: "// IA + n8n", termTitle: "Automatización",
                price: "desde USD 100", icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                desc: "Identificamos qué tareas repetitivas te roban tiempo y construimos la solución. Cada hora que liberás es una hora que podés invertir en crecer.",
              },
            ].map((s) => (
              <ScrollReveal key={s.title} delay={s.delay}>
                <div className="service-card">
                  <div className="term-chrome">
                    <span className="term-dot term-dot-r" /><span className="term-dot term-dot-y" /><span className="term-dot term-dot-g" />
                    <span className="term-title">{s.termTitle}</span>
                  </div>
                  <div className="service-body">
                    <div className="service-icon">{s.icon}</div>
                    <div className="service-tag">{s.tag}</div>
                    <div className="service-title">{s.title}</div>
                    <p className="service-desc">{s.desc}</p>
                  </div>
                  <div className="service-footer">
                    <span className="service-price">{s.price}</span>
                    <a href={EMAIL} className="service-link">Consultá →</a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTOMATIZACIÓN ── */}
      <section className="section section-alt" id="automatizar">
        <div className="container">
          <div className="flow-grid">
            <ScrollReveal direction="left">
              <div className="section-label">automatización</div>
              <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 700, letterSpacing: "-.02em", marginBottom: 20, lineHeight: 1.15 }}>
                Un contacto llega a tu web. Lo que pasa después, lo hace el sistema solo.
              </h2>
              <p style={{ fontSize: 16, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 16 }}>
                En menos de un segundo el flujo ya corrió: el dato quedó guardado, te llegó una notificación, y un minuto después el cliente recibió su confirmación. Sin que tocaras nada.
              </p>
              <p style={{ fontSize: 16, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 32 }}>
                <strong style={{ color: "var(--text)" }}>Eso es automatizar:</strong> conectamos tus herramientas para que el trabajo suceda solo. Vos te liberás, tu negocio sigue funcionando.
              </p>
              <a href={EMAIL} className="btn btn-ghost">
                Quiero esto para mi negocio
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <N8nFlow />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── PROCESO ── */}
      <section className="section" id="proceso">
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <div className="section-label" style={{ justifyContent: "center" }}>proceso</div>
              <h2>De la charla al producto</h2>
              <p>Cuatro pasos simples. Sin burocracia, sin letra chica.</p>
            </ScrollReveal>
          </div>
          <div className="process-grid">
            {[
              { num: "01", title: "Entendemos tu negocio", desc: "Una charla sin costo para entender cómo trabajás, qué necesitás y qué no. Sin tecnicismos.", icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg> },
              { num: "02", title: "Diseñamos la solución", desc: "Propuesta clara con qué vamos a construir, cómo y cuánto cuesta. Sin letra chica.", icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
              { num: "03", title: "Construimos juntos", desc: "Mostramos avances y pedimos feedback. Si querés cambiar algo en el camino, lo incorporamos.", icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
              { num: "04", title: "Publicamos y seguimos", desc: "Tu proyecto live y funcionando. Seguimos disponibles para mejoras y soporte cuando lo necesités.", icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 80}>
                <div className="process-card">
                  <div className="process-num">{step.num}</div>
                  <div className="process-icon">{step.icon}</div>
                  <div className="process-title">{step.title}</div>
                  <p className="process-desc">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASOS ── */}
      <section className="section section-alt" id="casos">
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <div className="section-label" style={{ justifyContent: "center" }}>trabajos</div>
              <h2>Lo que ya construimos</h2>
              <p>Proyectos reales, para negocios reales en Uruguay.</p>
            </ScrollReveal>
          </div>
          <div className="cases-grid">
            <ScrollReveal delay={0}>
              <div className="case-card">
                <div className="case-accent" style={{ background: "linear-gradient(90deg,#D97706,#F59E0B)" }} />
                <div className="case-body">
                  <div className="case-meta">
                    <span className="case-tag">landing page</span>
                    <span className="case-status"><span className="case-status-dot" style={{ background: "#22C55E" }} /><span style={{ color: "#22C55E" }}>live</span></span>
                  </div>
                  <div className="case-title">Distribuidora Blue</div>
                  <p className="case-desc">Mayorista de materiales de construcción, 18 años en el mercado. Landing page con formulario conectado a Google Sheets, Gmail y WhatsApp de forma automática.</p>
                  <a href="https://distribuidorablue.com" target="_blank" rel="noopener noreferrer" className="case-link">
                    Ver sitio <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="case-card">
                <div className="case-accent" style={{ background: "linear-gradient(90deg,#A78BFA,#EC4899)" }} />
                <div className="case-body">
                  <div className="case-meta">
                    <span className="case-tag">tienda shopify</span>
                    <span className="case-status"><span className="case-status-dot" style={{ background: "#22C55E" }} /><span style={{ color: "#22C55E" }}>live</span></span>
                  </div>
                  <div className="case-title">Pepina</div>
                  <p className="case-desc">Marca de indumentaria femenina. Tienda Shopify con catálogo por temporada, variantes de color y talle, sistema de pagos integrado y experiencia de compra cuidada.</p>
                  <a href="https://pepina.uy" target="_blank" rel="noopener noreferrer" className="case-link">
                    Ver sitio <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Proyectos en curso */}
          <ScrollReveal>
            <div className="wip-section">
              <div className="wip-label">proyectos en curso</div>
              <div className="wip-grid">
                <div className="wip-card">
                  <div className="wip-card-accent" style={{ background: "linear-gradient(90deg,#F59E0B,#FBBF24)" }} />
                  <div className="wip-card-body">
                    <div className="case-meta">
                      <span className="case-tag">tienda shopify</span>
                      <span className="wip-badge">en construcción</span>
                    </div>
                    <div className="wip-card-title">Maracuya</div>
                    <p className="wip-card-desc">Marca uruguaya de delantales personalizados. Tienda Shopify con catálogo completo, variantes de producto y pasarela de pagos.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <a href={EMAIL} className="case-cta" style={{ marginTop: 20, display: "flex" }}>
              <div className="case-cta-icon"><svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" /></svg></div>
              <div>
                <h3>¿Tu negocio podría ser el siguiente?</h3>
                <p>Contanos en qué estás trabajando. La primera charla es gratis.</p>
              </div>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="testimonial-wrap">
              <div className="quote-mark">&ldquo;</div>
              <p className="testimonial-text">
                Logró darme una identidad digital con servicios automatizados y comunica a quien me visita la vigencia de nuestra propuesta. Una muy acertada selección de colores, tonos y términos del rubro la definen como accesible e invita a contactarme — pero sobre todo, respalda silenciosamente el trabajo que realizamos.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">DB</div>
                <div>
                  <div className="author-name">Carlos</div>
                  <div className="author-role">Distribuidora Blue — Mayorista de materiales de construcción</div>
                </div>
                <span className="author-badge">cliente real</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <div className="section-label" style={{ justifyContent: "center" }}>faq</div>
              <h2>Lo que siempre nos preguntan</h2>
            </ScrollReveal>
          </div>
          <div className="faq-list">
            {[
              { q: "¿Cuánto cuesta?", a: "Cada proyecto es distinto, pero trabajamos para que el presupuesto tenga sentido para tu negocio. Siempre presentamos un precio claro y justo antes de empezar. Sin letra chica." },
              { q: "¿Cuánto tiempo tarda?", a: "Depende del proyecto, pero siempre acordamos el plazo antes de arrancar — y lo cumplimos. No hay sorpresas." },
              { q: "¿Necesito saber de tecnología?", a: "Para nada. Nuestra tarea es exactamente esa: traducir lo que necesita tu negocio al lenguaje tecnológico. Vos nos explicás cómo trabajás, nosotros nos encargamos del resto." },
              { q: "¿Qué pasa si no me gusta el resultado?", a: "No entregamos un resultado final de golpe. Trabajamos con feedback continuo — mostramos avances, escuchamos, ajustamos. Si en el camino querés cambiar algo o agregar una idea, lo incorporamos. El producto final es el que vos querés, no el que nosotros imaginamos." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <details>
                  <summary>{item.q}</summary>
                  <div className="faq-answer">{item.a}</div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section className="section" id="contacto">
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <div className="section-label" style={{ justifyContent: "center" }}>contacto</div>
              <h2>¿Listo para empezar?</h2>
              <p>Completá el formulario y te respondemos a la brevedad. Sin compromiso.</p>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="contact-wrap">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="container">
          <div className="footer-inner">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <LogoIcon width={22} height={22} id="footer" />
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, fontWeight: 800, letterSpacing: ".12em", color: "var(--text-3)" }}>
                REVCORE <span style={{ color: "var(--amber)" }}>LABS</span>
              </span>
            </div>
            <span className="footer-copy">© 2026 Revcore Labs — Uruguay</span>
            <a href={EMAIL} className="footer-copy" style={{ transition: "color 150ms ease" }}>
              revcorelabs@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
