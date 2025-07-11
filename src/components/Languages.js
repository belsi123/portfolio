import React from "react";
import { useNavigate } from "react-router-dom";
import StepperNav from "./StepperNav";

function Languages({ resume, setResume }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        maxWidth: 420,
        margin: "40px auto",
        background: "rgba(255,255,255,0.96)",
        borderRadius: 14,
        boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
        padding: "28px 32px",
        fontFamily: "Segoe UI, Arial, sans-serif",
        border: "1px solid #e0e7ef"
      }}
    >
      <StepperNav />
      <h2 style={{ fontSize: "1.3rem", marginBottom: 16, fontWeight: 700, color: "#22223b" }}>
        Languages
      </h2>
      <label style={{ fontWeight: 500, fontSize: "1rem", color: "#334155", marginBottom: 12 }}>
        List of languages and proficiency levels:
        <input
          value={resume.languages}
          onChange={e => setResume({ ...resume, languages: e.target.value })}
          placeholder="e.g. English (Fluent), Hindi (Native)"
          style={{
            width: "100%",
            padding: "7px 12px",
            borderRadius: 6,
            border: "1px solid #cbd5e1",
            marginTop: 4,
            fontSize: "1rem"
          }}
        />
      </label>
      <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
        <button
          onClick={() => navigate("/certifications")}
          style={{
            background: "#f1f5f9",
            color: "#22223b",
            border: "1px solid #cbd5e1",
            borderRadius: 6,
            padding: "8px 20px",
            fontWeight: 600,
            fontSize: "1rem",
            cursor: "pointer"
          }}
        >
          Back
        </button>
        <button
          onClick={() => navigate("/interests")}
          style={{
            background: "#22d3ee",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "8px 20px",
            fontWeight: 600,
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: "0 1px 4px rgba(34,211,238,0.08)"
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Languages;