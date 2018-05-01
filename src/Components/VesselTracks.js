import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from 'material-ui/Button';
import vesselActions from '../redux/actions/VesselsAction';

export default connect((state) => ({
    vessels: state.vessels
    })
)(class VesselTracks extends Component {

    render() {
        const styles = this._styles();
        return(
            <div>
                <Button variant="raised" color="secondary" onClick={this._onBackClick} style={styles.backButton}>
                    Back
                </Button>
                {this.props.vessels.coordinates}
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