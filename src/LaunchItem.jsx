import React, { Component } from 'react';
import rocket from './Falcon9FT.svg';
import Time from 'react-time'

class LaunchItem extends Component {
  render() {
    return (
      <div className="LaunchItem">
        <img src={rocket} className="rocket-illustration" alt="Falcon 9FT" />
        <span className="name">{this.props.launch.name}</span>
        <span className="time"><Time value={this.props.launch.net} format="MM/DD/YYYY" valueFormat="MMMM D, YYYY HH:mm:ss UTC" /></span>
      </div>
    );
  }
}

export default LaunchItem;
