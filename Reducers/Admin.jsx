const AdminReducer = (state = {name:"Admin Admin", password:"timetrackeradmin1234", email:"timeAdmin@zangula.com", pojects=[], clients=[]}, action)=> {
    switch (action.type) {
            case 'addNewProject':
                state.pojects.push(action.projectNameDate)
                return state=[...state]
            case 'deleteExistingProject':
                let temp = state.projects.filter((value,index)=>(index!==action.projectIndexData));
                state.projects=temp
                return state=[...state]
            case 'deleteMultipleProjects':
                // assuming we are sending the projects name value as array "projectsToBeDeletedData" 
                let projectsToBeDeleted=action.projectsToBeDeletedData
                let temp = state.projects.filter(value => !projectsToBeDeleted.include(value));
                state.projects=temp
                return state=[...state]
            case 'addNewClient':
                state.clients.push(action.clientNameDate)
                return state=[...state]
            case 'deleteExistingClient':
                let temp = state.clients.filter((value,index)=>(index!==action.clientIndexData));
                state.clients=temp
                return state=[...state]
        default:
            return state
    }
}

export default AdminReducer;