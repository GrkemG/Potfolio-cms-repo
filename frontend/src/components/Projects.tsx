import { useEffect, useState } from "react";

// Typ för projekt (matchar backend)
type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  // Tillfällig data (ersätts av backend)
  useEffect(() => {
    setProjects([
      {
        id: 1,
        title: "Portfolio CMS",
        description:
          "Examensarbete där jag byggt en portfolio med React och ett eget backend-API.",
        tech: ["React", "TypeScript", "Node.js", "REST API"],
      },
      {
        id: 2,
        title: "REST API Project",
        description:
          "Backend-applikation med CRUD-funktionalitet och JSON-baserad datalagring.",
        tech: ["Node.js", "Express", "MongoDB"],
      },
    ]);
  }, []);

  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 md:px-12 bg-gray-100"
    >
      <div className="max-w-5xl mx-auto text-center md:text-left">

        {/* Rubriker */}
        <p className="text-lg text-gray-500 uppercase tracking-wider">
          My work
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
          Projects
        </h2>

        {/* Projekt-grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition bg-white"
            >
              <h3 className="text-2xl font-semibold text-gray-800">
                {project.title}
              </h3>

              <p className="text-gray-700 mt-3">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm bg-gray-200 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
export {};
