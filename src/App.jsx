import React from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Home from './components/layout/Home.jsx';
import Projects from './components/layout/Projects.jsx';
import About from './components/layout/About.jsx';
import Contact from './components/layout/Contact.jsx';
import Skill from './components/layout/Skill.jsx';

function App() {
  return (
    <div className="bg-[#f5f5f5]">
      <Navbar /> 
      <Home />
      <Skill />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
