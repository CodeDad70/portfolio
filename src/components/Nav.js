import React from 'react';

import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
  
      <ul className="nav">   
        <div className='logo-box'><h3 className ='logo'>ES DESIGN</h3></div>
        <NavLink to="/projects" className='nav-element'>Projects</NavLink>
        <NavLink to="/designs" className='nav-element'>Designs</NavLink>
        <NavLink to="/contact" className='nav-element'>Contact</NavLink>
      </ul>
    
    </div>
  );
};


const NavLink = props => (
  <li className="navItem">
    <Link {...props} style={{ cursor: 'pointer', color: 'inherit' }} />
  </li>
)


export default Nav;
