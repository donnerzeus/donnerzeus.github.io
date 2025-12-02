import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { experience, education } from '../data';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Experience & Education
                </motion.h2>

                <div className="timeline">
                    {experience.map((job, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="job-header">
                                    <h3>{job.role}</h3>
                                    <span className="company">{job.company}</span>
                                    <span className="period">
                                        <Calendar size={14} /> {job.period}
                                    </span>
                                </div>
                                <ul className="job-description">
                                    {job.description.map((desc, idx) => (
                                        <li key={idx}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}

                    {/* Education as the last item */}
                    <motion.div
                        className="timeline-item education-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: experience.length * 0.1 }}
                    >
                        <div className="timeline-dot education-dot"></div>
                        <div className="timeline-content">
                            <div className="job-header">
                                <h3>{education.degree}</h3>
                                <span className="company">{education.school}</span>
                                <span className="period">
                                    <Calendar size={14} /> {education.period}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
