import { useState, useEffect } from "react";

const API_BASE = "http://localhost/Portfolio-cms/backend";

type Project = {
  id: number;
  title: string;
};

const Admin = () => {
  console.log("ADMIN COMPONENT LOADED");

  const [projects, setProjects] = useState<Project[]>([]);
  const [title, setTitle] = useState("");

  // Hämta projects
  useEffect(() => {
    fetch(`${API_BASE}/projects.php`)
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error(err));
  }, []);

  // LÄGG TILL PROJECT
  const addProject = async () => {
    alert("ADD PROJECT CLICKED");

    if (!title.trim()) return;

    await fetch(`${API_BASE}/projects.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title })
    });

    // hämta igen
    const res = await fetch(`${API_BASE}/projects.php`);
    setProjects(await res.json());
    setTitle("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Project title"
        style={{ padding: "6px", marginRight: "10px" }}
      />

      <button type="button" onClick={addProject}>
        Add Project
      </button>

      <ul style={{ marginTop: "20px" }}>
        {projects.map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
