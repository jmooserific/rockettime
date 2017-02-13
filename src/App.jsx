import axios from 'axios';
import React, { Component } from 'react';
import './App.scss';
import Nav from './Nav.jsx';
import LaunchItem from './LaunchItem.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      launches: [],
    };
  }
  componentDidMount() {
    var _this = this;
    this.serverRequest = 
      axios
        .get("https://launchlibrary.net/1.2/launch?mode=verbose")
        .then(function(result) {    
          _this.setState({
            launches: result.data.launches
          });
        })
  }
  componentWillUnmount() {
    this.serverRequest.abort();
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container-fluid">
          <div className="launches">
            <ul className="list-inline">
              {this.state.launches.map(function(launch) {
                return (
                  <LaunchItem launch={launch} />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
