const AdminReducer = (state = {name:"Admin Admin", password:"timetrackeradmin1234", email:"timeAdmin@zangula.com", pojects:[], clients:[]}, action)=> {
    switch (action.type) {
            case 'ADD_NEW_PROJECT':
                state.pojects.push(action.projectNameDate)
                return state=[...state]
            // case 'DELETE_EXISTING_PROJECT':
            //     let temp = state.projects.filter((value,index)=>(index!==action.projectIndexData));
            //     state.projects=temp
            //     return state=[...state]
            case 'DELETE_MILTIPLE_PROJECTS':
                // assuming we are sending the users name value as array "projectsToBeDeletedData" 
                let projectsToBeDeleted=action.projectsToBeDeletedData
                let tempProjects = state.projects.filter(value => !projectsToBeDeleted.includes(value));
                state.projects=tempProjects
                return state=[...state]
            case 'ADD_NEW_CLIENTS':
                state.clients.push(action.clientNameDate)
                return state=[...state]
            case 'DELETE_EXISTING_CLIENT':
                let tempClients = state.clients.filter((value,index)=>(index!==action.clientIndexData));
                state.clients=tempClients
                return state=[...state]
        default:
            return state
    }
}

export default AdminReducer;