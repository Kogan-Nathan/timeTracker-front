import {combineReducers} from 'redux'
import AdminReducer from './Admin'
import UsersReducer from './Users'
import ProjectsReducer from './Projects'
import isLoggedReducer from './isLogged'

const allReducers = combineReducers({
    isLogged : isLoggedReducer,
    Admin : AdminReducer,
    Users : UsersReducer,
    Projects : ProjectsReducer
});

export default allReducers;