import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 48.44979219124231, 
      lng: -4.255837655470543
       
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
           bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY}}
           defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={48.44979219124231}
            lng={-4.255837655470543}
            text="La Boulangerie du Er"
            
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;