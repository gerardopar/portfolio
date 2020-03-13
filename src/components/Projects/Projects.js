// importing modules
import React from 'react';
import PropTypes from 'prop-types';
// importing components
import ProjectL from './project/ProjectL';
import ProjectR from './project/ProjectR';
// importing assets
import github from '../../assets/img/github-logo.png';
import web from '../../assets/img/world.svg';
import cloakdm from '../../assets/img/cloakdm.png';
import cryptolio from '../../assets/img/cryptoliov3.png';
import filmania from '../../assets/img/filmania.png';
import digiNews from '../../assets/img/diginews.png';
import pixture from '../../assets/img/pixture-min.png';
import mayenApparel from '../../assets/img/mayen-apparel.com-min.png';

const projects = props => (
    <div className="projects" id={props.id}>
        <ProjectL site="http://cloakdm.s3-website-us-west-1.amazonaws.com/" img={cloakdm} title="cloakdm">
            <h2 className="projects__col--title">&mdash; 01 CLOAKDM</h2>
            <p className="projects__col--text">
            A private messaging web application.
            <br />
            Built using HTML5, SCSS, REACT.JS,
            <br />
            NODE.JS, EXPRESS, SOCKET.IO
            <br /> 
            MONGOOSE & MATERIALIZE CSS.
            <br />
            <a href="http://cloakdm.s3-website-us-west-1.amazonaws.com/" target="noopener noreferrer">
                <img src={web} alt="world icon" className="projects__col--icon" />
            </a>
            <a href="https://github.com/gerardopar/cloakDM-frontEnd-code" target="noopener noreferrer">
                <img src={github} alt="github icon" className="projects__col--icon" />
            </a>
            </p>
        </ProjectL>
        <ProjectR site="http://cryptolio.s3-website-us-west-1.amazonaws.com/" img={cryptolio} title="cryptolio">
            <h2 className="projects__col--title">&mdash; 02 CRYPTOLIO</h2>
            <p className="projects__col--text">
            A Cryptocurrency wallet
            <br />
            Single Page Application.
            <br />
            Built using HTML5, SCSS
            <br />
            REACT.JS, REDUX, NODE.JS, EXPRESS,
            <br />
            MONGODB & MATERIALIZE CSS.
            <br />
            <a href="http://cryptolio.s3-website-us-west-1.amazonaws.com/" target="noopener noreferrer">
                <img src={web} alt="world icon" className="projects__col--icon" />
            </a>
            <a href="https://github.com/gerardopar/cryptoliov3-frontend-code" target="noopener noreferrer">
                <img src={github} alt="github icon" className="projects__col--icon" />
            </a>
            </p>
        </ProjectR>
        <ProjectL site="http://filmania.s3-website-us-west-1.amazonaws.com/" img={filmania} title="filmania">
            <h2 className="projects__col--title">&mdash; 03 FILMANIA</h2>
            <p className="projects__col--text">
            A Movie search web application.
            <br />
            Built using HTML5, SCSS
            <br />
            REACT.JS, NODE.JS, EXPRESS, 
            <br />
            MONGODB & MATERIALIZE CSS
            <br />
            <a href="http://filmania.s3-website-us-west-1.amazonaws.com/" target="noopener noreferrer">
                <img src={web} alt="world icon" className="projects__col--icon" />
            </a>
            <a href="https://github.com/gerardopar/filmania" target="noopener noreferrer">
                <img src={github} alt="github icon" className="projects__col--icon" />
            </a>
            </p>
        </ProjectL>
        <ProjectR site="http://digitalnews.s3-website-us-west-1.amazonaws.com/" img={digiNews} title="digiNews">
            <h2 className="projects__col--title">&mdash; 04 DIGI NEWS</h2>
            <p className="projects__col--text">
            A real-time news feed
            <br />
            web application.
            <br />
            Built using HTML5, SCSS
            <br />
            REACT.JS, REDUX 
            <br />
            & MATERIALIZE CSS.
            <br />
            <a href="http://digitalnews.s3-website-us-west-1.amazonaws.com/" target="noopener noreferrer">
                <img src={web} alt="world icon" className="projects__col--icon" />
            </a>
            <a href="https://github.com/gerardopar/diginews" target="noopener noreferrer">
                <img src={github} alt="github icon" className="projects__col--icon" />
            </a>
            </p>
        </ProjectR>
        <ProjectL site="http://pixture.s3-website-us-east-1.amazonaws.com/" img={pixture} title="pixture">
            <h2 className="projects__col--title">&mdash; 05 PIXTURE</h2>
            <p className="projects__col--text">
            An Image search web application.
            <br />
            Built using HTML5, SCSS
            <br />
            REACT.JS, REDUX, NODE.JS,
            <br />
            EXPRESS & MATERIALIZE CSS. 
            <br />
            <a href="http://pixture.s3-website-us-east-1.amazonaws.com/" target="noopener noreferrer">
                <img src={web} alt="world icon" className="projects__col--icon" />
            </a>
            <a href="https://github.com/gerardopar/pixturev2" target="noopener noreferrer">
                <img src={github} alt="github icon" className="projects__col--icon" />
            </a>
            </p>
        </ProjectL>
        <ProjectR site="https://mayenapparel.com" img={mayenApparel} title="digiNews">
            <h2 className="projects__col--title">&mdash; 06 MAYEN APPAREL</h2>
            <p className="projects__col--text">
            A Shopify Shop
            <br />
            for men & women
            <br />
            apparel.
            <br />
            <a href="https://mayenapparel.com" target="noopener noreferrer">
                <img src={web} alt="world icon" className="projects__col--icon" />
            </a>
            </p>
        </ProjectR>
    </div>
);

