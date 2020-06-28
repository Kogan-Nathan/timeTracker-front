import React from 'react'
import history from '../History'
import { Link } from 'react-router-dom';

export default function Header() {

// const toSignup=(e)=>{
//         history.push('/signup')
// }
        
    return (
            <div className="header">
                  <Link to="/" className="logo" > TimeTracker </Link> 
                  <div className="buttons-area"> 
                    <button className="login-butt" onClick={()=>window.location="/login"}>  Login </button>
                    <button className="signup-butt" onClick={()=>window.location="/signup"}> Sign Up </button>
                    </div>
 
            </div>

        
    )
}

