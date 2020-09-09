import React from 'react';

const Resume = () => {
  var svg;
  return (<div className="resume">
    <h1 className="mainResumeTitle">my <span className="resumeTitle">Resume</span></h1>
    <div className="infoCards">
      <div className="education">
        <h1>Education</h1>
        <div className="info">
          <p className="date">August 2019 - Present</p>
          <h1>Bilkent University - Computer Science</h1>
          <p  className="place"> Ankara/Turkey</p>
        </div>
        <div className="info">
          <p className="date">September 2015 - 2019</p>
          <h1>Kilicoglu Anadolu Lisesi</h1>
          <p  className="place"> Eskisehir/Turkey</p>
        </div>
      </div>
      <div className="experience">
        <h1>Experience</h1>
        <div className="info">
          <p className="date">March 2013 - Present</p>
        </div>
        <div className="info">
          <p className="date">March 2013 - Present</p>
        </div>
      </div>
    </div>
    
  </div>)
}

export default Resume;