import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, User } from 'lucide-react';
import { keyContributions, softSkills } from '../data';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">About Me</h2>

                    <div className="about-grid">
                        <div className="contributions">
                            <h3 className="subsection-title">
                                <CheckCircle2 className="icon" /> Key Contributions
                            </h3>
                            <ul className="contributions-list">
                                {keyContributions.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className="soft-skills">
                            <h3 className="subsection-title">
                                <User className="icon" /> Soft Skills
                            </h3>
                            <div className="skills-tags">
                                {softSkills.map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        className="skill-tag"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
