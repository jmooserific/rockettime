import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import RocketImage from './RocketImage.jsx';
import LaunchDetails from './LaunchDetails.jsx';
import Time from 'react-time'
import Moment from 'moment';
import './LaunchItem.scss';

class LaunchItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: Moment(this.props.launch.net, 'MMMM D, YYYY HH:mm:ss UTC'),
      showDetailsModal: false
    };
    this.statusNames = ['Green', 'Red', 'Success', 'Failed'];

    this.openDetailsModal = this.openDetailsModal.bind(this);
    this.closeDetailsModal = this.closeDetailsModal.bind(this);
  }

  openDetailsModal() {
    this.setState({ showDetailsModal: true });
  }

  closeDetailsModal() {
    this.setState({ showDetailsModal: false });
  }

  classNames() {
    return [
      'LaunchItem',
      this.statusNames[this.props.launch.status - 1]
    ].join(' ')
  }

  render() {
    return (
      <a className={this.classNames()} onClick={this.openDetailsModal}>
        <RocketImage name={this.props.rocketName} mission={this.props.missionName} key={'rocketImage_' + this.props.launch.id} />
        <div className="caption">
          <span className="rocketName">{this.props.rocketName}</span>
          <span className="missionName">{this.props.missionName}</span>
          <span className="time"><Time value={this.props.launch.net} format="MM/DD/YYYY" valueFormat="MMMM D, YYYY HH:mm:ss UTC" /></span>
        </div>
        <div className="circle" />

        <Modal show={this.state.showDetailsModal} onHide={this.closeDetailsModal}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <LaunchDetails launchID={this.props.launch.id} key={'rocketDetails_' + this.props.launch.id} />
          </Modal.Body>
        </Modal>
      </a>
    );
  }
}

export default LaunchItem;