import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepperNav from "./StepperNav";

function Certifications({ resume, setResume }) {
  const navigate = useNavigate();
  const [cert, setCert] = useState({ name: "", org: "", date: "" });

  const addCert = () => {
    if (cert.name && cert.org && cert.date) {
      setResume({
        ...resume,
        certifications: [...resume.certifications, cert],
      });
      setCert({ name: "", org: "", date: "" });
    }
  };

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
        Certifications or Awards
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <label style={{ fontWeight: 500, fontSize: "1rem", color: "#334155" }}>
          Name:
          <input
            value={cert.name}
            onChange={e => setCert({ ...cert, name: e.target.value })}
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
        <label style={{ fontWeight: 500, fontSize: "1rem", color: "#334155" }}>
          Issuing Organization:
          <input
            value={cert.org}
            onChange={e => setCert({ ...cert, org: e.target.value })}
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
        <label style={{ fontWeight: 500, fontSize: "1rem", color: "#334155" }}>
          Date Received:
          <input
            value={cert.date}
            onChange={e => setCert({ ...cert, date: e.target.value })}
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
      </div>
      <button
        type="button"
        onClick={addCert}
        style={{
          background: "#22d3ee",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          padding: "8px 0",
          fontWeight: 600,
          fontSize: "1rem",
          cursor: "pointer",
          width: "100%",
          marginTop: 16,
          marginBottom: 10,
          boxShadow: "0 1px 4px rgba(34,211,238,0.08)"
        }}
      >
        Add
      </button>
      <ul style={{ margin: "10px 0 18px 0", paddingLeft: 18, color: "#334155", fontSize: "1rem" }}>
        {resume.certifications.map((c, i) => (
          <li key={i}>{c.name}, {c.org}, {c.date}</li>
        ))}
      </ul>
      <div style={{ display: "flex", gap: 10 }}>
        <button
          onClick={() => navigate("/projects")}
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
          onClick={() => navigate("/languages")}
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

export default Certifications;