import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Revcore Labs — Digitalización para negocios reales";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050A14",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(124,58,237,0.15)",
            border: "1px solid rgba(124,58,237,0.4)",
            borderRadius: "100px",
            padding: "8px 20px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#00D4FF",
            }}
          />
          <span style={{ color: "#9D5FFB", fontSize: "18px", fontWeight: 600 }}>
            Agencia de digitalización — Uruguay
          </span>
        </div>

        {/* Título */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "24px",
            maxWidth: "900px",
          }}
        >
          Hacemos el trabajo digital para tu negocio.
        </div>

        {/* Subtítulo */}
        <div
          style={{
            fontSize: "26px",
            color: "#94A3B8",
            textAlign: "center",
            maxWidth: "700px",
          }}
        >
          Landing pages · Tiendas online · Automatizaciones
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "white",
              letterSpacing: "4px",
            }}
          >
            REVCORE{" "}
            <span style={{ color: "#00D4FF", fontWeight: 300 }}>LABS</span>
          </span>
          <span style={{ color: "#334155", fontSize: "18px" }}>
            revcorelabs.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
