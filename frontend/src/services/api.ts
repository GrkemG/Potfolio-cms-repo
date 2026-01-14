export type Project = {
  id: string;
  title: string;
};

const API_BASE = "http://localhost:3001/api";

export const getProjects = async (): Promise<Project[]> => {
  const res = await fetch(`${API_BASE}/projects`);

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
};
