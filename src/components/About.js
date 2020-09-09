import React from 'react';
import servetg from './servetg.JPG';

const About = () => (
  <div className="about">
    <svg className="aboutFirstSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#262626" fillOpacity="1" d="M0,160L60,144C120,128,240,96,360,90.7C480,85,600,107,720,128C840,149,960,171,1080,176C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    <div className="aboutContainer">
      <img src={servetg} alt=""/>
      <div className="aboutContent">
        <h1>About <span className="meSpan"> me</span></h1>
        <p>asdasdasd</p>
        <p>asdsadosajmdasdkas</p>
      </div>
    </div>
    <svg className="aboutSecondSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#c3c4c5" fillOpacity="1" d="M0,160L60,144C120,128,240,96,360,90.7C480,85,600,107,720,128C840,149,960,171,1080,176C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

  </div>
)

export default About;