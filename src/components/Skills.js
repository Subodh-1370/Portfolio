import { motion } from 'framer-motion';

import {
FaReact,
FaJava,
FaCode,
FaPython,
FaGitAlt,
FaBrain,
FaChartLine,
FaDatabase
} from 'react-icons/fa';

import {
SiMongodb,
SiFirebase
} from 'react-icons/si';

export const Skills = () => {

const skillsData = {
  Programming: [
    { name: "Java", icon: <FaJava />, level: 85 },
    { name: "Python", icon: <FaPython />, level: 80 },
    { name: "C#", icon: <FaCode />, level: 80 },
  ],

  "Data Science & AI": [
    { name: "Machine Learning", icon: <FaBrain />, level: 75 },
    { name: "NumPy", icon: <FaChartLine />, level: 80 },
    { name: "Pandas", icon: <FaDatabase />, level: 80 },
  ],

  Database: [
    { name: "MongoDB", icon: <SiMongodb />, level: 85 },
    { name: "Firebase", icon: <SiFirebase />, level: 75 },
  ],

  Tools: [
    { name: "Git", icon: <FaGitAlt />, level: 85 },
    { name: "React", icon: <FaReact />, level: 80 },
  ],
};

return (
  <section className="skills" id="skills">
    <motion.div
      className="skills-header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">
        Technical skills developed through academic learning,
        project development, and continuous practice.
      </p>
    </motion.div>

    <div className="skills-container">
      {Object.entries(skillsData).map(
        ([category, skills], categoryIndex) => (
          <motion.div
            key={category}
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: categoryIndex * 0.1
            }}
          >
            <h3>{category}</h3>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card glass"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5
                  }}
                >
                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  <h4>{skill.name}</h4>

                  <div className="skill-progress">
                    <motion.div
                      className="skill-progress-bar"
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${skill.level}%`
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.2
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )
      )}
    </div>
  </section>
);
};
