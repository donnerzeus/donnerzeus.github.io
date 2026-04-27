import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowUpRight, Folder } from 'lucide-react';
import { projects } from '../data';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <Motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Selected work
                </Motion.h2>
                <p className="projects-intro">
                    A mix of institutional delivery, operational tooling, and integration-focused backend work.
                </p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <Motion.article
                            key={project.title}
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                        >
                            <div className="project-header">
                                <Folder size={34} className="folder-icon" />
                                <span className="project-impact-tag">
                                    <ArrowUpRight size={16} />
                                    Impact
                                </span>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-impact">{project.impact}</p>
                            <p className="project-description">{project.description}</p>

                            <ul className="project-outcomes">
                                {project.outcomes.map((outcome) => (
                                    <li key={outcome}>{outcome}</li>
                                ))}
                            </ul>

                            <div className="project-tech">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </Motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
