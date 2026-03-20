import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 56,
          background: "linear-gradient(135deg, #020617 0%, #1d4ed8 55%, #0f172a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            opacity: 0.9,
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 9999,
              background: "#93c5fd",
            }}
          />
          VR Web Solutions
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 920 }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05 }}>
            SEO-ready websites for local businesses and store owners.
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: "#dbeafe" }}>
            Fast performance, stronger indexing, premium UI, and lead-focused CTA strategy.
          </div>
        </div>

        <div style={{ display: "flex", gap: 18, fontSize: 26, color: "#e2e8f0" }}>
          <div>Get Website @ INR 7999</div>
          <div>•</div>
          <div>Book Free Consultation</div>
        </div>
      </div>
    ),
    size
  );
}
