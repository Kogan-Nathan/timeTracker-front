import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GoTriangleDown } from 'react-icons/go';
import { GoTriangleUp } from 'react-icons/go';
import { FaDollarSign } from 'react-icons/fa';
import moment from 'moment'
import { addNewProject, adminNewProject, updateProjectName, adminUpdateProject, updatePM, updateClient, adminUpdateClient, updateCost } from '../Actions';

export default function UserArea(props) {
    const [ProjectName, setProjectsName] = useState("")
    const [ProjectClient, setProjectClient] = useState("")
    const [ProjectManager, setProjectManager] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const [DollarClass, setDollarClass] = useState(props.project.projectCost)

    const dispatch = useDispatch();
    const projects = useSelector(state=>state.Projects)
    const reports = useSelector(state=>state.reportData)

    //----------------------------------------------------------
    const changeClass=()=>{
        setDollarClass(!DollarClass)
    }
    //----------------------------------------------------------
    // manipulates the hidden area
    const toggle=()=>{
        setIsOpen(!isOpen)        
    }
    //----------------------------------------------------------
    const totalWorkersCalc=()=>{
        let projectReportArray = reports.filter(value=> value.reportProjectName===props.project.projectName)
        let workersAmount = [];
        let uniqueObject ={};
        // Loop for the array elements
        for(let i in projectReportArray){
            // Extract the title
            let workersName = projectReportArray[i]['reportUserName'];
            // Use the title as the index
            uniqueObject[workersName] = projectReportArray[i];
        }
        // Loop to push unique object into array
        for(let i in uniqueObject){
            workersAmount.push(uniqueObject[i]);
        }
        return workersAmount.length
    }
    //----------------------------------------------------------
    const convertStatus=(convertHours)=>{
        let totalTime = moment.duration(convertHours, 'hours');
        let hours = Math.floor(totalTime.asHours());
        let mins  = Math.floor(totalTime.asMinutes()) - hours * 60;
        hours = ((hours > 9) ? hours : ("0"+hours))
        mins = ((mins > 9) ? mins : ("0"+mins))
        let result = hours + ":" + mins;
        return result
    }
    //----------------------------------------------------------
    const checkUpdates=()=>{
        if(projects.length===0){
            if(ProjectName!==""){
                if(ProjectClient!==""){
                    if(ProjectManager!==""){
                        dispatch(addNewProject(ProjectName, ProjectClient, ProjectManager, new Date(), DollarClass))
                        dispatch(adminNewProject(ProjectName, ProjectClient))
                    }
                    else{
                        alert("Sorry, Project must contain Project Manager")
                    }
                }
                else{
                    alert("Sorry, Project must contain Client")
                }
            }
            else{
                alert("Sorry, Project must contain Name")
            }
        }
        else{
            let existingProjectIndex = projects.findIndex(value=> value.projectName === props.project.projectName)
            let checkProjectNameIndex = projects.findIndex(value=> value.projectName === ProjectName)
            if(existingProjectIndex!==-1&&checkProjectNameIndex===-1){
                if(ProjectName!==""){    
                    dispatch(updateProjectName(existingProjectIndex, ProjectName))
                    dispatch(adminUpdateProject(existingProjectIndex, ProjectName))
                }
                if(ProjectManager!==""){
                    dispatch(updatePM(existingProjectIndex, ProjectManager))
                }
                if(ProjectClient!==""){
                    dispatch(updateClient(existingProjectIndex, ProjectClient))
                    dispatch(adminUpdateClient(existingProjectIndex, ProjectClient))
                }
                dispatch(updateCost(existingProjectIndex, DollarClass))
            }else{
                alert("Sorry, this project name is alread in use")
            }
        }
    }
    //----------------------------------------------------------
    const sendInfo=()=>{
        props.update(props.project.projectName)
    }
    return (
        <div className="area">
            <div className="grid-infoProject">
                <div className="b"></div>
                        <input className="checkbox del" type="checkbox" onChange={sendInfo}/>
                        {isOpen? <div className="border-simple project-grid-big">
                            <GoTriangleUp className="color-zan cursor" onClick={toggle}/>
                            <input className="username inputTime" type="text" placeholder={props.project.projectName} onChange={(e)=>{setProjectsName(e.target.value)}}/>
                            <FaDollarSign className={DollarClass? "cursor color-zan grid-project-item-3" : "cursor color grid-project-item-3"} onClick={changeClass}/>
                            <p className="usermail inputTime">Client: <input type="text" placeholder={props.project.projectClient} onChange={(e)=>{setProjectClient(e.target.value)}}/></p>
                            <p className="usermail inputTime">PM: <input type="text" placeholder={props.project.projectManager} onChange={(e)=>{setProjectManager(e.target.value)}}/></p>
                            <p className="usermail inputTime">Total Workers: {totalWorkersCalc()}</p>
                            <p className="usermail inputTime">Status: {convertStatus(props.project.projectStatus)}h</p>
                            <p className="usermail inputTime">Start Date: {props.project.ProjectDate}</p>
                            <button className="addButt addAdmin-butt" onClick={checkUpdates}>Update Info</button>
                        </div> :
                        <div className="border-simple grid-projectSmallInfo">

                            <GoTriangleDown className="color-zan cursor arrow" onClick={toggle}/>
                            <p className="nameproject">{props.project.projectName}</p>

                            <FaDollarSign className={props.project.projectCost? "color-zan dollarsign" : "color dollarsign"}/>
                            <p className="clientName">Client: {props.project.projectClient}</p>
                            <p className="pmanager">PM: {props.project.projectManager}</p>

            </div>}
        </div>
    </div>
    )
}