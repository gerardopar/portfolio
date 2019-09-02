// importing modules
import React from 'react';
import PropTypes from 'prop-types';

const projectR = props => (
    <div className="projects__container--right">
        <div className="projects__col--img--wrap">
            <a href={props.site} target="noopener noreferrer">
                <img src={props.img} alt={props.title} className="projects__col--img--right z-depth-5" />
            </a>
        </div>
        <div className="projects__col--text--wrap--right">
            {props.children}
        </div>
    </div>
);

// propTypes & defuaultProps

projectR.propTypes = {
    children: PropTypes.node.isRequired,
    img: PropTypes.string,
    site: PropTypes.string,
    title: PropTypes.string
};

projectR.defaultProps = {
    img: '',
    site: '',
    title: ''
};

export default projectR;
