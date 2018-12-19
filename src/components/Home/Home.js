import React from 'react';
import './Home.css';

const Home = props => {
  return (
    <div className="home-page">
      <div className="home-page-bg" />
      <div className="home-page-fg">
        <h2 className="home-page-header">Welcome</h2>
        <h3 className="username">{props.username}</h3>
      </div>
    </div>
  );
};

export default Home;
