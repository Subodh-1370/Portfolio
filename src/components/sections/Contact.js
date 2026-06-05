import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">Let's connect and build something amazing together</p>
        </div>

        <div className="contact-content">
          <motion.div
            className="contact-links"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="mailto:subodhsingh@example.com"
              className="contact-link"
            >
              <FaEnvelope />
              <span>Email</span>
            </a>

            <a
              href="https://github.com/Subodh-1370"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/subodhsingh"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
