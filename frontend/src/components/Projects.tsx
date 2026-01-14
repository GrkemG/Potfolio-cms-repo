import { useEffect, useState } from "react";

/* Typ för projekt (ska matcha backend) */
type Project = {
  id: number | string;
  title: string;
  description: string;
  tech?: string[];
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  /* Hämta projekt från backend */
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/projects");

        if (!res.ok) {
          throw new Error("Kunde inte hämta projekt");
        }

        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error(err);
        setError("Kunde inte ladda projekt från backend");
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="section section-light">
      <div className="page">

        {/* Rubrik */}
        <p className="section-label">Mitt arbete</p>
        <h2 className="section-title">Projekt</h2>

        {/* Introtext */}
        <p style={{ maxWidth: "700px", marginTop: "1.5rem", color: "#374151" }}>
          Nedan visas ett urval av projekt jag har arbetat med under mina studier
          och egna projekt. Fokus ligger på moderna webbapplikationer,
          backend-lösningar och REST API:er.
        </p>

        {/* Felmeddelande */}
        {error && (
          <p style={{ marginTop: "2rem", color: "red" }}>
            {error}
          </p>
        )}

        {/* Projektlista */}
        <div className="grid grid-2" style={{ marginTop: "3rem" }}>
          {projects.map((project) => (
            <div key={project.id} className="card animate-fadeIn">

              {/* Projekttitel */}
              <h3 className="project-title">
                {project.title}
              </h3>

              {/* Beskrivning */}
              <p className="project-desc">
                {project.description}
              </p>

              {/* Tekniker */}
              {project.tech && project.tech.length > 0 && (
                <div className="project-tags">
                  {project.tech.map((tech) => (
                    <span key={tech} className="project-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tomt läge */}
        {projects.length === 0 && !error && (
          <p style={{ marginTop: "3rem", textAlign: "center", color: "#6b7280" }}>
           
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
export {};
