import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Achievements.css';

const achievements = [
  {
    title: 'Bit-N-Build Hackathon',
    desc: 'Participated in Bit-N-Build state level Hackathon.',
    year: '2024',
    cert: '/certificates/BitNBuild.jpeg',
    certLink: '#',
  },
  {
    title: 'Data Structures through Java',
    desc: 'Completed Data Structures through Java course.',
    year: '2025',
    cert: '/certificates/AlphaAC.png',
    certLink: '#',
  },
  {
    title: "Google Cybersecurity Certificate",
    desc: 'Completed Google Cybersecurity Certificate.',
    year: '2024',
    cert: '/certificates/CyberSec.png',
    certLink: '#',
  },
  {
    title: 'Google Cloud Study Jams',
    desc: 'Completed Google Cloud Pathway and GenAI Pathway of Google Cloud Study Jams.',
    year: '2023',
    cert: '/certificates/CloudGenAI.png',
    certLink: '#',
  },
  {
    title: 'AI-ML Virtual Internship',
    desc: 'Completed 10 weeks of AI-ML Virtual Internship supported by India Edu Program.',
    year: '2024',
    cert: '/certificates/AICTEAIML.png',
    certLink: '#',
  },
  {
    title: 'Android Developer Virtual Internship',
    desc: 'Completed 10 weeks of Android Developer Virtual Internship supported by India Edu Program.',
    year: '2025',
    cert: '/certificates/AICTEAndroid.png',
    certLink: '#',
  },
  {
    title: 'Introduction to MongoDB',
    desc: 'Completed Introduction to MongoDB course from MongoDB University.',
    year: '2025',
    cert: '/certificates/Mongodb.png',
    certLink: '#',
  },
  {
    title: 'Advanced Data Structures throuh Java',
    desc: 'Completed E-box online certification course.',
    year: '2024',
    cert: '/certificates/EboxAdvncJava.png',
    certLink: '#',
  },
  {
    title: 'Database programming with PL/SQL',
    desc: 'Completed Database programming with PL/SQL course from Oracle Academy.',
    year: '2024',
    cert: '/certificates/OraclePLSQL.png',
    certLink: '#',
  },
  {
    title: 'Database programming with SQL',
    desc: 'Completed Database programming with SQL course from Oracle Academy.',
    year: '2024',
    cert: '/certificates/OracleSQL.png',
    certLink: '#',
  },
  {
    title: 'Web Technology - JavaScript and ES6 ',
    desc: 'Completed E-box online certification course.',
    year: '2024',
    cert: '/certificates/EboxWeb.png',
    certLink: '#',
  },
  {
    title: 'Database Design',
    desc: 'Completed Database Design course from Oracle Academy.',
    year: '2024',
    cert: '/certificates/OracleDD.png',
    certLink: '#',
  },
];

const getVisibleCount = () => (window.innerWidth < 700 ? 1 : 1);

const Achievements = () => {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % achievements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Manual navigation
  const handlePrev = () => setIndex(i => (i - 1 + achievements.length) % achievements.length);
  const handleNext = () => setIndex(i => (i + 1) % achievements.length);

  // Swipe support
  const handleDragEnd = (event, info) => {
    if (info.offset.x < -80) handleNext();
    if (info.offset.x > 80) handlePrev();
  };

  // Pagination dots
  const handleDot = idx => setIndex(idx);

  // Modal popup
  const openModal = cert => setModal(cert);
  const closeModal = () => setModal(null);

  return (
    <>
      <section id="achievements" className="achievements-section">
        <h2>Certificates</h2>
        <div className="carousel-container">
          <button className="carousel-arrow left" onClick={handlePrev} aria-label="Previous">
            <svg viewBox="0 0 20 20"><polyline points="13 5 7 10 13 15"/></svg>
          </button>
          <motion.div
            className="carousel-track"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            <AnimatePresence initial={false}>
              <motion.div
                className="carousel-card project-card cert-card"
                key={achievements[index].title}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                onClick={() => openModal(achievements[index])}
                tabIndex={0}
                role="button"
                aria-label={`View certificate: ${achievements[index].title}`}
              >
                <img src={achievements[index].cert} alt={achievements[index].title} className="cert-preview" />
                <div className="cert-info">
                  <h3>{achievements[index].title}</h3>
                  <p>{achievements[index].desc}</p>
                  <span className="achievement-year">{achievements[index].year}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <button className="carousel-arrow right" onClick={handleNext} aria-label="Next">
            <svg viewBox="0 0 20 20"><polyline points="7 5 13 10 7 15"/></svg>
          </button>
        </div>
        <div className="carousel-dots">
          {achievements.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === index ? ' active' : ''}`}
              onClick={() => handleDot(i)}
              aria-label={`Go to certificate ${i + 1}`}
            />
          ))}
        </div>
        {/* Modal popup */}
        {modal && (
          <div className="cert-modal" onClick={closeModal}>
            <div className="cert-modal-content" onClick={e => e.stopPropagation()}>
              <img src={modal.cert} alt={modal.title} className="cert-modal-img" />
              <h3>{modal.title}</h3>
              <p>{modal.desc}</p>
              <span className="achievement-year">{modal.year}</span>
              <button className="cert-modal-close" onClick={closeModal}>&times;</button>
            </div>
          </div>
        )}
      </section>
      <hr className="section-divider" />
    </>
  );
};

export default Achievements; 