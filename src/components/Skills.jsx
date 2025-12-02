import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Technical Skills
                </motion.h2>

                <div className="skills-grid">
                    {skills.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={index}
                                className="skill-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="skill-header">
                                    <Icon className="skill-icon" size={32} />
                                    <h3>{category.category}</h3>
                                </div>
                                <div className="skill-items">
                                    {category.items.map((item, idx) => (
                                        <span key={idx} className="skill-item">{item}</span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
