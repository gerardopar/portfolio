// importing modules
import React from 'react';

// importing assets
import codeIcon from '../../assets/img/code.svg';
import gitIcon from '../../assets/img/github.svg';
import emailIcon from '../../assets/img/email_icon.svg';
import linkedin from '../../assets/img/linkedin-.svg';

const contact = () => (
    <div className="contact">
        <div className="contact__container">
            <h2 className="contact__title">FRONT END DEVELOPER</h2>
            <img src={codeIcon} alt="" className="contact__img" />
            <p className="contact__text">GERARDO PAREDES</p>
            <p className="contact__email">gerardparedes23@gmail.com</p>
            <div className="contact__icon--wrap">
                <img src={gitIcon} alt="" className="contact__icon" />
                <img src={emailIcon} alt="" className="contact__icon" />
                <img src={linkedin} alt="" className="contact__icon" />
            </div>
        </div>
    </div>
);

export default contact;
