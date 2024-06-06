import React from 'react';
import Project from './Project';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    title: 'Portfolio 1',
    description: 'My first portfolio project',
    image: 'path/to/project1-image.jpg',
    deployedLink: 'https://14jjfenlason.github.io/first-portfolio/',
    githubLink: 'https://github.com/14jjfenlason/first-portfolio',
  },
];

function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;