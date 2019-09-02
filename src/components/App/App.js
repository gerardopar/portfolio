// importing modules
import React from 'react';
// importing components
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Heading from '../UI/Heading';
import Skills from '../Skills/Skills';

const App = () => (
    <div>
        <Header />
        <Hero id="home" />
        <Heading text="SKILLS" />
        <Skills id="skills" />
    </div>
);

export default App;
