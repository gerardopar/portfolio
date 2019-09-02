// importing modules
import React from 'react';
import PropTypes from 'prop-types';

const heading = props => (
    <div className="heading">
        <p className="heading__text">{props.text}</p>
    </div>
);

// proptypes & default props
heading.propTypes = {
    text: PropTypes.string
};

heading.defaultProps = {
    text: ''
};

export default heading;
