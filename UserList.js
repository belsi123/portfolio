import React, { useEffect, useState } from "react";
import StepperNav from "./StepperNav"; // <-- Add this import
function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(stored);
  }, []);

  const removeUser = (email) => {
    const updated = users.filter(u => u.email !== email);
    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
  };

  return (
    <div className="form-section">
        <StepperNav />
      <h2>Users Who Have Used This App</h2>
      <ul>
        {users.length === 0 && <li>No users yet.</li>}
        {users.map((user, idx) => (
          <li key={idx} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span>
              <b>{user.name}</b> — {user.email}
            </span>
            <button
              style={{
                background: "#ef4444",
                color: "#fff",
                border: "none",
                borderRadius: 4,
                padding: "0.2rem 0.7rem",
                cursor: "pointer"
              }}
              onClick={() => removeUser(user.email)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UserList;