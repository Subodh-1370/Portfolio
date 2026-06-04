import { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaFileDownload } from 'react-icons/fa';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! I\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">Have a project in mind or just want to chat? I'd love to hear from you!</p>
      
      <form className="contact-form glass" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project or just say hello..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
      
      <div className="contact-social">
        <a href="https://www.linkedin.com/in/subodh-singh-6523391a7/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Subodh-1370" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/subodh.singh_rajput/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="mailto:subodh@example.com" className="social-btn" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Download Resume">
          <FaFileDownload />
        </a>
      </div>
    </section>
  );
};
