import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import { projects, socialLinks } from '../data/resumeData';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import './Projects.css';

const Projects = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    return (
        <section id="projects" className="section projects" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-title"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeInUp}
                >
                    <h2>Featured Projects</h2>
                    <p>Some of the projects I've built and am proud of</p>
                </motion.div>

                <motion.div
                    className="projects-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            className="project-card"
                            variants={staggerItem}
                            whileHover={{ y: -10 }}
                            style={{ '--project-color': project.color }}
                        >
                            {/* Project Header */}
                            <div className="project-header">
                                <div className="project-icon">
                                    <FiFolder size={32} />
                                </div>
                                <div className="project-links">
                                    {project.github && (
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                            whileHover={{ scale: 1.2, y: -3 }}
                                            whileTap={{ scale: 0.9 }}
                                            aria-label="View GitHub repository"
                                        >
                                            <FiGithub size={20} />
                                        </motion.a>
                                    )}
                                    {project.live && (
                                        <motion.a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                            whileHover={{ scale: 1.2, y: -3 }}
                                            whileTap={{ scale: 0.9 }}
                                            aria-label="View live demo"
                                        >
                                            <FiExternalLink size={20} />
                                        </motion.a>
                                    )}
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-date">{project.date}</p>
                                <p className="project-description">{project.longDescription}</p>

                                {/* Features */}
                                <ul className="project-features">
                                    {project.features.slice(0, 3).map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Project Footer */}
                            <div className="project-footer">
                                <div className="project-tech">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative gradient */}
                            <div className="project-gradient"></div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* View More Link */}
                <motion.div
                    className="projects-cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                >
                    <motion.a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FiGithub />
                        <span>View More on GitHub</span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
