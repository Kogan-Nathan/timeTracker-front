import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GoTriangleDown } from 'react-icons/go';
import { GoTriangleUp } from 'react-icons/go';
import moment from 'moment'
import { updateUserName, updateUserPassword, updateUserEmail, updateUserPhone,  } from '../Actions';

export default function UserArea(props) {
    const [UsersName, setUsersName] = useState("")
    const [UsersPhone, setUsersPhone] = useState("")
    const [isPhoneValid, setIsPhoneValid] = useState(false)
    const [UsersEmail, setUsersEmail] = useState("")
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [UsersPassword, setUsersPassword] = useState("")
    const [isPasswordValid, setIsPasswordValid] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const dispatch = useDispatch();
    const UsersInfo = useSelector(state=>state.Users)
    const UserIndex = UsersInfo.findIndex(user => user.id === props.user.id)

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
            }
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

    const checkValidPhone =(e)=>{
        setUsersPhone(e.target.value)
        if ((/^\d{7,}$/).test(e.target.value.replace(/[\s()+\-\.]|ext/gi, ''))) {
            //strips all valid special characters which an international phone number can contain
            // (spaces, parens, +, -, ., ext) and then counts if there are at least 7 digits
            setIsPhoneValid(true)
        }
        else{
            setIsPhoneValid(false)
        }
    }
    //----------------------------------------------------------
    // manipulates the hidden area
    const toggle=()=>{
        setIsOpen(!isOpen)
    }
    //----------------------------------------------------------
    const checkUpdates=()=>{
        if(UsersName!==""){
            dispatch(updateUserName(UserIndex, UsersName))
        }
        if(isEmailValid===true){
            dispatch(updateUserEmail(UserIndex, UsersEmail))
        }
        if(isPasswordValid===true){
            dispatch(updateUserPassword(UserIndex, UsersPassword))
        }
        if(isPhoneValid===true){
            dispatch(updateUserPhone(UserIndex, UsersPhone))
        }
    }
    //----------------------------------------------------------
    const convertStatusTime=()=>{
        let userStatus = props.user.status
        
        let totalTime = moment.duration(userStatus, 'hours');
        let hours = Math.floor(totalTime.asHours());
        let mins  = Math.floor(totalTime.asMinutes()) - hours * 60;
        hours = ((hours > 9) ? hours : ("0"+hours))
        mins = ((mins > 9) ? mins : ("0"+mins))
        let result = hours + ":" + mins;
        return result
    }
    //----------------------------------------------------------
    const sendInfo=()=>{
        props.update(props.user.id)
    }
    return (
        <div className="area">
            <input className="checkbox" type="checkbox" onChange={sendInfo}/>
            {isOpen? <div className="inline border-simple">
                <GoTriangleUp className="color-zan cursor" onClick={toggle}/>
                <input type="text" placeholder={props.user.name} onChange={(e)=>{setUsersName(e.target.value)}}/>
                <input type="text" placeholder={props.user.email} onChange={(e)=>{checkValidEmail(e)}}/>
                <span>Password:</span><input type="text" placeholder={props.user.password} onChange={(e)=>{checkValidPassword(e)}}/>
                <span>Phone number:</span><input type="text" placeholder={props.user.phone} onChange={(e)=>{checkValidPhone(e)}}/>
                <span>Worker ID:{props.user.id}</span>
                <span>Worker status:{convertStatusTime()} hrs</span>
                <button className="button general-butt" onClick={checkUpdates}>Update Info</button>
            </div> : <div className="inline border-simple">
                <GoTriangleDown className="color-zan cursor" onClick={toggle}/>
                <label className="">{props.user.name}</label>
                <label className="">{props.user.email}</label>
            </div>}
        </div>
    )
}