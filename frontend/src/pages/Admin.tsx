import { useEffect, useState } from "react";

const API_BASE = "http://localhost/Portfolio-cms/backend";

type Project = {
  id: number;
  title: string;
};

const Admin = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/projects.php`);

        if (!res.ok) {
          throw new Error("Kunde inte hämta projekt");
        }

        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Backend är inte igång");
      }
    };

    fetchProjects();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {projects.map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}; 

export default Admin;
