import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowUpRight, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { heroHighlights, heroStats, personalInfo } from '../data';
import { useLanguage } from '../i18n';
import './Hero.css';

const Hero = () => {
    const { t, localize } = useLanguage();
    const info = localize('personalInfo', personalInfo);
    const stats = localize('heroStats', heroStats);
    const highlights = localize('heroHighlights', heroHighlights);

    return (
        <section className="hero-section">
            <div className="container hero-container">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hero-content"
                >
                    <span className="hero-kicker">{t.hero.kicker}</span>
                    <h1 className="name">{info.name}</h1>
                    <h2 className="title">{info.title}</h2>
                    <p className="description">{info.summary}</p>

                    <div className="hero-highlights">
                        {highlights.map((item) => (
                            <span key={item} className="highlight-pill">{item}</span>
                        ))}
                    </div>

                    <div className="hero-actions">
                        <a href="#apps" className="btn btn-primary">
                            {t.hero.apps}
                            <ArrowUpRight size={18} />
                        </a>
                        <a
                            href={info.resumeUrl}
                            className="btn btn-outline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FileText size={18} />
                            {t.hero.resume}
                        </a>
                    </div>

                    <div className="social-links">
                        <a href={info.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={22} />
                        </a>
                        <a href={`mailto:${info.email}`} aria-label="Email">
                            <Mail size={22} />
                        </a>
                        <a href={info.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
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
                        <span className="hero-panel-label">{t.hero.brief}</span>
                        <p className="hero-panel-quote">
                            {t.hero.quote}
                        </p>
                        <div className="hero-stat-list">
                            {stats.map((item) => (
                                <div key={item.label} className="hero-stat-card">
                                    <strong>{item.value}</strong>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="hero-panel-footer">
                            <span>{t.hero.current}</span>
                            <p>{info.intro}</p>
                        </div>
                    </div>
                </Motion.div>
            </div>
        </section>
    );
};

export default Hero;
