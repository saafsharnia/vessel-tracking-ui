import store from '../store/store';
import axios from 'axios';

class VesselsAction {

    getVesselsList() {
        axios.get('/endpoints/Vessels.json')
            .then((response) => {
                store.dispatch({type: 'VesselsList', data: response.data});
            })
            .catch((err) => {
                store.dispatch({type: 'VesselsError', data:err});
            });
    }

    getVesselTracks(vesselData) {
        store.dispatch({type: 'VesselTracks', data: vesselData.geometry.coordinates});
    }
}

export default new VesselsAction();