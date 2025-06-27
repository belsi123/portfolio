import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,rgb(40, 130, 152),rgb(53, 135, 190),rgb(119, 56, 154))",
        fontFamily: "Segoe UI, Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
        animation: "gradientShift 10s ease infinite",
      }}
    >
      {/* Define the animation for the gradient */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      {/* Top Navigation with Sign in button */}
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "1.5rem 3rem 1rem 3rem",
          background: "rgba(255, 255, 255, 0.9)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
          backdropFilter: "blur(5px)",
        }}
      >
        <button
          onClick={() => navigate("/taskpage")}
          style={{
            background: "#fff",
            color: "#2563eb",
            border: "1.5px solid #2563eb",
            borderRadius: 20,
            padding: "0.6rem 1.5rem",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            marginLeft: "1rem",
            boxShadow: "0 2px 8px rgba(59,130,246,0.10)",
            transition: "background 0.2s, color 0.2s",
          }}
        >
          Task page
        </button>
        <button
          onClick={() => navigate("/login")}
          style={{
            background: "#fff",
            color: "#2563eb",
            border: "1.5px solid #2563eb",
            borderRadius: 20,
            padding: "0.6rem 1.5rem",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            marginLeft: "1rem",
            boxShadow: "0 2px 8px rgba(59,130,246,0.10)",
            transition: "background 0.2s, color 0.2s",
          }}
        >
          Sign in
        </button>
      </nav>

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "2.5rem 0 0 0",
          minHeight: "80vh",
          position: "relative",
        }}
      >
        {/* Left: Headline and CTA (buttons removed) */}
        <div style={{ flex: "1 1 420px", maxWidth: 600, marginLeft: "2vw", marginRight: "2vw" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1.2rem", color: "#22223b", lineHeight: 1.15 }}>
            The online resume builder getting folks hired by BBC, Google, Apple, Tesla, and Airbnb.
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#334155", marginBottom: "2.5rem" }}>
            Build your brand-new resume in as little as 5 minutes.<br />
            <span style={{ fontWeight: "bold", color: "#22223b" }}>Try it for free.</span>
          </p>
          <div style={{ marginTop: "1rem", color: "#64748b", fontSize: "0.95rem" }}>
            No credit card required
          </div>
        </div>

        {/* Right: Resume Card */}
        <div
          style={{
            width: 420,
            minHeight: 600,
            background: "#fff",
            borderRadius: 18,
            boxShadow: "0 8px 32px rgba(0,0,0,0.13)",
            border: "1.5px solid #e0e7ef",
            padding: "2rem 2rem 1.5rem 2rem",
            marginRight: "4vw",
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Resume Header */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem", width: "100%" }}>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile"
              style={{
                width: 72,
                height: 72,
                borderRadius: "8px",
                objectFit: "cover",
                marginRight: "1.5rem",
                border: "2.5px solid rgb(37, 153, 235)",
                background: "#e0e7ef",
              }}
            />
            <div>
              <div style={{ fontWeight: 700, fontSize: "1.25rem", color: "#22223b" }}>Rosalie Ann Santos</div>
              <div style={{ color: "#2563eb", fontSize: "1.05rem", fontWeight: 500 }}>Flight Attendant</div>
              <div style={{ color: "#64748b", fontSize: "0.97rem", marginTop: 2 }}>Fort Lauderdale, FL</div>
              <div style={{ color: "#64748b", fontSize: "0.97rem" }}>rosalie@email.com</div>
            </div>
          </div>
          {/* Resume Body */}
          <div style={{ width: "100%" }}>
            <div style={{ color: "#334155", fontSize: "1.01rem", marginBottom: "1.2rem" }}>
              Responsible and experienced Flight Attendant with years of in-flight operations, producing excellent customer service and passenger safety.
            </div>
            <div style={{ color: "#2563eb", fontWeight: 600, fontSize: "1rem", marginBottom: 4 }}>Skills & Competencies</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.1rem" }}>
              <span style={{ background: "#e0f2fe", color: "#2563eb", borderRadius: 6, padding: "0.2rem 0.7rem", fontSize: "0.97rem" }}>Customer Service</span>
              <span style={{ background: "#e0f2fe", color: "#2563eb", borderRadius: 6, padding: "0.2rem 0.7rem", fontSize: "0.97rem" }}>Cabin Management</span>
              <span style={{ background: "#e0f2fe", color: "#2563eb", borderRadius: 6, padding: "0.2rem 0.7rem", fontSize: "0.97rem" }}>Safety Procedures</span>
              <span style={{ background: "#e0f2fe", color: "#2563eb", borderRadius: 6, padding: "0.2rem 0.7rem", fontSize: "0.97rem" }}>Emergency Care</span>
            </div>
            <div style={{ color: "#2563eb", fontWeight: 600, fontSize: "1rem", marginBottom: 4 }}>Work Experience</div>
            <div style={{ color: "#64748b", fontSize: "0.98rem", marginBottom: 12 }}>
              <b>Spirit Airlines</b> - Flight Attendant<br />
              <span style={{ fontSize: "0.93rem" }}>2018 - Present</span>
              <ul style={{ margin: "0.3rem 0 0 1.1rem", padding: 0 }}>
                <li>Ensured passenger safety and comfort during flights.</li>
                <li>Provided excellent customer service and resolved issues efficiently.</li>
                <li>Documented and reported cabin maintenance issues.</li>
              </ul>
            </div>
            <div style={{ color: "#2563eb", fontWeight: 600, fontSize: "1rem", marginBottom: 4 }}>Education</div>
            <div style={{ color: "#64748b", fontSize: "0.98rem", marginBottom: 12 }}>
              B.A. in Hospitality, Miami University
            </div>
            <div style={{ color: "#2563eb", fontWeight: 600, fontSize: "1rem", marginBottom: 4 }}>Certifications</div>
            <div style={{ color: "#64748b", fontSize: "0.98rem" }}>
              <ul style={{ margin: "0.3rem 0 0 1.1rem", padding: 0 }}>
                <li>First Aid & CPR</li>
                <li>Cabin Safety Training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div
        style={{
          width: "100%",
          height: 120,
          background: "linear-gradient(90deg,rgb(74, 119, 178),rgb(128, 46, 183))",
          position: "absolute",
          left: 0,
          bottom: 0,
          zIndex: 0,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
      />
    </div>
  );
}

export default Home;