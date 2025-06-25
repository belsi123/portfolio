import React from "react";
import { useNavigate } from "react-router-dom";
import StepperNav from "./StepperNav";

function ContactInfo({ resume, setResume }) {
  const navigate = useNavigate();
  const { name, email, phone, linkedin } = resume.contact;

  const handleChange = (e) => {
    setResume({
      ...resume,
      contact: { ...resume.contact, [e.target.name]: e.target.value },
    });
  };

  const handleNext = () => {
    if (name && email) {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      if (!users.some(u => u.email === email)) {
        users.push({ name, email });
        localStorage.setItem("users", JSON.stringify(users));
      }
    }
    navigate("/summary");
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
      <h2 style={{ fontSize: "1.4rem", marginBottom: 18, fontWeight: 700, color: "#22223b" }}>
        Contact Information
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <label style={{ fontWeight: 500, fontSize: "1rem", color: "#334155" }}>
          Full Name:
          <input
            name="name"
            value={name}
            onChange={handleChange}
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
          Email Address:
          <input
            name="email"
            value={email}
            onChange={handleChange}
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
          Phone Number:
          <input
            name="phone"
            value={phone}
            onChange={handleChange}
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
          LinkedIn or Portfolio Link:
          <input
            name="linkedin"
            value={linkedin}
            onChange={handleChange}
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
        onClick={handleNext}
        style={{
          background: "#22d3ee",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          padding: "10px 0",
          fontWeight: 600,
          fontSize: "1rem",
          cursor: "pointer",
          width: "100%",
          marginTop: 22,
          boxShadow: "0 1px 4px rgba(34,211,238,0.08)"
        }}
      >
        Next
      </button>
    </div>
  );
}
export default ContactInfo;