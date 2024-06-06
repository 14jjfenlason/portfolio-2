import React from 'react';
import './Resume.css';
import resumePDF from './assets/resume.pdf';

function Resume() {
  const proficiencies = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'Git',
  ];

  return (
    <section className="resume">
      <h2>Resume</h2>
      <div className="resume-download">
        <a href={resumePDF} target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
      </div>
      <div className="proficiencies">
        <h3>Proficiencies</h3>
        <ul>
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Resume;