import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revcore Labs — Digitalización para negocios reales",
  description: "Hacemos el trabajo digital para que vos te enfoques en tu negocio. Landing pages, tiendas online y automatizaciones para PyMEs.",
  openGraph: {
    title: "Revcore Labs",
    description: "Hacemos el trabajo digital para que vos te enfoques en tu negocio.",
    type: "website",
  },
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
