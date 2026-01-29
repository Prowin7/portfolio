import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { personalInfo, socialLinks } from '../data/resumeData';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../utils/animations';
import './Contact.css';

const Contact = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create mailto link
        const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
        window.location.href = mailtoLink;
    };

    const contactInfo = [
        {
            icon: <FiMail />,
            label: 'Email',
            value: personalInfo.email,
            href: `mailto:${personalInfo.email}`
        },
        {
            icon: <FiPhone />,
            label: 'Phone',
            value: personalInfo.phone,
            href: `tel:${personalInfo.phone}`
        },
        {
            icon: <FiMapPin />,
            label: 'Location',
            value: personalInfo.location,
            href: null
        }
    ];

    const socialIcons = [
        { icon: <FiGithub size={22} />, href: socialLinks.github, label: 'GitHub' },
        { icon: <FiLinkedin size={22} />, href: socialLinks.linkedin, label: 'LinkedIn' },
        { icon: <SiLeetcode size={22} />, href: socialLinks.leetcode, label: 'LeetCode' },
        { icon: <SiGeeksforgeeks size={22} />, href: socialLinks.gfg, label: 'GeeksforGeeks' }
    ];

    return (
        <section id="contact" className="section contact" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-title"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeInUp}
                >
                    <h2>Get In Touch</h2>
                    <p>Have a project in mind or want to collaborate? Let's connect!</p>
                </motion.div>

                <div className="contact-grid">
                    {/* Contact Info */}
                    <motion.div
                        className="contact-info"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeInLeft}
                    >
                        <h3>Let's talk about everything!</h3>
                        <p>
                            I'm always open to discussing new projects, creative ideas, or
                            opportunities to be part of your vision. Feel free to reach out!
                        </p>

                        <motion.div
                            className="contact-details"
                            variants={staggerContainer}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                        >
                            {contactInfo.map((info) => (
                                <motion.div
                                    key={info.label}
                                    className="contact-item glass-card"
                                    variants={staggerItem}
                                    whileHover={{ scale: 1.02, x: 10 }}
                                >
                                    <span className="contact-icon">{info.icon}</span>
                                    <div className="contact-text">
                                        <span className="contact-label">{info.label}</span>
                                        {info.href ? (
                                            <a href={info.href} className="contact-value">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <span className="contact-value">{info.value}</span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            className="contact-socials"
                            variants={staggerContainer}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                        >
                            <p className="socials-label">Connect with me</p>
                            <div className="social-icons">
                                {socialIcons.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon-link"
                                        variants={staggerItem}
                                        whileHover={{ scale: 1.2, y: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        className="contact-form glass-card"
                        onSubmit={handleSubmit}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeInRight}
                    >
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="What's this about?"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Tell me about your project..."
                                rows="5"
                            />
                        </div>

                        <motion.button
                            type="submit"
                            className="btn btn-primary submit-btn"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <FiSend />
                            <span>Send Message</span>
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
