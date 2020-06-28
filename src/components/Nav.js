import React from 'react'



export default function Nav() {

    const changeLocation = (e) =>{
        if (e.target.value === "last 7 days"){
            window.location="/last7days"  
        }
        if (e.target.value === "this month"){
            window.location="/thismonth"
        }
        if (e.target.value === "spesific time"){
            window.location="/spesifictime"
        }
    }

    return (
        <div className="nav-bar_container">
            <ul className="navbar">       
                <a className="nav-links" href="/timetracker"> TimeTracker</a>
                <select className="select-box" onChange={(e)=>changeLocation(e)}>
                    <option>Summary</option>
                    <option value="last 7 days">last 7 days</option>
                    <option value="this month">this month</option>
                    <option value="spesific time">spesific time</option>
                    </select>
                <a className="nav-links" href="/project"> Projects</a>
                <a className="nav-links" href="/users">Users </a>
            </ul>
        </div>
    )
}
