type Project = {
  id: number;
  title: string;
};

const ProjectList = ({ projects }: { projects: Project[] }) => (
  <ul>
    {projects.map((p) => (
      <li key={p.id}>{p.title}</li>
    ))}
  </ul>
);

export default ProjectList;
