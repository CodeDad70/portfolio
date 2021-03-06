import React, { Component } from 'react';
import { Transition, config, animated } from 'react-spring'
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import Designslides from './Designslides'


const Designs = ({ style }) => (
  <animated.div className="mainRoute" style={{ ...style, background: `#fff` }}>
    
    <Designslides/>
    
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

export default Designs;
