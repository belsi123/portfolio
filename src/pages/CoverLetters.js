import React from "react";

const templates = [
  {
    name: "Skill-Based",
    img: "https://your-image-url-1.png",
    desc: "A cover letter template that is skill-focused.",
    count: "1/16",
    badge: null,
  },
  {
    name: "Minimalist",
    img: "https://your-image-url-2.png",
    desc: "A crisp and simple cover letter is always in style.",
    count: "2/16",
    badge: "Popular",
  },
  {
    name: "Hybrid",
    img: "https://your-image-url-3.png",
    desc: "Use this template for a modern look.",
    count: "3/16",
    badge: null,
  },
  {
    name: "Finance",
    img: "https://your-image-url-4.png",
    desc: "Perfect for finance and accounting professionals.",
    count: "4/16",
    badge: null,
  },
];

export default function CoverLetters() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #d1f7ef 0%, #e0f7fa 100%)",
        padding: "2rem 0 0 0",
        fontFamily: "Segoe UI, Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <button
          style={{
            background: "#4ee3c1",
            color: "#22223b",
            fontWeight: 600,
            fontSize: "1.3rem",
            border: "none",
            borderRadius: "2rem",
            padding: "1rem 2.5rem",
            cursor: "pointer",
            marginBottom: "2.5rem",
            marginLeft: "1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            display: "flex",
            alignItems: "center",
            gap: "0.7rem"
          }}
        >
          Explore Our Templates <span style={{ fontSize: "1.5rem" }}>&rarr;</span>
        </button>
        <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", justifyContent: "center" }}>
          {templates.map((tpl, idx) => (
            <div
              key={tpl.name}
              style={{
                background: "#fff",
                borderRadius: 24,
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                padding: "1.5rem 1.2rem 1.2rem 1.2rem",
                width: 320,
                minHeight: 480,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative"
              }}
            >
              {/* Fake image */}
              <div style={{
                width: "100%",
                height: 220,
                background: "#f1f5f9",
                borderRadius: 16,
                marginBottom: "1.2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative"
              }}>
                <img
                  src={tpl.img}
                  alt={tpl.name}
                  style={{
                    width: "90%",
                    height: "90%",
                    objectFit: "contain",
                    borderRadius: 12,
                  }}
                  onError={e => { e.target.style.display = "none"; }}
                />
                <div style={{
                  position: "absolute",
                  top: -22,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#4ee3c1",
                  color: "#fff",
                  borderRadius: "50%",
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  border: "4px solid #fff"
                }}>
                  ★
                </div>
              </div>
              <div style={{ fontWeight: 700, fontSize: "1.25rem", color: "#22223b", marginBottom: 4 }}>
                {tpl.name}
              </div>
              <div style={{ color: "#64748b", fontSize: "1.05rem", marginBottom: 8, textAlign: "center" }}>
                {tpl.desc}
              </div>
              <div style={{ color: "#22223b", fontWeight: 600, fontSize: "1.1rem", marginBottom: 4 }}>
                {tpl.count}
              </div>
              {tpl.badge && (
                <div style={{
                  background: "#e0f2fe",
                  color: "#2563eb",
                  borderRadius: 12,
                  padding: "0.2rem 1.1rem",
                  fontWeight: 600,
                  fontSize: "1rem",
                  marginTop: 8
                }}>
                  ★ {tpl.badge}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}