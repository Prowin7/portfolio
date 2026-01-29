import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { personalInfo, stats } from '../data/resumeData';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../utils/animations';
import './About.css';

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    return (
        <section id="about" className="section about" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-title"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeInUp}
                >
                    <h2>About Me</h2>
                    <p>Get to know more about who I am</p>
                </motion.div>

                <div className="about-grid">
                    {/* About Image/Avatar */}
                    <motion.div
                        className="about-image-container"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeInLeft}
                    >
                        <div className="about-image-wrapper">
                            <div className="about-image-gradient"></div>
                            <div className="about-avatar">
                                <span className="avatar-initials">PN</span>
                            </div>
                            <div className="about-image-decoration"></div>
                        </div>

                        {/* Quick Info Cards */}
                        <motion.div
                            className="quick-info-cards"
                            variants={staggerContainer}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                        >
                            <motion.div className="quick-info-card" variants={staggerItem}>
                                <FiMapPin className="quick-info-icon" />
                                <span>Allahabad, India</span>
                            </motion.div>
                            <motion.div className="quick-info-card" variants={staggerItem}>
                                <FiMail className="quick-info-icon" />
                                <span>Available for work</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* About Content */}
                    <motion.div
                        className="about-content"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeInRight}
                    >
                        <h3 className="about-heading">
                            A passionate <span className="gradient-text">Software Developer</span> based in India
                        </h3>

                        <p className="about-text">
                            {personalInfo.bio}
                        </p>

                        <p className="about-text">
                            Currently pursuing my B.Tech at <strong>IIIT Allahabad</strong>, I combine my
                            academic knowledge with hands-on project experience. My journey includes building
                            full-stack applications, exploring AI/ML technologies, and constantly improving
                            my problem-solving skills.
                        </p>

                        <p className="about-text">
                            When I'm not coding, you can find me solving DSA problems on LeetCode and GeeksforGeeks,
                            contributing to open-source projects, or exploring new technologies.
                        </p>

                        {/* Stats */}
                        <motion.div
                            className="about-stats"
                            variants={staggerContainer}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="stat-card glass-card"
                                    variants={staggerItem}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                >
                                    <span className="stat-value">
                                        <CountUp
                                            target={stat.value}
                                            decimals={stat.decimals || 0}
                                            inView={inView}
                                        />
                                        {stat.suffix}
                                    </span>
                                    <span className="stat-label">{stat.label}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Counter component
const CountUp = ({ target, decimals = 0, inView }) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!inView) return;

        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 16);

        return () => clearInterval(timer);
    }, [target, inView]);

    return decimals > 0 ? count.toFixed(decimals) : Math.floor(count);
};

import React from 'react';
export default About;
