import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GoTriangleDown } from 'react-icons/go';
import { GoTriangleUp } from 'react-icons/go';
import { FaDollarSign } from 'react-icons/fa';
import { addNewProject, adminNewProject, updateProjectName, adminUpdateProject, updatePM, updateClient, adminUpdateClient, updateCost } from '../Actions';

export default function UserArea(props) {
    const [ProjectName, setProjectsName] = useState()
    const [ProjectClient, setProjectClient] = useState()
    const [ProjectManager, setProjectManager] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const [DollarClass, setDollarClass] = useState(props.project.projectCost)

    const dispatch = useDispatch();
    const projects = useSelector(state=>state.Projects)

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
        // let projectReportArray = reports.filter(value=> value.reportProjectName===props.project.projectName)
        // let workersAmount = projectReportArray.filter((value, index)=> projectReportArray.indexOf(value.reportUserName) === index);
        // return workersAmount.length
    }
    //CHECK!!
    //----------------------------------------------------------
    const checkUpdates=()=>{
        if(projects.length===0){
            if(ProjectName!==undefined){
                if(ProjectClient!==undefined){
                    if(ProjectManager!==undefined){
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
                if(ProjectName!==undefined){    
                    dispatch(updateProjectName(existingProjectIndex, ProjectName))
                    dispatch(adminUpdateProject(existingProjectIndex, ProjectName))
                }
                if(ProjectManager!==undefined){
                    dispatch(updatePM(existingProjectIndex, ProjectManager))
                }
                if(ProjectClient!==undefined){
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
        <div className="">
            <input type="checkbox" onChange={sendInfo}/>
            {isOpen? <div className="inline border-simple">
                <GoTriangleUp className="color-zan cursor" onClick={toggle}/>
                <input type="text" placeholder={props.project.projectName} onChange={(e)=>{setProjectsName(e.target.value)}}/>
                <FaDollarSign className={DollarClass? "cursor color-zan" : "cursor color"} onClick={changeClass}/>{/* checkbox designd as dollar sign, onchange setState for changeCost */}
                <span>Client:</span><input type="text" placeholder={props.project.projectClient} onChange={(e)=>{setProjectClient(e.target.value)}}/>
                <span>PM:</span><input type="text" placeholder={props.project.projectManager} onChange={(e)=>{setProjectManager(e.target.value)}}/>
                <span>Total Workers: {totalWorkersCalc}{/* pull information from DB about how many workers worked on this proj */}</span>
                <span>Status: {props.project.projectStatus}h</span>
                <span>Start Date: {props.project.ProjectDate.toDateString()}</span>
                <button className="button background-color" onClick={checkUpdates}>Update Info</button>
            </div> : <div className="inline border-simple">
                <GoTriangleDown className="color-zan cursor" onClick={toggle}/>
                <span className="">{props.project.projectName}</span>
                <FaDollarSign className={props.project.projectCost? "color-zan" : "color"}/>
                <span className="">Client: {props.project.projectClient}</span>
                <span className="">PM: {props.project.projectManager}</span>
            </div>}
        </div>
    )
}