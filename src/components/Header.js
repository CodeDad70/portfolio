import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <span className="logo">Eric Strickler </span>
    
      <span className="header-designs">
        <Link to={'/projects'}>Projects</Link>  &nbsp;      
       </span>
      <span className = "header-projects">
        <Link to={'/designs'}>Designs</Link>
      </span>
    
    </div>
  );
};

export default Header;
