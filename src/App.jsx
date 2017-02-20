import React, { Component } from 'react';
import './App.scss';
import Nav from './Nav.jsx';
import Launches from './Launches.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <Launches />
        </div>
      </div>
    );
  }
}

export default App;
