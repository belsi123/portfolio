import React, { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { jsPDF } from "jspdf";
import StepperNav from "./StepperNav";
import "./Preview.css";

// Template 1: Classic Blue
function TemplateClassic({ resume }) {
  const {
    contact = {},
    summary = "",
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = "",
    interests = ""
  } = resume || {};
  return (
    <div className="portfolio-card">
      <StepperNav />
      <h1 style={{ color: "#000000" }}>{contact.name || "Your Name"}</h1>
      <p style={{ color: "#000000" }}>
        <b>Email:</b> {contact.email || "your.email@example.com"} | <b>Phone:</b> {contact.phone || "123-456-7890"}
      </p>
      <p style={{ color: "#000000" }}>
        <b>LinkedIn:</b> {contact.linkedin || "linkedin.com/inspiration"}
      </p>
      <h3 style={{ color: "#000000" }}>Summary</h3>
      <p style={{ color: "#000000" }}>{summary || "Your professional summary goes here."}</p>
      <h3 style={{ color: "#000000" }}>Education</h3>
      <ul>
        {(education || []).map((e, i) => (
          <li key={i} style={{ color: "#000000" }}>{e.degree}, {e.school}, {e.year}</li>
        ))}
      </ul>
      <h3 style={{ color: "#000000" }}>Skills</h3>
      <p style={{ color: "#000000" }}><b>Technical:</b> {skills.technical || "e.g. JavaScript, React"}</p>
      <p style={{ color: "#000000" }}><b>Soft:</b> {skills.soft || "e.g. Communication, Teamwork"}</p>
      <h3 style={{ color: "#000000" }}>Projects</h3>
      <ul>
        {(projects || []).map((p, i) => (
          <li key={i} style={{ color: "#000000" }}>
            <b>{p.name}</b>: {p.desc} <br />
            <i>{p.tech}</i> <br />
            Role: {p.role}
          </li>
        ))}
      </ul>
      <h3 style={{ color: "#000000" }}>Certifications</h3>
      <ul>
        {(certifications || []).map((c, i) => (
          <li key={i} style={{ color: "#000000" }}>{c.name}, {c.org}, {c.date}</li>
        ))}
      </ul>
      <h3 style={{ color: "#000000" }}>Languages</h3>
      <p style={{ color: "#000000" }}>{languages || "e.g. English (Fluent), Hindi (Native)"}</p>
      <h3 style={{ color: "#000000" }}>Interests</h3>
      <p style={{ color: "#000000" }}>{interests || "e.g. Reading, Coding, Sports"}</p>
    </div>
  );
}

// Template 2: Elegant Gold
function TemplateGold({ resume }) {
  const {
    contact = {},
    summary = "",
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = "",
    interests = ""
  } = resume || {};
  return (
    <div className="portfolio-card" style={{ border: "2px solid #ffd700", borderRadius: 8, padding: "1rem" }}>
      <h1 style={{ color: "#000000" }}>{contact.name || "Your Name"}</h1>
      <p style={{ color: "#000000" }}>
        <b>Email:</b> {contact.email || "your.email@example.com"}<br />
        <b>Phone:</b> {contact.phone || "123-456-7890"}<br />
        <b>LinkedIn:</b> {contact.linkedin || "linkedin.com/inspiration"}
      </p>
      <h3 style={{ color: "#000000" }}>Summary</h3>
      <p style={{ color: "#000000" }}>{summary || "Your professional summary goes here."}</p>
      <h3 style={{ color: "#000000" }}>Education</h3>
      <ul>
        {(education || []).map((e, i) => (
          <li key={i} style={{ color: "#000000" }}>{e.degree}, {e.school}, {e.year}</li>
        ))}
      </ul>
      <h3 style={{ color: "#000000" }}>Skills</h3>
      <p style={{ color: "#000000" }}><b>Technical:</b> {skills.technical || "e.g. JavaScript, React"}</p>
      <p style={{ color: "#000000" }}><b>Soft:</b> {skills.soft || "e.g. Communication, Teamwork"}</p>
      <h3 style={{ color: "#000000" }}>Projects</h3>
      <ul>
        {(projects || []).map((p, i) => (
          <li key={i} style={{ color: "#000000" }}>
            <b>{p.name}</b>: {p.desc} <br />
            <i>{p.tech}</i> <br />
            Role: {p.role}
          </li>
        ))}
      </ul>
      <h3 style={{ color: "#000000" }}>Certifications</h3>
      <ul>
        {(certifications || []).map((c, i) => (
          <li key={i} style={{ color: "#000000" }}>{c.name}, {c.org}, {c.date}</li>
        ))}
      </ul>
      <h3 style={{ color: "#000000" }}>Languages</h3>
      <p style={{ color: "#000000" }}>{languages || "e.g. English (Fluent), Hindi (Native)"}</p>
      <h3 style={{ color: "#000000" }}>Interests</h3>
      <p style={{ color: "#000000" }}>{interests || "e.g. Reading, Coding, Sports"}</p>
    </div>
  );
}

// Template 3: Modern Dark
function TemplateModernDark({ resume }) {
  const {
    contact = {},
    summary = "",
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = "",
    interests = ""
  } = resume || {};
  return (
    <div className="portfolio-card" style={{ background: "#22223b", color: "#000000", borderRadius: 10, padding: "1.5rem" }}>
      <h1 style={{ color: "#000000" }}>{contact.name || "Your Name"}</h1>
      <p style={{ color: "#000000" }}>
        <b>Email:</b> {contact.email || "your.email@example.com"} | <b>Phone:</b> {contact.phone || "123-456-7890"}
      </p>
      <p style={{ color: "#000000" }}>
        <b>LinkedIn:</b> {contact.linkedin || "linkedin.com/inspiration"}
      </p>
      <h3 style={{ color: "#000000" }}>Summary</h3>
      <p style={{ color: "#000000" }}>{summary || "Your professional summary goes here."}</p>
      <h3 style={{ color: "#000000" }}>Education</h3>
      <ul>
        {(education || []).map((e, i) => (
          <li key={i} style={{ color: "#000000" }}>{e.degree}, {e.school}, {e.year}</li>
        ))}
      </ul>
      <h3 style={{ color: "#000000" }}>Skills</h3>
      <p style={{ color: "#000000" }}><b>Technical:</b> {skills.technical || "e.g. JavaScript, React"}</p>
      <p style={{ color: "#000000" }}><b>Soft:</b> {skills.soft || "e.g. Communication, Teamwork"}</p>
      <h3 style={{ color: "#000000" }}>Projects</h3>
      <ul>
        {(projects || []).map((p, i) => (
          <li key={i} style={{ color: "#000000" }}>
            <b>{p.name}</b>: {p.desc} <br />
            <i>{p.tech}</i> <br />
            Role: {p.role}
          </li>
        ))}
      </ul>
      <h3 style={{ color: "#000000" }}>Certifications</h3>
      <ul>
        {(certifications || []).map((c, i) => (
          <li key={i} style={{ color: "#000000" }}>{c.name}, {c.org}, {c.date}</li>
        ))}
      </ul>
      <h3 style={{ color: "#000000" }}>Languages</h3>
      <p style={{ color: "#000000" }}>{languages || "e.g. English (Fluent), Hindi (Native)"}</p>
      <h3 style={{ color: "#000000" }}>Interests</h3>
      <p style={{ color: "#000000" }}>{interests || "e.g. Reading, Coding, Sports"}</p>
    </div>
  );
}

// Template 4: Minimal Green
function TemplateMinimalGreen({ resume }) {
  const {
    contact = {},
    summary = "",
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = "",
    interests = ""
  } = resume || {};
  return (
    <div className="portfolio-card" style={{ borderLeft: "6px solid #10b981", padding: "1.5rem" }}>
      <h1 style={{ color: "#000000" }}>{contact.name || "Your Name"}</h1>
      <p style={{ color: "#000000" }}>
        <b>Email:</b> {contact.email || "your.email@example.com"} | <b>Phone:</b> {contact.phone || "123-456-7890"}
      </p>
      <p style={{ color: "#000000" }}>
        <b>LinkedIn:</b> {contact.linkedin || "linkedin.com/inspiration"}
      </p>
      <h3 style={{ color: "#000000" }}>Summary</h3>
      <p style={{ color: "#000000" }}>{summary || "Your professional summary goes here."}</p>
      <h3 style={{ color: "#000000" }}>Education</h3>
      <ul>
        {(education || []).map((e, i) => (
          <li key={i} style={{ color: "#000000" }}>{e.degree}, {e.school}, {e.year}</li>
        ))}
      </ul>
      <h3 style={{ color: "#000000" }}>Skills</h3>
      <p style={{ color: "#000000" }}><b>Technical:</b> {skills.technical || "e.g. JavaScript, React"}</p>
      <p style={{ color: "#000000" }}><b>Soft:</b> {skills.soft || "e.g. Communication, Teamwork"}</p>
      <h3 style={{ color: "#000000" }}>Projects</h3>
      <ul>
        {(projects || []).map((p, i) => (
          <li key={i} style={{ color: "#000000" }}>
            <b>{p.name}</b>: {p.desc} <br />
            <i>{p.tech}</i> <br />
            Role: {p.role}
          </li>
        ))}
      </ul>
      <h3 style={{ color: "#000000" }}>Certifications</h3>
      <ul>
        {(certifications || []).map((c, i) => (
          <li key={i} style={{ color: "#000000" }}>{c.name}, {c.org}, {c.date}</li>
        ))}
      </ul>
      <h3 style={{ color: "#000000" }}>Languages</h3>
      <p style={{ color: "#000000" }}>{languages || "e.g. English (Fluent), Hindi (Native)"}</p>
      <h3 style={{ color: "#000000" }}>Interests</h3>
      <p style={{ color: "#000000" }}>{interests || "e.g. Reading, Coding, Sports"}</p>
    </div>
  );
}

const templates = [TemplateClassic, TemplateGold, TemplateModernDark, TemplateMinimalGreen];

// Utility function to extract resume content as a string
const extractResumeContent = (resume) => {
  const {
    contact = {},
    summary = "",
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = "",
    interests = ""
  } = resume || {};

  return `
Name: ${contact.name || "Your Name"}
Email: ${contact.email || "your.email@example.com"}
Phone: ${contact.phone || "123-456-7890"}
LinkedIn: ${contact.linkedin || "linkedin.com/inspiration"}

Summary:
${summary || "Your professional summary goes here."}

Education:
${education.map(e => `- ${e.degree}, ${e.school}, ${e.year}`).join("\n")}

Skills:
Technical: ${skills.technical || "e.g. JavaScript, React"}
Soft: ${skills.soft || "e.g. Communication, Teamwork"}

Projects:
${projects.map(p => `- ${p.name}: ${p.desc}\n  Tech: ${p.tech}\n  Role: ${p.role}`).join("\n")}

Certifications:
${certifications.map(c => `- ${c.name}, ${c.org}, ${c.date}`).join("\n")}

Languages:
${languages || "e.g. English (Fluent), Hindi (Native)"}

Interests:
${interests || "e.g. Reading, Coding, Sports"}
  `.trim();
};

function Preview({ resume, setResume }) {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const previewTemplate = resume.previewTemplate || 0;
  const TemplateComponent = templates[previewTemplate] || TemplateClassic;
  const dropdownRef = useRef(null);

  // PDF print ref
  const resumeRef = useRef();

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDownload = (format) => {
    setIsDropdownOpen(false); // Close dropdown after selection
    const content = extractResumeContent(resume);

    switch (format) {
      case "pdf":
        generatePDF(content);
        break;
      case "docx":
        generateDOCX(content);
        break;
      case "word":
        generateWord(content);
        break;
      case "txt":
        generateTXT(content);
        break;
      default:
        alert("Format not supported yet!");
    }
  };

  const generatePDF = (content) => {
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(content, 180); // Wrap text to fit page
    doc.text(lines, 10, 10);
    doc.save(`${resume.contact.name || "resume"}-resume.pdf`);
  };

  const generateDOCX = (content) => {
    alert(
      "DOCX generation requires a library like 'docx' or a server-side solution."
    );
    // Example with 'docx' library (uncomment if installed):
    /*
    const { Document, Packer, Paragraph } = require('docx');
    const doc = new Document({
      sections: [{ children: [new Paragraph(content)] }],
    });
    Packer.toBlob(doc).then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${resume.contact.name || "resume"}-resume.docx`;
      a.click();
      window.URL.revokeObjectURL(url);
    });
    */
  };

  const generateWord = (content) => {
    generateDOCX(content); // Reuse DOCX logic
  };

  const generateTXT = (content) => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${resume.contact.name || "resume"}-resume.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleFinish = () => {
    // Save user if not already saved
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (
      resume.contact.name &&
      resume.contact.email &&
      !users.some((u) => u.email === resume.contact.email)
    ) {
      users.push({
        name: resume.contact.name,
        email: resume.contact.email,
      });
      localStorage.setItem("users", JSON.stringify(users));
    }
    setMessage("Resume completed and generated! Waiting for next user...");

    // Clear form and go to starting page after 2 seconds
    setTimeout(() => {
      setResume({
        contact: { name: "", email: "", phone: "", linkedin: "" },
        summary: "",
        education: [],
        skills: { technical: "", soft: "" },
        projects: [],
        certifications: [],
        languages: "",
        interests: "",
        previewTemplate: 0,
      });
      setMessage("");
      navigate("/");
    }, 2000);
  };

  return (
    <div className="preview-container">
      <div className="preview-content">
        <h2>Resume Preview</h2>
        <div className="nav-links">
          <Link to="/home" className="nav-link">
            Home
          </Link>
          <Link to="/templates" className="nav-link">
            Choose Resume Template
          </Link>
          <Link to="/users" className="nav-link">
            View Users
          </Link>
        </div>
        <div ref={resumeRef} className="resume-wrapper">
          <TemplateComponent resume={resume} />
        </div>
        <div className="action-buttons">
          <div className="dropdown" ref={dropdownRef}>
            <button
              className="action-button generate-pdf"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
              aria-controls="dropdown-menu"
            >
              Download
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content" id="dropdown-menu">
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={() => handleDownload("pdf")}
                >
                  PDF
                </button>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={() => handleDownload("docx")}
                >
                  DOCX
                </button>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={() => handleDownload("word")}
                >
                  Word
                </button>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={() => handleDownload("txt")}
                >
                  Text
                </button>
              </div>
            )}
          </div>
          <button onClick={handleFinish} className="action-button finish">
            Finish & Generate Resume
          </button>
          <button onClick={() => navigate("/interests")} className="action-button back">
            Back
          </button>
        </div>
        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
}

export default Preview;