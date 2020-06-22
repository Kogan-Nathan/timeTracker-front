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
                    <button className="login-butt"> Login </button>
                    <button className="signup-butt"> <Link style={{textDecoration:'none'}}to="/signup"> Sign up </Link> </button>
                    </div>
 
            </div>

        
    )
}

