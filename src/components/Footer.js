import { Container, Row, Col } from "react-bootstrap";
import linkedinIcon from "../assets/img/linkedin.svg";
import facebookIcon from "../assets/img/facebook.svg";
import instagramIcon from "../assets/img/instagram.svg";

export const Footer = () => {
  return (
    <footer className="footer">
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
    </footer>
  );
};
