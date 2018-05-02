import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from 'material-ui/Button';
import vesselActions from '../redux/actions/VesselsAction';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

export default connect((state) => ({
    vessels: state.vessels
    })
)(class VesselTracks extends Component {

    componentDidMount() {
        const coords = this.props.vessels.coordinates;
        let map = new window.google.maps.Map(this.refs.googleMap, {
            zoom: 3,
            center: coords[0][0],
        });

        map.data.add({geometry: new window.google.maps.Data.Polygon(coords)});;
    }

    render() {
        const styles = this._styles();

        return(
            <Paper style={styles.paper}>
                <div style={{width:'100%', height: 600}} ref="googleMap"></div>
                <Typography variant="headline" component="h2" style={styles.vesselName}>
                    {this.props.vessels.vesselName}
                </Typography>
                <Typography component="h6" style={styles.vesselLastUpdate}>
                        Last Update:
                    <Typography>
                        {this.props.vessels.vesselLastUpdate}
                    </Typography>
                </Typography>
                <Button variant="raised" color="secondary" onClick={this._onBackClick} style={styles.backButton}>
                    Back
                </Button>
            </Paper>
        );

    }
    _onBackClick() {
        vesselActions.getVesselsList();

    }


    _styles () {
        return {
            backButton: {
                margin: 17
            },
            paper: {
                width: window.screen.width > 600 ? '50%' : '100%',
                marginTop: window.screen.width > 600 ? '1%' : 0,
                marginLeft: window.screen.width > 600 ? '25%' : 0,
                padding: 0
             },
            vesselName : {
                fontWeight:'bold',
                margin: 10
            },
            vesselLastUpdate: {
                marginLeft: 10
            }
        }
    }
    }
);