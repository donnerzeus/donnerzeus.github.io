import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TechMarquee from './components/TechMarquee';
import Blog from './components/Blog';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <TechMarquee />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

export default App;
