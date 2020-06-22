const projectInfo = (state = [{}], action) =>{
    switch (action.type){
        case "FETCH_PROJECT":
                if(action.type = "FETCH_PROJECT"){
                    state = {...state, projectinfo: action.payload}
                }
        case "ADD_PROJECT":
            return state=[{projectName: action.projectNameData, projectClient: action.projectClientData, projectStatus: 0, projectManager: action.projectManagerData, projectPrivacy: action.ProjectPrivacyData, ProjectDate: action.projectDateDate, projectCost: action.projectCostData}
                ,...state];

        case "DELETE_PROJECT":
            let temp = state.filter(value=> value !== action.projectNameData)
            state = temp;
            return state = [...state];

        case "DELETE_MULTIPLE_PROJECTS":
            // let projectsToBeDeleted = action.projectsToBeDeletedData;
            let tempProjects =  state.filter(value => !action.projectsToBeDeletedData.includes(value.projectName))
                state = tempProjects;
                return state = [...state];
                
        case "UPDATE_CLIENT":
            state[action.projectDataIndexData].projectClient = action.inputData;
            return state = [...state];

        case "UPDATE_STATUS":
            state[action.projectDataIndexData].projectStatus = state[action.projectDataIndexData].projectStatus + action.inputStatusData;
            return state = [...state];

        // case "DATE_BEGIN":
        //         ///

        case "UPDATE_PM":
            state[action.projectDataIndexData].projectManager = action.inputData;
            return state = [...state];

        case "UPDATE_PRIVACY":
            state[action.projectDataIndexData].projectPrivacy = action.inputData;
            return state = [...state];

        case "PROJECT_COST":
            state[action.projectDataIndexData].projectCost = action.inputData;
            return state = [...state];

    default: return state
    }   
}
export default projectInfo;
