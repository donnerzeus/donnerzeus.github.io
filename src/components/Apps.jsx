import { useState } from "react";
import {
  ArrowUpRight,
  Code2,
  Activity,
  Fingerprint,
  Gamepad2,
  Layers,
  Orbit,
} from "lucide-react";
import { productApps } from "../data";
import { useLanguage } from "../i18n";

const illustrations = {
  Ritim: Activity,
  "Döngü Planlayıcı": Orbit,
  "Secret Threat": Fingerprint,
  "Project Spartan": Activity,
  "Donnerzeus Party": Gamepad2,
  "Ploxiano Survivors": Gamepad2,
  EVENTAS: Layers,
  "Jira Analytics Portal": Activity,
  "CRM Works": Code2,
};
function ProductArtwork({ app }) {
  const Icon = illustrations[app.title];
  return (
    <div className={`product-art art-${app.accent}`} aria-hidden="true">
      <span className="art-label">
        {app.category} / {app.tech[0]}
      </span>
      <div className="product-shape">
        <span className="shape-ring" />
        <span className="shape-ring second-ring" />
        <Icon strokeWidth={0.9} />
      </div>
      <strong>{app.title}</strong>
      <span className="art-signal">
        <i />
        {app.signal}
      </span>
    </div>
  );
}
export default function Apps() {
  const [filter, setFilter] = useState("all");
  const { language, t, localize } = useLanguage();
  const translations = localize("productApps", []);
  const apps = productApps.map((app, index) =>
    language === "tr" ? { ...app, ...translations[index] } : app,
  );
  const visible =
    filter === "all" ? apps : apps.filter((app) => app.type === filter);
  return (
    <section className="section projects-section" id="apps">
      <div className="section-heading">
        <span className="section-index">
          01 / {language === "tr" ? "PROJE ARŞİVİ" : "PROJECT ARCHIVE"}
        </span>
        <a
          className="text-link"
          href="https://github.com/donnerzeus?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          {t.apps.repositories}
          <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="projects-intro">
        <h2>
          {language === "tr" ? "Uygulamalar" : "Apps"}
          <br />
          <em>{language === "tr" ? "& oyunlar." : "& games."}</em>
        </h2>
        <p>{t.apps.intro}</p>
      </div>
      <div
        className="project-filters"
        aria-label={language === "tr" ? "Proje filtreleri" : "Project filters"}
      >
        {Object.entries(t.apps.filters).map(([id, label]) => (
          <button
            type="button"
            key={id}
            aria-pressed={filter === id}
            onClick={() => setFilter(id)}
            className={filter === id ? "active" : ""}
          >
            {label}
            <sup>
              {id === "all"
                ? apps.length
                : apps.filter((app) => app.type === id).length}
            </sup>
          </button>
        ))}
      </div>
      <div className="project-grid" aria-live="polite" aria-atomic="true">
        {visible.map((app) => (
          <article className="project-card" key={app.title}>
            <a
              href={app.liveUrl || app.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="art-link"
              aria-label={`${app.title} — ${app.liveUrl ? t.apps.open : t.apps.source}`}
            >
              <ProductArtwork app={app} />
              <span className="project-arrow">
                <ArrowUpRight />
              </span>
            </a>
            <div className="project-meta">
              <span>{app.category}</span>
              <span>
                <i
                  className={
                    app.liveUrl ? "status-dot" : "status-dot muted-dot"
                  }
                />
                {app.status}
              </span>
            </div>
            <h3>{app.title}</h3>
            <p>{app.description}</p>
            <div className="project-card-footer">
              <span>{app.tech.join(" / ")}</span>
              <a
                href={app.repoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${app.title} — ${t.apps.source}`}
              >
                <Code2 size={15} />
                {t.apps.source}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
