import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode } from 'react-icons/fa';

export const About = () => {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Computer Science Graduate | Problem Solver | Technology Enthusiast</p>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="about-card glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="about-icon">
            <FaCode />
          </div>
          <h3>Professional Introduction</h3>
          <p>
            I am a Computer Science graduate with a strong interest in
            software development, artificial intelligence, data science,
            and emerging technologies. I enjoy building practical projects,
            solving real-world problems, and continuously expanding my
            technical knowledge through hands-on learning and development.
            My experience includes working with Java, Python, databases,
            and modern development tools while exploring innovative
            technologies that create meaningful solutions.
          </p>
        </motion.div>

        <motion.div
          className="about-card glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="about-icon">
            <FaGraduationCap />
          </div>
          <h3>Education</h3>
          <p>
            <strong>Bachelor of Technology in Computer Science</strong>
            <br /><br />
            Graduated with a degree in Computer Science, gaining a strong
            foundation in data structures, algorithms, database management
            systems, operating systems, computer networks, software
            engineering, and artificial intelligence. Academic projects and
            continuous learning have strengthened my problem-solving
            abilities, programming skills, and understanding of modern
            computing technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
