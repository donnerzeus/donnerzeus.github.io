import React from 'react';
import { techStack } from '../data';
import './TechMarquee.css';

const TechMarquee = () => {
    return (
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
    );
};

export default TechMarquee;
