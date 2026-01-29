import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { personalInfo, socialLinks } from '../data/resumeData';
import { fadeInUp, fadeInDown, staggerContainer, staggerItem } from '../utils/animations';
import './Hero.css';

const Hero = () => {
    const canvasRef = useRef(null);

    // Particle animation effect
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            particles = [];
            const numParticles = Math.floor((canvas.width * canvas.height) / 15000);

            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 2 + 0.5,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    opacity: Math.random() * 0.5 + 0.2
                });
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle, i) => {
                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 107, 107, ${particle.opacity})`;
                ctx.fill();

                // Draw connections
                particles.slice(i + 1).forEach(other => {
                    const dx = particle.x - other.x;
                    const dy = particle.y - other.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.strokeStyle = `rgba(78, 205, 196, ${0.08 * (1 - distance / 120)})`;
                        ctx.stroke();
                    }
                });
            });

            animationFrameId = requestAnimationFrame(drawParticles);
        };

        resizeCanvas();
        createParticles();
        drawParticles();

        window.addEventListener('resize', () => {
            resizeCanvas();
            createParticles();
        });

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    const handleScrollDown = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero">
            {/* Particle Canvas */}
            <canvas ref={canvasRef} className="hero-particles" />

            {/* Background Gradient Orbs */}
            <div className="hero-bg-orbs">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div>
            </div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Greeting */}
                    <motion.div className="hero-greeting" variants={fadeInDown}>
                        <span className="greeting-emoji">👋</span>
                        <span className="greeting-text">Hey there, I'm</span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1 className="hero-name" variants={fadeInUp}>
                        <span className="name-gradient">{personalInfo.name}</span>
                    </motion.h1>

                    {/* Typewriter Roles */}
                    <motion.div className="hero-roles" variants={fadeInUp}>
                        <span className="role-prefix">I'm a </span>
                        <span className="role-typewriter">
                            <Typewriter
                                options={{
                                    strings: personalInfo.roles,
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 30,
                                    delay: 80
                                }}
                            />
                        </span>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p className="hero-tagline" variants={fadeInUp}>
                        {personalInfo.tagline}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div className="hero-buttons" variants={staggerItem}>
                        <motion.a
                            href="#projects"
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            View My Work
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="btn btn-outline"
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Get In Touch
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        className="hero-socials"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.a
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            variants={staggerItem}
                            whileHover={{ scale: 1.2, y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="GitHub"
                        >
                            <FiGithub size={22} />
                        </motion.a>
                        <motion.a
                            href={socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            variants={staggerItem}
                            whileHover={{ scale: 1.2, y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin size={22} />
                        </motion.a>
                        <motion.a
                            href={socialLinks.leetcode}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            variants={staggerItem}
                            whileHover={{ scale: 1.2, y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="LeetCode"
                        >
                            <SiLeetcode size={22} />
                        </motion.a>
                        <motion.a
                            href={socialLinks.gfg}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            variants={staggerItem}
                            whileHover={{ scale: 1.2, y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="GeeksforGeeks"
                        >
                            <SiGeeksforgeeks size={22} />
                        </motion.a>
                        <motion.a
                            href={socialLinks.email}
                            className="social-link"
                            variants={staggerItem}
                            whileHover={{ scale: 1.2, y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Email"
                        >
                            <FiMail size={22} />
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                    onClick={handleScrollDown}
                >
                    <span className="scroll-text">Scroll Down</span>
                    <motion.div
                        className="scroll-arrow"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <FiArrowDown size={20} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
