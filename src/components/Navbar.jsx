import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data';
import { useLanguage } from '../i18n';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const navLinks = [
        { name: t.nav.about, href: '#about' },
        { name: t.nav.skills, href: '#skills' },
        { name: t.nav.experience, href: '#experience' },
        { name: t.nav.apps, href: '#apps' },
        { name: t.nav.contact, href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 24);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#" className="logo" aria-label="Go to top">
                    <span className="logo-mark">BD</span>
                    <span>Barış Delikaya</span>
                </a>

                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                    <div className="language-switch" aria-label="Language">
                        {['tr', 'en'].map((item) => (
                            <button
                                type="button"
                                key={item}
                                className={language === item ? 'active' : ''}
                                onClick={() => setLanguage(item)}
                                aria-pressed={language === item}
                            >
                                {item.toUpperCase()}
                            </button>
                        ))}
                    </div>
                    <a
                        href={personalInfo.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-cta"
                    >
                        {t.nav.resume}
                    </a>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsOpen((current) => !current)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <Motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="container mobile-menu-container">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="mobile-nav-link"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="language-switch mobile-language-switch" aria-label="Language">
                                {['tr', 'en'].map((item) => (
                                    <button
                                        type="button"
                                        key={item}
                                        className={language === item ? 'active' : ''}
                                        onClick={() => setLanguage(item)}
                                        aria-pressed={language === item}
                                    >
                                        {item.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                            <a
                                href={personalInfo.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mobile-nav-link mobile-nav-link-cta"
                                onClick={() => setIsOpen(false)}
                            >
                                {t.nav.resume}
                            </a>
                        </div>
                    </Motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
