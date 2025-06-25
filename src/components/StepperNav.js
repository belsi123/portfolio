import React from "react";
import { Link, useLocation } from "react-router-dom";

const steps = [
  { path: "/contact", label: "1" },
  { path: "/summary", label: "2" },
  { path: "/education", label: "3" },
  { path: "/skills", label: "4" },
  { path: "/projects", label: "5" },
  { path: "/certifications", label: "6" },
  { path: "/languages", label: "7" },
  { path: "/interests", label: "8" },
  { path: "/preview", label: "9" }
];

function StepperNav() {
  const location = useLocation();
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "1.5rem 0" }}>
      {steps.map((step, idx) => (
        <Link
          key={step.path}
          to={step.path}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            margin: "0 8px",
            borderRadius: "50%",
            background: location.pathname === step.path ? "#6366f1" : "#e5e7eb",
            color: location.pathname === step.path ? "#fff" : "#222",
            fontWeight: "bold",
            fontSize: "1.1rem",
            textDecoration: "none",
            border: location.pathname === step.path ? "2px solid #6366f1" : "2px solid #e5e7eb",
            transition: "background 0.2s, color 0.2s"
          }}
          title={`Go to step ${idx + 1}`}
        >
          {step.label}
        </Link>
      ))}
    </div>
  );
}

export default StepperNav;