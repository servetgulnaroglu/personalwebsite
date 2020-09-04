import React from 'react';
import servetg from './servetg.JPG';

const Portfolio = () => (
  <div className="portfolio">
    <div className="portfolioTitle">
      <h1>Featured <span className="portfolioTitle2">Portfolio</span></h1>
    </div>
    <div className="cards">
      <div className="card"><img src={servetg} alt=""/><h2>proje1 asdfasdfas</h2><p>Aciklama</p></div>
      <div className="card"><img src={servetg} alt=""/><h2>proje1</h2><p>Aciklama</p></div>
      <div className="card"><img src={servetg} alt=""/><h2>proje1</h2><p>Aciklama</p></div>
      <div className="card"><img src={servetg} alt=""/><h2>proje1</h2><p>Aciklama</p></div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#c3c4c5" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,149.3C384,171,480,181,576,176C672,171,768,149,864,133.3C960,117,1056,107,1152,128C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
  </div>
)

export default Portfolio;