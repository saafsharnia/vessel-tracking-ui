import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import VesselsReducer from '../reducers/VesselsReducer'

export default combineReducers({
    vessels: VesselsReducer,
    routing: routerReducer
});
