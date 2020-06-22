import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
// import Dropdown from 'react-bootstrap/Dropdown'
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import ButtonGroup from 'react-bootstrap/DropdownButton'
// import SplitButton from 'react-bootstrap/DropdownButton'



export default function Nav(props) {



    const [open,setOpen] = useState(false);

    return (
        <div className="nav-bar_container">
            <nav className="navbar">
                
                <Link to="/timetracker"> <li> timeTracker</li></Link>
                <li>Summary
                <Link to="/summary" onClick={()=> setOpen(!open)}/>
                {open && props.children}
                </li>
                <Link to="/project"> <li>Projects</li></Link>
                <Link to="/users"><li>Users</li> </Link>
            </nav>
        </div>
    )
}
