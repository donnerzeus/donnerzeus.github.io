import { experience, education, certifications } from "../data";
import { useLanguage } from "../i18n";
export default function Experience() {
  const { language, t, localize } = useLanguage();
  const jobs = localize("experience", experience);
  const school = localize("education", education);
  const certificates = localize("certifications", certifications);
  return (
    <section className="section experience-section" id="experience">
      <div className="section-heading">
        <span className="section-index">
          03 / {t.nav.experience.toLocaleUpperCase(language)}
        </span>
        <span className="eyebrow">
          {language === "tr" ? "İŞ VE EĞİTİM GEÇMİŞİ" : "WORK & EDUCATION"}
        </span>
      </div>
      <h2>
        {language === "tr" ? "Çalıştığım" : "Where I’ve"}{" "}
        <em>{language === "tr" ? "yerler." : "worked."}</em>
      </h2>
      <div className="experience-list">
        {jobs.map((job, i) => (
          <details className="experience-item" key={job.company} open={i === 0}>
            <summary>
              <span className="job-period">{job.period}</span>
              <div>
                <h3>{job.company}</h3>
                <p>{job.role}</p>
              </div>
              <span className="expand-symbol" aria-hidden="true">
                +
              </span>
            </summary>
            <ul>
              {job.description.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </details>
        ))}
      </div>
      <div className="education-grid">
        <div>
          <span className="eyebrow">{t.experience.education}</span>
          <h3>{school.school}</h3>
          <p>{school.degree}</p>
          <span className="muted">{school.period}</span>
        </div>
        <div>
          <span className="eyebrow">{t.experience.certifications}</span>
          {certificates.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
