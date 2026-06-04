<<<<<<< HEAD
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: "Real-Time Polling App",
    image: "https://images.ctfassets.net/rvt0uslu5yqp/4sL7hMUKGMwWikyJWp6iHQ/3bedd3ce600457f34428746e22fcbad8/Mentimeter_Applications_Web_Live-Polling_HeroImage_2021__1_.png?w=1200&h=630&q=90&fm=jpg",
    description: "A real-time polling application built with React and Firebase, featuring live updates, user authentication, and interactive polls for engaging audiences.",
    tech: ["React", "Firebase", "Tailwind CSS", "Node.js"],
    githubLink: "https://github.com/Subodh-1370/Pollify.git",
    liveLink: "#",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "AI-Driven Sports Insights Platform",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800",
    description: "An AI-powered sports analytics platform that leverages machine learning and data analysis to generate performance insights, visualize statistics, and support data-driven decision-making for sports enthusiasts and analysts.",
    tech: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Pandas",
      "NumPy"
    ],
    githubLink: "https://github.com/Subodh-1370/AI-Driven-Sports-Insights-Platform.git",
    liveLink: "#",
    category: "AI/ML"
  },
  {
    id: 3,
    title: "Vehicle Classification Using CNN",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
    description: "Deep learning model using Convolutional Neural Networks to classify vehicles from images with high accuracy. Built with Python and TensorFlow.",
    tech: ["Python", "TensorFlow", "CNN", "Machine Learning"],
    githubLink: "https://github.com/Subodh-1370",
    liveLink: "#",
    category: "AI/ML"
  },
  {
    id: 4,
    title: "Mental Health Mood Journal",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    description: "A mental health tracking application that allows users to log their mood, track patterns, and receive personalized insights and recommendations.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/Subodh-1370",
    liveLink: "#",
    category: "Full Stack"
  },
  {
    id: 5,
    title: "SynapseOS",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    description: "An operating system simulation project demonstrating kernel concepts, process management, memory allocation, and file system implementation.",
    tech: ["C", "Assembly", "Linux", "OS Concepts"],
    githubLink: "https://github.com/Subodh-1370",
    liveLink: "#",
    category: "Systems"
  },
  {
    id: 6,
    title: "Uber Clone",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800",
    description: "A full-featured ride-sharing application clone with real-time location tracking, driver-passenger matching, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Google Maps API"],
    githubLink: "https://github.com/Subodh-1370",
    liveLink: "#",
    category: "Full Stack"
  }
];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "Full Stack", "AI/ML", "Systems"];

  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section className="projects" id="projects">
      <motion.div 
        className="projects-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A showcase of my recent work and personal projects</p>
      </motion.div>
      
      <motion.div 
        className="filter-buttons"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            className={`filter-btn ${activeFilter === category ? "active" : ""}`}
            onClick={() => setActiveFilter(category)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>
      
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <motion.div 
            key={project.id} 
            className="project-card glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, y: -10 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <motion.div 
                  className="overlay-content"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </motion.div>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <motion.a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub /> Source Code
                </motion.a>
                {project.liveLink && project.liveLink !== "#" && (
                  <motion.a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                )}
              </div>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <motion.span 
                    key={index} 
                    className="tech-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 92, 246, 0.3)" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
=======
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import TrackVisibility from 'react-on-screen';

// Sample project data - replace with your actual projects
const projectsData = [
  {
    id: 1,
    title: "Real-time Polling App",
    category: "Web App",
    image: "https://images.ctfassets.net/rvt0uslu5yqp/4sL7hMUKGMwWikyJWp6iHQ/3bedd3ce600457f34428746e22fcbad8/Mentimeter_Applications_Web_Live-Polling_HeroImage_2021__1_.png?w=1200&h=630&q=90&fm=jpg",
    description: "A real-time polling application built with React and Firebase, featuring live updates, user authentication, and interactive polls.",
    longDescription: "This project demonstrates my expertise in building real-time applications. Users can create polls, vote in real-time, and see instant results. The app features user authentication, real-time database updates, and a responsive design.",
    tech: ["React", "Firebase", "Tailwind CSS", "Node.js"],
    githubLink: "https://github.com/Subodh-1370/Pollify.git",
    featured: true
  },
  {
    id: 2,
    title: "Blogging Site",
    category: "Web App",
    image: "https://www.milesweb.in/blog/wp-content/uploads/2017/04/business-blogging.png",
    description: "Full-stack blogging platform with post creation, commenting, and user authentication.",
    longDescription: "A dynamic and responsive blogging site built with the MERN stack. Features include rich-text post creation and editing, user authentication, commenting system, post categorization, and an intuitive admin panel for content management.",
    tech: ["React", "Next.js", "Tailwind.css", "PostCSS", "JavaScript"],
    githubLink: "https://github.com/Subodh-1370/CodeElevate.git",
    featured: true
  },
  {
    id: 3,
    title: "LiveFeedbackFX",
    category: "JAVA Project",
    image: "https://previews.123rf.com/images/khuluk/khuluk1706/khuluk170600001/94710620-a-your-feedback-emoji-on-colorful-background.jpg",
    description: "A real-time feedback board built with Java and JavaFX, allowing users to submit quick reactions (like emojis) and comments. Ideal for live events or classroom sessions to collect instant audience feedback.",
    longDescription: "An AI-powered image classification system that can identify objects in real-time using the device's camera. Built with TensorFlow.js and React, this project showcases the integration of machine learning in web applications.",
    tech: ["JavaFX" , "FXML" , "CSS"],
    githubLink: "https://github.com/Subodh-1370/LiveFeedbackFX",
    featured: true
  }
  
];

// Categories for filtering
const categories = ["All"];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                  <p>Explore my latest work and personal projects</p>
                  
                  {/* Category Filter Buttons */}
                  <div className="category-filter" data-aos="fade-up">
                    {categories.map((category, index) => (
                      <button
                                key={index}
                        className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  {/* Projects Grid */}
                  <div className="project-grid" data-aos="fade-up" data-aos-delay="200">
                    <AnimatePresence>
                      {filteredProjects.map((project) => (
                        <motion.div
                          key={project.id}
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                          className="project-card"
                          onClick={() => openModal(project)}
                        >
                          <div className="project-image">
                            <img src={project.image} alt={project.title} />
                            <div className="project-overlay">
                              <div className="project-links">
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                  <FaGithub />
                                </a>
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                  <FaExternalLinkAlt />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                              {project.tech.map((tech, index) => (
                                <span key={index} className="tech-tag">#{tech}</span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Project Modal */}
                  <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    className="project-modal"
                    overlayClassName="project-modal-overlay"
                    contentLabel="Project Details"
                  >
                    {selectedProject && (
                      <div className="modal-content">
                        <button className="modal-close" onClick={closeModal}>×</button>
                        <div className="modal-header">
                          <h2>{selectedProject.title}</h2>
                          <span className="category-tag">{selectedProject.category}</span>
                        </div>
                        <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
                        <div className="modal-body">
                          <p className="modal-description">{selectedProject.longDescription}</p>
                          <div className="modal-tech">
                            <h3>Technologies Used:</h3>
                            <div className="tech-tags">
                              {selectedProject.tech.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                              ))}
                            </div>
                          </div>
                          <div className="modal-links">
                            <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="modal-link">
                              <FaGithub /> View Code
                            </a>
                            <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="modal-link">
                              <FaExternalLinkAlt /> Live Demo
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </Modal>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
>>>>>>> 9a6103467ab9a523fe0874d470fc047e3ced5b9f
    </section>
  );
};
