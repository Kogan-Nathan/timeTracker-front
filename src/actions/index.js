
export const projectName = () =>{
    return {
        type: 'PROJECTNAME'
    };
};

export const projectClient = () =>{
    return {
        type: 'PROJECTCLIENT'
    };
};

export const projectStatus = () =>{
    return {
        type: 'PROJECTSTATUS'
    };
};

export const addProject = (projectName,projectClient,projectManager,projectPrivacy,projectDate,projectCost) =>{
    return {
        type : "ADD_PROJECT",
        projectNameData: projectName,
        projectClientData: projectClient,
        projectManagerData: projectManager,
        projectPrivacyDate: projectPrivacy,
        projectDateData: projectDate,
        projectCostData: projectCost
    }
}

export const deleteProject = (projectName) =>{
    return {
        type: "DELETE_PROJECT",
        projectNameData : projectName
    }
}

export const deleteMultipleProjects = (projectsToBeDeleted) =>{
    return {
        type: "DELETE_MILTIPLE_PROJECS",
        projectsToBeDeletedData : projectsToBeDeleted
    }
}

export const updateClient = (projectDataIndex, input) =>{
    return {
        type: "UPDATE_CLIENT",
        projectDataIndexData: projectDataIndex,
        inputData: input
    }
}

export const updateStatus = (projectDataIndex,input) =>{
    return {
        type: "UPDATE_STATUS",
        projectDataIndexData: projectDataIndex,
        inputStatusData: input
    }
}

export const updateProjectManager = (projectDataIndex,input) =>{
    return {
        type: "UPDATE_PM",
        projectDataIndexData: projectDataIndex,
        inputData: input
    }
}

export const updatePrivacy = (projectDataIndex,input) =>{
    return {
        type: "UPDATE_PRIVACY",
        projectDataIndexData: projectDataIndex,
        inputData: input
    }
}

export const projectCost = (projectDataIndex, input) =>{
    return {
        type: "PROJECT_COST",
        projectDataIndexData: projectDataIndex,
        inputData: input
    }
}