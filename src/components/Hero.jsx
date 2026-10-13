import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { personalInfo } from "../data";
import { useLanguage } from "../i18n";

function Orbital() {
  return (
    <div className="orbital-art" aria-hidden="true">
      <div className="orbit-grid" />
      <div className="orbit-halo" />
      <div className="orbit-system">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit orbit-three" />
        <div className="orbit-core">
          <span />
        </div>
        <div className="satellite" />
      </div>
      <span className="art-coordinate coordinate-top">BD—001 / PORTFOLIO</span>
      <span className="art-coordinate coordinate-bottom">
        41°00′ N · 28°58′ E
      </span>
      <span className="art-cross cross-one">+</span>
      <span className="art-cross cross-two">+</span>
    </div>
  );
}
export default function Hero() {
  const { language, t } = useLanguage();
  const tr = language === "tr";
  const reduceMotion = useReducedMotion();
  return (
    <section className="hero" id="top">
      <div className="hero-topline">
        <span>
          <i className="status-dot" />
          {tr
            ? "BARİŞ DELİKAYA · YAZILIM GELİŞTİRİCİ"
            : "BARIŞ DELİKAYA · SOFTWARE ENGINEER"}
        </span>
        <span>
          {tr ? "İSTANBUL, TÜRKİYE" : "ISTANBUL, TURKEY"}{" "}
          <span className="small-star">✳</span>
        </span>
      </div>
      <div className="hero-stage">
        <Orbital />
        <Motion.div
          className="hero-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">
            {tr
              ? "BACKEND ODAKLI FULL-STACK GELİŞTİRİCİ"
              : "BACKEND-FIRST FULL-STACK ENGINEER"}
          </p>
          <h1>
            Barış
            <br />
            <em>
              Delikaya<span className="orange-period">.</span>
            </em>
          </h1>
          <div className="hero-bottom-copy">
            <p>
              {tr
                ? "Laravel, Drupal ve kurumsal entegrasyonlar üzerine çalışıyorum. Burada geliştirdiğim uygulamaları ve oyunları bulabilirsin."
                : "I work with Laravel, Drupal, and enterprise integrations. Here you’ll find the apps and games I build."}
            </p>
            <a className="circle-link" href="#apps" aria-label={t.hero.apps}>
              <ArrowDown size={25} />
            </a>
          </div>
        </Motion.div>
        <div className="hero-art-caption">
          <span>01 / {tr ? "BARİŞ DELİKAYA" : "BARIŞ DELİKAYA"}</span>
          <p>
            {tr
              ? "Yazılım geliştirici · İstanbul"
              : "Software engineer · Istanbul"}
          </p>
        </div>
      </div>
      <div className="hero-footer">
        <span>PHP / LARAVEL / DRUPAL / REACT</span>
        <a href={personalInfo.github} target="_blank" rel="noreferrer">
          {tr ? "GITHUB PROFİLİ" : "GITHUB PROFILE"} <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
