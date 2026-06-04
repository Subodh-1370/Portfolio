<<<<<<< HEAD
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaUser } from 'react-icons/fa';
=======
import { Container, Row, Col } from "react-bootstrap";
import linkedinIcon from "../assets/img/linkedin.svg";
import facebookIcon from "../assets/img/facebook.svg";
import instagramIcon from "../assets/img/instagram.svg";
>>>>>>> 9a6103467ab9a523fe0874d470fc047e3ced5b9f

export const Footer = () => {
  return (
    <footer className="footer">
<<<<<<< HEAD
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
=======
      <Container>
        <Row>
          <Col size={12} className="footer-center">
            <div className="footer-logo">𝓢𝓢</div>
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/subodh-singh-6523391a7/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="social-link"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a
                href="https://www.facebook.com/subodh.singh.59897/about"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="social-link"
              >
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/subodh.singh_rajput/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="social-link"
              >
                <img src={instagramIcon} alt="Instagram" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
>>>>>>> 9a6103467ab9a523fe0874d470fc047e3ced5b9f
    </footer>
  );
};
