import React, { Component } from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import './Nav.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleSearchTextInputChange = this.handleSearchTextInputChange.bind(this);
  }

  handleSearchTextInputChange(e) {
    this.props.onSearchTextInput(e.target.value);
  }

  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><span>rocket</span>time!</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl type="text" 
                           placeholder="Search…" 
                           value={this.props.searchText} 
                           onChange={this.handleSearchTextInputChange}
                          />
            </FormGroup>
            {' '}
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Nav;
