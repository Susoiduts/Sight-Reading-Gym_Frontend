import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function NextExcerciseButton({ setUnlockedExercises, id, token }) {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Next Excercise");
  const handleButtonClick = () => {
    const parsedId = parseInt(id);
    const nextCourseId = parsedId + 1;

    //set unlocked exercises
    setUnlockedExercises((prev) => {
      if (nextCourseId <= prev) {
        return prev;
      } else {
        const level = nextCourseId;
        fetch("https://ssg-backend.onrender.com/level", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            'authtoken': `${token}`
          },
          body: JSON.stringify({ level }),
        })
          .then((response) => {
            if (response.ok) {
              console.log("Level updated successfully");
              // Do something else here if needed
            } else {
              console.error("Failed to update level");
            }
          })
          .catch((error) => {
            console.error("Error updating level:", error);
          });
        return nextCourseId;
      }
    });
    //Navigate to next excercise
    navigate(`/course/${nextCourseId}`);
  };
  return (
    //make Button next Button display depending on if there is a next excercise; add back button
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignElements: "center",
        justifyContent: "center",
      }}
    >
      <Button
        style={{ margin: "auto" }}
        variant="contained"
        onClick={handleButtonClick}
      >
        {buttonText}
      </Button>
    </div>
  );
}

export default NextExcerciseButton;
