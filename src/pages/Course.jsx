import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';

function Course() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card component={Link} to="/course/1"> {/* Make the Card clickable using the Link component */}
          <CardContent>
            Master the MajorScale
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card style={{ opacity: 0.5 }}>
          <CardContent>
            Upside Down
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card style={{ opacity: 0.5 }}>
          <CardContent>
            Become the chromatic Champion
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}


export default Course;
