import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

function Navbar() {
  const audioRef = React.useRef(null); // create a reference to the Audio element
  
  const handleClick = () => {
    audioRef.current.play(); // play the audio when the Typography is clicked
  }
  
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
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
          <Tab label="Login" component={Link} to="/login" />
        </Tabs>
      </Toolbar>
      <audio ref={audioRef} src="/audio/sound.mp3" />
    </AppBar>
  );
}

export default Navbar;
