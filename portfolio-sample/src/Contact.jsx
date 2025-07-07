import React, { useState } from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { HiOutlineDocumentText, HiOutlineMail } from 'react-icons/hi';

const socials = [
  { name: 'LinkedIn', icon: '🔗', url: '#' },
  { name: 'GitHub', icon: '🐱', url: '#' },
  { name: 'Email', icon: '✉️', url: 'mailto:someone@example.com' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      return;
    }
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
            />
            {error && <div className="contact-error">{error}</div>}
            {sent && <div className="contact-success">Message sent! (Demo only)</div>}
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-socials">
          <h3 className="contact-socials-heading">Connect with me</h3>
          <div className="contact-socials-row">
            <a href="https://www.linkedin.com/in/sandhya-biyyapu-228540247/" className="contact-social" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/Sandhyabiyyapu/" className="contact-social" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://x.com/biyyapusandhya" className="contact-social" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="mailto:sandhyabiyyapu5@gmail.com" className="contact-social email-link" aria-label="Email"><HiOutlineMail /></a>
          </div>
        </div>
      </section>
      <hr className="section-divider" />
    </>
  );
};

export default Contact; 