import React from 'react';
import { motion } from 'framer-motion';
import { Folder, ExternalLink } from 'lucide-react';
import { projects } from '../data';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="project-header">
                                <Folder size={40} className="folder-icon" />
                                <div className="project-links">
                                    {/* Assuming links might be added later, currently just placeholder or if available */}
                                    {/* <a href="#" target="_blank" rel="noopener noreferrer"><ExternalLink size={20} /></a> */}
                                </div>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech">
                                {/* Tech stack could be added to data.js for each project */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
