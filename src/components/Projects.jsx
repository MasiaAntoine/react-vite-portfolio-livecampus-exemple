import React, { useEffect, useState } from "react";
import axios from "axios";
import { getProjectsUrl } from "/src/shared/endpoints";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(getProjectsUrl);
        console.log("Réponse de l'API :", response.data);
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Erreur lors de la récupération des projets :", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <p>Chargement des projets...</p>;
  }

  if (error) {
    return <p>Erreur lors du chargement des projets : {error}</p>;
  }

  return (
    <section className="bg-yellow">
      <h2 className="text-2xl font-bold mb-4">Mes projets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-yellow-light p-4 rounded-lg shadow-md">
            <img
              src={project.image}
              alt={`Project ${index}`}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h3 className="mt-4 text-xl font-semibold">{`Projet ${project.id}`}</h3>
            <p className="text-gray-600">{project.description}</p>
            <p className="text-sm text-gray-500 mt-2">
              Ajouté le{" "}
              {format(new Date(project.createdAt), "dd MMMM yyyy", {
                locale: fr,
              })}
            </p>
            <p className="text-sm text-gray-500">
              Mis à jour le{" "}
              {format(new Date(project.updatedAt), "dd MMMM yyyy", {
                locale: fr,
              })}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 block mt-2 hover:underline"
            >
              Voir plus
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
