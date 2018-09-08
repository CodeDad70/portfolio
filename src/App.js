import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
