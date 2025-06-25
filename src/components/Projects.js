import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepperNav from "./StepperNav";

function Projects({ resume, setResume }) {
  const navigate = useNavigate();
  const [proj, setProj] = useState({ name: "", desc: "", tech: "", role: "" });

  const addProject = () => {
    if (proj.name && proj.desc && proj.tech && proj.role) {
      setResume({
        ...resume,
        projects: [...resume.projects, proj],
      });
      setProj({ name: "", desc: "", tech: "", role: "" });
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
        Projects
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <label style={{ fontWeight: 500, fontSize: "1rem", color: "#334155" }}>
          Project Name:
          <input
            value={proj.name}
            onChange={e => setProj({ ...proj, name: e.target.value })}
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
          Description:
          <input
            value={proj.desc}
            onChange={e => setProj({ ...proj, desc: e.target.value })}
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
          Technologies Used:
          <input
            value={proj.tech}
            onChange={e => setProj({ ...proj, tech: e.target.value })}
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
          Your Role/Contribution:
          <input
            value={proj.role}
            onChange={e => setProj({ ...proj, role: e.target.value })}
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
        onClick={addProject}
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
        {resume.projects.map((p, i) => (
          <li key={i} style={{ marginBottom: 8 }}>
            <b>{p.name}</b>: {p.desc} <br />
            <i>{p.tech}</i> <br />
            Role: {p.role}
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", gap: 10 }}>
        <button
          onClick={() => navigate("/skills")}
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
          onClick={() => navigate("/certifications")}
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

export default Projects;