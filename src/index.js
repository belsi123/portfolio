// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import './styles/global.css';
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  // Get all tasks
  const getTasks = () => {
    fetch("http://127.0.0.1:8000/tasks")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  // Create a new task
  const createTask = () => {
    fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "New Task", description: "Task details" }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  function deleteTask(taskId) {
   fetch(`http://localhost:8000/tasks/${taskId}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => console.log(data));
}
  return (
    <div>
      <button onClick={getTasks}>Get All Tasks</button>
      <button onClick={createTask}>Create Task</button>
      <button onClick={() => deleteTask(11)}>Delete Task with ID </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);