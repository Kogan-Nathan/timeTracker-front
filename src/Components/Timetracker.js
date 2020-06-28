import React from 'react'
import Nav from './Nav'
import ReportRaw from './ReportRaw'
import { useSelector,useDispatch} from 'react-redux';
import {addWorkHours} from '../Actions'
import {useState} from 'react'
import moment from 'moment' 

export default function Timetracker() {

    const reportData = useSelector(state => state.reportData);
    const Projects = useSelector(state => state.Projects);
    const dispatch = useDispatch();

    const [projectName, setProjectName] = useState();
    const [projectFrom, setProjectFrom] = useState();
    const [projectTo, setProjectTo] = useState();
    const [projectDate, setProjectDate] = useState();
    const [projectStatus, setProjectStatus] = useState()
    const [classToggle, setClassToggle] = useState({timetracker:true,summary:false,projects:false,users:false})

    const total=()=>{        
        if (projectTo && projectFrom){
            console.log(projectTo);
            console.log(projectFrom);
            let hours = moment.utc(moment(projectTo,"HH:mm").diff(moment(projectFrom,"HH:mm"))).format("HH:mm")
            setProjectStatus(hours)
        }
    }


    const convertDate = (e) =>{
        let tempDate = e.target.value
        tempDate = moment().toString();
        setProjectDate(tempDate)
        total ()
    }

    return (
        <div>
        <Nav/>
        <div className="tableConatainer">
            <table className="tableProjectsHeading">
            <tbody className="trHeading">
                <th> Project name </th>
                <th> From </th>
                <th> To </th>
                <th> Date </th>
                <th> Total  </th>
            </tbody> 
        </table>
        <div clasName="justify-evenly" style={{width:"100%", marginBottom:"20px"}}>
            <select className="input" onChange={(e)=>setProjectName(e.target.value)}>
                <option>Select Project</option>
                {Projects.map((value,index)=>{return <option key={"project"+index}>{value.projectName}</option>})}
            </select>
            <input className="input" type="time" placeholder="From" onChange={(e)=>setProjectFrom(e.target.value)}/>
            <input className="input" type="time" placeholder="To" onChange={(e)=>setProjectTo(e.target.value)}/>
            <input className="input" type="date" placeholder="todays date" onChange={convertDate}/>
            <span style={{backgroundColor:"#242424", color:"#fff",padding:"15px", marginLeft:"10px", marginRight:"10px"}}>total hrs: {projectStatus}</span>
            <button className="add-butt" onClick={()=>dispatch(addWorkHours(projectName,projectFrom,projectTo,projectDate, projectStatus))} > Add </button>
        </div>
        </div>
        {reportData.map((value,index)=>{return <ReportRaw key={"report"+index} report={value}/>})}
        <div style={{margin:"50px"}}> </div>
    </div>
    )
}
