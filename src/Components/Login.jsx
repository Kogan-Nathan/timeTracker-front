import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { isLogged, adminIsLogged } from '../Actions';

export default function Login(){
    const [email, setEmail] = useState()
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [wrongEmailSpan, setWrongEmailSpan] = useState(false)
    const [password, setPassword] = useState()
    const [isPasswordValid, setIsPasswordValid] = useState(false)
    const [wrongPasswordSpan, setWrongPasswordSpan] = useState(false)
    // const [Logged, setLogged] = useState(false)

    const AdminInfo = useSelector(state=>state.Admin)
    const UsersInfo = useSelector(state=>state.Users)
    // const IsLoggedInfo = useSelector(state=>state.isLogged)
    const dispatch = useDispatch();

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
            // setLogged(true)
            dispatch(adminIsLogged())
        }
        else {
            if(UsersInfo.length===0){
                alert('No matches found')
            }
            else{
                let UserIndex = UsersInfo.findIndex(user => user.email === email)
                if(UserIndex===-1){
                    setWrongEmailSpan(true)
                }
                else{
                    if(UsersInfo[UserIndex].email===email&&UsersInfo[UserIndex].password===password){
                        // setLogged(true)
                        dispatch(isLogged(UserIndex))
                    }
                    else{
                        setWrongPasswordSpan(true)
                    }
                }
            }
        }
    }
    //----------------------------------------------------------
    return(
        <div className="login-page main">
            <div className="">
                <h1>Log In</h1>
                <div>
                    <input className="inputArea" type="text" name="email" placeholder="Enter email" onChange={(e)=>{checkValidEmail(e)}}/><br/>
                    <span className={wrongEmailSpan? "" : "hidden-flag"} id="wrong-email">email is not correct</span><br/>
                    <span className={isEmailValid? "" : "hidden-flag"}>email is not valid</span><br/>
                </div>
                <div>
                    <input className="inputArea" type="password" placeholder="Enter password" onChange={(e)=>{checkValidPassword(e)}}/><br/>
                    <span className={wrongPasswordSpan? "" :"hidden-flag"} id="wrong-password">password is not correct</span><br/>
                    <span className={isPasswordValid? "" : "hidden-flag"}>password is not valid</span><br/>
                </div>
                <div>
                    <button className="submit" onClick={validLogIn}>Submit</button><br/>
                    <div className="signup-new">new here? <Link to="/signup" className="signup-redirection">sign up</Link></div>
                </div>
            </div>
        </div>
    )
}