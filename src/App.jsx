import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Apps from './components/Apps';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';
import './light-theme.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="site-shell">
        <Hero />
        <Apps />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
