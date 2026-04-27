import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TechMarquee from './components/TechMarquee';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="site-shell">
        <Hero />
        <About />
        <Skills />
        <TechMarquee />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
