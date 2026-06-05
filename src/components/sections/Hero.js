import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = useMemo(() => ["Software Developer", "AI Enthusiast"], []);

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
      <div className="hero-container">
        <div className="hero-left">
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            &lt;hello /&gt;
          </motion.p>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Subodh Singh
          </motion.h1>

          <motion.p
            className="hero-role"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {text}
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Computer Science graduate passionate about software engineering,
            artificial intelligence, and creating impactful technology solutions.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#projects" className="hero-btn primary">
              View Projects
            </a>
            <a
              href={process.env.PUBLIC_URL + "/resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn"
            >
              Resume
            </a>
          </motion.div>
        </div>

        <div className="hero-right">
          <motion.div
            className="profile-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="profile-frame"></div>
            <div className="profile-corner top-left"></div>
            <div className="profile-corner top-right"></div>
            <div className="profile-corner bottom-left"></div>
            <div className="profile-corner bottom-right"></div>
            <img
              src={process.env.PUBLIC_URL + "/profile.jpg"}
              alt="Subodh Singh"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
