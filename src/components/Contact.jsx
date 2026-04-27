import React from 'react';
import { motion as Motion } from 'framer-motion';
import { FileText, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { collaborationPoints, footerLinks, personalInfo } from '../data';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <Motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Contact
                </Motion.h2>

                <div className="contact-content">
                    <Motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="contact-text">
                            If you need a pragmatic engineer for Laravel, Drupal, migrations, or messy integration work, reach out with context and I can assess fit quickly.
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

                        <div className="contact-actions">
                            <a
                                href={personalInfo.resumeUrl}
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FileText size={18} />
                                Resume
                            </a>
                            <a
                                href={personalInfo.linkedin}
                                className="btn btn-outline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin size={18} />
                                LinkedIn
                            </a>
                        </div>

                        <div className="social-links large">
                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin size={28} />
                            </a>
                            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github size={28} />
                            </a>
                        </div>
                    </Motion.div>

                    <Motion.div
                        className="references"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3>Best fit collaborations</h3>
                        <div className="references-list">
                            {collaborationPoints.map((item) => (
                                <div key={item} className="reference-card">
                                    <h4>{item}</h4>
                                    <p className="ref-role">Clear scope, realistic constraints, production-ready output.</p>
                                </div>
                            ))}
                        </div>
                    </Motion.div>
                </div>

                <footer className="footer">
                    <p>Designed and built by {personalInfo.name}</p>
                    <div className="footer-links">
                        {footerLinks.map((item) => (
                            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                                {item.label}
                            </a>
                        ))}
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
