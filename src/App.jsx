import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Singup from "./components/Singup";
import Home from "./components/Home";
import Login from "./components/Login";

import { auth } from "./firebase";

import "./style.scss";

function App() {
  // signOut(auth).then(() => {
  //   // Sign-out successful.
  // }).catch((error) => {
  //   // An error happened.
  // });
  const [currUser, setCurrUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      setCurrUser(user);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={currUser ? <Home /> : <Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/singup" element={<Singup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
