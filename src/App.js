import React from 'react';
import './App.css';
//import components
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume'
const App = () => (
  <div className = "App">
    <Nav/>
    <Portfolio />
    <Resume />
  </div>
)

export default App;