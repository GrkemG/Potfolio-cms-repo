import { useEffect, useState } from "react";

/* Typ för projekt – matchar backend */
type Project = {
  id: number | string;
  title: string;
  description?: string;
  tech?: string[];
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="section">
      <div className="page">

        <p className="section-label">My work</p>
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-2" style={{ marginTop: "3rem" }}>
          {projects.map((project) => (
            <div key={project.id} className="card">
              <h3>{project.title}</h3>

              {project.description && (
                <p style={{ marginTop: "0.75rem" }}>
                  {project.description}
                </p>
              )}

              {project.tech && (
                <div className="tags">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <p style={{ textAlign: "center", marginTop: "3rem", color: "#6b7280" }}>
            No projects available.
          </p>
        )}

      </div>
    </section>
  );
};

export default Projects;
export {};
