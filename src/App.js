import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Vessels from './Components/Vessels';
import VesselTracks from './Components/VesselTracks';

export default connect( (state) => ({
  vessels: state.vessels
    })
)(class App extends Component {

  render() {
    return (
        <div>
            {
                this.props.vessels.coordinates ?
                    <VesselTracks/>
                    :
                    <Vessels/>
            }
        </div>
    );
  }
});
