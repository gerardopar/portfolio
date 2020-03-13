import React from 'react';

const footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="footer">
            <p className="footer__text">
                Copyright&copy;
                {' '}
                {year}
                {' '}
                GERARDO PAREDES All Rights Reserved
            </p>
        </div>
    );
};

export default footer;
