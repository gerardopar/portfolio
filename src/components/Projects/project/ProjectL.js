// importing modules
import React from 'react';
import PropTypes from 'prop-types';

const projectL = props => (
    <div className="projects__container--left">
        <div className="projects__col--text--wrap--left">
            {props.children}
        </div>
        <div className="projects__col--img--wrap">
            <a href={props.site} target="noopener noreferrer">
                <img src={props.img} alt={props.title} className="projects__col--img--left z-depth-5" />
            </a>
        </div>
    </div>
);

// propTypes & defuaultProps

projectL.propTypes = {
    children: PropTypes.node.isRequired,
    img: PropTypes.string,
    site: PropTypes.string,
    title: PropTypes.string
};

projectL.defaultProps = {
    img: '',
    site: '',
    title: ''
};

export default projectL;
