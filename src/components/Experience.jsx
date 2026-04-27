import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { certifications, education, experience, workingStyle } from '../data';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <div className="container experience-layout">
                <div className="experience-main">
                    <Motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Experience and operating style
                    </Motion.h2>

                    <div className="timeline">
                        {experience.map((job, index) => (
                            <Motion.div
                                key={job.company}
                                className="timeline-item"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                            >
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <div className="job-header">
                                        <div>
                                            <h3>{job.role}</h3>
                                            <span className="company">{job.company}</span>
                                        </div>
                                        <span className="period">
                                            <Calendar size={14} />
                                            {job.period}
                                        </span>
                                    </div>
                                    <ul className="job-description">
                                        {job.description.map((desc) => (
                                            <li key={desc}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </Motion.div>
                        ))}
                    </div>
                </div>

                <Motion.aside
                    className="experience-sidebar"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                >
                    <div className="sidebar-card">
                        <span className="sidebar-label">Education</span>
                        <h3>{education.degree}</h3>
                        <p>{education.school}</p>
                        <span className="sidebar-meta">{education.period}</span>
                    </div>

                    <div className="sidebar-card">
                        <span className="sidebar-label">Certifications</span>
                        <ul className="sidebar-list">
                            {certifications.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="sidebar-card">
                        <span className="sidebar-label">Working style</span>
                        <div className="sidebar-tags">
                            {workingStyle.map((item) => (
                                <span key={item}>{item}</span>
                            ))}
                        </div>
                    </div>
                </Motion.aside>
            </div>
        </section>
    );
};

export default Experience;
