import { useEffect, useState } from "react";

const API_URL = "http://localhost:3001/api/projects";

type Project = {
  id: number | string;
  title: string;
};

const Admin: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  const fetchProjects = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProjects(data);
      setLastUpdated(new Date().toLocaleString());
      setError(null);
    } catch {
      setError("Backend är inte igång");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const addProject = async () => {
    if (!title) return;

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    setTitle("");
    fetchProjects();
  };

  const deleteProject = async (id: number | string) => {
    if (!window.confirm("Vill du ta bort projektet?")) return;

    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchProjects();
  };

  return (
    <section className="section">
      <div className="page">

        <p className="section-label">Administration</p>
        <h2 className="section-title">Admin Dashboard</h2>

        {/* Stats */}
        <div className="grid grid-2" style={{ marginTop: "3rem" }}>
          <div className="card" style={{ textAlign: "center" }}>
            <p>Total projects</p>
            <h3 style={{ fontSize: "2rem" }}>{projects.length}</h3>
          </div>

          <div className="card" style={{ textAlign: "center" }}>
            <p>Last updated</p>
            <h3 style={{ fontSize: "1.2rem" }}>
              {lastUpdated || "—"}
            </h3>
          </div>
        </div>

        {/* CMS */}
        <div className="card" style={{ marginTop: "3rem" }}>
          {error && (
            <p style={{ color: "red", marginBottom: "1rem" }}>
              {error}
            </p>
          )}

          {/* Add project */}
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem" }}>
            <input
              type="text"
              placeholder="Project title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                flex: 1,
                padding: "0.6rem",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
            <button className="btn" onClick={addProject}>
              Add
            </button>
          </div>

          {/* Project list */}
          <div className="admin-list">
            {projects.map((p) => (
              <div key={p.id} className="admin-item card">
                <span>{p.title}</span>
                <button
                  onClick={() => deleteProject(p.id)}
                  style={{ color: "#dc2626", background: "none", border: "none" }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {projects.length === 0 && (
            <p style={{ textAlign: "center", marginTop: "2rem" }}>
              No projects added yet.
            </p>
          )}
        </div>

      </div>
    </section>
  );
};

export default Admin;
export {};
