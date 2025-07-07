import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'BloodBank Management System',
    desc: 'A web application built using MERN Stack for managing seamless blood donations and requests.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Sandhyabiyyapu/BloodBank/tree/main/Demo_final/BLOODBANK(mini%20project)/BLOODBANK',
    demo: '#',
  },
  {
    name: 'Tunex - A Spotify Clone',
    desc: 'A simple static front-end clone of the Spotify Web Player using HTML and CSS. It mimics the layout and design with a sidebar, navbar, content cards, and footer player—built purely for UI practice without any backend or music functionality.',
    tech: ['HTML', 'CSS'],
    github: 'https://github.com/Sandhyabiyyapu/Tunex',
    demo: '#',
  },
  {
    name: 'Employee Payroll Management System',
    desc: ' A secure payroll management system using Java and Servlets, allowing employees to access payroll slips and manage personal information via authenticated credentials. ',
    tech: ['Java', 'Servlets', 'JSP', 'MySQL'],
    github: 'https://github.com/Sandhyabiyyapu/Employee-Payroll-Management-System',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <>
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.name}>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={p.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <hr className="section-divider" />
    </>
  );
};

export default Projects; 