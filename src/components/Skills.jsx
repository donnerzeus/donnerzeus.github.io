import React from 'react';
import { motion as Motion } from 'framer-motion';
import { skills } from '../data';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <Motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Core stack
                </Motion.h2>
                <p className="skills-intro">
                    Strongest on PHP ecosystems and integration-heavy delivery, with enough frontend range to ship complete experiences when needed.
                </p>

                <div className="skills-grid">
                    {skills.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <Motion.article
                                key={category.category}
                                className="skill-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                            >
                                <div className="skill-header">
                                    <Icon className="skill-icon" size={24} />
                                    <h3>{category.category}</h3>
                                </div>
                                <div className="skill-items">
                                    {category.items.map((item) => (
                                        <span key={item} className="skill-item">{item}</span>
                                    ))}
                                </div>
                            </Motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
