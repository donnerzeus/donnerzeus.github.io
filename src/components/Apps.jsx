import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowUpRight, Code2, ExternalLink, Gamepad2, Layers3, Radio } from 'lucide-react';
import { productApps } from '../data';
import { useLanguage } from '../i18n';
import './Apps.css';

const Apps = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const { language, t, localize } = useLanguage();
    const appTranslations = localize('productApps', []);
    const apps = productApps.map((app, index) => language === 'tr' ? { ...app, ...appTranslations[index] } : app);
    const filters = [
        { id: 'all', label: t.apps.filters.all, icon: Layers3 },
        { id: 'live', label: t.apps.filters.live, icon: Radio },
        { id: 'game', label: t.apps.filters.game, icon: Gamepad2 },
        { id: 'system', label: t.apps.filters.system, icon: Code2 }
    ];
    const visibleApps = activeFilter === 'all' ? apps : apps.filter((app) => app.type === activeFilter);

    return (
        <section id="apps" className="section apps-section">
            <div className="container">
                <div className="apps-heading">
                    <div>
                        <span className="section-eyebrow">{t.apps.eyebrow}</span>
                        <Motion.h2
                            className="section-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            {t.apps.title}
                        </Motion.h2>
                        <p>
                            {t.apps.intro}
                        </p>
                    </div>
                    <a className="apps-github-link" href="https://github.com/donnerzeus?tab=repositories" target="_blank" rel="noreferrer">
                        {t.apps.repositories} <ArrowUpRight size={17} />
                    </a>
                </div>

                <div className="apps-filter" role="tablist" aria-label="Filter applications">
                    {filters.map(({ id, label, icon }) => (
                        <button
                            key={id}
                            type="button"
                            role="tab"
                            aria-selected={activeFilter === id}
                            className={activeFilter === id ? 'active' : ''}
                            onClick={() => setActiveFilter(id)}
                        >
                            {React.createElement(icon, { size: 16 })} {label}
                            <span>{id === 'all' ? apps.length : apps.filter((app) => app.type === id).length}</span>
                        </button>
                    ))}
                </div>

                <Motion.div className="apps-grid" layout>
                    {visibleApps.map((app, index) => (
                        <Motion.article
                            layout
                            key={app.title}
                            className={`app-card accent-${app.accent}`}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.04 }}
                        >
                            <div className="app-card-preview" aria-hidden="true">
                                <div className="app-preview-top">
                                    <span>{app.signal}</span>
                                    <i></i>
                                </div>
                                <strong>{app.title.slice(0, 2).toUpperCase()}</strong>
                                <div className="app-preview-lines"><span></span><span></span><span></span></div>
                            </div>

                            <div className="app-card-body">
                                <div className="app-card-meta">
                                    <span>{app.category}</span>
                                    <span className="app-status"><i></i>{app.status}</span>
                                </div>
                                <h3>{app.title}</h3>
                                <p>{app.description}</p>
                                <div className="app-tech">
                                    {app.tech.map((tech) => <span key={tech}>{tech}</span>)}
                                </div>
                                <div className="app-actions">
                                    {app.liveUrl && (
                                        <a href={app.liveUrl} target="_blank" rel="noreferrer">
                                            {t.apps.open} <ExternalLink size={15} />
                                        </a>
                                    )}
                                    <a href={app.repoUrl} target="_blank" rel="noreferrer" className="source-link">
                                        {t.apps.source} <Code2 size={15} />
                                    </a>
                                </div>
                            </div>
                        </Motion.article>
                    ))}
                </Motion.div>
            </div>
        </section>
    );
};

export default Apps;
