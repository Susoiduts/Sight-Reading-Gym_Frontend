import React, { useState } from "react";
import Button from "@mui/material/Button";

function NextExcerciseButton() {
  const [buttonText, setButtonText] = useState("Next Excercise");
  const handleButtonClick = () => {};
  return (
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
