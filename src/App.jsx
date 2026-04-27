import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SignalLab from './components/SignalLab';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TechMarquee from './components/TechMarquee';
import Systems from './components/Systems';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="site-shell">
        <Hero />
        <SignalLab />
        <About />
        <Skills />
        <TechMarquee />
        <Systems />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
