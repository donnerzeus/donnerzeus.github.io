import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { personalInfo } from "../data";
import { useLanguage } from "../i18n";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const links = ["apps", "about", "experience", "contact"];
  return (
    <header className="navigation">
      <a className="wordmark" href="#top" aria-label="Barış Delikaya">
        <span className="brand-symbol">✳</span> donnerzeus
        <span className="brand-dot">.</span>
      </a>
      <nav
        id="mobile-navigation"
        className={open ? "nav-links is-open" : "nav-links"}
        aria-label={language === "tr" ? "Ana menü" : "Main navigation"}
      >
        {links.map((id, i) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            <sup>0{i + 1}</sup>
            {t.nav[id]}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <div
          className="language-switch"
          aria-label={language === "tr" ? "Dil" : "Language"}
        >
          {["tr", "en"].map((lang) => (
            <button
              type="button"
              key={lang}
              aria-pressed={language === lang}
              onClick={() => setLanguage(lang)}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
        <a
          className="resume-link"
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noreferrer"
        >
          {t.nav.resume}
          <ArrowUpRight size={16} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={language === "tr" ? "Menüyü aç/kapat" : "Toggle menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
