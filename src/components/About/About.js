// importing modules
import React from 'react';
import PropTypes from 'prop-types';
// importing assets
import portrait from '../../assets/img/portrait.jpg';

const about = props => (
    <div className="about" id={props.id}>
        <div className="about__container z-depth-5">
            <p className="about__title--small">&mdash; A little about me</p>
            <h1 className="about__title">
                FRONT-END
                <br />
                <span className="about__title--span">DEVELOPER</span>
            </h1>
            <p className="about__text">
            Hello, I am a front-end web Developer
            based in sunny Los Angeles, California. I have 
            a passion for launching web applications
            to the cloud. I am Skilled in developing,
            testing, and deploying web pages.
            I am dedicated to learning new technologies
            and keeping up with the latest trends in
            the industry. Lets Code!
            </p>
        </div>
        <img src={portrait} alt="portrait" className="about__img" />
    </div>
);

about.propTypes = {
    id: PropTypes.string
};

about.defaultProps = {
    id: 'about'
};

export default about;
