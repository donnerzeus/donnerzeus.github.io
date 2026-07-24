import { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { techStack } from '../data';
import { useLanguage } from '../i18n';
import './TechMarquee.css';

const TechMarquee = () => {
    const [showAll, setShowAll] = useState(false);
    const { language } = useLanguage();
    const label = showAll
        ? (language === 'tr' ? 'Kayan görünüme dön' : 'Return to moving view')
        : (language === 'tr' ? 'Tüm teknolojileri göster' : 'Show all technologies');

    return (
        <div className="tech-section-wrapper">
            {!showAll ? (
                <Motion.div
                    key="marquee"
                    className="tech-marquee-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <div className="tech-marquee-track">
                        {[...techStack, ...techStack].map((tech, index) => (
                            <div key={`${tech.name}-${index}`} className="tech-item">
                                <img src={tech.icon} alt="" className="tech-icon" />
                                <span className="tech-name">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </Motion.div>
            ) : (
                <Motion.div
                    id="tech-stack-grid"
                    key="grid"
                    className="tech-grid-container container"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                >
                    <div className="tech-grid">
                        {techStack.map((tech) => (
                            <div key={tech.name} className="tech-item-static">
                                <img src={tech.icon} alt="" className="tech-icon" />
                                <span className="tech-name">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </Motion.div>
            )}

            <button
                type="button"
                className="tech-toggle-btn"
                onClick={() => setShowAll((current) => !current)}
                aria-expanded={showAll}
                aria-controls="tech-stack-grid"
                aria-label={label}
            >
                {showAll ? <ChevronUp size={21} /> : <ChevronDown size={21} />}
            </button>
        </div>
    );
};

export default TechMarquee;
