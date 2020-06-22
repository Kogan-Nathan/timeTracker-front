const reportsInfo = (state = [{}], action) =>{
    switch (action.type){
        case "FETCH_REPORT":
                if(action.type = "FETCH_REPORT"){
                    state = {...state, projectinfo: action.payload}
                }

        case "ADD_REPORT":
            if(state.length === 0){
                return state=[{reportProjectName: action.reportProjectNameData, reportId: 0, reportStatus: action.reportStatusData, reportDate: action.reportDateData, reportFrom: action.reportFromData, reportTo: action.reportToData }
                    ,...state];
            }
            else{
                return state=[{reportProjectName: action.reportProjectNameData, reportId: state.length+1, reportStatus: action.reportStatusData, reportDate: action.reportDateData, reportFrom: action.reportFromData, reportTo: action.reportToData }
                    ,...state];
            }


        default:
            return state;
    }
};

export default reportsInfo;
