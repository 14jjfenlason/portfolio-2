import React from 'react';
import './Project.css';

function Project({ project }) {
  return (
    <div className="project">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-links">
          <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;