import { useState, useEffect } from "react";
import { getProjects, deleteProjectById } from "../api/projectsApi";

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getProjects();
        setProjects(projectsData);
      } catch (err) {
        setError(err.message || "Erreur lors de la récupération des projets.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const deleteProject = async (id) => {
    try {
      await deleteProjectById(id);
      setProjects(projects.filter((project) => project.id !== id));
    } catch (err) {
      setError(err.message || "Erreur lors de la suppression du projet.");
    }
  };

  return {
    projects,
    loading,
    error,
    deleteProject,
  };
};

export default useProjects;
