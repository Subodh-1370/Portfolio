import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">Computer Science Graduate | Problem Solver | Technology Enthusiast</p>
        </div>

        <div className="about-grid">
          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
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
            className="about-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Education</h3>
            <div className="education-item">
              <h4>Bachelor of Technology in Computer Science</h4>
              <p className="institution">University Name</p>
              <p className="year">2020 - 2024</p>
            </div>
            <div className="education-item">
              <h4>Higher Secondary Education</h4>
              <p className="institution">School Name</p>
              <p className="year">2018 - 2020</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
