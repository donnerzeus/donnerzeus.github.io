import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowUpRight, Folder } from 'lucide-react';
import { caseStudies, projects } from '../data';
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

                <div className="case-study-stack">
                    {caseStudies.map((study, index) => (
                        <Motion.article
                            key={study.title}
                            className="case-study-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                        >
                            <div className="case-study-top">
                                <span className="case-study-index">{String(index + 1).padStart(2, '0')}</span>
                                <h3>{study.title}</h3>
                            </div>

                            <p className="case-study-context">{study.context}</p>

                            <div className="case-study-columns">
                                <div className="case-column">
                                    <span className="case-label">Problem</span>
                                    <ul>
                                        {study.problem.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="case-column">
                                    <span className="case-label">Decisions</span>
                                    <ul>
                                        {study.decisions.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="case-study-footer">
                                <p>{study.result}</p>
                                <div className="project-tech">
                                    {study.stack.map((tech) => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </Motion.article>
                    ))}
                </div>

                <div className="projects-subsection">
                    <span className="section-eyebrow">Additional work blocks</span>
                    <h3 className="projects-subtitle">Compact project inventory</h3>
                </div>

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
