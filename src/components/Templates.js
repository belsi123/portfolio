import React from "react";
import { useNavigate } from "react-router-dom";
import StepperNav from "./StepperNav"; // <-- Add this import
const templateList = [
  {
    name: "Classic Blue",
    color: "#3b82f6",
    preview: (
      <div style={{ borderLeft: "6px solid #3b82f6", padding: "1rem" }}>
        <h2 style={{ color: "#3b82f6" }}>Your Name</h2>
        <p><b>Email:</b> your.email@example.com</p>
        <p><b>Summary:</b> Results-driven professional...</p>
      </div>
    ),
  },
  {
    name: "Elegant Gold",
    color: "#ffd700",
    preview: (
      <div style={{ border: "2px solid #ffd700", borderRadius: 8, padding: "1rem" }}>
        <h2 style={{ color: "#ffd700" }}>Your Name</h2>
        <p><b>Email:</b> your.email@example.com</p>
        <p><b>Summary:</b> Passionate and dedicated developer...</p>
      </div>
    ),
  },
  {
    name: "Modern Dark",
    color: "#22223b",
    preview: (
      <div style={{ background: "#22223b", color: "#fff", borderRadius: 8, padding: "1rem" }}>
        <h2 style={{ color: "#ffd700" }}>Your Name</h2>
        <p><b>Email:</b> your.email@example.com</p>
        <p><b>Summary:</b> Creative problem-solver...</p>
      </div>
    ),
  },
  {
    name: "Minimal Green",
    color: "#10b981",
    preview: (
      <div style={{ borderLeft: "6px solid #10b981", padding: "1rem" }}>
        <h2 style={{ color: "#10b981" }}>Your Name</h2>
        <p><b>Email:</b> your.email@example.com</p>
        <p><b>Summary:</b> Detail-oriented and adaptable...</p>
      </div>
    ),
  },
];

function Templates({ resume, setResume }) {
  const navigate = useNavigate();

  const handleSelect = (idx) => {
    setResume({ ...resume, previewTemplate: idx });
    navigate("/preview");
  };

  return (
    <div className="form-section">
        <StepperNav />
      <h2>Choose Your Resume Template</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginTop: "2rem" }}>
        {templateList.map((tpl, idx) => (
          <div
            key={tpl.name}
            style={{
              width: 260,
              minHeight: 180,
              boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
              borderRadius: 10,
              background: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem",
              border: `2px solid ${tpl.color}`,
            }}
          >
            {tpl.preview}
            <button
              style={{
                marginTop: "1rem",
                background: tpl.color,
                color: tpl.color === "#22223b" ? "#ffd700" : "#22223b",
                border: "none",
                borderRadius: 4,
                fontWeight: "bold",
                padding: "0.5rem 1.2rem",
                cursor: "pointer",
              }}
              onClick={() => handleSelect(idx)}
            >
              Choose {tpl.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Templates;