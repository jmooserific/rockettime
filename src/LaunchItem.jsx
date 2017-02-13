import React, { Component } from 'react';
import rocket from './Falcon9FT.svg';
import Time from 'react-time'

class LaunchItem extends Component {
  render() {
    return (
      <li key={this.props.launch.id} className="LaunchItem launch">
        <img src={rocket} className="rocket-illustration" alt={this.props.launch.rocket.name} />
        <div className="rocket">{this.props.launch.rocket.name}</div>
        <div className="time"><Time value={this.props.launch.net} format="MM/DD/YYYY" /></div>
      </li>
    );
  }
}

export default LaunchItem;
