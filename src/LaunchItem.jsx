import React, { Component } from 'react';
import rocket from './Falcon9FT.svg';
import Time from 'react-time'
import moment from 'moment';

class LaunchItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: moment(this.props.launch.net, 'MMMM D, YYYY HH:mm:ss UTC')
    };
    this.statusNames = ['Green', 'Red', 'Success', 'Failed'];
  }

  classNames() {
    return [
      'LaunchItem',
      this.statusNames[this.props.launch.status - 1]
    ].join(' ')
  }

  render() {
    return (
      <div className={this.classNames()}>
        <img src={rocket} className="rocket-illustration" alt="Falcon 9FT" />
        <span className="name">{this.props.launch.name}</span>
        <span className="time"><Time value={this.props.launch.net} format="MM/DD/YYYY" valueFormat="MMMM D, YYYY HH:mm:ss UTC" /></span>
        <div className="circle" />
      </div>
    );
  }
}

export default LaunchItem;
