import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("working");
    const email = e.target[0].value;
    const password = e.target[1].value;

    console.log(email + password);

    if (!email || !password) {
      setErrorMsg("Fill all the fields");
      return;
    } else {
      setErrorMsg("");
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        console.log("login");

        navigate("/home");
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg("Email or password wrong")
        // setErrorMsg(errorMsg);
      });
  };

  return (
    <div className="login">
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Authentication</span>
          <span className="title">Login</span>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            {/* <input style={{display:"none"}} type="file" /> 
           <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
           </label> */}
            <p className="error">{errorMsg}</p>
            <button id="file">Login</button>
          </form>
          <p>
            You don't have an acount?{" "}
            <span>
              <Link to="/singup">Sing up</Link>
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
