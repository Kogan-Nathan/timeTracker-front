// import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';
import  projectInfo  from '../reducers/projectReducer'
import reportInfo from '../reducers/reportReducer'
import UsersReducer from '../reducers/usersReducer'

const allReducers = combineReducers({
    // counter : counterReducer,
    isLogged : loggedReducer,
    projectData : projectInfo,
    reportData : reportInfo,
    usersData : UsersReducer
});

export default allReducers;