// importing modules
import React from 'react';
// importing components
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Heading from '../UI/Heading';
import Skills from '../Skills/Skills';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const App = () => (
    <div>
        <Header />
        <Hero id="home" />
        <Heading text="SKILLS" />
        <Skills id="skills" />
        <Heading text="ABOUT ME" />
        <About id="about" />
        <Heading text="PROJECTS" />
        <Projects id="projects" />
        <Heading text="CONTACT" />
        <Contact />
    </div>
);

export default App;
