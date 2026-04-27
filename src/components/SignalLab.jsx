import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Activity, Boxes, Orbit, Waves } from 'lucide-react';
import './SignalLab.css';

const nodes = [
    { label: 'EDGE', top: '16%', left: '12%' },
    { label: 'CACHE', top: '28%', right: '10%' },
    { label: 'QUEUE', bottom: '24%', left: '18%' },
    { label: 'WORKER', bottom: '16%', right: '14%' }
];

const bands = [
    { label: 'surface', value: 'visual orchestration layer' },
    { label: 'motion', value: 'synchronized beam and pulse cycles' },
    { label: 'depth', value: 'stacked panels, rings, and telemetry shards' }
];

const chips = ['GLASS PANELS', 'SIGNAL GRID', 'LAYERED GLOW', 'ORBIT PATHS', 'RADAR SWEEP', 'DATA SHARDS'];

const icons = [Boxes, Orbit, Activity, Waves];

const SignalLab = () => {
    return (
        <section className="section signal-lab-section">
            <div className="container signal-lab-layout">
                <Motion.div
                    className="signal-lab-copy"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-eyebrow">Visual Layer</span>
                    <h2 className="section-title">A pure design block that exists to make the site feel engineered.</h2>
                    <p className="signal-lab-intro">
                        No biography here. Just a dense visual composition with motion, depth, and system-like geometry.
                    </p>

                    <div className="signal-chip-row">
                        {chips.map((chip) => (
                            <span key={chip} className="signal-chip">{chip}</span>
                        ))}
                    </div>
                </Motion.div>

                <Motion.div
                    className="signal-board"
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 }}
                >
                    <div className="signal-board-topbar">
                        <div className="signal-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <span className="signal-path">visual://signal-lab/composition</span>
                    </div>

                    <div className="signal-board-core">
                        <div className="signal-radar">
                            <div className="signal-sweep"></div>
                            <div className="signal-ring ring-a"></div>
                            <div className="signal-ring ring-b"></div>
                            <div className="signal-ring ring-c"></div>
                            <div className="signal-core"></div>

                            {nodes.map((node) => (
                                <div key={node.label} className="signal-node" style={node}>
                                    <span>{node.label}</span>
                                </div>
                            ))}

                            <div className="signal-beam beam-a"></div>
                            <div className="signal-beam beam-b"></div>
                            <div className="signal-beam beam-c"></div>
                        </div>

                        <div className="signal-side-stack">
                            {bands.map((band, index) => {
                                const Icon = icons[index % icons.length];
                                return (
                                    <div key={band.label} className="signal-band-card">
                                        <div className="signal-band-head">
                                            <Icon size={16} />
                                            <span>{band.label}</span>
                                        </div>
                                        <strong>{band.value}</strong>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="signal-board-footer">
                        <div className="signal-line"></div>
                        <div className="signal-footer-grid">
                            <span>pulse cycle</span>
                            <span>scan depth</span>
                            <span>beam spread</span>
                            <span>parallax stack</span>
                        </div>
                    </div>
                </Motion.div>
            </div>
        </section>
    );
};

export default SignalLab;
