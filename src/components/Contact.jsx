import { ArrowUpRight, ArrowUp } from "lucide-react";
import { personalInfo, collaborationPoints } from "../data";
import { useLanguage } from "../i18n";
export default function Contact() {
  const { language, t, localize } = useLanguage();
  const info = localize("personalInfo", personalInfo);
  const collaborations = localize("collaborationPoints", collaborationPoints);
  return (
    <section className="contact-section" id="contact">
      <div className="section-heading">
        <span className="section-index">
          04 / {t.nav.contact.toLocaleUpperCase(language)}
        </span>
        <span>✳</span>
      </div>
      <div className="contact-heading">
        <h2>
          {language === "tr" ? "İletişime" : "Get in"}
          <br />
          <em>{language === "tr" ? "geçelim." : "touch."}</em>
        </h2>
        <a
          className="contact-circle"
          href={`mailto:${info.email}`}
          aria-label={language === "tr" ? "E-posta gönder" : "Send an email"}
        >
          <ArrowUpRight strokeWidth={1} />
        </a>
      </div>
      <div className="contact-bottom">
        <div>
          <p>
            {language === "tr"
              ? "Projen hakkında konuşabiliriz."
              : "Let’s talk about your project."}
          </p>
          <a className="email-link" href={`mailto:${info.email}`}>
            {info.email}
            <ArrowUpRight size={20} />
          </a>
          <a className="phone-link" href={`tel:${info.phone}`}>
            {info.phone}
          </a>
        </div>
        <div className="collaboration-list">
          {collaborations.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <footer>
        <span>© {new Date().getFullYear()} Barış Delikaya</span>
        <div>
          <a href={info.github} target="_blank" rel="noreferrer">
            GitHub
            <ArrowUpRight size={14} />
          </a>
          <a href={info.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
            <ArrowUpRight size={14} />
          </a>
          <a href="./privacy.html">
            {language === "tr" ? "Gizlilik" : "Privacy"}
          </a>
        </div>
        <a href="#top">
          {language === "tr" ? "Yukarı" : "Back to top"}
          <ArrowUp size={16} />
        </a>
      </footer>
    </section>
  );
}
