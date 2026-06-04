import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaUser } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo"><FaUser /></div>
      <div className="footer-social">
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
      </div>
      <p>&copy; {new Date().getFullYear()} Subodh Singh. All rights reserved.</p>
    </footer>
  );
};
