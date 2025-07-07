import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <>
      <section id="hero" className="hero-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">Hi I'm Sandhya Biyyapu 👋</h1>
          <h2 className="hero-tagline">an aspiring Software Developer</h2>
          <p className="hero-intro">
            I am a Computer Science student passionate about building impactful digital experiences.<br />
            Welcome to my portfolio!
          </p>
          <div className="hero-cta">
            <a href="#projects" className="hero-btn">View My Work</a>
            <a href="#contact" className="hero-btn secondary">Contact Me</a>
            <a href="/resume.pdf" className="hero-btn" download>Download My Resume</a>
          </div>
        </motion.div>
      </section>
      <hr className="section-divider" />
    </>
  );
};

export default Hero; 