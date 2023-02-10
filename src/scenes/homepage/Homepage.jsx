import React from "react";

import { Button } from "@mui/material";
// import { Redirect } from "react-router-dom";
// import { useSelector } from "react-redux";

const Landing = () => {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   useEffect(() => {
//     document.title = "Project Calendar";
//   }, []);

//   if (isAuthenticated) {
//     return <Redirect to="/dashboard" />;
//   }

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
