import React from 'react';
import {NavLink} from 'react-router-dom';

import './NavBar.css';
const NavBar = () => {
  return (
    <div className="main-nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};

export default NavBar;
