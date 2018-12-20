import React from 'react';
import {NavLink} from 'react-router-dom';

import './NavBar.css';
const NavBar = props => {
  return (
    <div className="main-nav">
      <NavLink exact className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/login">
        Log In
      </NavLink>
      <NavLink className="nav-link" to="/quizzes">
        Quizzes
      </NavLink>
      {props.location.pathname === '/quizzes' && <select />}
    </div>
  );
};

export default NavBar;
