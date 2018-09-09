import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <div>
  
      <div className="designs-nav">
        <Link to={'/projects'}>Projects</Link>      
       </div>
      <div className = "projects-nav">
        <Link to={'/designs'}>Designs</Link>
      </div>
    
    </div>
  );
};

export default Nav;
