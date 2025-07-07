import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaJava, FaAws, FaDocker } from 'react-icons/fa';
import { SiC, SiMongodb, SiMysql, SiExpress, SiBootstrap, SiVercel, SiNetlify, SiRender, SiPostman, SiNpm, SiAndroidstudio, SiGooglecloud } from 'react-icons/si';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'C', icon: <SiC /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'Python', icon: <FaPython /> },
    ],
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'Bootstrap', icon: <SiBootstrap /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
    ],
  },
  {
    category: 'Database & Data Management',
    skills: [
      { name: 'SQL', icon: <SiMysql /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGitAlt /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'npm', icon: <SiNpm /> },
      { name: 'AWS', icon: <FaAws /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'GCP', icon: <SiGooglecloud /> },
    ],
  },
];

const Skills = () => {
  return (
    <>
      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillsData.map(cat => (
            <div className="skill-card" key={cat.category}>
              <h3>{cat.category}</h3>
              <ul>
                {cat.skills.map(skill => (
                  <li key={skill.name}>
                    {skill.icon && <span className="skill-icon" title={skill.name}>{skill.icon}</span>}
                    <span className="skill-name">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <hr className="section-divider" />
    </>
  );
};

export default Skills; 