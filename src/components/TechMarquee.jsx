import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { techStack } from '../data';
import './TechMarquee.css';

const TechMarquee = () => {
    const [showAll, setShowAll] = useState(false);

    return (
        <div className="tech-section-wrapper">
            {!showAll ? (
                <div className="tech-marquee-container">
                    <div className="tech-marquee-track">
                        {/* Duplicate the list to create seamless loop */}
                        {[...techStack, ...techStack].map((tech, index) => (
                            <div key={index} className="tech-item">
                                <img src={tech.icon} alt={tech.name} className="tech-icon" />
                                <span className="tech-name">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <motion.div
                    className="tech-grid-container container"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                >
                    <div className="tech-grid">
                        {techStack.map((tech, index) => (
                            <div key={index} className="tech-item-static">
                                <img src={tech.icon} alt={tech.name} className="tech-icon" />
                                <span className="tech-name">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}

            <button
                className="tech-toggle-btn"
                onClick={() => setShowAll(!showAll)}
                aria-label={showAll ? "Show less" : "Show all technologies"}
            >
                {showAll ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>
        </div>
    );
};

export default TechMarquee;
