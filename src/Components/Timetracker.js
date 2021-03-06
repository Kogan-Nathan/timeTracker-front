import React from 'react'
import Table from 'react-bootstrap/Table'
import ReportRaw from './ReportRaw'
import { useSelector,useDispatch} from 'react-redux';
import {addWorkHours, updateUserStatus, updateStatus} from '../Actions'
import {useState} from 'react'
import moment from 'moment' 

export default function Timetracker() {

    const reportData = useSelector(state => state.reportData);
    const Projects = useSelector(state => state.Projects);
    const IsLoggedInfo = useSelector(state=>state.isLogged)
    const users = useSelector(state=>state.Users)
    const dispatch = useDispatch();

    const [projectName, setProjectName] = useState("");
    const [userName, setUserName] = useState(users[IsLoggedInfo.userIndex].name);
    const [userID, setUserID] = useState(users[IsLoggedInfo.userIndex].id);
    const [projectTo, setProjectTo] = useState();
    const [projectFrom, setProjectFrom] = useState();
    const [projectDate, setProjectDate] = useState();
    const [projectStatus, setProjectStatus] = useState()
    const [reportDescription,setReportDescription] = useState();
    const [reports,setReports] = useState([]);
    const [show, setShow] = useState(true)


    const reportsByUser = () =>{
        if(show){
            // filter by user id --- >
            let tempReports = reportData.filter(value => value.reportUserId===users[IsLoggedInfo.userIndex].id)
            setReports(tempReports)                          
            setShow(false)
        }
    }
    //----------------------------------------------------------
    const total=()=>{        
        if (projectTo && projectFrom){
            let hours = moment.utc(moment(projectTo,"HH:mm").diff(moment(projectFrom,"HH:mm"))).format("HH:mm")
            setProjectStatus(hours)
        }
    }
    //----------------------------------------------------------
    const update=()=>{
        if(projectName&&projectFrom&&projectTo&&projectDate){
            let projectIndex = Projects.findIndex(value=> value.projectName===projectName)
            let userStatus = moment.duration(projectStatus).asHours()
            dispatch(addWorkHours(userName, userID, projectName, projectFrom, projectTo, projectDate, reportDescription, projectStatus))
            dispatch(updateUserStatus(IsLoggedInfo.userIndex, userStatus))
            dispatch(updateStatus(projectIndex, userStatus))
        }
    }
    //----------------------------------------------------------
    const convertDate = (e) =>{
        let tempDate = e.target.value
        setProjectDate(tempDate)
        total ()
    }
    //----------------------------------------------------------
    
    return (
        <div>
            <div className="tableConatainer">
                <Table className="tableProjectsHeading">
                    <thead>
                        <tr className="trHeading">
                            <th> Project name </th>
                            <th> From </th>
                            <th> To </th>
                            <th> Date </th>
                            <th> Total  </th>
                        </tr> 
                    </thead>
                </Table>
                <div className="grid-userNewReport" style={{width:"100%", marginBottom:"20px"}}>
                    <select className=" inputTime select1" onChange={(e)=>setProjectName(e.target.value)}>
                        <option>Select Project</option>
                        {Projects.map((value,index)=>{return <option key={"project"+index}>{value.projectName}</option>})}
                    </select>
                    <div className="from"><input className="inputTime" type="time" placeholder="From" onChange={(e)=>setProjectFrom(e.target.value)}/></div>
                    <div className="to"><input className="inputTime" type="time" placeholder="To" onChange={(e)=>setProjectTo(e.target.value)}/></div>
                    <div className="dateinput"><input className="inputTime" type="date" placeholder="todays date" max={new Date().toISOString().split("T")[0]} onChange={convertDate}/></div>
                    <span className="totalhrs" style={{backgroundColor:"#242424", color:"#fff",padding:"15px"}}>total hrs: {projectStatus}</span>
                    <div className="select2"><input className="description inputTime" type="text" placeholder="you may add a description" onChange={(e)=>setReportDescription(e.target.value)}></input></div>
                    <button className="add-butt add-repo" onClick={update} > Add </button>
                </div>
            </div>
            {reportsByUser()}
            {reports.map((value,index)=>{return <ReportRaw key={"report"+index} report={value}/>})}
            <div style={{margin:"50px"}}> </div>
        </div>
    )
}