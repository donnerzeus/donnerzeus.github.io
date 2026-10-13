import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Apps from "./components/Apps";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { useLanguage } from "./i18n";
import "./App.css";

export default function App() {
  const { language } = useLanguage();
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        {language === "tr" ? "İçeriğe geç" : "Skip to content"}
      </a>
      <div className="app">
        <Navbar />
        <main id="main">
          <Hero />
          <Apps />
          <About />
          <Experience />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  );
}
