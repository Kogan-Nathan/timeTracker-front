const reportsInfo = (state = [{reportUserName: 'abi',reportProjectName: 'theAcademi', reportStatus: 280, reportDate: 'Wed Jun 20 2020 00:00:00 GMT+0300 (Israel Daylight Time)', reportFrom: '08:00', reportTo: '18:30'},
                              {reportUserName: 'abi', reportProjectName: 'bila-store', reportStatus: 372, reportDate: 'Wed Jun 23 2020 00:00:00 GMT+0300 (Israel Daylight Time)', reportFrom: '09:15', reportTo: '22:30'},
                              {reportUserName: 'ami', reportProjectName: 'haSifriya', reportStatus: 146.5, reportDate: 'Wed Jun 12 2020 00:00:00 GMT+0300 (Israel Daylight Time)', reportFrom: '08:30', reportTo: '19:20'},
                              {reportUserName: 'abi', reportProjectName: 'bila-store', reportStatus: 372, reportDate: 'Wed Jun 13 2020 00:00:00 GMT+0300 (Israel Daylight Time)', reportFrom: '09:15', reportTo: '22:30'},
                              {reportUserName: 'abi', reportProjectName: 'bila-store', reportStatus: 372, reportDate: 'Wed Jun 16 2020 00:00:00 GMT+0300 (Israel Daylight Time)', reportFrom: '09:15', reportTo: '22:30'},
                            ], action) =>{
    switch (action.type){
        case "ADD_WORK_HOURS":
            if(state.length === 0){
                return state=[{reportUserName: action.reportUserNameData ,reportProjectName: action.reportProjectNameData, reportId: 0, reportStatus: action.reportStatusData, reportDate: action.reportDateData, reportFrom: action.reportFromData, reportTo: action.reportToData }
                    ,...state];
            }
            else{
                return state=[{reportProjectName: action.reportProjectNameData, reportId: state.length+1, reportStatus: action.reportStatusData, reportDate: action.reportProjectDateData, reportFrom: action.reportProjectFromData, reportTo: action.reportProjectToData }
                    ,...state];
            }


        default:
            return state;
    }
};

export default reportsInfo;
