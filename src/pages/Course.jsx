import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Course() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', '& > *': { width: 300, marginBottom: 3, marginTop: 3 } }}>
      <Card sx={{ textDecoration: 'none' }} component={Link} to="/course/1">
        <CardContent sx={{ textAlign: 'center' }}>
          Master the Majorscale
        </CardContent>
      </Card>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ArrowDownwardIcon sx={{ fontSize: 60, opacity: 0.5 }} />
      </Box>
      <Card style={{ opacity: 0.5 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          Upside Down
        </CardContent>
      </Card>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ArrowDownwardIcon sx={{ fontSize: 60, opacity: 0.5 }} />
      </Box>
      <Card style={{ opacity: 0.5 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          Become the Chromatic Champion
        </CardContent>
      </Card>
    </Box>
  );
}

export default Course;
