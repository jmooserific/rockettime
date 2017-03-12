import React, { Component } from 'react';
import ReactList from 'react-list';
import LaunchItem from './LaunchItem.jsx';
import Axios from 'axios';

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
      Axios
        .get('https://launchlibrary.net/1.2/launch?mode=summary&offset=0&limit=9999')
        .then(function(result) { 
          _this.setState({
            launches: result.data.launches
          });
          _this.scrollToNow();
        })
  }
  
  componentWillUnmount() {
    this.serverRequest.abort();
  }

  renderItem(index, key) {
    const [rocketName, missionName] = this.state.launches[index].name.split(' | ');

    return <LaunchItem key={key} 
                       launch={this.state.launches[index]} 
                       rocketName={rocketName} 
                       missionName={missionName} 
                      />;
  }

  itemSizeGetter(index) {
    return 200
  }

  scrollToNow() {
    var _this = this;
    this.serverRequest = 
      Axios
        .get('https://launchlibrary.net/1.2/launch/next/1?mode=list')
        .then(function(result) { 
          if (result.data.launches[0] && result.data.launches[0].id) {
            var nextLaunchKey = result.data.launches[0].id;
            var nextLaunchIndex = _this.state.launches.findIndex(l => l.id === nextLaunchKey);
            var xOffset = _this.launchesList.getSpaceBefore(nextLaunchIndex) - ( window.innerWidth / 2 ) + 150;
            window.scrollBy(xOffset, 0);
          }
        })
  }

  render() {
    return (
      <div className="Launches">
        <ReactList
          axis='x'
          itemRenderer={(index, key) => this.renderItem(index, key)}
          length={this.state.launches.length}
          type='uniform'
          useStaticSize={true}
          ref={c => this.launchesList = c}
        />
      </div>
    );
  }
}

export default Launches;
