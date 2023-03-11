import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth'
import { auth } from '../firebase'



const Singup = () => {

    const navigate=useNavigate();

    const[err,setErrorMsg]=useState(false)
const handleSubmit= async(e)=>{
    e.preventDefault();
    
    
    const Name=e.target[0].value
    const email=e.target[1].value
    const password=e.target[2].value

    
    if(!Name || !email || !password){
        
        setErrorMsg("Fill all the fields")
        return;
    }else{
        setErrorMsg("")
    }


   
     createUserWithEmailAndPassword(auth,email,password).then((res)=>{
      
        const user=res.user;
        updateProfile(user,{
           displayName:Name ,
        })
        navigate("/home")
        console.log(res)
    }).catch(err=>{
  
        console.log(err)
        // setErrorMsg("Something went wrong...")
        setErrorMsg(err)
    })
        

}

  return (
    <div className="formContainer">
    <div className="formWrapper">
    <span className="logo">Authentication</span>
    <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
            <input type="text"  placeholder='Name'/>
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
           {/* <input style={{display:"none"}} type="file" /> 
           <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span> 
           </label> */}
           <b className='error'>{err}</b>
           <button id='file'>Sing up</button>
        </form>
        <p>You do have an acount? <span> <Link to="/">Login</Link></span></p>
    </div>
</div>

  )
}

export default Singup
