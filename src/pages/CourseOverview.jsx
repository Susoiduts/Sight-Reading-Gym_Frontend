import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Container, Grid, Card, CardContent } from "@mui/material";
import { useState, useEffect } from "react";

function CourseOverview({unlockedExercises}) {
  // const [unlockedExercises, setUnlockedExercises] = useState([1]);

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const position = parseInt(card.getAttribute("data-position"));
      if ((position <= unlockedExercises)) {
        card.style.opacity = "1";
      } else {
        card.style.opacity = "0.5";
      }
    });
  }, [unlockedExercises]);

  const cards = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleClick = (position) => {};
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "& > *": { width: 300, marginBottom: 3, marginTop: 3 },
      }}
    >
      <Card sx={{ textDecoration: "none" }} component={Link} to="/Overview/1">
        <CardContent sx={{ textAlign: "center" }}>
          Master the Majorscale
        </CardContent>
      </Card>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        container
        spacing={3}
      >
        {cards.map((num) => (
          <Grid key={num} item>
            <Card
              sx={{ textDecoration: "none" }} //TODO: Elevation of card
              className="card"
              data-position={num}
              component={Link}
              to={`/course/${num}`}
              disabled={!(num <= unlockedExercises)}
              onClick={(e) => !(num <= unlockedExercises) && e.preventDefault()}
            >
              <CardContent>{num}</CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ArrowDownwardIcon sx={{ fontSize: 60, opacity: 0.5 }} />
      </Box>
      <Card style={{ opacity: 0.5 }}>
        <CardContent sx={{ textAlign: "center" }}>Upside Down</CardContent>
      </Card>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ArrowDownwardIcon sx={{ fontSize: 60, opacity: 0.5 }} />
      </Box>
      <Card style={{ opacity: 0.5 }}>
        <CardContent sx={{ textAlign: "center" }}>
          Become the Chromatic Champion
        </CardContent>
      </Card>
    </Box>
  );
}

export default CourseOverview;
