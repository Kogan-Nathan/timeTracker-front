import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { GoTriangleDown } from 'react-icons/go';
import { GoTriangleUp } from 'react-icons/go';
import { FaDollarSign } from 'react-icons/fa';

export default function UserArea(props) {
    const [ProjectName, setProjectsName] = useState()
    const [ProjectClient, setProjectClient] = useState()
    const [ProjectManager, setProjectManager] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const [DollarClass, setDollarClass] = useState(props.project.projectCost)

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
    const checkUpdates=()=>{
        if(projects.length===0){
            if(ProjectName!==undefined){
                if(ProjectClient!==undefined){
                    if(ProjectManager!==undefined){
                        // dispatch projectManager
                        // dispatch DollarClass
                        // dispatch projectClient
                        // dispatch projectName
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
            let projectIndex = projects.findIndex(value=> value.projectName === ProjectName)
            if(projectIndex===-1){
                if(ProjectName!==undefined){
                    // dispatch projectName
                }
                if(ProjectManager!==undefined){
                    // dispatch projectManager
                }
                if(ProjectClient!==undefined){
                    // dispatch projectClient                        
                }
                // dispatch projectCost
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
                <GoTriangleUp className="color cursor" onClick={toggle}/>
                <input type="text" placeholder={props.project.projectName} onChange={(e)=>{setProjectsName(e.target.value)}}/>
                <FaDollarSign className={DollarClass? "cursor color" : "cursor"} onClick={changeClass}/>{/* checkbox designd as dollar sign, onchange setState for changeCost */}
                <span>Client:</span><input type="text" placeholder={props.project.projectClient} onChange={(e)=>{setProjectClient(e.target.value)}}/>
                <span>PM:</span><input type="text" placeholder={props.project.projectManager} onChange={(e)=>{setProjectManager(e)}}/>
                <span>Total Workers: {/* pull information from DB about how many workers worked on this proj */}</span>
                <span>Status: {props.project.projectStatus}h</span>
                <span>Start Date: {props.project.ProjectDate}</span>
                <button className="button background-color" onClick={checkUpdates}>Update Info</button>
            </div> : <div className="inline border-simple">
                <GoTriangleDown className="color cursor" onClick={toggle}/>
                <span className="">{props.project.projectName}</span>
                <FaDollarSign className={props.project.projectCost? "color" : ""}/>
                <span className="">Client: {props.project.projectClient}</span>
                <span className="">PM: {props.project.projectManager}</span>
            </div>}
        </div>
    )
}