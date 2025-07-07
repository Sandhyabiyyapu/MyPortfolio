import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© {new Date().getFullYear()} Sandhya Biyyapu. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer; 