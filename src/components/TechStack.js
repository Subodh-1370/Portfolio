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