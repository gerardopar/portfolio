// importing modules
import React from 'react';
// importing assets
import waveTop from '../../assets/img/wave-top.svg';
import waveBottom from '../../assets/img/wave-bottom.svg';

const hero = () => (
    <div className="hero">
        <div className="hero__container">
            <h1 className="hero__title">GERARDO PAREDES</h1>
            <p className="hero__text">FRONT END DEVELOPER</p>
        </div>
        <img src={waveTop} alt="wave-top" className="hero__wave--top" />
        <img src={waveBottom} alt="wave-bottom" className="hero__wave--bottom" />
    </div>
);

export default hero;
