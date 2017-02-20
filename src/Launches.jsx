import React, { Component } from 'react';
import LaunchItem from './LaunchItem.jsx';
import Infinite from 'react-infinite';
import axios from 'axios';

class Launches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
      isInfiniteLoading: false,
      allLoaded: false,
      offset: 0,
    };
    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
  }

  buildNewElements(launches) {
    var newElements = [];
    launches.forEach(function (launch) {
      newElements.push(<LaunchItem key={launch.id} launch={launch} />)
    });
    return newElements;
  }

  handleInfiniteLoad() {
    if (!this.state.allLoaded) {
      var _this = this;

      this.setState({
        isInfiniteLoading: true
      });
      
      this.serverRequest = 
        axios
          .get("https://launchlibrary.net/1.2/launch?mode=verbose&limit=100&offset=" + _this.state.offset * 100)
          .then(function(result) {
            if (result.data.launches.length > 0) {
              _this.setState({
                isInfiniteLoading: false,
                elements: _this.state.elements.concat(_this.buildNewElements(result.data.launches)),
                offset: _this.state.offset + 1
              });
            } else {
              _this.setState({
                isInfiniteLoading: false,
                allLoaded: true
              });
            }
          })
      }
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  elementInfiniteLoad() {
    return (
      <li className="infinite-list-item">
        Loading...
      </li>
    );
  }

  render() {
    return (
      <Infinite useWindowAsScrollContainer
         elementHeight={20}
         containerHeight={window.innerHeight}
         infiniteLoadBeginEdgeOffset={200}
         onInfiniteLoad={this.handleInfiniteLoad}
         loadingSpinnerDelegate={this.elementInfiniteLoad()}
         isInfiniteLoading={this.state.isInfiniteLoading}
         timeScrollStateLastsForAfterUserScrolls={1000}
         className="Launches"
         >
        {this.state.elements}
      </Infinite>
    );
  }
}

export default Launches;
