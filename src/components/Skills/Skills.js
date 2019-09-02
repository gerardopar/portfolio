// importing modules
import React from 'react';
import PropTypes from 'prop-types';

const skills = props => (
    <div id={props.id} className="skills">
        <div className="skills__col">
            <i className="devicon-html5-plain skills__icon" />
            <i className="devicon-css3-plain skills__icon" />
            <i className="devicon-javascript-plain skills__icon" />
            <i className="devicon-react-original skills__icon" />
            <i className="devicon-webpack-plain skills__icon" />
        </div>
        <div className="skills__col">
            <i className="devicon-sass-original skills__icon" />
            <i className="devicon-nodejs-plain skills__icon" />
            <i className="devicon-express-original skills__icon" />
            <i className="devicon-mongodb-plain-wordmark skills__icon" />
            <i className="devicon-amazonwebservices-plain-wordmark skills__icon" />
        </div>
    </div>
);

// proptypes & default props
skills.propTypes = {
    id: PropTypes.string
};

skills.defaultProps = {
    id: 'skills'
};

export default skills;
