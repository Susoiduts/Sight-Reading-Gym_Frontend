import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar({ loggedIn, setLoggedIn, setToken }) {
  const [isPlaying, setIsPlaying] = useState(false); // create state to track whether the audio is playing
  const navigate = useNavigate();
  const location = useLocation();

  const indexToTabName = {
    home: 0,
    course: 1,
    feedback: 2,
    login: 3,
    signup: 4,
  };

  const [value, setValue] = useState(
    indexToTabName.hasOwnProperty(location.pathname.split("/")[1])
      ? indexToTabName[location.pathname.split("/")[1]]
      : null
  );

  const clickHandler = () => {
    navigate(`/acknowledgements`);
  };

  const handleLogout = () => {
    localStorage.removeItem("authtoken");
    setToken("");
    setLoggedIn(false);
    navigate("/home", { replace: true });
    window.location.reload();
  };

  useEffect(() => {
    // set the value of the tab based on the current location
    const newTabValue = indexToTabName.hasOwnProperty(
      location.pathname.split("/")[1]
    )
      ? indexToTabName[location.pathname.split("/")[1]]
      : null;
    setValue(newTabValue);
    // execute on location change
    // console.log('Location changed!', location.pathname);
  }, [location]);

  return (
    <AppBar position="static" style={{ backgroundColor: "#333333" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }} onClick={clickHandler}>
          Sight-Sing-Gym
        </Typography>
        <Tabs value={value} textColor="inherit">
          <Tab label="Home" component={Link} to="/" />
          <Tab label="Course" component={Link} to="/course" />
          <Tab label="Feedback" component={Link} to="/feedback" />
          {loggedIn ? (
            <Tab label="Logout" onClick={handleLogout} />
          ) : (
            <Tab label="Login" component={Link} to="/login" />
          )}
          {!loggedIn && <Tab label="SignUp" component={Link} to="/signup" />}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
