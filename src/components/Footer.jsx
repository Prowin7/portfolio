import { motion } from 'framer-motion';
import { FiHeart, FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi';
import { socialLinks } from '../data/resumeData';
import './Footer.css';

const Footer = () => {
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        className="footer-logo"
                        onClick={(e) => {
                            e.preventDefault();
                            handleScrollTop();
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="logo-gradient">P</span>raveen
                    </motion.a>

                    {/* Copyright */}
                    <p className="footer-text">
                        © {new Date().getFullYear()} Praveen Nukilla. All rights reserved.
                    </p>

                    {/* Made with love */}
                    <p className="footer-made">
                        Made with <FiHeart className="heart-icon" /> using React
                    </p>
                </div>

                {/* Social Links */}
                <div className="footer-socials">
                    <motion.a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                        whileHover={{ scale: 1.2, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="GitHub"
                    >
                        <FiGithub size={18} />
                    </motion.a>
                    <motion.a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                        whileHover={{ scale: 1.2, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="LinkedIn"
                    >
                        <FiLinkedin size={18} />
                    </motion.a>
                </div>

                {/* Scroll to top button */}
                <motion.button
                    className="scroll-top-btn"
                    onClick={handleScrollTop}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Scroll to top"
                >
                    <FiArrowUp size={20} />
                </motion.button>
            </div>
        </footer>
    );
};

export default Footer;
