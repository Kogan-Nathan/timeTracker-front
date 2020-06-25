import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function Header() {
    const IsLoggedInfo = useSelector(state=>state.isLogged)

    return (
            <div className="header">
                <span className="logo"> TimeTracker </span>
                <div className="buttons-area"> 
                    {IsLoggedInfo.isLogged? <span>Welcome Back</span> : <button className="login-butt button"><Link to="/login">Login</Link></button>}
                    <button className="signup-butt button background-color"><Link to="/signup">Sign up</Link></button>
                </div>
            </div>
    )
}