import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Método Exacto"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "#0b0d12",
          color: "#ffffff",
          fontFamily: "Inter, Arial, sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 25%, rgba(234,109,31,0.22), transparent 28%), radial-gradient(circle at 80% 78%, rgba(234,109,31,0.16), transparent 26%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 34,
            padding: "34px 42px",
            borderRadius: 36,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(9,11,16,0.76)",
            boxShadow: "0 30px 100px rgba(0,0,0,0.45)",
          }}
        >
          <div
            style={{
              width: 118,
              height: 118,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 28,
              background: "rgba(234,109,31,0.14)",
              border: "1px solid rgba(234,109,31,0.22)",
              color: "#ea6d1f",
              fontSize: 42,
              fontWeight: 800,
              letterSpacing: "-0.04em",
            }}
          >
            ME
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 14,
                fontSize: 74,
                lineHeight: 1,
                fontWeight: 800,
                letterSpacing: "-0.05em",
              }}
            >
              <span>Método</span>
              <span style={{ color: "#ea6d1f" }}>Exacto</span>
            </div>

            <div
              style={{
                marginTop: 18,
                fontSize: 30,
                color: "rgba(255,255,255,0.72)",
                letterSpacing: "-0.02em",
              }}
            >
              Asesoría Online Premium
            </div>
          </div>
        </div>
      </div>
    ),
    size
  )
}
