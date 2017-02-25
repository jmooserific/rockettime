import React, { Component } from 'react';
import ReactList from 'react-list';
import LaunchItem from './LaunchItem.jsx';
import axios from 'axios';

class Launches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launches: []
    };
  }

  componentWillMount() {
    var _this = this;
    this.serverRequest = 
      axios
        .get('https://launchlibrary.net/1.2/launch?offset=0&limit=9999')
        .then(function(result) {    
          _this.setState({
            launches: result.data.launches
          });
        })
  }
  
  componentWillUnmount() {
    this.serverRequest.abort();
  }

  renderItem(index, key) {
    return <LaunchItem key={key} launch={this.state.launches[index]} />;
  }

  render() {
    return (
      <div className="Launches">
        <ReactList
          axis='x'
          itemRenderer={(index, key) => this.renderItem(index, key)}
          length={this.state.launches.length}
          type='uniform'
        />
      </div>
    );
  }
}

export default Launches;
