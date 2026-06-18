import type { Metadata } from "next";
import AutoDemo from "@/components/AutoDemo";

export const metadata: Metadata = {
  title: "Demo · Automatización en vivo | Revcore Labs",
  description: "Probá en tiempo real cómo funciona una automatización de reservas.",
};

export default function Page() {
  return <AutoDemo />;
}
