import { motion } from 'framer-motion';

export const Skills = () => {
  const skillsData = [
    "Java",
    "Python",
    "C#",
    "React",
    "MongoDB",
    "Firebase",
    "Git",
    "Machine Learning",
    "NumPy",
    "Pandas"
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technical skills developed through academic learning, project development, and continuous practice.</p>
        </div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05
              }}
            >
              <span>{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
