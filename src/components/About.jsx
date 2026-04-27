import React from 'react';
import { motion as Motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { deliveryPrinciples, focusAreas, keyContributions } from '../data';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="section-heading">
                        <span className="section-eyebrow">Focus</span>
                        <h2 className="section-title">Professional, low-noise delivery for systems that need to stay alive.</h2>
                        <p className="section-intro">
                            I work best where backend reliability, integration complexity, and maintainability matter more than hype.
                        </p>
                    </div>

                    <div className="focus-grid">
                        {focusAreas.map((item, index) => (
                            <Motion.article
                                key={item.title}
                                className="focus-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                            >
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </Motion.article>
                        ))}
                    </div>

                    <div className="about-columns">
                        <div className="contributions">
                            <h3 className="subsection-title">
                                <CheckCircle2 className="icon" />
                                Recent contribution themes
                            </h3>
                            <ul className="contributions-list">
                                {keyContributions.map((item, index) => (
                                    <Motion.li
                                        key={item}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        {item}
                                    </Motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className="soft-skills">
                            <h3 className="subsection-title">
                                <CheckCircle2 className="icon" />
                                Working principles
                            </h3>
                            <div className="skills-tags">
                                {deliveryPrinciples.map((item, index) => (
                                    <Motion.span
                                        key={item}
                                        className="skill-tag"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        {item}
                                    </Motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Motion.div>
            </div>
        </section>
    );
};

export default About;
