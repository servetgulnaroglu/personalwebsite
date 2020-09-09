import React from 'react';
import servetg from './servetg.JPG';

const Nav = () => (<>
  <header className="navbar" style={{backgroundImage: "url(" + servetg+ ")"}}>
  <nav>
    <li><a href="">HOME</a></li>
    <li><a href="">PORTFOLIO</a></li>
    <li><a href="">RESUME</a></li>
    <li><a href="">ABOUT</a></li>
    <li><a href="">CONTACT</a></li>
  </nav>
  <div className="hello">
    <p>Hello, I'm</p>
    <h1>Servet Gulnaroglu</h1>
    <p className="myresume">AND THIS IS MY RESUME</p>
  </div>
  </header>
  </>
)

export default Nav;