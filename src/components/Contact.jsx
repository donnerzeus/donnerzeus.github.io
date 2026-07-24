import React from 'react';
import { motion as Motion } from 'framer-motion';
import { FileText, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { collaborationPoints, footerLinks, personalInfo } from '../data';
import { useLanguage } from '../i18n';
import './Contact.css';

const Contact = () => {
    const { t, localize } = useLanguage();
    const info = localize('personalInfo', personalInfo);
    const collaborations = localize('collaborationPoints', collaborationPoints);

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <Motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {t.contact.title}
                </Motion.h2>

                <div className="contact-content">
                    <Motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="contact-text">
                            {t.contact.intro}
                        </p>

                        <div className="contact-details">
                            <a href={`mailto:${info.email}`} className="contact-item">
                                <Mail className="icon" />
                                <span>{info.email}</span>
                            </a>
                            <a href={`tel:${info.phone}`} className="contact-item">
                                <Phone className="icon" />
                                <span>{info.phone}</span>
                            </a>
                            <div className="contact-item">
                                <MapPin className="icon" />
                                <span>{info.location}</span>
                            </div>
                        </div>

                        <div className="contact-actions">
                            <a
                                href={info.resumeUrl}
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FileText size={18} />
                                {t.contact.resume}
                            </a>
                            <a
                                href={info.linkedin}
                                className="btn btn-outline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin size={18} />
                                LinkedIn
                            </a>
                        </div>

                        <div className="social-links large">
                            <a href={info.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin size={28} />
                            </a>
                            <a href={info.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
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
                        <h3>{t.contact.fit}</h3>
                        <div className="references-list">
                            {collaborations.map((item) => (
                                <div key={item} className="reference-card">
                                    <h4>{item}</h4>
                                    <p className="ref-role">{t.contact.fitNote}</p>
                                </div>
                            ))}
                        </div>
                    </Motion.div>
                </div>

                <footer className="footer">
                    <p>{t.contact.built} · {info.name}</p>
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
