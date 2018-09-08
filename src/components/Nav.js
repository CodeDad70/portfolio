import React from 'react';
import { Link } from 'react-router-dom';
import Projects from './Projects';
import Design from './Design'

const Nav = () => {
  return (
    <div>
      <span className="logo-front">Eric Strickler </span>
      <div className="nav">
      <Projects/> 
      <Design />
       </div>
    </div>
  );
};

export default Nav;
