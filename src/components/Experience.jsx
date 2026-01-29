import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience, education } from '../data/resumeData';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../utils/animations';
import './Experience.css';

const Experience = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    return (
        <section id="experience" className="section experience" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-title"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeInUp}
                >
                    <h2>Experience & Education</h2>
                    <p>My professional journey and academic background</p>
                </motion.div>

                <div className="timeline-container">
                    {/* Experience Section */}
                    <motion.div
                        className="timeline-section"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeInLeft}
                    >
                        <div className="timeline-header">
                            <span className="timeline-icon">💼</span>
                            <h3>Work Experience</h3>
                        </div>

                        <div className="timeline">
                            {experience.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    className="timeline-item"
                                    variants={staggerItem}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    <div className="timeline-marker">
                                        <div className="marker-dot"></div>
                                        <div className="marker-line"></div>
                                    </div>

                                    <motion.div
                                        className="timeline-card glass-card"
                                        whileHover={{ scale: 1.02, x: 10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="card-header">
                                            <span className="card-logo">{exp.logo}</span>
                                            <div className="card-info">
                                                <h4 className="card-title">{exp.role}</h4>
                                                <p className="card-company">{exp.company}</p>
                                            </div>
                                            <span className="card-date">{exp.duration}</span>
                                        </div>

                                        <ul className="card-description">
                                            {exp.description.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>

                                        <div className="card-technologies">
                                            {exp.technologies.map((tech) => (
                                                <span key={tech} className="tech-badge">{tech}</span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education Section */}
                    <motion.div
                        className="timeline-section"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeInRight}
                    >
                        <div className="timeline-header">
                            <span className="timeline-icon">🎓</span>
                            <h3>Education</h3>
                        </div>

                        <div className="timeline">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={edu.id}
                                    className="timeline-item"
                                    variants={staggerItem}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    transition={{ delay: index * 0.2 + 0.3 }}
                                >
                                    <div className="timeline-marker">
                                        <div className="marker-dot education"></div>
                                        <div className="marker-line"></div>
                                    </div>

                                    <motion.div
                                        className="timeline-card glass-card"
                                        whileHover={{ scale: 1.02, x: 10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="card-header">
                                            <span className="card-logo">{edu.logo}</span>
                                            <div className="card-info">
                                                <h4 className="card-title">{edu.shortName}</h4>
                                                <p className="card-company">{edu.degree}</p>
                                            </div>
                                            <span className="card-date">{edu.duration}</span>
                                        </div>

                                        <p className="card-field">{edu.field}</p>

                                        <div className="card-grade">
                                            <span className="grade-label">Grade:</span>
                                            <span className="grade-value">{edu.grade}</span>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
