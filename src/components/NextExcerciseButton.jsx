import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function NextExcerciseButton({ setUnlockedExercises, id, token, unlockedExercises }) {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Next Exercise");

  const handleButtonClick = () => {
    const nextCourseId = id + 1;

    //set unlocked exercises
    setUnlockedExercises((prev) => {
      if (nextCourseId <= prev) {
        return prev;
      } else {
        if (token) {
          const level = nextCourseId;
          fetch("https://ssg-backend.onrender.com/level", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              authtoken: `${token}`,
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
        }
        return nextCourseId;
      }
    });

    // Navigate to next exercise
    navigate(`/course/${nextCourseId}`);
  };

  const handleBackClick = () => {
    navigate(`/course/${id - 1}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        style={{ margin: "auto" }}
        variant="contained"
        onClick={handleButtonClick}
        disabled={id >= 8}
      >
        {buttonText}
      </Button>
      {id > 1 && (
        <Button
          style={{ margin: "auto" }}
          variant="contained"
          onClick={handleBackClick}
        >
          Previous Excercise
        </Button>
      )}
    </div>
  );
}

export default NextExcerciseButton;
