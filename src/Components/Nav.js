import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

export default function Nav() {
    const history = useHistory();
    const [classToggle, setClassToggle] = useState({timetracker:true,summary:false,projects:false,users:false})
    const users = useSelector(state=>state.Users)
    const UserIndex = useSelector(state=>state.isLogged.userIndex)

    const changeLocation = (e) =>{
        if (e.target.value === "last 7 days"){
            setClassToggle({timetracker:false,summary:true,projects:false,users:false})
            history.push("/project/user="+`${users[UserIndex].id}`)              
        }
        if (e.target.value === "this month"){
            setClassToggle({timetracker:false,summary:true,projects:false,users:false})
            history.push("/thismonth/user="+`${users[UserIndex].id}`)              
        }
        if (e.target.value === "spesific time"){
            setClassToggle({timetracker:false,summary:true,projects:false,users:false})
            history.push("/spesifictime/user="+`${users[UserIndex].id}`)              
        }
    }

    const toggle=(e)=>{
        if (e.target.value==="TimeTracker") {
            setClassToggle({timetracker:true,summary:false,projects:false,users:false})
        }
        if (e.target.value==="Projects") {
            setClassToggle({timetracker:false,summary:false,projects:true,users:false})
        }
        if (e.target.value==="Users") {
            setClassToggle({timetracker:false,summary:false,projects:false,users:true})
        }
    }

    return (
        <div className="nav-bar_container">
            <ul className="navbar">       
                <a className={classToggle.timetracker? "active nav-links" : "nav-links"} href={"/timetracker/user="+users[UserIndex].id} onClick={(e)=>{toggle(e)}}>TimeTracker</a>
                <select className={classToggle.summary? "active select-box" : "select-box"} onChange={(e)=>changeLocation(e)}>
                    <option className="select-items">Summary</option>
                    <option className="select-items" value="last 7 days">last 7 days</option>
                    <option className="select-items" value="this month">this month</option>
                    <option className="select-items" value="spesific time">spesific time</option>
                </select>
                <a className={classToggle.projects? "active nav-links" : "nav-links"} href={"/project/user="+users[UserIndex].id} onClick={(e)=>{toggle(e)}}>Projects</a>
                <a className={classToggle.users? "active nav-links" : "nav-links"} href={"/users/user="+users[UserIndex].id} onClick={(e)=>{toggle(e)}}>Users</a>
            </ul>
        </div>
    )
}
