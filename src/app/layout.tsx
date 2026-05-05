import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