projects.propTypes = {
    id: PropTypes.string
};

projects.defaultProps = {
    id: 'projects'
};

export default projects;

// <div className="projects__container--left">
//             <div className="projects__col--text--wrap--left">
//                 <h2 className="projects__col--title">&mdash; 01 CLOAKDM</h2>
//                 <p className="projects__col--text">
//                 A private messaging web application.
//                 <br />
//                 Built using HTML5, SCSS, REACT.JS,
//                 <br />
//                 NODE.JS, EXPRESS, SOCKET.IO
//                 <br /> 
//                 MONGOOSE & MATERIALIZE CSS.
//                 <br />
//                 <a href="http://cloakdm.s3-website-us-west-1.amazonaws.com/" target="noopener noreferrer">
//                     <img src={web} alt="world icon" className="projects__col--icon" />
//                 </a>
//                 <a href="https://github.com/gerardopar/cloakDM-frontEnd-code" target="noopener noreferrer">
//                     <img src={github} alt="github icon" className="projects__col--icon" />
//                 </a>
//                 </p>
//             </div>
//             <div className="projects__col--img--wrap">
//                 <a href="http://cloakdm.s3-website-us-west-1.amazonaws.com/" target="noopener noreferrer">
//                     <img src={cloakdm} alt="cloakdm" className="projects__col--img--right z-depth-5" />
//                 </a>
//             </div>
//         </div>
//         <div className="projects__container--right">
//             <div className="projects__col--img--wrap">
//                 <a href="http://cryptolio.s3-website-us-west-1.amazonaws.com/" target="noopener noreferrer">
//                     <img src={cryptolio} alt="cloakdm" className="projects__col--img--left z-depth-5" />
//                 </a>
//             </div>
//             <div className="projects__col--text--wrap--right">
//                 <h2 className="projects__col--title">&mdash; 02 CRYPTOLIO</h2>
//                 <p className="projects__col--text">
//                 A Cryptocurrency wallet
//                 <br />
//                 Single Page Application.
//                 <br />
//                 Built using HTML5, SCSS
//                 <br />
//                 REACT.JS, REDUX, NODE.JS, EXPRESS,
//                 <br />
//                 MONGODB & MATERIALIZE CSS.
//                 <br />
//                 <a href="http://cryptolio.s3-website-us-west-1.amazonaws.com/" target="noopener noreferrer">
//                     <img src={web} alt="world icon" className="projects__col--icon" />
//                 </a>
//                 <a href="https://github.com/gerardopar/cryptoliov3-frontend-code" target="noopener noreferrer">
//                     <img src={github} alt="github icon" className="projects__col--icon" />
//                 </a>
//                 </p>
//             </div>
//         </div>
