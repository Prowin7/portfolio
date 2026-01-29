import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { achievements, responsibilities, codingProfiles } from '../data/resumeData';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import './Achievements.css';

const Achievements = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    return (
        <section id="achievements" className="section achievements" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-title"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeInUp}
                >
                    <h2>Achievements & Coding</h2>
                    <p>Highlights of my accomplishments and coding journey</p>
                </motion.div>

                <div className="achievements-layout">
                    {/* Coding Profiles */}
                    <motion.div
                        className="coding-profiles-section"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={staggerContainer}
                    >
                        <h3 className="section-subtitle">
                            <span className="subtitle-icon">💻</span>
                            Coding Profiles
                        </h3>

                        <div className="coding-profiles-grid">
                            {codingProfiles.map((profile, index) => (
                                <motion.a
                                    key={profile.name}
                                    href={profile.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="coding-profile-card glass-card"
                                    variants={staggerItem}
                                    whileHover={{ scale: 1.03, y: -5 }}
                                    style={{ '--profile-color': profile.color }}
                                >
                                    <div className="profile-header">
                                        <span className="profile-icon">{profile.icon}</span>
                                        <div className="profile-info">
                                            <h4>{profile.name}</h4>
                                            <p>@{profile.username}</p>
                                        </div>
                                    </div>
                                    <div className="profile-stats">
                                        <div className="stat-circle">
                                            <CountUp target={profile.problems} inView={inView} />
                                            <span>Problems</span>
                                        </div>
                                    </div>
                                    <div className="profile-glow"></div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Total Problems Counter */}
                        <motion.div
                            className="total-problems glass-card"
                            variants={staggerItem}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="total-content">
                                <span className="total-label">Total Problems Solved</span>
                                <motion.span
                                    className="total-value"
                                    initial={{ scale: 0 }}
                                    animate={inView ? { scale: 1 } : {}}
                                    transition={{ type: 'spring', stiffness: 200, delay: 0.5 }}
                                >
                                    <CountUp target={400} inView={inView} />+
                                </motion.span>
                            </div>
                            <div className="total-bar-container">
                                <motion.div
                                    className="total-bar"
                                    initial={{ width: 0 }}
                                    animate={inView ? { width: '100%' } : {}}
                                    transition={{ duration: 1.5, delay: 0.3 }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Achievements & Responsibilities */}
                    <motion.div
                        className="achievements-section"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={staggerContainer}
                    >
                        {/* Achievements */}
                        <div className="achievements-group">
                            <h3 className="section-subtitle">
                                <span className="subtitle-icon">🏆</span>
                                Achievements
                            </h3>

                            <div className="achievements-list">
                                {achievements.map((achievement) => (
                                    <motion.div
                                        key={achievement.id}
                                        className="achievement-card glass-card"
                                        variants={staggerItem}
                                        whileHover={{ scale: 1.02, x: 10 }}
                                        style={{ '--achievement-color': achievement.color }}
                                    >
                                        <span className="achievement-icon">{achievement.icon}</span>
                                        <div className="achievement-content">
                                            <h4>{achievement.title}</h4>
                                            <p>{achievement.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Positions of Responsibility */}
                        <div className="responsibilities-group">
                            <h3 className="section-subtitle">
                                <span className="subtitle-icon">👔</span>
                                Positions of Responsibility
                            </h3>

                            <div className="responsibilities-list">
                                {responsibilities.map((resp) => (
                                    <motion.div
                                        key={resp.id}
                                        className="responsibility-card glass-card"
                                        variants={staggerItem}
                                        whileHover={{ scale: 1.02, x: 10 }}
                                    >
                                        <span className="responsibility-icon">{resp.icon}</span>
                                        <div className="responsibility-content">
                                            <h4>{resp.role}</h4>
                                            <p className="responsibility-org">{resp.organization}</p>
                                            <p className="responsibility-date">{resp.duration}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Counter component
const CountUp = ({ target, inView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
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
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [target, inView]);

    return count;
};

export default Achievements;
