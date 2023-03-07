import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Navbar({loggedIn, setLoggedIn, setToken}) {
  const audioRef = React.useRef(null); // create a reference to the Audio element
  const navigate = useNavigate();
  
  const handleClick = () => {
    audioRef.current.play(); // play the audio when the Typography is clicked
  }

  const handleLogout = () => {
    localStorage.removeItem("authtoken");
    setToken("");
    setLoggedIn(false);
    navigate("/home", { replace: true });
    window.location.reload();
  };
  
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(loggedIn)
  return (
    <AppBar position="static" style={{ backgroundColor: '#333333' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }} onClick={handleClick}>
          Sight-Sing-Gym
        </Typography>
        <Tabs value={value} onChange={handleChange} textColor="inherit">
          <Tab label="Home" component={Link} to="/" />
          <Tab label="Course" component={Link} to="/course" />
          <Tab label="Feedback" component={Link} to="/feedback" />
          {loggedIn ? (
            <Tab label="Logout" onClick={handleLogout} />
          ) : (
            <Tab label="Login" component={Link} to="/login" />
          )}
          {!loggedIn && (
            <Tab label="SignUp" component={Link} to="/signup" />
          )}
        </Tabs>
      </Toolbar>
      <audio ref={audioRef} src="/audio/sound.mp3" />
    </AppBar>
  );
}

export default Navbar;
