// importing modules
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const header = () => (
    <div className="header z-depth-5">
        <div className="header__nav">
            <AnchorLink href="#home" className="header__nav--link">HOME</AnchorLink>
            <AnchorLink href="#skills" className="header__nav--link">SKILLS</AnchorLink>
            <AnchorLink href="#about" className="header__nav--link">ABOUT ME</AnchorLink>
            <AnchorLink href="#projects" className="header__nav--link">PROJECTS</AnchorLink>
            <AnchorLink href="#contact" className="header__nav--link">CONTACT</AnchorLink>
        </div>
    </div>
);

export default header;
