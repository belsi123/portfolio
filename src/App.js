// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import CoverLetters from './pages/CoverLetters';
// import Login from "./components/Login";
// import ContactInfo from "./components/ContactInfo";
// import Summary from "./components/Summary";
// import Education from "./components/Education";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Certifications from "./components/Certifications";
// import Languages from "./components/Languages";
// import Interests from "./components/Interests";
// import Preview from "./components/Preview";
// import Templates from "./components/Templates";
// import UserList from "./components/UserList";

// import './App.css';

// import "./styles/global.css";

// function App() {
//   const [resume, setResume] = useState({
//     contact: { name: "", email: "", phone: "", linkedin: "" },
//     summary: "",
//     education: [],
//     skills: { technical: "", soft: "" },
//     projects: [],
//     certifications: [],
//     languages: "",
//     interests: "",
//     previewTemplate: 0
//   });

//   return (
//     <Router>
//       {/* Animated background applied here */}
//       <div
//         className="resume-container"
//         style={{
//           minHeight: "100vh",
//           minWidth: "100vw",
//           background: "linear-gradient(-45deg, #6366f1, #0ea5e9, #06b6d4, #a21caf)",
//           backgroundSize: "400% 400%",
//           animation: "gradientBG 15s ease infinite"
//         }}
//       >
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/cover-letters" element={<CoverLetters />} />
//           <Route path="/contact" element={<ContactInfo resume={resume} setResume={setResume} />} />
//           <Route path="/summary" element={<Summary resume={resume} setResume={setResume} />} />
//           <Route path="/education" element={<Education resume={resume} setResume={setResume} />} />
//           <Route path="/skills" element={<Skills resume={resume} setResume={setResume} />} />
//           <Route path="/projects" element={<Projects resume={resume} setResume={setResume} />} />
//           <Route path="/certifications" element={<Certifications resume={resume} setResume={setResume} />} />
//           <Route path="/languages" element={<Languages resume={resume} setResume={setResume} />} />
//           <Route path="/interests" element={<Interests resume={resume} setResume={setResume} />} />
//           <Route path="/preview" element={<Preview resume={resume} setResume={setResume} />} />
//           <Route path="/templates" element={<Templates resume={resume} setResume={setResume} />} />
//           <Route path="/users" element={<UserList />} />
//         </Routes>
//       </div>
//       {/* Animation keyframes injected for inline style */}
//       <style>
//         {`
//           @keyframes gradientBG {
//             0% {background-position: 0% 50%;}
//             50% {background-position: 100% 50%;}
//             100% {background-position: 0% 50%;}
//           }
//         `}
//       </style>
//     </Router>
//   );
// }

// export default App;
// import React from "react";

// function App() {
//   // Get all tasks
//   const getTasks = () => {
//     fetch("http://127.0.0.1:8000/tasks")
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   };

//   // Create a new task
//   const createTask = () => {
//     fetch("http://127.0.0.1:8000/tasks", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ title: "New Task", description: "Task details" }),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   };

//   return (
//     <div>
//       <button onClick={getTasks}>Get All Tasks</button>
//       {/* <button onClick={createTask}>Create Task</button> */}
//     </div>
//   );
// }

// export default App;
import React from "react";

function App() {
  // Get all tasks
  const getTasks = () => {
    fetch("http://127.0.0.1:8000/tasks")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  // Create a new task
  const createTask = () => {
    fetch("http://127.0.0.1:8000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "New Task", description: "Task details" }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <button onClick={getTasks}>Get All Tasks</button>
      <button onClick={createTask}>Create Task</button>
    </div>
  );
}

export default App;