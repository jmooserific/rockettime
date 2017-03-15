import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './Nav.scss';


class Nav extends Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><span>rocket</span>time!</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Nav;
