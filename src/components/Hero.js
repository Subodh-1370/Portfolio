import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = useMemo(() => ["Full Stack Developer", "Java Developer", "AI Enthusiast"], []);
  
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
      
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }
      
      setText((prev) => {
        if (isDeleting) {
          return currentRole.slice(0, prev.length - 1);
        }
        return currentRole.slice(0, prev.length + 1);
      });
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <section className="hero">
      <div className="hero-left">
        <motion.span 
          className="hello"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello 👋
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I'M <br />
          <span>SUBODH</span>
          <br />
          SINGH
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {text}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Building scalable web applications and solving
          real-world problems using Java, React,
          Node.js and modern technologies.
        </motion.p>

        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.button 
            className="primary-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>

          <motion.button 
            className="secondary-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(process.env.PUBLIC_URL + "/resume.pdf", '_blank')}
          >
            See My Resume
          </motion.button>
        </motion.div>
      </div>

      <div className="hero-right">
        <motion.div 
          className="photo-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="photo-container">
            <img
              src={process.env.PUBLIC_URL + "/profile.jpg"}
              alt="Subodh"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
