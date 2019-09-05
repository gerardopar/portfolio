// importing modules
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
// importing assets
import waveTop from '../../assets/img/wave-top.svg';
import waveBottom from '../../assets/img/wave-bottom.svg';

const hero = (props) => {
    const [active, setToggle] = useState(props.defaultToggle);

    const toggle = () => {
        setToggle(!active);
    };

    let hamburgerMenu;
    let sidebar;

    if (active === false) {
        hamburgerMenu = (
            <div onClick={toggle} className="hamburger waves-effect" id="hamburger-12">
                <span className="line" />
                <span className="line" />
                <span className="line" />
            </div>
        );
        sidebar = (
            <div className="hero__sidebar" />
        );
    } else if (active === true) {
        hamburgerMenu = (
            <div onClick={toggle} className="hamburger is-active" id="hamburger-12">
                <span className="line" />
                <span className="line" />
                <span className="line" />
            </div>
        );
        sidebar = (
            <div className="hero__sidebar hero__sidebar--active">
                <div className="hero__sidebar--container">
                    <AnchorLink onClick={toggle} href="#home" className="hero__sidebar--link">HOME</AnchorLink>
                    <AnchorLink onClick={toggle} href="#skills" className="hero__sidebar--link">SKILLS</AnchorLink>
                    <AnchorLink onClick={toggle} href="#about" className="hero__sidebar--link">ABOUT ME</AnchorLink>
                    <AnchorLink onClick={toggle} href="#projects" className="hero__sidebar--link">PROJECTS</AnchorLink>
                    <AnchorLink onClick={toggle} href="#contact" className="hero__sidebar--link">CONTACT</AnchorLink>
                </div>
            </div>
        );
    }

    return (
        <div id={props.id} className="hero">
            <div className="hero__container">
                <h1 className="hero__title">GERARDO PAREDES</h1>
                <p className="hero__text">FRONT END DEVELOPER</p>
            </div>
            <img src={waveTop} alt="wave-top" className="hero__wave--top" />
            <img src={waveBottom} alt="wave-bottom" className="hero__wave--bottom" />
            { hamburgerMenu }
            { sidebar }
        </div>
    );
};

// proptypes & default props
hero.propTypes = {
    defaultToggle: PropTypes.bool,
    id: PropTypes.string
};

hero.defaultProps = {
    defaultToggle: false,
    id: 'home'
};

export default hero;
