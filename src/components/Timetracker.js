import React from 'react'
import Nav from './Nav'
import ReportRaw from './ReportRaw'
import { useSelector,useDispatch} from 'react-redux';
import {addWorkHours} from '../actions'
import {useState} from 'react'
import moment from 'moment'
import { func } from 'prop-types';
 

export default function Timetracker() {

    const reportData = useSelector(state => state.reportData);
    const dispatch = useDispatch();

    const [projectName, setProjectName] = useState();
    const [projectFrom, setProjectFrom] = useState();
    const [projectTo, setProjectTo] = useState();
    const [projectDate, setProjectDate] = useState();
    const [show, setShow] = useState (false);
    const [projectStatus, setProjectStatus] = useState()



    const total=()=>{        
        if (projectTo && projectFrom){
            console.log(projectTo);
            console.log(projectFrom);
            let hours = moment.utc(moment(projectTo,"HH:mm").diff(moment(projectFrom,"HH:mm"))).format("HH:mm")
            setProjectStatus(hours)
            // setShow(true)
        }
        // setShow(true)
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
            <tr className="trHeading">
                <th> Project name </th>
                <th> From </th>
                <th> To </th>
                <th> Date </th>
                <th> Total  </th>
            </tr> 
        </table>

        <div style={{width:"1010px", marginBottom:"20px"}}>
                    <select onChange={(e)=>setProjectName(e.target.value)}>
                    <option>Select Project</option>
                    </select>


            <input type="time" placeholder="From" onChange={(e)=>setProjectFrom(e.target.value)}/>
            <input type="time" placeholder="To" onChange={(e)=>setProjectTo(e.target.value)}/>
            <input type="date" placeholder="todays date" onChange={convertDate}/>
            <span style={{backgroundColor:"#000", color:"#fff",padding:"15px", marginLeft:"10px", marginRight:"10px"}}>total hrs: {projectStatus}</span>
            <button style={{padding: "12px", border:"none"}} onClick={()=>dispatch(addWorkHours(projectName,projectFrom,projectTo,projectDate, projectStatus))} > Add </button>
        </div>

        </div>
        {/* {show && */}
        {reportData.map((value,index)=>{return <ReportRaw key={"report"+index} report={value}/>})}
        <div style={{margin:"50px"}}> </div>
    </div>
    )
}
