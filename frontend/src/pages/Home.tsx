import { useEffect, useState } from "react";

const API_BASE = "http://localhost/Portfolio-cms/backend";

type Project = {
  id: number;
  title: string;
};

const Home = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch(`${API_BASE}/projects.php`)
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Home</h1>

      <ul>
        {projects.map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
