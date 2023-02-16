import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Navbar() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <AppBar position="static" style={{ backgroundColor: '#333333' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Tabs value={value} onChange={handleChange} textColor="inherit">
            <Tab label="Home" />
            <Tab label="Course" />
            <Tab label="Feedback" />
            <Tab label="Login" />
          </Tabs>
        </Toolbar>
      </AppBar>
    );
  }
  
  export default Navbar;
