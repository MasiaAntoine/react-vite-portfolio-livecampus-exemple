import React from "react";

const projects = [
  {
    title: "Site web d'entreprise",
    description: "Développement d'un site web pour une entreprise locale.",
  },
  {
    title: "Application de gestion de tâches",
    description:
      "Création d'une application mobile pour la gestion des tâches.",
  },
  {
    title: "Portfolio personnel",
    description: "Conception et développement de mon propre portfolio.",
  },
  {
    title: "E-commerce",
    description: "Développement d'une plateforme de commerce électronique.",
  },
  {
    title: "Blog de voyage",
    description: "Création d'un blog pour partager des expériences de voyage.",
  },
  {
    title: "Application de recettes",
    description:
      "Développement d'une application pour partager des recettes de cuisine.",
  },
];

const Projects = () => {
  return (
    <section className="bg-yellow">
      <h2 className="text-2xl font-bold mb-4">Mes projets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {projects.map((project, index) => (
          <div key={index} className="p-4 rounded-lg shadow-md bg-yellow-light">
            <img
              src="./src/assets/default-project.jpg"
              alt="Project"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
