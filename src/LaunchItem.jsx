import React, { Component } from 'react';
import RocketImage from './RocketImage.jsx';
import Time from 'react-time'
import Moment from 'moment';

class LaunchItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: Moment(this.props.launch.net, 'MMMM D, YYYY HH:mm:ss UTC'),
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
        <RocketImage name={this.props.launch.name.split(' | ')[0]} key={'rocketImage' + this.props.launch.id} />
        <span className="name">{this.props.launch.name}</span>
        <span className="time"><Time value={this.props.launch.net} format="MM/DD/YYYY" valueFormat="MMMM D, YYYY HH:mm:ss UTC" /></span>
        <div className="circle" />
      </div>
    );
  }
}

export default LaunchItem;
