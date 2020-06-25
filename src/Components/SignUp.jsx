import React,{useState} from 'react'
import { useSelector } from 'react-redux'

export default function Login(){
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const [tempPassword, setTempPassword] =useState()
    // const [isDisabled, setIsDisabled] = useState(true)

    const users = useSelector(state=>state.Users)


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
            let UserIndex = users.findIndex(user => user.email === e.tartget.value)
            if(UserIndex===-1){
                setEmail(e.target.value)
                document.getElementById("errorEmail").innerHTML=" ";
            }
            else{
                alert('Sorry it seems this email is already in use\nPlease pick another one')
            }
        }
        else{
            document.getElementById("errorEmail").innerHTML="invalid email adress";
        }
    }

    const handlePhone=(e)=>{
        if(e.target.value.length === 10){
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

    const signed=(e)=>{
        if (name){
            if (email){
                if (password){
                    if (phone){
                        if(users.length!==0){
                            let UserIndex = users.length
                            // dispatch(isLogged(UserIndex));
                            // navigate to timetracker
                        }
                        else{
                            let UserIndex = 0
                            // dispatch(isLogged(UserIndex));
                            // navigate to timetracker
                        }
                    }
                }
            }
        }
    }

    return(
        <div className="main-div">
            <h1>Sign up</h1>
            <form>
                <div>
                    <input type="text" name="name" placeholder="Name" onChange={handleName} required/>
                    <p id="nameBlank"></p>
                </div>
                <div>
                    <input type="email" name="email" placeholder="Email" onChange={handleEmail} required/>
                    <p id='errorEmail'></p>
                </div>
                <div>
                    <input type="number" name="phone" placeholder="Phone Number" onChange={handlePhone} required/>
                    <p id='errorPhone' style={{opacity:1}}></p>
                </div>
                <div>
                    <input type="password" name="password1" placeholder="Password" onChange={handlePass} required/>
                    <p id='errorPass'></p>
                </div>
                <div>
                    <input type="password" name="password2" placeholder="Configure Password" onChange={handleMatchPass} required/>
                    <p id='errorPass2'></p>
                </div>
                <button className="submit" onClick={signed}>Sign Up</button>
            </form>
        </div>
    )
}