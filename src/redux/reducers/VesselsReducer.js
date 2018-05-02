export default function VesselsReducer(state = {data: {}, coordinates: null, vesselName: null, vesselLastUpdate: null , error: ''}, action) {
    switch (action.type) {
        case 'VesselsList':
            return {
                ...state,
                coordinates: null,
                data: action.data
            };
        case 'VesselTracks':
            return {
                ...state,
                coordinates: action.data.geometry.coordinates,
                vesselName: action.data.properties.name,
                vesselLastUpdate: action.data.properties.time
            };
        case 'VesselsError':
            return {
                ...state,
                error: action.data + 'Somethings went wrong. Try again later'
            };
        default:
            return state;
    }
}