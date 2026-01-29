import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from 'chart.js';
import { skills } from '../data/resumeData';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import './Skills.css';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const skillCategories = [
    { key: 'languages', label: 'Languages', icon: '💻', color: '#FF6B6B' },
    { key: 'frontend', label: 'Frontend', icon: '🎨', color: '#4ECDC4' },
    { key: 'backend', label: 'Backend', icon: '⚙️', color: '#FFD93D' },
    { key: 'databases', label: 'Databases', icon: '🗄️', color: '#95E1D3' },
    { key: 'tools', label: 'Tools', icon: '🔧', color: '#FFA07A' }
];

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('languages');
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    // Radar chart data
    const radarData = {
        labels: ['Languages', 'Frontend', 'Backend', 'Databases', 'Tools'],
        datasets: [
            {
                label: 'Skill Level',
                data: [
                    skills.languages.reduce((a, b) => a + b.level, 0) / skills.languages.length,
                    skills.frontend.reduce((a, b) => a + b.level, 0) / skills.frontend.length,
                    skills.backend.reduce((a, b) => a + b.level, 0) / skills.backend.length,
                    skills.databases.reduce((a, b) => a + b.level, 0) / skills.databases.length,
                    skills.tools.reduce((a, b) => a + b.level, 0) / skills.tools.length
                ],
                backgroundColor: 'rgba(255, 107, 107, 0.2)',
                borderColor: 'rgba(255, 107, 107, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(78, 205, 196, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 107, 107, 1)'
            }
        ]
    };

    const radarOptions = {
        scales: {
            r: {
                angleLines: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                pointLabels: {
                    color: '#a1a1aa',
                    font: {
                        size: 12,
                        family: 'Inter'
                    }
                },
                ticks: {
                    display: false,
                    stepSize: 20
                },
                suggestedMin: 0,
                suggestedMax: 100
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        maintainAspectRatio: true
    };

    const currentSkills = skills[activeCategory] || [];

    return (
        <section id="skills" className="section skills" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-title"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeInUp}
                >
                    <h2>Skills & Technologies</h2>
                    <p>Technologies I've been working with</p>
                </motion.div>

                <div className="skills-layout">
                    {/* Radar Chart */}
                    <motion.div
                        className="skills-chart glass-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="chart-title">Skill Overview</h3>
                        <div className="chart-container">
                            <Radar data={radarData} options={radarOptions} />
                        </div>
                    </motion.div>

                    {/* Skills Detail */}
                    <motion.div
                        className="skills-detail"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={staggerContainer}
                    >
                        {/* Category Tabs */}
                        <motion.div className="category-tabs" variants={staggerItem}>
                            {skillCategories.map((category) => (
                                <motion.button
                                    key={category.key}
                                    className={`category-tab ${activeCategory === category.key ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(category.key)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{
                                        '--tab-color': category.color
                                    }}
                                >
                                    <span className="tab-icon">{category.icon}</span>
                                    <span className="tab-label">{category.label}</span>
                                </motion.button>
                            ))}
                        </motion.div>

                        {/* Skills Grid */}
                        <motion.div
                            className="skills-grid"
                            key={activeCategory}
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            {currentSkills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className="skill-item glass-card"
                                    variants={staggerItem}
                                    whileHover={{ scale: 1.02, y: -3 }}
                                >
                                    <div className="skill-header">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-level">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar-container">
                                        <motion.div
                                            className="skill-bar"
                                            initial={{ width: 0 }}
                                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                                            transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                                            style={{
                                                background: `linear-gradient(90deg, ${skillCategories.find(c => c.key === activeCategory)?.color || '#8B5CF6'}, ${skillCategories.find(c => c.key === activeCategory)?.color || '#8B5CF6'}80)`
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
