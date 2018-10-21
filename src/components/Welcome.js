import React, { Component } from 'react';
import { Transition, config, animated } from 'react-spring'
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import About from '../images/Welcome_Page/Welcome_About_Square.jpg'
import Projects from '../images/Welcome_Page/Welcome_Film_Square.jpg'
import Designs from '../images/Welcome_Page/Welcome_Dive_Square.png'

const Welcome = ({ style }) => (
  <animated.div className="mainRoute" style={{ ...style, background: `#fff` }}>
   
    <div className="welcome-container">
      
     <div><NavLink to="/projects"><img className="welcome-icon-projects" src={Projects}/></NavLink></div>
     <div><NavLink to="/designs"><img className="welcome-icon-designs" src={Designs}/></NavLink></div>
     <div><NavLink to="/contact"><img className="welcome-icon-about" src={About}/></NavLink> </div>
     
     </div>
    
    <Route
      render={({ location }) => (
        <div>
          <Transition
            native
            config={config.slow}
            keys={location.pathname}
            from={{ transform: 'translateY(500px)', opacity: 0 }}
            enter={{ transform: 'translateY(0px)', opacity: 1 }}
            leave={{ transform: 'translateY(500px)', opacity: 0 }}>
            
          </Transition>
        </div>
      )}
    />
  </animated.div>
)

const NavLink = props => (
  <li className="navItem">
    <Link {...props} style={{ cursor: 'pointer', color: 'inherit' }} />
  </li>
)

export default Welcome;
