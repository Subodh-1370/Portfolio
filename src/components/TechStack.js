<<<<<<< HEAD
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
=======
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaJava, FaCuttlefish, FaLaptopCode, FaRobot } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiArduino, SiTensorflow, SiNextdotjs } from 'react-icons/si';

export const TechStack = () => {
  const techStack = [
    
    { 
      name: "React", 
      icon: <FaReact size={40} />, 
      desc: "Building modern, component-based user interfaces with React and its ecosystem",
      color: "#61DAFB"
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={40} />,
      desc: "Building full-stack web applications with server-side rendering and API routes",
      color: "#1e40af"
    },
    
    { 
      name: "Java", 
      icon: <FaJava size={40} />, 
      desc: "Building scalable applications and backend services using Java",
      color: "#007396"
    },
    { 
      name: "TypeScript", 
      icon: <SiTypescript size={40} />, 
      desc: "Writing type-safe, maintainable code with TypeScript",
      color: "#3178C6"
    },
    { 
      name: "MongoDB", 
      icon: <SiMongodb size={40} />, 
      desc: "Working with NoSQL databases and data modeling",
      color: "#47A248"
    },
    { 
      name: "Express.js", 
      icon: <SiExpress size={40} />, 
      desc: "Creating robust server-side applications and APIs",
      color: "#000000"
    },
    { 
      name: "C Programming", 
      icon: <FaCuttlefish size={40} />, 
      desc: "Low-level programming and problem solving with C language",
      color: "#A8B9CC"
    },
  
    { 
      name: "HTML5/CSS3", 
      icon: <div><FaHtml5 size={40} style={{ color: '#E34F26' }} /> <FaCss3Alt size={40} style={{ color: '#1572B6' }} /></div>, 
      desc: "Crafting responsive and accessible web interfaces",
      color: "linear-gradient(45deg, #E34F26, #1572B6)"
    },
    { 
      name: "JavaScript", 
      icon: <FaJs size={40} />, 
      desc: "Mastering modern JavaScript (ES6+) and its features",
      color: "#F7DF1E"
    },
    { 
      name: "Tailwind CSS", 
      icon: <SiTailwindcss size={40} />, 
      desc: "Building beautiful, responsive designs with utility-first CSS",
      color: "#06B6D4"
    }
  ];

  return (
    <section className="tech-stack" id="skills">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Skills</h2>
                  <p>A comprehensive blend of software engineering, web development and embedded systems</p>
                  <div className="tech-grid">
                    {techStack.map((tech, index) => (
                      <div 
                        className="tech-card" 
                        key={index}
                        style={{
                          '--card-color': tech.color
                        }}
                      >
                        <div className="tech-icon">
                          {tech.icon}
                        </div>
                        <h3>{tech.name}</h3>
                        <p>{tech.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
} 
>>>>>>> 9a6103467ab9a523fe0874d470fc047e3ced5b9f
