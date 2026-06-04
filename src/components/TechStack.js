import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiFirebase, SiMysql, SiSpringboot } from 'react-icons/si';

export const TechStack = () => {
  const techStack = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Java", icon: <FaJava />, color: "#007396" },
    { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  ];

  return (
    <section className="tech-stack" id="tech-stack">
      <motion.div 
        className="tech-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">Technologies I work with to build amazing products</p>
      </motion.div>
      
      <div className="tech-grid">
        {techStack.map((tech, index) => (
          <motion.div 
            key={index} 
            className="tech-card glass"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ 
              scale: 1.1, 
              y: -10,
              boxShadow: `0 20px 40px rgba(${parseInt(tech.color.slice(1, 3), 16)}, ${parseInt(tech.color.slice(3, 5), 16)}, ${parseInt(tech.color.slice(5, 7), 16)}, 0.3)`
            }}
          >
            <div className="tech-icon" style={{ color: tech.color }}>
              {tech.icon}
            </div>
            <h4>{tech.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}; 