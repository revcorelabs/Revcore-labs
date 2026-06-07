import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  title: "Revcore Labs — Digitalización para negocios reales",
  description: "Hacemos el trabajo digital para que vos te enfoques en tu negocio. Landing pages, tiendas online y automatizaciones para PyMEs en Uruguay.",
  keywords: ["digitalización", "automatización", "landing page", "tienda online", "Shopify", "Uruguay", "PyMEs", "agencia digital"],
  openGraph: {
    title: "Revcore Labs — Digitalización para negocios reales",
    description: "Hacemos el trabajo digital para que vos te enfoques en tu negocio. Landing pages, tiendas online y automatizaciones para PyMEs en Uruguay.",
    type: "website",
    url: "https://revcorelabs.com",
    siteName: "Revcore Labs",
    locale: "es_UY",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revcore Labs — Digitalización para negocios reales",
    description: "Hacemos el trabajo digital para que vos te enfoques en tu negocio.",
  },
  metadataBase: new URL("https://revcorelabs.com"),
  verification: {
    google: "Qg8n8WvzY6OfV83c3BAUctr9mTOkDtGRkMqlVIiYtRc",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Revcore Labs",
  url: "https://revcorelabs.com",
  logo: "https://revcorelabs.com/logo.png",
  description:
    "Agencia de digitalización y automatización para PyMEs en Uruguay. Landing pages, tiendas online y automatizaciones con IA.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "UY",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Spanish",
  },
  sameAs: [],
  offers: [
    {
      "@type": "Offer",
      name: "Landing Pages",
      description: "Diseño y desarrollo de landing pages profesionales",
      priceCurrency: "USD",
      price: "190",
    },
    {
      "@type": "Offer",
      name: "Tiendas Online",
      description: "Desarrollo de tiendas Shopify completas",
      priceCurrency: "USD",
      price: "400",
    },
    {
      "@type": "Offer",
      name: "Automatizaciones",
      description: "Automatización de procesos con IA y n8n",
      priceCurrency: "USD",
      price: "100",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YCWEXSXNME"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YCWEXSXNME');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
