import {combineReducers} from 'redux'
import AdminReducer from './admin'

const allReducers = combineReducers({
    Admin : AdminReducer
});

export default allReducers;