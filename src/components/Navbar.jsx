import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

function Navbar() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <AppBar position="static" style={{ backgroundColor: '#333333' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Sight-Singing-Gym
          </Typography>
          <Tabs value={value} onChange={handleChange} textColor="inherit">
            <Tab label="Home" component={Link} to="/" />
            <Tab label="Course" component={Link} to="/course" />
            <Tab label="Feedback" component={Link} to="/feedback" />
            <Tab label="Login" component={Link} to="/login" />
          </Tabs>
        </Toolbar>
      </AppBar>
    );
  }
  
  export default Navbar;
