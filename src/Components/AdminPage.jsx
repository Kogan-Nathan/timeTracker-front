import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import UserArea from './UserArea'
import ProjectArea from './ProjectArea'
import {Link} from 'react-router-dom'
// import { GoSearch } from 'react-icons/go';
import { GoTriangleRight } from 'react-icons/go';
import { FaDollarSign } from 'react-icons/fa';

export default function AdminPage(props) {
    const [UsersToBeDeleted, setUsersToBeDeleted] = useState([])
    const [ProjectsToBeDeleted, setProjectsToBeDeleted] = useState([])
    const [TemporaryArray, setTemporaryArray] = useState([])
    const [SearchBar, setSearchBar] = useState("")

    const [ProjectName, setProjectsName] = useState()
    const [ProjectClient, setProjectClient] = useState()
    const [ProjectManager, setProjectManager] = useState()
    const [ProjectCost, setProjectCost] = useState(false)
    const [ProjectDate, setProjectDate] = useState()

    const users = useSelector(state=>state.Users)
    const projects = useSelector(state=>state.Projects)

    //----------------------------------------------------------    
    const isDisabled=()=>{
        if(UsersToBeDeleted.length===0){
            return true
        }
        else if(UsersToBeDeleted.length!==0){
            return false
        }
        // currently checks only usersToBeDeleted array
        //considering mergeing both arrays (usersToBeDeleted & projectsToBeDeleted => valuesToBeDeleted)
        //so this function will work properly
    }
    //----------------------------------------------------------    
    function UpdateUsersToBeDeleted(UsersID){
        if(UsersToBeDeleted.length===0){
            setUsersToBeDeleted(UsersToBeDeleted.concat(UsersID))
        }
        else{
            let Index = UsersToBeDeleted.findIndex(value => value===UsersID)            
            if(Index!==-1){
                let temp = UsersToBeDeleted.filter(value=> value!==UsersID);
                setUsersToBeDeleted(temp,...UsersToBeDeleted)                    
            }
            if(Index===-1){
                setUsersToBeDeleted(UsersToBeDeleted.concat(UsersID))
            }
        }
    }

    function UpdateProjectsToBeDeleted(ProjectName){
        if(ProjectsToBeDeleted.length===0){
            setProjectsToBeDeleted(ProjectsToBeDeleted.concat(ProjectName))
        }
        else{
            let Index = ProjectsToBeDeleted.findIndex(value => value===ProjectName)            
            if(Index!==-1){
                let temp = ProjectsToBeDeleted.filter(value=> value!==ProjectName);
                setProjectsToBeDeleted(temp,...ProjectsToBeDeleted)                    
            }
            if(Index===-1){
                setProjectsToBeDeleted(ProjectsToBeDeleted.concat(ProjectName))
            }
        }
    }
    //----------------------------------------------------------
    const searchInput=(e)=>{
        //onKeyUp search updates a temporary array that is displayed through map 
        if(props.displayPage==="Users"){
            const tempArray = users.filter(value => {
                let lowerCaseName = value.name.toLowerCase();
                 return lowerCaseName.includes(e.target.value);}).map(value => {
                     return value;});
                     setTemporaryArray(tempArray)
                    }
        if(props.displayPage==="Projects"){
            const tempArray = projects.filter(value => {
                let lowerCaseName = value.projectName.toLowerCase();
                 return lowerCaseName.includes(e.target.value);}).map(value => {
                     return value;});
                     setTemporaryArray(tempArray)
        }

        setSearchBar(e.target.value)
    }
    //----------------------------------------------------------
    const sendDeleteInfo=()=>{        
        if(props.displayPage==="Users"){
            //dispatch delete users
        }
        else if(props.displayPage==="Projects"){
            //dispatch delete projects
        }
    }
    //----------------------------------------------------------
    const checkUpdates=()=>{
        if(projects.length===0){
            if(ProjectName!==undefined){
                if(ProjectClient!==undefined){
                    if(ProjectManager!==undefined){
                        // dispatch projectManager
                        // dispatch projectCost
                        // dispatch projectClient
                        // dispatch projectName
                        // dispatch currentDate
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
                if(ProjectClient!==undefined){
                    if(ProjectManager!==undefined){
                        // dispatch projectManager
                        // dispatch projectCost
                        // dispatch projectClient
                        // dispatch projectName
                        // dispatch currentDate
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
                alert("Sorry, this project name is alread in use")
            }
        }
    }
    //----------------------------------------------------------
    const Display=()=>{
        if(props.displayPage==="Users"){
            if(SearchBar!==""){
                return(
                    (TemporaryArray.map((value,index)=>{return <UserArea key={"user"+index} user={value} update={UpdateUsersToBeDeleted}/>}))
                )   
            } //if the search isnt empty it is showing the search result
            // and if it is empty it is showing the original users DB
            else{
                return(
                    (users.map((value,index)=>{return <UserArea key={"user"+index} user={value} update={UpdateUsersToBeDeleted}/>}))
                )                
            }
        }
        else if(props.displayPage==="Projects"){
            if(SearchBar!==""){
                return(
                    <div>
                        <div className="justify border-simple">
                            <GoTriangleRight className="color"/>
                            <input type="text" placeholder="Project Name" onChange={(e)=>{setProjectsName(e.target.value)}}/>
                            <FaDollarSign className={ProjectCost? "color cursor" : "cursor"} onClick={()=>{setProjectCost(!ProjectCost)}}/>
                            <span>Client:</span><input type="text" placeholder="Clients Name" onChange={(e)=>{setProjectClient(e.target.value)}}/>
                            <span>PM:</span><input type="text" placeholder="Project Manager" onChange={(e)=>{setProjectManager(e)}}/>
                            <span>Start Date: <input type="date" onChange={(e)=>{setProjectDate(e.target.value)}}/></span>
                            <button className="button" onClick={checkUpdates}>Update Info</button>
                        </div>
                        {TemporaryArray.map((value,index)=>{return <ProjectArea key={"user"+index} project={value} update={UpdateUsersToBeDeleted}/>})}
                    </div>
                )
            } //if the search isnt empty it is showing the search result
            // and if it is empty it is showing the original users DB
            else{
                return(
                    <div>
                        <div className="justify border-simple">
                            <GoTriangleRight className="color"/>
                            <input type="text" placeholder="Project Name" onChange={(e)=>{setProjectsName(e.target.value)}}/>
                            <FaDollarSign className={ProjectCost? "color cursor" : "cursor"} onClick={()=>{setProjectCost(!ProjectCost)}}/>
                            <span>Client:</span><input type="text" placeholder="Clients Name" onChange={(e)=>{setProjectClient(e.target.value)}}/>
                            <span>PM:</span><input type="text" placeholder="Project Manager" onChange={(e)=>{setProjectManager(e)}}/>
                            <span>Start Date: <input type="date" onChange={(e)=>{setProjectDate(e.target.value)}}/></span>
                            <button className="button" onClick={checkUpdates}>Update Info</button>
                        </div>
                        {projects.map((value,index)=>{return <ProjectArea key={"project"+index} project={value} update={UpdateProjectsToBeDeleted}/>})}
                    </div>
                )                
            }
        }
    }
    //----------------------------------------------------------

    return (
        <div className="admin-page">
            <div className="admin-nav justify-evenly">                
                <div className={props.class? "active" : ""}><p><Link to="/admin/users">Users</Link></p></div>
                <div className={props.class? "" : "active"}><p><Link to="/admin/projects">Projects</Link></p></div>
            </div>
            <div className="justify-evenly margin"> 
                <input type="text" className="search-bar" onKeyUp={(e)=>{searchInput(e)}} placeholder="Search.."/>
                <button className="button background-color" onClick={sendDeleteInfo} disabled={isDisabled()}>Delete</button>
            </div>
            <div className="">
                {Display()}
            </div>
        </div>
    )
}