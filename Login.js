import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add authentication logic here if needed
    navigate("/contact");
  };

  return (
    <div style={{
      maxWidth: 400,
      margin: "5vh auto",
      background: "#fff",
      borderRadius: 8,
      boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
      padding: "2rem"
    }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Sign in to Your Account</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "0.7rem",
            marginBottom: "1rem",
            borderRadius: 4,
            border: "1px solid #ccc",
            fontSize: "1rem"
          }}
        />
        <input
          type="password"
          placeholder="Password (6-16 characters)"
          value={password}
          onChange={e => setPassword(e.target.value)}
          minLength={6}
          maxLength={16}
          required
          style={{
            width: "100%",
            padding: "0.7rem",
            marginBottom: "1.2rem",
            borderRadius: 4,
            border: "1px solid #ccc",
            fontSize: "1rem"
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            background: "#3b82f6",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            padding: "0.8rem",
            fontWeight: "bold",
            fontSize: "1.1rem",
            marginBottom: "1rem",
            cursor: "pointer"
          }}
        >
          SIGN IN
        </button>
      </form>
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <button
          type="button"
          style={{
            background: "none",
            border: "none",
            color: "#3b82f6",
            textDecoration: "underline",
            cursor: "pointer",
            padding: 0,
            font: "inherit"
          }}
          onClick={() => alert("Forgot password functionality coming soon!")}
        >
          Forgot your password?
        </button>
      </div>
    </div>
  );
}

export default Login;
