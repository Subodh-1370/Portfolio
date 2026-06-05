import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Real-Time Polling App",
    image: "https://images.ctfassets.net/rvt0uslu5yqp/4sL7hMUKGMwWikyJWp6iHQ/3bedd3ce600457f34428746e22fcbad8/Mentimeter_Applications_Web_Live-Polling_HeroImage_2021__1_.png?w=1200&h=630&q=90&fm=jpg",
    description: "A real-time polling application built with React and Firebase, featuring live updates, user authentication, and interactive polls for engaging audiences.",
    tech: ["React", "Firebase", "Tailwind CSS", "Node.js"],
    githubLink: "https://github.com/Subodh-1370/Pollify.git",
    liveLink: "#"
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
    liveLink: "#"
  },
  {
    id: 3,
    title: "Vehicle Classification Using CNN",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
    description: "Deep learning model using Convolutional Neural Networks to classify vehicles from images with high accuracy. Built with Python and TensorFlow.",
    tech: ["Python", "TensorFlow", "CNN", "Machine Learning"],
    githubLink: "https://github.com/Subodh-1370",
    liveLink: "#"
  },
  {
    id: 4,
    title: "Mental Health Mood Journal",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    description: "A mental health tracking application that allows users to log their mood, track patterns, and receive personalized insights and recommendations.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/Subodh-1370",
    liveLink: "#"
  },
  {
    id: 5,
    title: "SynapseOS",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    description: "An operating system simulation project demonstrating kernel concepts, process management, memory allocation, and file system implementation.",
    tech: ["C", "Assembly", "Linux", "OS Concepts"],
    githubLink: "https://github.com/Subodh-1370",
    liveLink: "#"
  },
  {
    id: 6,
    title: "Uber Clone",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800",
    description: "A full-featured ride-sharing application clone with real-time location tracking, driver-passenger matching, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Google Maps API"],
    githubLink: "https://github.com/Subodh-1370",
    liveLink: "#"
  }
];

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">A showcase of my recent work and personal projects</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                  {project.liveLink && project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
