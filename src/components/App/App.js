// importing modules
import React from 'react';
// import AOS from 'aos';
// importing components
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Heading from '../UI/Heading';
import Skills from '../Skills/Skills';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

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
        <Footer />
    </div>
);

// class App extends React.Component {
//     constructor(props, context) { 
//         super(props, context); 
//         AOS.init();
//     }

//     componentWillReceiveProps() { 
//         AOS.refresh(); 
//     }

//     // componentDidMount() {
//     //     AOS.init({
//     //         duration: 2000
//     //     });
//     // }

//     render() {
//         return (
//             <div>
//                 <Header />
//                 <Hero id="home" />
//                 <Heading text="SKILLS" />
//                 <div data-aos="zoom-in">
//                 <Skills id="skills" />
//                 </div>
//                 <Heading text="ABOUT ME" />
//                 <About id="about" />
//                 <Heading text="PROJECTS" />
//                 <Projects id="projects" />
//                 <Heading text="CONTACT" />
//                 <Contact />
//                 <Footer />
//             </div>
//         );
//     }
// }

export default App;
