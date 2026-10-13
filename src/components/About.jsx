import { ArrowUpRight } from "lucide-react";
import { personalInfo, heroStats, focusAreas, skills } from "../data";
import { useLanguage } from "../i18n";
export default function About() {
  const { language, t, localize } = useLanguage();
  const info = localize("personalInfo", personalInfo);
  const stats = localize("heroStats", heroStats);
  const areas = localize("focusAreas", focusAreas);
  const categories = localize("skills", skills);
  return (
    <section className="section about-section" id="about">
      <div className="section-heading">
        <span className="section-index">
          02 / {t.nav.about.toLocaleUpperCase(language)}
        </span>
        <span className="eyebrow">
          {language === "tr"
            ? "YAKLAŞIM VE TEKNOLOJİLER"
            : "APPROACH & TECHNOLOGIES"}
        </span>
      </div>
      <div className="about-layout">
        <h2>
          {language === "tr" ? "Backend" : "Backend"}
          <br />
          <em>{language === "tr" ? "odaklı." : "first."}</em>
        </h2>
        <div className="about-copy">
          <p>{info.summary}</p>
          <p className="muted">{t.hero.quote}</p>
          <a
            className="text-link"
            href={info.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t.hero.resume}
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="focus-grid">
        {areas.map((area, i) => (
          <article key={area.title}>
            <span className="eyebrow">0{i + 1}</span>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </article>
        ))}
      </div>
      <div className="stack-section" id="skills">
        <div className="section-heading">
          <h3>{t.skills.title}</h3>
          <span className="eyebrow">
            {language === "tr"
              ? "KULLANDIĞIM TEKNOLOJİLER"
              : "TECHNOLOGIES I USE"}
          </span>
        </div>
        <div className="stack-list">
          {skills.map((skill, i) => (
            <div className="stack-row" key={skill.category}>
              <span className="eyebrow">0{i + 1}</span>
              <h4>{categories[i].category}</h4>
              <p>{skill.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
