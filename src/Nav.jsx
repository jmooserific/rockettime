import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav navbar navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><span>rocket</span>time!</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
