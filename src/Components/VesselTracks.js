import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from 'material-ui/Button';
import vesselActions from '../redux/actions/VesselsAction';

export default connect((state) => ({
    vessels: state.vessels
    })
)(class VesselTracks extends Component {

    componentDidMount() {
        const coords = this.props.vessels.coordinates;
        let map = new window.google.maps.Map(this.refs.googleMap, {
            zoom: 4,
            center: coords[0][0],
        });

        map.data.add({geometry: new window.google.maps.Data.Polygon(coords)});;
    }

    render() {
        const styles = this._styles();

        return(
            <div>
                <Button variant="raised" color="secondary" onClick={this._onBackClick} style={styles.backButton}>
                    Back
                </Button>
                <div style={{width: 600, height: 600}} ref="googleMap"></div>
            </div>
        );

    }
    _onBackClick() {
        vesselActions.getVesselsList();

    }


    _styles () {
        return {
            backButton: {
                margin: 17
            }
        }
    }
    }
);