import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import {useNavigate  } from 'react-router-dom';
import Login from './Login';

const Home = (props) => {
   
const navigate=useNavigate();

const logOut=()=>{

signOut(auth).then(() => {
  console.log("singout")
    navigate("/")
}).catch((error) => {
  
    error("some thing is wrong")
});
    }
  return (

    
    <div className='home'>
      
     
     <h1>HOME</h1>
     {/* <h2>`Welcome {props.name} ` </h2> */}
        {/* <h1>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/singup">Singup</Link>
        </h1> */}

        <button onClick={logOut} className="logout">Logout</button>
      
      <br />
      <br />
      <br />
      <br />
      <br />
      
    </div>
  )
}

export default Home
