import React from 'react';
import { motion as Motion } from 'framer-motion';
import { projects, skills, techStack } from '../data';
import './TechMarquee.css';

const TechMarquee = () => {
    const metrics = [
        { label: 'stack_items', value: techStack.length },
        { label: 'skill_groups', value: skills.length },
        { label: 'case_blocks', value: projects.length }
    ];

    return (
        <section className="tech-section-wrapper section">
            <div className="container">
                <Motion.div
                    className="tech-grid-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="tech-copy">
                        <span className="section-eyebrow">Toolkit</span>
                        <h2>Preferred technologies for shipping and maintaining the work.</h2>
                        <div className="tech-metrics">
                            {metrics.map((item) => (
                                <div key={item.label} className="tech-metric-card">
                                    <span>{item.label}</span>
                                    <strong>{item.value}</strong>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="tech-grid">
                        {techStack.map((tech) => (
                            <div key={tech.name} className="tech-item-static">
                                <img src={tech.icon} alt={tech.name} className="tech-icon" />
                                <span className="tech-name">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </Motion.div>
            </div>
        </section>
    );
};

export default TechMarquee;
