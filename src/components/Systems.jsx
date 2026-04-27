import React from 'react';
import { motion as Motion } from 'framer-motion';
import { integrationSurfaces, systemCapabilities } from '../data';
import './Systems.css';

const Systems = () => {
    return (
        <section className="section systems-section">
            <div className="container systems-layout">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="systems-copy"
                >
                    <span className="section-eyebrow">System View</span>
                    <h2 className="section-title">Technical depth should read like architecture, not decoration.</h2>
                    <p className="systems-intro">
                        This section is intentionally more technical. It makes the portfolio feel closer to a systems dashboard than a generic personal site.
                    </p>
                </Motion.div>

                <div className="systems-grid">
                    <Motion.div
                        className="capability-panel"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="panel-header">
                            <span className="panel-kicker">Capability matrix</span>
                            <strong>Execution surfaces</strong>
                        </div>

                        <div className="capability-list">
                            {systemCapabilities.map((item) => (
                                <div key={item.label} className="capability-row">
                                    <div className="capability-meta">
                                        <span>{item.label}</span>
                                        <p>{item.detail}</p>
                                    </div>
                                    <strong>{item.score}</strong>
                                </div>
                            ))}
                        </div>
                    </Motion.div>

                    <Motion.div
                        className="surface-panel"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="panel-header">
                            <span className="panel-kicker">Integration surfaces</span>
                            <strong>Systems I work across</strong>
                        </div>

                        <div className="surface-grid">
                            {integrationSurfaces.map((item, index) => (
                                <div key={item} className="surface-card">
                                    <span className="surface-index">{String(index + 1).padStart(2, '0')}</span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </Motion.div>
                </div>
            </div>
        </section>
    );
};

export default Systems;
