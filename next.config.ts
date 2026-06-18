import type { NextConfig } from "next";

const securityHeaders = [
  {
    // Fuerza HTTPS siempre. Si alguien entra por HTTP, el navegador lo
    // redirige a HTTPS automáticamente por los próximos 2 años.
    // Sin esto: un atacante en la misma red Wi-Fi puede interceptar el tráfico.
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    // Evita que tu sitio sea embebido en un <iframe> de otro dominio.
    // Sin esto: alguien puede poner tu sitio en un iframe invisible sobre
    // otro sitio y engañar a los usuarios para que hagan clic en cosas
    // sin saberlo (ataque "clickjacking").
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    // Evita que el navegador "adivine" el tipo de un archivo.
    // Sin esto: alguien podría subir un archivo .jpg que en realidad es
    // un script, y el navegador lo ejecutaría.
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Controla qué información se manda cuando un visitante hace clic
    // en un link externo. Sin esto, la URL completa de tu página (con
    // parámetros) se manda al sitio de destino, filtrando info privada.
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // Desactiva funciones del navegador que no usás: cámara, micrófono,
    // geolocalización, etc. Sin esto, un script malicioso podría activarlas.
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  {
    // Content Security Policy (CSP): la más poderosa de todas.
    // Le dice al navegador exactamente desde qué dominios puede cargar
    // scripts, imágenes, fuentes, etc.
    // Sin esto: si alguien logra inyectar un script en tu página (XSS),
    // el navegador lo ejecuta sin preguntar. Con CSP, solo ejecuta
    // scripts de los dominios que vos aprobaste.
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Scripts propios + Google Analytics + Google Tag Manager
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
      // Estilos propios + Google Fonts
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Fuentes desde Google Fonts
      "font-src 'self' https://fonts.gstatic.com",
      // Imágenes desde tu dominio + data URIs + Google
      "img-src 'self' data: https://www.google-analytics.com",
      // El formulario puede hacer fetch solo a tu webhook de n8n
      "connect-src 'self' https://n8n.revcorelabs.com https://www.google-analytics.com https://region1.google-analytics.com",
      // No permite que tu sitio sea embebido en iframes (refuerza X-Frame-Options)
      "frame-ancestors 'none'",
      // Solo permite enviar forms a tu propio dominio o n8n
      "form-action 'self' https://n8n.revcorelabs.com",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Aplica los headers a todas las rutas del sitio
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
