import {combineReducers} from 'redux'
import AdminReducer from './Admin'
import UsersReducer from './Users'
import ProjectsReducer from './Projects'
import isLoggedReducer from './isLogged'
import projectInfo  from './projectReducer'
import reportInfo from './reportReducer'

const allReducers = combineReducers({
    isLogged : isLoggedReducer,
    Admin : AdminReducer,
    Users : UsersReducer,
    Projects : ProjectsReducer,
    projectData : projectInfo,
    reportData : reportInfo
});

export default allReducers;