import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { personalInfo } from '../data';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container hero-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hero-content"
                >
                    <h2 className="greeting">Hello, I'm</h2>
                    <h1 className="name text-gradient">{personalInfo.name}</h1>
                    <h3 className="title">{personalInfo.title}</h3>
                    <p className="description">
                        {personalInfo.summary}
                    </p>

                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary">Get in Touch</a>
                        <a href="/cv.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                            <FileText size={20} />
                            Download CV
                        </a>
                    </div>

                    <div className="social-links">
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                        <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                            <Mail size={24} />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github size={24} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hero-visual"
                >
                    <div className="tech-orb">
                        <div className="orb-ring ring-1"></div>
                        <div className="orb-ring ring-2"></div>
                        <div className="orb-ring ring-3"></div>
                        <div className="orb-core"></div>
                        <div className="orb-glow"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
