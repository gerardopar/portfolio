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
            <img src={codeIcon} alt="code icon" className="contact__img" />
            <p className="contact__text">GERARDO PAREDES</p>
            <p className="contact__email">gerardparedes23@gmail.com</p>
            <div className="contact__icon--wrap">
                <a href="https://github.com/gerardopar" target="noopener noreferrer">
                    <img src={gitIcon} alt="git icon" className="contact__icon--git" />
                </a>
                <a href="mailto:gerardparedes23@gmail.com" target="_top">
                    <img src={emailIcon} alt="email icon" className="contact__icon--email" />
                </a>
                <a href="https://www.linkedin.com/in/gerardo-paredes-562474168/" target="noopener noreferrer">
                    <img src={linkedin} alt="linkedIn icon" className="contact__icon--linkedin" />
                </a>
            </div>
        </div>
    </div>
);

export default contact;
