const API_BASE = "http://localhost/Portfolio-cms/backend";

export const getProjects = async () => {
  try {
    const response = await fetch(`${API_BASE}/projects.php`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};
