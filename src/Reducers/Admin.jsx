const AdminReducer = (state = {name:"Admin Admin", password:"timetrackeradmin1234", email:"timeAdmin@zangula.com", projects:[]}, action)=> {
    switch (action.type) {
            case 'ADMIN_NEW_PROJECT':
                return {...state, projects: [{project : action.projectNameData, client : action.clientNameData},...state.projects]}
            case 'ADMIN_DELETE_PROJECTS':
                // assuming we are sending the users name value as array "projectsToBeDeletedData" 
                // let projectsToBeDeleted=action.projectsToBeDeletedData
                let tempProjects = state.projects.filter(value => !action.projectsToBeDeletedData.includes(value.project));
                return {...state, projects: tempProjects}
            case 'ADMIN_UPDATE_PROJECT' :
                let tempProjectsArray = [...state.projects];
                tempProjectsArray[action.projectIndexData].project = action.projectNameData
                return {...state, projects: tempProjectsArray}             
            case 'ADMIN_UPDATE_CLIENT' :
                let tempArray = [...state.projects];
                tempArray[action.projectIndexData].client = action.clientNameData
                return {...state, projects: tempArray}
            // case 'ADD_NEW_CLIENT':
            //     return Object.assign({}, state, {
            //         clients: state.clients.concat(action.clientNameData)
            //       })
            // case 'ADMIN_DELETE_CLIENT':
            //     let tempClients = state.clients.filter((value,index)=>(index!==action.clientIndexData));
            //     return {...state, projects: tempClients}
        default:
            return state
    }
}

export default AdminReducer;