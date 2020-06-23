import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

export default function Login(){
    const [email, setEmail] = useState()
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [wrongEmailSpan, setWrongEmailSpan] = useState()
    const [password, setPassword] = useState()
    const [isPasswordValid, setIsPasswordValid] = useState(false)
    const [wrongPasswordSpan, setWrongPasswordSpan] = useState()
    const [isLogged, setIsLogged] = useState(false)

    const AdminInfo = useSelector(state=>state.Admin)
    const UsersInfo = useSelector(state=>state.Users)


    //----------------------------------------------------------
    //checkValidEmail & checkValidPassword both check for a specific pattern
    //once they match the pattern the span will dissapear
    const checkValidEmail=(e)=>{
        setEmail(e.target.value)
        if (!(/[a-zA-Z0-9._!@#$%^&*()-+]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e.target.value))) {
            setIsEmailValid(true)
        }
        else{
            setIsEmailValid(false)
        }
    }

    const checkValidPassword=(e)=>{
        setPassword(e.target.value)
        if (!(/[a-zA-Z0-9]{16,}$/.test(e.target.value))) {
            setIsPasswordValid(true)
        }
        else{
            setIsPasswordValid(false)
        }
    }
    //----------------------------------------------------------
    
    const validLogIn=()=>{
        // checks if email and password are found.
        // if false, displays span#"wrong-email" & span#"wrong-password"
        // if true, sets isLogged to true and displays a different page
        if(AdminInfo.email===email&&AdminInfo.password===password){
            window.location = "/admin";
        }
        else {
            if(UsersInfo.length===0){
                alert('No matches found')
            }
            else{
                let UserIndex = UsersInfo.findIndex(user => user.email === email)
                try {
                    if(UsersInfo[UserIndex].email===email&&UsersInfo[UserIndex].password===password){
                        // dispatch(isLogged());
                        // dispatch(userIndex(UserIndex))
                    }
                    else{
                        alert("wrong Password")
                    }
                } 
                catch {
                    alert('Sorry, wrong Email')
                }
            }
        }
    }

    return(
        <div className="login-page">
            {isLogged? <div className="">
                {/* user is already logged in page */}
            </div> : <div className="">
                <h4>Log In</h4>
                <div>
                    <input className="input" type="text" placeholder="Enter email" onChange={(e)=>{checkValidEmail(e)}}/><br/>
                    <span className="hidden-flag" id="wrong-email">email is not correct</span><br/>
                    <span className={isEmailValid? "" : "hidden-flag"}>email is not valid</span><br/>
                </div>
                <div>
                    <input className="input" type="password" placeholder="Enter password" onChange={(e)=>{checkValidPassword(e)}}/><br/>
                    <span className="hidden-flag" id="wrong-password">password is not correct</span><br/>
                    <span className={isPasswordValid? "" : "hidden-flag"}>password is not valid</span><br/>
                </div>
                <div>
                    <button className="button" onClick={validLogIn}>Login</button><br/>
                    <span className="signup-redirection">new here? <Link to="/signup">sign up</Link></span>
                </div>
            </div>}
        </div>
    )
}