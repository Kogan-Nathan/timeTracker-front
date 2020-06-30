import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from "react-router-dom";

export default function Nav(props) {
    const history = useHistory();
    const users = useSelector(state=>state.Users)
    const UserIndex = useSelector(state=>state.isLogged.userIndex)

    const userRoute = users[UserIndex].id
    const changeLocation = (e) =>{
        if (e.target.value === "last 7 days"){
            history.push(`/last7days/user=${userRoute}`)              
        }
        if (e.target.value === "this month"){
            history.push(`/thismonth/user=${userRoute}`)              
        }
        if (e.target.value === "spesific time"){
            history.push(`/spesifictime/user=${userRoute}`)              
        }
    }

    return (
        <div className="nav-bar_container">
            <ul className="navbar">       
                <Link className={props.displayPage==="Timetracker"? "active nav-links" : "nav-links"} to={`/timetracker/user=${userRoute}`}>TimeTracker</Link>
                <select className={props.displayPage==="Summary"? "active select-box" : "select-box"} onChange={(e)=>changeLocation(e)}>
                    <option className="select-items">Summary</option>
                    <option className="select-items" value="last 7 days">last 7 days</option>
                    <option className="select-items" value="this month">this month</option>
                    <option className="select-items" value="spesific time">spesific time</option>
                </select>
                <Link className={props.displayPage==="Project"? "active nav-links" : "nav-links"} to={`/project/user=${userRoute}`}>Projects</Link>
                <Link className={props.displayPage==="Users"? "active nav-links" : "nav-links"} to={`/users/user=${userRoute}`}>Users</Link>
            </ul>
        </div>
    )
}
