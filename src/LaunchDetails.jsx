import React, { Component } from 'react';
import { Tabs, Tab, Table, Image } from 'react-bootstrap';
import Axios from 'axios';
import './LaunchDetails.scss';

class LaunchDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launch: {windowstart: null, rocket: {}}
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
            <h1>{this.state.launch.rocket.name}</h1>
            <Image src={this.state.launch.rocket.imageURL} responsive />
            <Table striped bordered condensed hover>
              <tbody>
                <tr>
                  <td>ID</td>
                  <td>{this.props.launchID}</td>
                </tr>
                <tr>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey={2} title="Missions">

          </Tab>
          <Tab eventKey={3} title="Locations">

          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default LaunchDetails;
