import React,{useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {isLogged, addNewUser} from '../Actions'

export default function Login(){
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const [tempPassword, setTempPassword] =useState()
    const dispatch = useDispatch();

    const UsersInfo = useSelector(state=>state.Users)


    const handleName=(e)=>{
        if(e.target.value.length > 0){
            setName(e.target.value)
            document.getElementById("nameBlank").innerHTML="";
        }
        else{
            document.getElementById("nameBlank").innerHTML="name can't be blank";
        }
    }

    const handleEmail=(e)=>{
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)){
            setEmail(e.target.value)
            document.getElementById("errorEmail").innerHTML=" ";
        }
        else{
            document.getElementById("errorEmail").innerHTML="invalid email adress";
        }
    }

    const handlePhone=(e)=>{
        if((/^\d{7,}$/).test(e.target.value.replace(/[\s()+\-\.]|ext/gi, ''))){
            //strips all valid special characters which an international phone number can contain
            // (spaces, parens, +, -, ., ext) and then counts if there are at least 7 digits
            setPhone(e.target.value)
            document.getElementById("errorPhone").innerHTML="";
        }
        else{
            document.getElementById("errorPhone").innerHTML="invalid phone number";
        }
    }

    const handlePass=(e)=>{
        if(e.target.value.length >= 8){
            if (e.target.value.match(/^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/)){
                setTempPassword(e.target.value)
                document.getElementById("errorPass").innerHTML=" ";
            }
        }
        else{
            document.getElementById("errorPass").innerHTML="password length minimum 8 chars, including letters and numbers";
        }
    }

    
    const handleMatchPass=(e)=>{
        
        if(e.target.value === tempPassword){
                setPassword(e.target.value)
                document.getElementById("errorPass2").innerHTML="";
                
        }
        else{
            document.getElementById("errorPass2").innerHTML="passwords don't match";
        }
    }

    const signed=()=>{
        if (name && email && password && phone){
            dispatch(addNewUser(name,password,email,phone))
            dispatch(isLogged(0))
        }
    }



    return(
        <div className="main" style={{height: "65vh"}}>
            <h1>Sign up</h1>
            <form>
                <div>
                    <input className="inputArea" type="text" name="name" placeholder="Name" onChange={handleName} required/>
                    <p id="nameBlank"></p>
                    
                </div>
                <div>
                    <input className="inputArea" type="email" name="email" placeholder="Email" onChange={handleEmail} required/>
                    <p id='errorEmail'></p>
                </div>
                <div>
                    <input className="inputArea" type="text" name="phone" placeholder="Phone Number" onChange={handlePhone} required/>
                    <p id='errorPhone'></p>
                </div>
                <div>
                    <input className="inputArea" type="password" name="password1" placeholder="Password" onChange={handlePass} required/>
                    <p id='errorPass'></p>
                </div>
                <div>
                    <input className="inputArea" type="password" name="password2" placeholder="Configure Password" onChange={handleMatchPass} required/>
                    <p id='errorPass2'></p>
                </div>
                <button className="submit" onClick={signed}>Submit</button>
                </form>
    </div>
    )
}