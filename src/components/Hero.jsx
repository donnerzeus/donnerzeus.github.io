import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowUpRight, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { heroHighlights, heroStats, personalInfo, terminalFeed } from '../data';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container hero-container">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hero-content"
                >
                    <span className="hero-kicker">Backend-heavy delivery for real production systems</span>
                    <h1 className="name">
                        {personalInfo.name}
                        <span className="text-gradient"> builds reliable web platforms.</span>
                    </h1>
                    <h2 className="title">{personalInfo.title}</h2>
                    <p className="description">{personalInfo.summary}</p>

                    <div className="hero-highlights">
                        {heroHighlights.map((item) => (
                            <span key={item} className="highlight-pill">{item}</span>
                        ))}
                    </div>

                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary">
                            Let&apos;s talk
                            <ArrowUpRight size={18} />
                        </a>
                        <a
                            href={personalInfo.resumeUrl}
                            className="btn btn-outline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FileText size={18} />
                            View resume
                        </a>
                    </div>

                    <div className="social-links">
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={22} />
                        </a>
                        <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                            <Mail size={22} />
                        </a>
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github size={22} />
                        </a>
                    </div>
                </Motion.div>

                <Motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hero-visual"
                >
                    <div className="hero-panel">
                        <div className="hero-panel-topbar">
                            <div className="hero-panel-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <span className="hero-panel-tab">runtime://portfolio.telemetry</span>
                        </div>

                        <div className="hero-terminal">
                            {terminalFeed.map((item) => (
                                <div key={item.label} className="terminal-row">
                                    <span className="terminal-prompt">$ {item.label}</span>
                                    <strong>{item.value}</strong>
                                </div>
                            ))}
                        </div>

                        <div className="hero-stat-grid">
                            {heroStats.map((item) => (
                                <div key={item.label} className="hero-stat-card">
                                    <strong>{item.value}</strong>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="hero-panel-footer">
                            <div>
                                <span>Based in</span>
                                <strong>{personalInfo.location}</strong>
                            </div>
                            <p>{personalInfo.intro}</p>
                        </div>
                    </div>
                </Motion.div>
            </div>
        </section>
    );
};

export default Hero;
