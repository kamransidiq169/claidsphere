import { ImageResponse } from "next/og";

export const alt = "Claidsphere Solutions — Cloud, AI & Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#07090d", color: "#e9ecf1", padding: 72 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, letterSpacing: 6 }}>
          <div style={{ width: 26, height: 26, borderRadius: 13, border: "3px solid #5b8cff", display: "flex" }} />
          CLAIDSPHERE
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 84, lineHeight: 1.02, letterSpacing: -3, fontWeight: 300 }}>
          <span>Data into intelligence.</span>
          <span>AI into innovation.</span>
          <span>Cloud into possibility.</span>
        </div>
        <div style={{ fontSize: 24, color: "#9aa3b2" }}>Cloud · AI · Software · Microsoft &amp; Azure</div>
      </div>
    ),
    size,
  );
}
