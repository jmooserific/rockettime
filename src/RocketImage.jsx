import React, { Component } from 'react';
import ClassNames from 'classnames'

class RocketImage extends Component {

  constructor(props) {
    super(props);

    this.imageFiles = ['Falcon 9 Full Thrust', 'Falcon Heavy'];
    this.imageURL = this.findImageURL(this.props.name)
    this.state = { imageStatus: 'loading' };
  }

  findImageURL(name) {
    return this.imageFiles.includes(name) ? 'img/rockets/' + name + '.svg' : 'img/rockets/Falcon 9 Full Thrust.svg'
  }

  handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }
 
  handleImageErrored() {
    this.setState({ imageStatus: 'error' });
  }

  render() {
    return (
      <img 
        src={this.imageURL}
        onLoad={this.handleImageLoaded.bind(this)}
        onError={this.handleImageErrored.bind(this)}
        className={ClassNames("RocketImage", this.state.imageStatus)}
        alt={this.props.name}
        title={this.props.name}
      />
    );
  }
}

export default RocketImage;
