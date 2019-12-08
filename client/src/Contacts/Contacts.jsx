import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const Contacts = () => {
    render() {
        return (
            <Map
              google={this.props.google}
              zoom={8}
              initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        );
      };
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAi_PQFey7YgD11qlk7gB3nXtO0TQ-CKYA'
  })(MapContainer);