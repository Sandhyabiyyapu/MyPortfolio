import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
      <section id="about" className="about-section">
        <div className="about-main">
          <div className="about-img">
            {/* <img src="https://via.placeholder.com/180x180.png?text=Profile" alt="Profile" /> */}
          </div>
          <div className="about-info">
            <h2>About Me</h2>
            <p>
            I'm a Computer Science student with a solid foundation in software development, web technologies, and database management. Passionate about solving real-world problems through code and eager to grow as a software developer in a dynamic, team-driven environment.
            </p>
          </div>
        </div>
        <div className="about-extra">
          <div className="about-edu">
            <h3>Education</h3>
            <ul>
              <li>B.Tech. in Computer Science, CVR College Of Engineering (2022 - 2026)</li>
            </ul>
          </div>
          <div className="about-interests">
            <h3>Interests</h3>
            <ul>
              <li>Web Development</li>
              <li>AI & Machine Learning</li>
              <li>Music & Gaming</li>
            </ul>
          </div>
        </div>
      </section>
      <hr className="section-divider" />
    </>
  );
};

export default About; 