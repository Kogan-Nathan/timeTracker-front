// import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';
import  projectInfo  from '../reducers/projectReducer'

const allReducers = combineReducers({
    // counter : counterReducer,
    isLogged : loggedReducer,
    projectData : projectInfo
});

export default allReducers;