import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function NextExcerciseButton({ setUnlockedExercises, id}) {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Next Excercise");
  const handleButtonClick = () => {
    const parsedId = parseInt(id);
    const nextCourseId = parsedId + 1;
    //set unlocked exercises
    setUnlockedExercises((prev) => {
      const oldArray = [...prev];
      if(oldArray.includes(nextCourseId)) {
        return oldArray;
      } else {
        {
      return [...prev, nextCourseId];}
      }})
    //Navigate to next excercise
    navigate(`/course/${nextCourseId}`);

  }
  return ( //make Button next Button display depending on if there is a next excercise; add back button
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
