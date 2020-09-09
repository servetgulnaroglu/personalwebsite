import React, {useState, useEffect} from 'react';
import './App.css';
//import components
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import About from './components/About';
import GithubHeader from './components/GithubHeader';
import Github from './components/Github';
import { WaveLoading } from 'react-loadingg';
  //server call
import axios from 'axios';

const App = () => {
  const [githubHeader, setGithubHeader] = useState(null);
  const [github, setGithub] = useState(null);
  useEffect(() => {
    fetch('https://api.github.com/users/servetgulnaroglu')
      .then(response=> response.json())
      .then(response=> {
        setGithubHeader(response)
      })
      .catch(err=>console.log(err))
  }, [])

  useEffect(() => {
    fetch('https://api.github.com/users/servetgulnaroglu/repos')
      .then(response=> response.json())
      .then(response=> {
        setGithub(response)
      })
      .catch(err=>console.log(err))
  }, [])

  return github == null || githubHeader == null ? ( <div className="loading"><WaveLoading /></div>):(<div className = "App">
    <Nav/>
    <Portfolio />
    <Resume />
    <About />
    <GithubHeader data={githubHeader}/>
    <Github data={github}/>
  </div>)
}

export default App;