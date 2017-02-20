import React, { Component } from 'react';
// import rocket from './Falcon9FT.svg';
import Time from 'react-time'

class LaunchItem extends Component {
  render() {
    return (
      <li className="LaunchItem">
        {/* <img src={rocket} className="rocket-illustration" alt={this.props.launch.rocket.name} /> */}
        <span className="time"><Time value={this.props.launch.isonet} format="MM/DD/YYYY" valueFormat="YYYYMMDDTHHmmssZ" /></span>
        <span className="rocket">{this.props.launch.rocket.name}</span>
      </li>
    );
  }
}

export default LaunchItem;
