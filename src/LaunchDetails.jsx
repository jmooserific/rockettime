import React, { Component } from 'react';
import { Tabs, Tab, Image } from 'react-bootstrap';
import Axios from 'axios';
import './LaunchDetails.scss';

class LaunchDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launch: { rocket: { agencies: {} } }
    };
  }

  componentWillMount() {
    var launchURL = 'https://launchlibrary.net/1.2/launch/'+ this.props.launchID +'?mode=verbose';
    var _this = this;
    this.serverRequest = 
      Axios
        .get(launchURL)
        .then(function(result) { 
          _this.setState({
            launch: result.data.launches[0]
          });
        })
  }

  render() {
    return (
      <div className="LaunchDetails">
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Rocket">
            <h2>{this.state.launch.rocket.name}</h2>
            <dl className="dl-horizontal">
              <dt>Family</dt>
              <dd>{this.state.launch.rocket.familyname}</dd>
              <dt>Configuration</dt>
              <dd>{this.state.launch.rocket.configuration}</dd>
            </dl>
            <Image src={this.state.launch.rocket.imageURL} responsive />
          </Tab>
          <Tab eventKey={2} title="Launch">

          </Tab>
          <Tab eventKey={3} title="Missions">

          </Tab>
          <Tab eventKey={4} title="Locations">

          </Tab>
        </Tabs>
      </div>
    );
  }
}

LaunchDetails.propTypes = {
  launchID: React.PropTypes.number.isRequired,
};

export default LaunchDetails;
