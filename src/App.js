import React, { Component } from 'react';
import './styles/App.css';
import { Transition, config, animated } from 'react-spring'
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Projects from './components/Projects';
import Designs from './components/Designs'
import './styles/Animation-styles.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
      <Route
      render={({ location, ...rest }) => (
        <div className="fill">
          <Route exact path="/" render={() => <Redirect to="/red" />} />
          <ul className="nav">
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/designs">Designs</NavLink>
          </ul>
          <div className="content">
            <Transition
              native
              config={{ tension: 1, friction: 10 }}
              keys={location.pathname.split('/').filter(a => a)[0]}
              from={{ transform: 'translateY(500px)', opacity: 0 }}
              enter={{ transform: 'translateY(0px)', opacity: 1 }}
              leave={{ transform: 'translateY(500px)', opacity: 0 }}>
              {style => (
                <Switch location={location}>
                  <Route path="/projects" render={props => Projects({ ...props, style })} />
                  <Route path="/designs" render={props => Designs({ ...props, style })} />
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              )}
            </Transition>
          </div>
        </div>
      )}
    />
  </Router>
)
        </Router>
      </div>
    );
  }
}


const NavLink = props => (
  <li className="navItem">
    <Link {...props} style={{ cursor: 'pointer', color: 'inherit' }} />
  </li>
)

export default App;
