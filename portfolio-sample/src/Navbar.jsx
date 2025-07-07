import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = 'hero';
      navLinks.forEach(link => {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop - 80 <= scrollY) {
          current = link.id;
        }
      });
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleClose = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">Sandhya'sPortfolio</div>
      <div className={`navbar__links${menuOpen ? ' open' : ''}`}>
        {navLinks.map(link => (
          <button
            key={link.id}
            className={`navbar__link${active === link.id ? ' active' : ''}`}
            onClick={() => handleNavClick(link.id)}
          >
            {link.label}
          </button>
        ))}
      </div>
      <button className="navbar__hamburger" onClick={handleToggle} aria-label="Toggle navigation">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar; 