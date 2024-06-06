import React from 'react';
import './About.css';
import profileImage from './assets/profile-image.jpeg';

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="about-text">
          <p>
            Hi, I'm Josh, a web developer who is currently learning everything that I can in order to be the best at what I do. I am passionate about web development and I am always looking for new things to learn. I am a hardworking and dedicated person who is always looking for new challenges to overcome.
          </p>
        </div>
      </div>
      <div className="about-image">
        <img src={profileImage} alt="Profile" />
      </div>
    </section>
  );
}

export default About;