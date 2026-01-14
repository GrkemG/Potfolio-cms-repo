import React from "react";

export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
};

type Props = {
  project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="border border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition bg-white">
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
  );
};

export default ProjectCard;
