import React, { Component } from 'react';
import './App.scss';
import Nav from './Nav.jsx';
import Launches from './Launches.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.handleSearchTextInput = this.handleSearchTextInput.bind(this);
  }

  handleSearchTextInput(searchText) {
    this.setState({
      searchText: searchText
    });
  }

  render() {
    return (
      <div className="App">
        <Nav searchText={this.state.searchText} onSearchTextInput={this.handleSearchTextInput}/>
        <div className="container">
          <Launches searchText={this.state.searchText} />
        </div>
      </div>
    );
  }
}

export default App;
