import React from 'react';

const projects = [
  { title: 'test 1', description: 'Lorem ipsum dolor sit amet.' },
  { title: 'test 1', description: 'Lorem ipsum dolor sit amet.' },
  { title: 'test 1', description: 'Lorem ipsum dolor sit amet.' },
  { title: 'test 1', description: 'Lorem ipsum dolor sit amet.' },
  { title: 'test 1', description: 'Lorem ipsum dolor sit amet.' },
  { title: 'test 1', description: 'Lorem ipsum dolor sit amet.' },
];

const Projects = () => {
  return (
    <section>
      <h2>Mes projets</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src="default-project.jpg" alt="Project"/>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
