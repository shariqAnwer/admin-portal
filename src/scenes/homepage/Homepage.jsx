import React, {useEffect} from "react";

import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Landing = () => {

//   useEffect(() => {
//     document.title = "Project Calendar";
//   }, []);


const navigate = useNavigate();

const user = useSelector((state) => state.user)
console.log("user", user)
useEffect(() => {
  if(!user) {
    navigate("/login")
  }
  // localStorage.removeItem('userToken')
}, [user, navigate])

  return (
    <section className="landing">
      <nav className="top">
        <h2>Vendor Management Tool</h2>
        <div>
          <Button color="inherit" href="/login">
            Login
          </Button>
          <Button variant="contained" href="/register">
            Sign Up
          </Button>
        </div>
      </nav>
      <div className="landing-inner">
        <h1>Vendor Management Tool</h1>
        <div className="buttons">
          <Button variant="outlined" color="inherit" href="/register">
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
