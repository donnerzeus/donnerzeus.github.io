import React from 'react';
import { motion as Motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { deliveryPrinciples, focusAreas, keyContributions } from '../data';
import { useLanguage } from '../i18n';
import './About.css';

const About = () => {
    const { t, localize } = useLanguage();
    const localizedFocus = localize('focusAreas', focusAreas);
    const localizedContributions = localize('keyContributions', keyContributions);
    const localizedPrinciples = localize('deliveryPrinciples', deliveryPrinciples);

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="section-heading">
                        <span className="section-eyebrow">{t.about.eyebrow}</span>
                        <h2 className="section-title">{t.about.title}</h2>
                        <p className="section-intro">
                            {t.about.intro}
                        </p>
                    </div>

                    <div className="focus-grid">
                        {localizedFocus.map((item, index) => (
                            <Motion.article
                                key={item.title}
                                className="focus-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                            >
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </Motion.article>
                        ))}
                    </div>

                    <div className="about-columns">
                        <div className="contributions">
                            <h3 className="subsection-title">
                                <CheckCircle2 className="icon" />
                                {t.about.contributions}
                            </h3>
                            <ul className="contributions-list">
                                {localizedContributions.map((item, index) => (
                                    <Motion.li
                                        key={item}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        {item}
                                    </Motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className="soft-skills">
                            <h3 className="subsection-title">
                                <CheckCircle2 className="icon" />
                                {t.about.principles}
                            </h3>
                            <div className="skills-tags">
                                {localizedPrinciples.map((item, index) => (
                                    <Motion.span
                                        key={item}
                                        className="skill-tag"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        {item}
                                    </Motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Motion.div>
            </div>
        </section>
    );
};

export default About;
