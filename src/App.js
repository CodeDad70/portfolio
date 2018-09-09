import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav'
import Projects from './components/Projects';
import Designs from './components/Designs'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <div>
            <Route exact path="/" component={Nav}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/designs" component={Designs}/>
          </div>
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
