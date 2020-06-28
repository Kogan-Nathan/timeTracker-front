import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { isLoggedOut } from '../Actions';


export default function Header() {
    const IsLoggedInfo = useSelector(state=>state.isLogged)
    const dispatch = useDispatch();

    //----------------------------------------------------------
    const logout=()=>{
        dispatch(isLoggedOut())
    }
    //----------------------------------------------------------

    return (
            <div className="header">
                <span className="logo"> TimeTracker </span>
                <div className="buttons-area"> 
                {IsLoggedInfo.isLogged? <div>
                        <span>Welcome Back</span>
                        <button className="login-butt button" onClick={logout}>Log out</button> 
                    </div> : 
                    <div>
                        <button className="login-butt button"><Link to="/login">Login</Link></button>
                        <button className="signup-butt button background-color"><Link to="/signup">Sign up</Link></button>
                    </div>}
                </div>
            </div>
    )
}