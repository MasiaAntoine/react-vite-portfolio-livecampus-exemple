import { useState, useEffect } from "react";
import { getProjects } from "../api/projectsApi";

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

  return {
    projects,
    loading,
    error,
  };
};

export default useProjects;
