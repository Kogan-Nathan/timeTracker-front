import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { GoTriangleDown } from 'react-icons/go';
import { GoTriangleUp } from 'react-icons/go';

export default function UserArea(props) {
    const [UsersName, setUsersName] = useState()
    const [UsersEmail, setUsersEmail] = useState()
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [UsersPassword, setUsersPassword] = useState()
    const [isPasswordValid, setIsPasswordValid] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const UsersInfo = useSelector(state=>state.Users)

    //----------------------------------------------------------
    //checkValidEmail & checkValidPassword both check for a specific pattern
    const checkValidEmail=(e)=>{
        setUsersEmail(e.target.value)
        if(UsersInfo.length===0){
            if (!(/[a-zA-Z0-9._!@#$%^&*()-+]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e.target.value))) {
                setIsEmailValid(true)
            }
            else{
                setIsEmailValid(false)
            }
        } //this if checks for pattern only(meaning there is no users yet)
        else{
            let UserEmailIndex = UsersInfo.findIndex(user => user.email === e.target.value)
            if(UserEmailIndex===-1){
                if(/[a-zA-Z0-9._!@#$%^&*()-+]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e.target.value)){
                    setIsEmailValid(true)
                } //this if checks for pattern while the email cannpt be found in the users DB
                else{
                    setIsEmailValid(false)
                }
            } //this if checks only if the email in the input is not found in the users DB
            else{
                if(UserEmailIndex!==-1){
                    alert('Sorry it seems this Email is already registered\nPlease pick another one')
                }
            } //alerts for existing Email in the DB
        }
    }

    const checkValidPassword=(e)=>{
        setUsersPassword(e.target.value)
        if (!(/[a-zA-Z0-9]{16,}$/.test(e.target.value))) {
            setIsPasswordValid(true)
        }
        else{
            setIsPasswordValid(false)
        }
    }
    //----------------------------------------------------------
    // manipulates the hidden area
    const toggle=()=>{
        setIsOpen(!isOpen)
    }
    //----------------------------------------------------------
    const checkUpdates=()=>{
        if(UsersName!==undefined){
            // update users name
        }
        if(isEmailValid===true){
            // update users Email            
        }
        if(UsersPassword!==undefined){
            // update users Password
        }
    }
    const sendInfo=()=>{
        props.update(props.user.id)
    }
    return (
        <div className="">
            <input type="checkbox" onChange={sendInfo}/>
            {isOpen? <div className="inline border-simple">
                <GoTriangleUp className="color cursor" onClick={toggle}/>
                <input type="text" placeholder={props.user.name} onChange={(e)=>{setUsersName(e.target.value)}}/>
                <input type="text" placeholder={props.user.email} onChange={(e)=>{checkValidEmail(e)}}/>
                <span>Password:</span><input type="text" placeholder={props.user.password} onChange={(e)=>{checkValidPassword(e)}}/>
                <span>Worker ID:{props.user.id}</span>
                <span>Worker status:{props.user.status}</span>
                <button className="button background-color" onClick={checkUpdates}>Update Info</button>
            </div> : <div className="inline border-simple">
                <GoTriangleDown className="color cursor" onClick={toggle}/>
                <span className="">{props.user.name}</span>
                <span className="">{props.user.email}</span>
            </div>}
        </div>
    )
}