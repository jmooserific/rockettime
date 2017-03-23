import React, { Component } from 'react';
import ReactList from 'react-list';
import LaunchItem from './LaunchItem.jsx';
import Axios from 'axios';
import Moment from 'moment';

class Launches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launches: []
    };
  }

  componentWillMount() {
    this.getLaunches(this.props.searchText);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.searchText !== nextProps.searchText ) {
      this.getLaunches(nextProps.searchText);
    }
  }

  getLaunches(searchText) {
    var _this = this;
    this.serverRequest = 
      Axios
        .get('https://launchlibrary.net/1.2/launch?name='+ searchText +'&mode=summary&offset=0&limit=9999')
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
    const time = Moment();

    const nextLaunchIndex = this.state.launches.findIndex(l => Moment(l.net, 'MMMM D, YYYY HH:mm:ss UTC') > time);
    const xOffset = this.launchesList.getSpaceBefore(nextLaunchIndex) - ( window.innerWidth / 2 ) + 150 - window.pageXOffset;
    window.scrollBy(xOffset, 0);
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

Launches.propTypes = {
  searchText: React.PropTypes.string.isRequired
};

export default Launches;
