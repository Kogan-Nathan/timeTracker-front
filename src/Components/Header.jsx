import React from 'react'
import { Link } from 'react-router-dom';
export default function Header() {
    return (
            <div className="header">
                <span className="logo"> TimeTracker </span>
                <div className="buttons-area"> 
                    <button className="login-butt button"><Link to="/login">Login</Link></button>
                    <button className="signup-butt button"><Link to="/signup">Sign up</Link></button>
                </div>
            </div>
    )
}