// importing modules
import React from 'react';
import PropTypes from 'prop-types';

const about = props => (
    <div className="about" id={props.id} />
);

about.propTypes = {
    id: PropTypes.string
};

about.defaultProps = {
    id: 'about'
};

export default about;
