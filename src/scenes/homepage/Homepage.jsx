import React from "react";
import { Button } from "@mui/material";

const Landing = () => {

//   useEffect(() => {
//     document.title = "Project Calendar";
//   }, []);

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
