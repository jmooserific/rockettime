import React, { Component } from 'react';
import ClassNames from 'classnames'

class RocketImage extends Component {

  constructor(props) {
    super(props);

    this.imageFiles = {
            falcon_1: { height: 21.3 },
            falcon_9_v1_0: { height: 63.2 },
            falcon_9_v1_1: { height: 81.5 },
            falcon_9: { height: 81.5 },
            falcon_9_v1_1_dragon: { height: 74.5 },
            falcon_9_full_thrust: { height: 83.1 },
            falcon_9_full_thrust_dragon: { height: 76.5 },
            falcon_heavy: {height: 83.1},
          };
    this.imageURL = this.getImageURL(this.props.name, this.props.mission);
    this.state = { imageStatus: 'loading' };
  }

  getImageURL(name, mission) {
    const normalizedName = this.normalizeName(name, mission);
    return Object.keys(this.imageFiles).includes(normalizedName) ? 'img/rockets/' + normalizedName + '.svg' : 'img/rockets/placeholder.svg'
  }

  getStyles(name, mission) {
    const normalizedName = this.normalizeName(name, mission);
    const heightInMeters = this.imageFiles[normalizedName] ? this.imageFiles[normalizedName].height : 55;
    const normalizedHeight = 70 / 111 * heightInMeters; // Saturn V was 111m tall
    return { height: normalizedHeight + "vh" };
  }

  normalizeName(name, mission) {
    var normalizedName = name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();

    // Exceptions!
    if (/^falcon_9/.test(normalizedName) && /^SpX CRS-\d+$/.test(mission)) {
      if (this.imageFiles[normalizedName + '_dragon']) {
        normalizedName += '_dragon';
      }
    }
    return normalizedName;
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
        style={this.getStyles(this.props.name, this.props.mission)}
      />
    );
  }
}

RocketImage.propTypes = {
  name: React.PropTypes.string.isRequired,
  mission: React.PropTypes.string.isRequired,
};

export default RocketImage;
