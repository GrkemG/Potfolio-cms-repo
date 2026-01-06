export const getProjects = async () => {
  try {
    const response = await fetch("http://localhost:3001/projects"); // backend endpoint
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};
