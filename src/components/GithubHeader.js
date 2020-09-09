import React, {useEffect} from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import GroupIcon from '@material-ui/icons/Group';
import BookIcon from '@material-ui/icons/Book';

const GithubHeader = (data) => {


  return (<div className="githubHeader">
    <div className="githubTitle">
      <h1 >github <span style={{'fontSize':'40px','fontWeight':'bolder'}}> Repos</span></h1>
    </div>
    <div className="githubInfo">
      <img src={data.data.avatar_url} alt="avatar"/>
      <div className="nameandfollower">
        <h1><GitHubIcon /><a href="https://github.com/servetgulnaroglu/">{data.data.login}</a></h1>
        <h2><GroupIcon /> {data.data.followers} followers</h2>
        <h2><BookIcon/> {data.data.public_repos} repos</h2>
      </div>
    </div>
  </div>)
};

export default GithubHeader;
