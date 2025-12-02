import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { personalInfo, references } from '../data';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="contact-text">
                            I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="contact-details">
                            <a href={`mailto:${personalInfo.email}`} className="contact-item">
                                <Mail className="icon" />
                                <span>{personalInfo.email}</span>
                            </a>
                            <a href={`tel:${personalInfo.phone}`} className="contact-item">
                                <Phone className="icon" />
                                <span>{personalInfo.phone}</span>
                            </a>
                            <div className="contact-item">
                                <MapPin className="icon" />
                                <span>{personalInfo.location}</span>
                            </div>
                        </div>

                        <div className="social-links large">
                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin size={32} />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <Github size={32} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="references"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3>References</h3>
                        <div className="references-list">
                            {references.map((ref, index) => (
                                <div key={index} className="reference-card">
                                    <h4>{ref.name}</h4>
                                    <p className="ref-role">{ref.role}</p>
                                    <a href={`mailto:${ref.email}`} className="ref-email">{ref.email}</a>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <footer className="footer">
                    <p>Designed & Built by {personalInfo.name}</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
